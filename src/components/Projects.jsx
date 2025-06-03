const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Nền tảng thương mại điện tử hoàn chỉnh với React, Node.js và MongoDB',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250"%3E%3Crect width="400" height="250" fill="%23667eea"/%3E%3Ctext x="200" y="135" font-family="Arial" font-size="20" text-anchor="middle" fill="white"%3EE-Commerce%3C/text%3E%3C/svg%3E',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Website portfolio responsive với thiết kế hiện đại cho freelancer',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250"%3E%3Crect width="400" height="250" fill="%23f093fb"/%3E%3Ctext x="200" y="135" font-family="Arial" font-size="20" text-anchor="middle" fill="white"%3EPortfolio%3C/text%3E%3C/svg%3E',
      tags: ['React', 'Tailwind', 'Framer Motion'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'Ứng dụng quản lý công việc với tính năng collaboration và real-time',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250"%3E%3Crect width="400" height="250" fill="%2343e695"/%3E%3Ctext x="200" y="135" font-family="Arial" font-size="20" text-anchor="middle" fill="white"%3ETask Manager%3C/text%3E%3C/svg%3E',
      tags: ['Vue.js', 'Firebase', 'Socket.io'],
      link: '#'
    },
    {
      title: 'Mobile Banking UI',
      description: 'Thiết kế giao diện ứng dụng ngân hàng di động với UX tối ưu',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250"%3E%3Crect width="400" height="250" fill="%23fa709a"/%3E%3Ctext x="200" y="135" font-family="Arial" font-size="20" text-anchor="middle" fill="white"%3EBanking App%3C/text%3E%3C/svg%3E',
      tags: ['Figma', 'Prototype', 'User Research'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Dự Án Nổi Bật
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Những dự án tôi đã thực hiện, từ ý tưởng đến sản phẩm hoàn chỉnh
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <button className="w-full bg-white text-gray-800 py-2 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                      Xem Chi Tiết
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm rounded-full font-medium"
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
          <button className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-200">
            Xem Thêm Dự Án
          </button>
        </div>
      </div>
    </section>
  );
};