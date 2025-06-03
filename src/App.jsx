import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, Twitter, Facebook, Code, Palette, Coffee, Music, Camera, Heart, Send, Menu, X } from 'lucide-react';
import myPhoto from "./assets/profile.jpg";

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Portfolio
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200 capitalize font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
            <div className="flex flex-col space-y-4 p-6">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-200 capitalize font-medium text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl ring-4 ring-white/50 hover:scale-105 transition-transform duration-300">
            <img
              src={myPhoto}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Xin Chào!
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-700 mb-8 font-light leading-snug">
          Tôi là <span className="font-bold text-purple-600">Nguyễn Triệu Minh</span>{" "}
          đến từ <span className="font-semibold text-blue-600">Bình Dương</span>,{" "}
          chuyên <span className="font-semibold text-purple-600">Web Developer</span>,{" "}
          <span className="font-semibold text-pink-600">Java Backend</span> &{" "}
          <span className="font-semibold text-blue-600">UI/UX Designer</span>{" "}
          – sẵn sàng biến ý tưởng thành hiện thực.
        </h2>

        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Tạo ra những trải nghiệm web tuyệt vời với sự kết hợp hoàn hảo giữa thiết kế và công nghệ
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Xem Dự Án
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-200"
          >
            Liên Hệ
          </button>
        </div>

        <div className="mt-16 animate-bounce">
          <ChevronDown size={32} className="mx-auto text-purple-600" />
        </div>
      </div>
    </section>
  );
};

