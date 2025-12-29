import secondImage from '../../assets/e0095c66b2bd8d8f4ca8615db3d51cafa2428fce.png';
import thirdImage from '../../assets/4c8a2f223fb2d82c1ba724feb808ac01fd3a732f.png';

export function MainContent() {
  const articles = [
    {
      title: 'MỘT HÀNH TRÌNH - VẠN SỰ HIỆP NÓI Trong không khí tưng bừng của tháng trẻ em bản...',
      image: secondImage,
      category: 'CHƯƠNG TRÌNH - SỰ KIỆN THÔNG NHẤT',
    },
    {
      title: 'CHƯƠNG TRÌNH - SỰ KIỆN THÔNG NHẤT MỘT HÀNH TRÌNH VẠ VANG',
      image: 'https://images.unsplash.com/photo-1722263147569-fa8873772867?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwc3R1ZGVudHMlMjBwb2xpdGljYWwlMjBjbGFzc3xlbnwxfHx8fDE3NjY5OTgwNzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'HOẠT ĐỘNG TƯ TƯỞNG - SÁNG KIẾN MỚI',
    },
    {
      title: 'CUỘC THI TRẮC TUYỀN "SINH VIÊN MÔN THỦ ĐỔC LẬP"',
      image: thirdImage,
      category: 'THI ĐUA - SÁNG KIẾN MỚI',
    },
  ];

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 text-xs font-semibold rounded mb-3">
                  {article.category}
                </span>
                <h3 className="text-sm font-semibold text-gray-800 line-clamp-3">
                  {article.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
