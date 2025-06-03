import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, Twitter, Code, Palette, Coffee, Music, Camera, Heart, Send, Menu, X, Star, Award, Briefcase, GraduationCap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl ring-4 ring-white/50 hover:scale-105 transition-transform duration-300">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192' viewBox='0 0 192 192'%3E%3Crect width='192' height='192' fill='%23667eea'/%3E%3Ctext x='96' y='110' font-family='Arial' font-size='80' text-anchor='middle' fill='white'%3E👨‍💻%3C/text%3E%3C/svg%3E"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Xin Chào!
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-gray-700 mb-8 font-light">
          Tôi là <span className="font-semibold text-purple-600">Web Developer</span> & <span className="font-semibold text-blue-600">UI/UX Designer</span>
        </h2>
        
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Tạo ra những trải nghiệm web tuyệt vời với sự kết hợp hoàn hảo giữa thiết kế và công nghệ
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Xem Dự Án
          </button>
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
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
