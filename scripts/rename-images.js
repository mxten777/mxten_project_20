#!/usr/bin/env node
import fs from 'fs/promises';
import fsSync from 'fs';
import path from 'path';

const IMG_EXT = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];

const imagesDir = path.resolve(process.cwd(), 'public', 'images');
const projectsFile = path.resolve(process.cwd(), 'src', 'data', 'projects.ts');

const nowTag = () => {
  const d = new Date();
  return d.toISOString().replace(/[:.]/g, '-');
};

const normalize = s => (s || '').toLowerCase().replace(/[^a-z0-9]+/g, '');

async function main() {
  const args = process.argv.slice(2);
  const apply = args.includes('--apply');
  const update = args.includes('--update'); // update projects.ts after renaming

  if (!fsSync.existsSync(imagesDir)) {
    console.error('public/images directory not found:', imagesDir);
    process.exit(1);
  }

  const projectsText = await fs.readFile(projectsFile, 'utf8');
  const idRegex = /id:\s*'([^']+)'/g;
  const ids = [];
  let m;
  while ((m = idRegex.exec(projectsText)) !== null) ids.push(m[1]);

  const files = (await fs.readdir(imagesDir)).filter(f => IMG_EXT.includes(path.extname(f).toLowerCase()));

  // Build normalized maps
  const normFiles = files.map(f => ({ f, norm: normalize(f) }));
  const normIds = ids.map(id => ({ id, norm: normalize(id) }));

  const mapping = [];
  // First try exact includes
  for (const { id, norm } of normIds) {
    const candidate = normFiles.find(x => x.norm.includes(norm) || norm.includes(x.norm));
    if (candidate) mapping.push({ id, file: candidate.f });
    else mapping.push({ id, file: null });
  }

  console.log('Proposed mapping (project id -> image file):');
  mapping.forEach(m => console.log(m.id.padEnd(30), '->', m.file || '(no match)'));

  if (!apply) {
    console.log('\nNo changes made. Re-run with --apply to perform renames and --update to modify src/data/projects.ts accordingly.');
    process.exit(0);
  }

  // Backup folder
  const backupDir = path.join(imagesDir, 'backup-' + nowTag());
  await fs.mkdir(backupDir, { recursive: true });

  let newProjectsText = projectsText;

  for (const m of mapping) {
    if (!m.file) continue;
    const srcPath = path.join(imagesDir, m.file);
    const ext = path.extname(m.file).toLowerCase();
    const targetName = `${m.id}${ext}`;
    const targetPath = path.join(imagesDir, targetName);

    // backup original
    await fs.copyFile(srcPath, path.join(backupDir, m.file));

    // if target exists and is different file, create a numeric suffix
    let finalTarget = targetPath;
    if (fsSync.existsSync(finalTarget) && path.resolve(finalTarget) !== path.resolve(srcPath)) {
      let i = 1;
      while (fsSync.existsSync(path.join(imagesDir, `${m.id}-${i}${ext}`))) i++;
      finalTarget = path.join(imagesDir, `${m.id}-${i}${ext}`);
    }

    await fs.rename(srcPath, finalTarget);
    console.log(`Renamed ${m.file} -> ${path.basename(finalTarget)}`);

    if (update) {
      // update projects.ts: find the project block and replace the first images url
      const idx = newProjectsText.indexOf(`id: '${m.id}'`);
      if (idx !== -1) {
        const slice = newProjectsText.slice(idx, idx + 1200); // look ahead
        const urlRegex = /url:\s*'([^']+)'/;
        const urlMatch = urlRegex.exec(slice);
        if (urlMatch) {
          const oldUrl = urlMatch[1];
          const newUrl = `/images/${path.basename(finalTarget)}`;
          // replace only within the slice region
          const before = newProjectsText.slice(0, idx);
          const after = newProjectsText.slice(idx);
          const replacedAfter = after.replace(urlRegex, `url: '${newUrl}'`);
          newProjectsText = before + replacedAfter;
          console.log(`Updated projects.ts for ${m.id}: ${oldUrl} -> ${newUrl}`);
        }
      }
    }
  }

  if (update) {
    await fs.writeFile(projectsFile + '.bak-' + nowTag(), projectsText, 'utf8');
    await fs.writeFile(projectsFile, newProjectsText, 'utf8');
    console.log('projects.ts updated and original backed up with .bak-<timestamp>');
  }

  console.log('Done. Backup of originals is in:', backupDir);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
