import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, Twitter, Code, Palette, Coffee, Music, Camera, Heart, Send, Menu, X, Star, Award, Briefcase, GraduationCap } from 'lucide-react';

const SkillsInterests = () => {
  const skills = [
    { name: 'React.js', level: 90, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 85, color: 'bg-yellow-500' },
    { name: 'TypeScript', level: 80, color: 'bg-blue-600' },
    { name: 'Node.js', level: 75, color: 'bg-green-500' },
    { name: 'Python', level: 70, color: 'bg-yellow-600' },
    { name: 'UI/UX Design', level: 85, color: 'bg-pink-500' }
  ];

  const interests = [
    { icon: <Code size={24} />, title: 'Lập Trình', desc: 'Đam mê tạo ra các ứng dụng web hiện đại' },
    { icon: <Palette size={24} />, title: 'Thiết Kế', desc: 'Yêu thích thiết kế giao diện đẹp và thân thiện' },
    { icon: <Coffee size={24} />, title: 'Cà Phê', desc: 'Nguồn cảm hứng cho những ý tưởng sáng tạo' },
    { icon: <Music size={24} />, title: 'Âm Nhạc', desc: 'Thư giãn và tập trung khi làm việc' },
    { icon: <Camera size={24} />, title: 'Nhiếp Ảnh', desc: 'Ghi lại những khoảnh khắc đẹp trong cuộc sống' },
    { icon: <Heart size={24} />, title: 'Du Lịch', desc: 'Khám phá văn hóa và con người mới' }
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