// About Me Component
const AboutMe = () => {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Về Tôi
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Khám phá hành trình của tôi trong việc tạo ra những sản phẩm
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-blue-400 to-purple-600 rounded-full mr-4"></span>
                Câu Chuyện Của Tôi
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Tôi là sinh viên năm 4 chuyên ngành Công nghệ Thông tin, đã tham gia nhiều dự án môn học 
                  sử dụng công nghệ Java, ReactJS, HTML và CSS từ các ứng dụng nhỏ đến những trang web tương tác.
                </p>
                <p>
                  Tôi tin rằng thiết kế tốt không chỉ đẹp mắt mà còn phải thân thiện với người dùng và giải quyết được vấn đề thực tế. 
                  Đó là lý do tôi luôn kết hợp kiến thức về UX/UI với kỹ năng lập trình để tạo ra những sản phẩm hoàn chỉnh.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
                <div className="text-gray-300">Dự Án Hoàn Thành</div>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="text-3xl font-bold text-purple-400 mb-2">4.5</div>
                <div className="text-gray-300">Năm Học Tập</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-white">Học Vấn</h4>
              </div>
              <div className="space-y-2">
                <p className="text-white font-medium">Chuyên ngành Kỹ Thuật Phần Mềm</p>
                <p className="text-gray-400">Đại học Công Nghiệp TP.HCM</p>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-white">Kinh Nghiệm</h4>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-white font-medium">Tham gia dự án Java</p>
                  <p className="text-gray-400">Các dự án môn học sử dụng Java</p>
                </div>
                <div>
                  <p className="text-white font-medium">Phát triển Web Frontend</p>
                  <p className="text-gray-400">HTML, CSS, ReactJS, React Native</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-white">Kỹ Năng Khác</h4>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-white font-medium">Thiết kế UI/UX</p>
                  <p className="text-gray-400">Biết sử dụng Figma</p>
                </div>
                <div>
                  <p className="text-white font-medium">Adobe Creative Suite</p>
                  <p className="text-gray-400">Photoshop, Premiere, Illustrator (cơ bản)</p>
                </div>
                <div>
                  <p className="text-white font-medium">Game Development</p>
                  <p className="text-gray-400">Unity cho dự án game 2D, 3D</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skills & Interests Component
const SkillsInterests = () => {
  const skills = [
    { name: 'React.js', level: 50, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 60, color: 'bg-yellow-500' },
    { name: 'Java', level: 80, color: 'bg-blue-600' },
    { name: 'Node.js', level: 60, color: 'bg-green-500' },
    { name: 'Python', level: 30, color: 'bg-yellow-600' },
    { name: 'UI/UX Design', level: 90, color: 'bg-pink-500' }
  ];

  const interests = [
    { icon: <Code size={24} />, title: 'Lập Trình', desc: 'Đam mê tạo ra các ứng dụng web hiện đại' },
    { icon: <Palette size={24} />, title: 'Thiết Kế', desc: 'Yêu thích thiết kế giao diện đẹp và thân thiện' },
    { icon: <Coffee size={24} />, title: 'Cà Phê', desc: 'Nguồn cảm hứng cho những ý tưởng sáng tạo' },
    { icon: <Music size={24} />, title: 'Âm Nhạc', desc: 'Sáng tác nhạc cũng là một phần đam mê trong cuộc sống' },
    { icon: <Camera size={24} />, title: 'Nhiếp Ảnh', desc: 'Ghi lại những khoảnh khắc đẹp trong cuộc sống' },
    { icon: <Heart size={24} />, title: 'Du Lịch', desc: 'Yêu thích không khí và cảnh đẹp ở những nơi mới' }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Kỹ Năng & Sở Thích
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Những công nghệ tôi thành thạo và những điều tôi đam mê trong cuộc sống
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-800">Kỹ Năng Chuyên Môn</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-gray-800">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-800">Sở Thích & Đam Mê</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {interests.map((interest, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 group">
                  <div className="text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-200">
                    {interest.icon}
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">{interest.title}</h4>
                  <p className="text-gray-600 text-sm">{interest.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Projects Component
const Projects = () => {
  const projects = [
    {
      title: 'Hệ thống Quản lý Rạp chiếu phim',
      description: 'Ứng dụng desktop quản lý rạp chiếu phim với Java Backend và giao diện JavaSwing, tích hợp quản lý phim, lịch chiếu và bán vé',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250"%3E%3Crect width="400" height="250" fill="%23667eea"/%3E%3Ctext x="200" y="125" font-family="Helvetica, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="white"%3EQuản lý%3C/text%3E%3Ctext x="200" y="145" font-family="Helvetica, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="white"%3ERạp chiếu phim%3C/text%3E%3C/svg%3E',
      tags: ['Java', 'JavaSwing', 'SQL Server', 'Figma'],
      githubLink: 'https://github.com/EricMai2112/quan-ly-rap-phim'
    },
    {
      title: 'Hệ thống Quản lý Bán vé Tàu lửa',
      description: 'Ứng dụng quản lý ga tàu với Java Backend, JavaSwing UI, xử lý booking vé, quản lý tuyến đường và thông tin hành khách',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250"%3E%3Crect width="400" height="250" fill="%23f093fb"/%3E%3Ctext x="200" y="125" font-family="Helvetica, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="white"%3EQuản lý%3C/text%3E%3Ctext x="200" y="145" font-family="Helvetica, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="white"%3EBán vé tàu%3C/text%3E%3C/svg%3E',
      tags: ['Java', 'JavaSwing', 'SQL Server', 'Figma'],
      githubLink: 'https://github.com/minh10102003/phat-trien-ung-dung-k17'
    },
    {
      title: 'Website Bán Nhạc cụ',
      description: 'Trang web thương mại điện tử bán nhạc cụ với giao diện responsive, catalog sản phẩm và giỏ hàng cơ bản',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250"%3E%3Crect width="400" height="250" fill="%2343e695"/%3E%3Ctext x="200" y="125" font-family="Helvetica, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="white"%3EWebsite%3C/text%3E%3Ctext x="200" y="145" font-family="Helvetica, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="white"%3EBán nhạc cụ%3C/text%3E%3C/svg%3E',
      tags: ['HTML', 'CSS', 'JavaScript', 'Figma'],
      githubLink: 'https://github.com/minh10102003/minh10102003.github.io',
      websiteLink: 'https://minh10102003.github.io/',
      isWebsite: true
    },
    {
      title: 'Website Test Rối loạn Thần kinh Thực vật',
      description: 'Ứng dụng web chẩn đoán sơ bộ rối loạn thần kinh thực vật thông qua bộ câu hỏi tự đánh giá và thuật toán phân tích',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250"%3E%3Crect width="400" height="250" fill="%23fa709a"/%3E%3Ctext x="200" y="115" font-family="Helvetica, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="white"%3ETest Rối loạn%3C/text%3E%3Ctext x="200" y="140" font-family="Helvetica, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="white"%3EThần kinh%3C/text%3E%3Ctext x="200" y="165" font-family="Helvetica, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="white"%3EThực vật%3C/text%3E%3C/svg%3E',
      tags: ['HTML', 'CSS', 'JavaScript', 'Figma'],
      githubLink: 'https://github.com/minh10102003/testroiloanthankinh.github.io',
      websiteLink: 'https://minh10102003.github.io/testroiloanthankinh.github.io/',
      isWebsite: true
    },
    {
      title: 'Portfolio Website',
      description: 'Website portfolio cá nhân responsive với ReactJS và Tailwind CSS, showcase các dự án và kỹ năng với animation mượt mà',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250"%3E%3Crect width="400" height="250" fill="%236366f1"/%3E%3Ctext x="200" y="135" font-family="Helvetica, sans-serif" font-size="20" font-weight="bold" text-anchor="middle" fill="white"%3EPortfolio%3C/text%3E%3C/svg%3E',
      tags: ['ReactJS', 'Tailwind CSS', 'Figma'],
      githubLink: 'https://github.com/minh10102003/personal-landing-page',
      websiteLink: 'https://personallanding.netlify.app/',
      isWebsite: true
    },
    {
      title: 'Hệ thống Quản lý Quán Cà phê',
      description: 'Ứng dụng Java SpringBoot với Socket.IO real-time, quản lý menu, order, thanh toán và theo dõi bàn trực tuyến',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250"%3E%3Crect width="400" height="250" fill="%23059669"/%3E%3Ctext x="200" y="125" font-family="Helvetica, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="white"%3EQuản lý%3C/text%3E%3Ctext x="200" y="145" font-family="Helvetica, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="white"%3EQuán Cà phê%3C/text%3E%3C/svg%3E',
      tags: ['Java SpringBoot', 'Socket.IO', 'SQL Server', 'Figma'],
      githubLink: 'https://github.com/PhanAnhTuan123/COFFEE_RETAIL'
    },
    {
      title: 'Todo App Mobile',
      description: 'Ứng dụng di động quản lý công việc với React Native, tính năng add/edit/delete task, notification và sync data',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250"%3E%3Crect width="400" height="250" fill="%23dc2626"/%3E%3Ctext x="200" y="135" font-family="Helvetica, sans-serif" font-size="20" font-weight="bold" text-anchor="middle" fill="white"%3ETodo App%3C/text%3E%3C/svg%3E',
      tags: ['React Native', 'AsyncStorage', 'Figma'],
      githubLink: 'https://github.com/your-username/todo-react-native'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Dự Án Nổi Bật
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Những dự án tôi đã thực hiện, từ ý tưởng đến sản phẩm hoàn chỉnh
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    {project.isWebsite ? (
                      <div className="flex gap-2">
                        <a 
                          href={project.websiteLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-blue-500 text-white py-2 px-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200 text-center text-sm"
                        >
                          Xem Website
                        </a>
                        <a 
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-white text-gray-800 py-2 px-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-center text-sm"
                        >
                          GitHub
                        </a>
                      </div>
                    ) : (
                      <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-white text-gray-800 py-2 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-center"
                      >
                        Xem trên GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-xs rounded-full font-medium border border-blue-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/minh10102003"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition-all duration-200"
          >
            Xem Thêm Trên GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Lấy dữ liệu từ form
    const { name, email, subject, message } = formData;

    // 2. Địa chỉ email sẽ nhận tin
    const toEmail = "nguyentrieuminh1003@gmail.com";

    // 3. Tạo tiêu đề và body cho mail, dùng encodeURIComponent để encode ký tự đặc biệt
    const mailSubject = encodeURIComponent(subject);
    const mailBody = encodeURIComponent(
      `Tên: ${name}\nEmail người gửi: ${email}\n\nNội dung:\n${message}`
    );

    // 4. Ghép thành URL mailto
    const mailtoLink = `mailto:${toEmail}?subject=${mailSubject}&body=${mailBody}`;

    // 5. Chuyển hướng trình duyệt về URL mailto -> tự động mở ứng dụng email
    window.location.href = mailtoLink;

    // 6. Reset form và (tùy chọn) hiển thị thông báo
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Liên Hệ
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hãy kết nối với tôi! Tôi luôn sẵn sàng thảo luận về các dự án mới và
            cơ hội hợp tác
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-800">
              Thông Tin Liên Hệ
            </h3>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="text-purple-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">
                    nguyentrieuminh1003@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Điện Thoại</h4>
                  <p className="text-gray-600">+84 865 089 086</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="text-green-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Địa Chỉ</h4>
                  <p className="text-gray-600">
                    Bình Thạnh, TP.Hồ Chí Minh, Việt Nam
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-gray-800 mb-4">
                Kết Nối Với Tôi
              </h4>
              <div className="flex space-x-4">
                {/* GitHub */}
                <a
                  href="https://github.com/minh10102003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-200"
                >
                  <Github size={20} />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/trieuminh1003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors duration-200"
                >
                  <Facebook size={20} />
                </a>

                {/* Điện Thoại (thay Zalo) */}
                <a
                  href="tel:+84865089086"
                  className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
                >
                  <Phone size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Họ Tên
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Nhập họ tên của bạn"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Chủ Đề
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Chủ đề tin nhắn"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Tin Nhắn
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Nội dung tin nhắn..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
              >
                <Send size={20} className="mr-2" />
                Gửi Tin Nhắn
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Portfolio
          </div>
          
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Cảm ơn bạn đã ghé thăm! Hãy kết nối với tôi để cùng nhau tạo ra những điều tuyệt vời.
          </p>

          <div className="flex justify-center space-x-6 mb-8">
              <button
                onClick={(e) => e.preventDefault()}
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={24} />
              </button>
              <button
                onClick={(e) => e.preventDefault()}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </button>
              <button
                onClick={(e) => e.preventDefault()}
                className="text-gray-400 hover:text-sky-400 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </button>
              <button
                onClick={(e) => e.preventDefault()}
                className="text-gray-400 hover:text-red-400 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={24} />
              </button>
            </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
              © 2025 Portfolio. Thiết kế và phát triển bởi Tôi.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component - Quản lý toàn bộ ứng dụng
const App = () => {
  // Scroll to top khi component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Header - Navigation bar cố định ở top */}
      <Header />
      
      {/* Hero Section - Phần giới thiệu chính */}
      <HeroSection />
      
      {/* About Me - Giới thiệu về bản thân */}
      <AboutMe />
      
      {/* Skills & Interests - Kỹ năng và sở thích */}
      <SkillsInterests />
      
      {/* Projects - Danh sách dự án */}
      <Projects />
      
      {/* Contact Form - Form liên hệ */}
      <ContactForm />
      
      {/* Footer - Thông tin cuối trang */}
      <Footer />
      
      {/* Scroll to top button */}
      <ScrollToTopButton />
    </div>
  );
};

// Scroll to Top Button Component
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Hiển thị button khi scroll xuống
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Cuộn lên đầu trang
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ChevronDown size={20} className="rotate-180" />
        </button>
      )}
    </>
  );
};

export default App;