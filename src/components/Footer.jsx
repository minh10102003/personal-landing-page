import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, Twitter, Code, Palette, Coffee, Music, Camera, Heart, Send, Menu, X, Star, Award, Briefcase, GraduationCap } from 'lucide-react';

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
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors duration-200">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200">
              <Mail size={24} />
            </a>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
              © 2025 Portfolio. Thiết kế và phát triển với ❤️ bởi Tôi.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};