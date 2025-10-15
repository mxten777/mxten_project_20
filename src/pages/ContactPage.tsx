import React, { useState } from 'react';

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: 실제 폼 제출 로직 구현
    alert('문의가 성공적으로 전송되었습니다. 빠른 시일 내에 연락드리겠습니다!');
  };

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16">
        <div className="container-width section-padding text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            프로젝트 문의
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            새로운 프로젝트 아이디어가 있으신가요? 바이브코딩이 여러분의 비전을 현실로 만들어드리겠습니다.
          </p>
        </div>
      </section>

      <div className="container-width section-padding">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card">
              <h2 className="text-2xl font-bold mb-6">프로젝트 문의하기</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      이름 *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="홍길동"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      이메일 *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="hello@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      회사명
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="회사명 (선택)"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      연락처
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="010-1234-5678"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    프로젝트 유형 *
                  </label>
                  <select
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">프로젝트 유형을 선택해주세요</option>
                    <option value="mvp">MVP 개발</option>
                    <option value="web">웹 애플리케이션</option>
                    <option value="mobile">모바일 앱</option>
                    <option value="ai">AI/ML 솔루션</option>
                    <option value="consulting">기술 컨설팅</option>
                    <option value="other">기타</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      예산 범위
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">예산 범위를 선택해주세요</option>
                      <option value="under-1000">1,000만원 미만</option>
                      <option value="1000-3000">1,000 - 3,000만원</option>
                      <option value="3000-5000">3,000 - 5,000만원</option>
                      <option value="5000-10000">5,000만원 - 1억원</option>
                      <option value="over-10000">1억원 이상</option>
                      <option value="discuss">협의 필요</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      희망 일정
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">희망 일정을 선택해주세요</option>
                      <option value="asap">가능한 빨리</option>
                      <option value="1month">1개월 내</option>
                      <option value="3months">3개월 내</option>
                      <option value="6months">6개월 내</option>
                      <option value="flexible">유연하게 조정 가능</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    프로젝트 상세 내용 *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    placeholder="프로젝트에 대한 상세한 설명을 작성해주세요. 목표, 주요 기능, 타겟 사용자, 특별한 요구사항 등을 포함해주시면 더 정확한 상담을 받으실 수 있습니다."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    id="agreeToTerms"
                    required
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <label htmlFor="agreeToTerms" className="text-sm text-gray-700">
                    개인정보 수집 및 이용에 동의합니다. 수집된 정보는 문의 답변 및 프로젝트 상담 목적으로만 사용되며, 
                    관련 법령에 따라 안전하게 관리됩니다. *
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-4 text-lg"
                >
                  문의 보내기
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & FAQ */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="card">
              <h3 className="text-xl font-semibold mb-6">연락처 정보</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-xl">📧</span>
                  <div>
                    <div className="font-medium">이메일</div>
                    <div className="text-gray-600">hello@vibecoding.com</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-xl">📞</span>
                  <div>
                    <div className="font-medium">전화</div>
                    <div className="text-gray-600">+82-2-1234-5678</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-xl">📍</span>
                  <div>
                    <div className="font-medium">주소</div>
                    <div className="text-gray-600">서울특별시 강남구 테헤란로 123<br />바이브타워 15층</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-xl">🕐</span>
                  <div>
                    <div className="font-medium">업무 시간</div>
                    <div className="text-gray-600">평일 09:00 - 18:00 (KST)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Response */}
            <div className="card bg-primary-50 border-primary-200">
              <h3 className="text-lg font-semibold mb-3 text-primary-800">⚡ 빠른 응답</h3>
              <p className="text-primary-700 text-sm mb-4">
                모든 문의에 대해 24시간 내에 답변드리며, 긴급한 경우 당일 내 연락드립니다.
              </p>
              <div className="text-sm text-primary-600">
                평균 응답 시간: <strong>4시간</strong>
              </div>
            </div>

            {/* FAQ */}
            <div className="card">
              <h3 className="text-xl font-semibold mb-6">자주 묻는 질문</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Q. MVP 개발에는 얼마나 시간이 걸리나요?</h4>
                  <p className="text-gray-600 text-sm">
                    A. 프로젝트 복잡도에 따라 2-8주 정도 소요됩니다. 핵심 기능 중심으로 빠른 개발을 진행합니다.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Q. 개발 진행 상황을 확인할 수 있나요?</h4>
                  <p className="text-gray-600 text-sm">
                    A. 네, Slack과 Notion을 통해 실시간으로 진행 상황을 공유하며, 매주 정기 미팅을 진행합니다.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Q. 유지보수는 어떻게 이루어지나요?</h4>
                  <p className="text-gray-600 text-sm">
                    A. 3개월간 무료 유지보수를 제공하며, 이후에는 월 단위 계약으로 지속적인 지원을 받으실 수 있습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="card text-center">
              <h3 className="text-lg font-semibold mb-4">소셜 미디어</h3>
              <div className="flex justify-center gap-4">
                <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                  📧
                </button>
                <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                  💼
                </button>
                <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                  🐙
                </button>
                <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                  📷
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;