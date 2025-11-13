import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { containerVariants, itemVariants } from '../utils/animations';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    agreeToTerms: false
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 실제 제출 로직 시뮬레이션
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: '',
        agreeToTerms: false
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-brand-navy dark:to-indigo-900">
      {/* Premium Hero Section */}
      <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-accent/10 rounded-full filter blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"
            animate={{
              scale: [1.3, 1, 1.3],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block px-6 py-3 bg-brand-accent/10 border border-brand-accent/30 rounded-full mb-8"
            >
              <span className="text-brand-accent font-bold">💌 프로젝트 문의</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-brand-navy dark:text-brand-accent">
              함께 만들어갈<br />
              <span className="gradient-text">혁신적인 프로젝트</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              당신의 아이디어를 현실로 만들어줄 신뢰받는 개발 파트너
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="section-container section-spacing">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="card-premium">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-accent to-brand-accent-light rounded-2xl flex items-center justify-center shadow-premium">
                  <span className="text-2xl">✉️</span>
                </div>
                <h2 className="text-3xl font-black text-gray-900 dark:text-white">프로젝트 문의하기</h2>
              </div>
              
              <AnimatePresence mode="wait">
                {submitSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-center py-16"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-premium-xl"
                    >
                      <span className="text-5xl">✓</span>
                    </motion.div>
                    <h3 className="text-3xl font-black mb-4 text-gray-900 dark:text-white">문의 접수 완료!</h3>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
                      24시간 내에 담당자가 연락드리겠습니다.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">평균 응답 시간: 4시간</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {/* Name & Email */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div variants={itemVariants}>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                          이름 <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField('name')}
                            onBlur={() => setFocusedField(null)}
                            className="w-full px-5 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl 
                                     focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/20 transition-all
                                     text-gray-900 dark:text-white font-medium placeholder:text-gray-400"
                            placeholder="홍길동"
                          />
                          {focusedField === 'name' && (
                            <motion.div
                              layoutId="focus-indicator"
                              className="absolute -inset-0.5 bg-gradient-to-r from-brand-accent to-brand-accent-light rounded-2xl -z-10 blur"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 0.3 }}
                              exit={{ opacity: 0 }}
                            />
                          )}
                        </div>
                      </motion.div>
                      
                      <motion.div variants={itemVariants}>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                          이메일 <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            className="w-full px-5 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl 
                                     focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/20 transition-all
                                     text-gray-900 dark:text-white font-medium placeholder:text-gray-400"
                            placeholder="hello@example.com"
                          />
                          {focusedField === 'email' && (
                            <motion.div
                              layoutId="focus-indicator"
                              className="absolute -inset-0.5 bg-gradient-to-r from-brand-accent to-brand-accent-light rounded-2xl -z-10 blur"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 0.3 }}
                              exit={{ opacity: 0 }}
                            />
                          )}
                        </div>
                      </motion.div>
                    </div>

                    {/* Company & Phone */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div variants={itemVariants}>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                          회사명
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('company')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-5 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl 
                                   focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/20 transition-all
                                   text-gray-900 dark:text-white font-medium placeholder:text-gray-400"
                          placeholder="회사명 (선택)"
                        />
                      </motion.div>
                      
                      <motion.div variants={itemVariants}>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                          연락처
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-5 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl 
                                   focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/20 transition-all
                                   text-gray-900 dark:text-white font-medium placeholder:text-gray-400"
                          placeholder="010-1234-5678"
                        />
                      </motion.div>
                    </div>

                    {/* Project Type */}
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                        프로젝트 유형 <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('projectType')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-5 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl 
                                 focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/20 transition-all
                                 text-gray-900 dark:text-white font-medium cursor-pointer"
                      >
                        <option value="">프로젝트 유형을 선택해주세요</option>
                        <option value="mvp">🚀 MVP 개발</option>
                        <option value="web">💻 웹 애플리케이션</option>
                        <option value="mobile">📱 모바일 앱</option>
                        <option value="ai">🤖 AI/ML 솔루션</option>
                        <option value="consulting">💡 기술 컨설팅</option>
                        <option value="design">🎨 UI/UX 디자인</option>
                        <option value="other">✨ 기타</option>
                      </select>
                    </motion.div>

                    {/* Budget & Timeline */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div variants={itemVariants}>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                          예산 범위
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('budget')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-5 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl 
                                   focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/20 transition-all
                                   text-gray-900 dark:text-white font-medium cursor-pointer"
                        >
                          <option value="">예산 범위를 선택해주세요</option>
                          <option value="under-1000">1,000만원 미만</option>
                          <option value="1000-3000">1,000 - 3,000만원</option>
                          <option value="3000-5000">3,000 - 5,000만원</option>
                          <option value="5000-10000">5,000만원 - 1억원</option>
                          <option value="over-10000">1억원 이상</option>
                          <option value="discuss">💬 협의 필요</option>
                        </select>
                      </motion.div>
                      
                      <motion.div variants={itemVariants}>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                          희망 일정
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('timeline')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-5 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl 
                                   focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/20 transition-all
                                   text-gray-900 dark:text-white font-medium cursor-pointer"
                        >
                          <option value="">희망 일정을 선택해주세요</option>
                          <option value="asap">⚡ 가능한 빨리</option>
                          <option value="1month">📅 1개월 내</option>
                          <option value="3months">📅 3개월 내</option>
                          <option value="6months">📅 6개월 내</option>
                          <option value="flexible">🤝 유연하게 조정 가능</option>
                        </select>
                      </motion.div>
                    </div>

                    {/* Message */}
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                        프로젝트 상세 내용 <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={8}
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-5 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl 
                                 focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/20 transition-all
                                 text-gray-900 dark:text-white font-medium placeholder:text-gray-400 resize-none"
                        placeholder="프로젝트에 대한 상세한 설명을 작성해주세요.&#10;&#10;• 프로젝트 목표&#10;• 주요 기능&#10;• 타겟 사용자&#10;• 특별한 요구사항"
                      />
                    </motion.div>

                    {/* Terms */}
                    <motion.div variants={itemVariants} className="flex items-start gap-4">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        id="agreeToTerms"
                        required
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        className="mt-1.5 w-5 h-5 text-brand-accent border-2 border-gray-300 dark:border-gray-600 rounded-lg 
                                 focus:ring-4 focus:ring-brand-accent/20 cursor-pointer"
                      />
                      <label htmlFor="agreeToTerms" className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        개인정보 수집 및 이용에 동의합니다. 수집된 정보는 문의 답변 및 프로젝트 상담 목적으로만 사용되며, 
                        관련 법령에 따라 안전하게 관리됩니다. <span className="text-red-500">*</span>
                      </label>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                      variants={itemVariants}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 bg-gradient-to-r from-brand-accent via-brand-accent-light to-brand-accent text-brand-navy rounded-2xl 
                               font-black text-lg shadow-premium hover:shadow-premium-xl transition-all
                               disabled:opacity-50 disabled:cursor-not-allowed
                               flex items-center justify-center gap-3 group"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-6 h-6 border-3 border-brand-navy border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          전송 중...
                        </>
                      ) : (
                        <>
                          문의 보내기
                          <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Contact Info & FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact Information */}
            <motion.div
              className="card-premium group"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center">
                  <span className="text-xl">📞</span>
                </div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white">연락처 정보</h3>
              </div>
              
              <div className="space-y-5">
                <motion.a
                  href="mailto:hello@vibecoding.com"
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                  whileHover={{ x: 4 }}
                >
                  <span className="text-2xl">📧</span>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white mb-1">이메일</div>
                    <div className="text-brand-accent group-hover:underline">hello@vibecoding.com</div>
                  </div>
                </motion.a>
                
                <motion.a
                  href="tel:+8221234567"
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                  whileHover={{ x: 4 }}
                >
                  <span className="text-2xl">�</span>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white mb-1">전화</div>
                    <div className="text-brand-accent group-hover:underline">+82-2-1234-5678</div>
                  </div>
                </motion.a>
                
                <div className="flex items-start gap-4 p-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white mb-1">주소</div>
                    <div className="text-gray-600 dark:text-gray-400">
                      서울특별시 강남구 테헤란로 123<br />
                      바이브타워 15층
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4">
                  <span className="text-2xl">🕐</span>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white mb-1">업무 시간</div>
                    <div className="text-gray-600 dark:text-gray-400">평일 09:00 - 18:00 (KST)</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Response */}
            <motion.div
              className="relative overflow-hidden rounded-3xl p-6 bg-gradient-to-br from-brand-accent via-brand-accent-light to-yellow-300"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0]
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">⚡</span>
                  <h3 className="text-xl font-black text-brand-navy">빠른 응답</h3>
                </div>
                <p className="text-brand-navy-light font-medium mb-4 leading-relaxed">
                  모든 문의에 대해 24시간 내에 답변드리며, 긴급한 경우 당일 내 연락드립니다.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-navy text-brand-accent rounded-full text-sm font-bold">
                  <span>⏱️</span>
                  평균 응답 시간: 4시간
                </div>
              </div>
            </motion.div>

            {/* FAQ */}
            <motion.div
              className="card-premium"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <span className="text-xl">❓</span>
                </div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white">자주 묻는 질문</h3>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    q: 'MVP 개발에는 얼마나 시간이 걸리나요?',
                    a: '프로젝트 복잡도에 따라 2-8주 정도 소요됩니다. 핵심 기능 중심으로 빠른 개발을 진행합니다.',
                    icon: '🚀'
                  },
                  {
                    q: '개발 진행 상황을 확인할 수 있나요?',
                    a: 'Slack과 Notion을 통해 실시간으로 진행 상황을 공유하며, 매주 정기 미팅을 진행합니다.',
                    icon: '📊'
                  },
                  {
                    q: '유지보수는 어떻게 이루어지나요?',
                    a: '3개월간 무료 유지보수를 제공하며, 이후에는 월 단위 계약으로 지속적인 지원을 받으실 수 있습니다.',
                    icon: '🔧'
                  }
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="group"
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <span className="text-xl">{faq.icon}</span>
                      <h4 className="font-bold text-gray-900 dark:text-white leading-relaxed group-hover:text-brand-accent transition-colors">
                        {faq.q}
                      </h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed ml-9">
                      {faq.a}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="card-premium text-center"
              whileHover={{ y: -4 }}
            >
              <h3 className="text-lg font-black mb-6 text-gray-900 dark:text-white">소셜 미디어</h3>
              <div className="flex justify-center gap-4">
                {[
                  { icon: '📧', label: 'Email', color: 'from-red-500 to-orange-500' },
                  { icon: '💼', label: 'LinkedIn', color: 'from-blue-600 to-blue-700' },
                  { icon: '🐙', label: 'GitHub', color: 'from-gray-700 to-gray-900' },
                  { icon: '📷', label: 'Instagram', color: 'from-purple-500 to-pink-500' }
                ].map((social, index) => (
                  <motion.button
                    key={index}
                    className={`w-14 h-14 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center shadow-premium
                              hover:shadow-premium-lg transition-all`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <span className="text-2xl">{social.icon}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;