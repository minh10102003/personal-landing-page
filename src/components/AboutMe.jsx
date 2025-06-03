import { Award, Briefcase, GraduationCap } from 'lucide-react';

const AboutMe = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Về Tôi
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Khám phá hành trình và đam mê của tôi trong việc tạo ra những sản phẩm số xuất sắc
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Câu Chuyện Của Tôi</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Với hơn 3 năm kinh nghiệm trong lĩnh vực phát triển web, tôi đã có cơ hội làm việc với nhiều dự án đa dạng, 
              từ website cá nhân đến các ứng dụng web phức tạp cho doanh nghiệp.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Tôi tin rằng thiết kế tốt không chỉ đẹp mắt mà còn phải thân thiện với người dùng và giải quyết được vấn đề thực tế. 
              Đó là lý do tôi luôn kết hợp kiến thức về UX/UI với kỹ năng lập trình để tạo ra những sản phẩm hoàn chỉnh.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-gray-600">Dự Án Hoàn Thành</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
                <div className="text-gray-600">Năm Kinh Nghiệm</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-purple-600 mr-3" size={24} />
                <h4 className="text-xl font-semibold">Học Vấn</h4>
              </div>
              <p className="text-gray-600">
                Cử nhân Công nghệ Thông tin<br />
                Đại học Bách Khoa TP.HCM
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Briefcase className="text-blue-600 mr-3" size={24} />
                <h4 className="text-xl font-semibold">Kinh Nghiệm</h4>
              </div>
              <p className="text-gray-600">
                Frontend Developer tại ABC Company<br />
                Freelance Web Developer
              </p>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Award className="text-indigo-600 mr-3" size={24} />
                <h4 className="text-xl font-semibold">Thành Tích</h4>
              </div>
              <p className="text-gray-600">
                Best Website Design Award 2023<br />
                Top 10 Young Developer Vietnam
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};