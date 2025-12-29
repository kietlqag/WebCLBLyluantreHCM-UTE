import { Search, MapPin } from 'lucide-react';

export function Sidebar() {
  const secretary = {
    name: 'Tổ Bí thư Tô Lâm',
    image: 'https://images.unsplash.com/photo-1759922378187-11a435837df8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGxlYWRlcnNoaXAlMjBtZWV0aW5nfGVufDF8fHx8MTc2Njk5ODA3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
  };

  const activities = [
    'Học tập suốt đời để trở thành người có ích cho xã hội',
    'Thực hành tiết kiệm',
    'Rèng ra Việt Nam',
    'Bác với cộng đồng hành quân',
  ];

  return (
    <aside className="space-y-6">
      {/* Search Box */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="font-semibold mb-3">Tìm kiếm</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg pr-10 focus:outline-none focus:border-[#1bb143]"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#1bb143] text-white p-2 rounded">
            <Search className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Introduction Video */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="font-semibold mb-3">Giới thiệu về công trình số hóa CLB Lý luận trẻ UTE</h3>
        <div className="relative bg-gradient-to-br from-blue-900 to-blue-600 rounded-lg p-6 text-white text-center">
          <div className="mb-3">
            <div className="w-16 h-16 bg-white/20 rounded-full mx-auto flex items-center justify-center">
              <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-8 border-l-white border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>
          <p className="text-xs mb-1">CLB Lý luận trẻ - Trường Đại học Công nghệ Kỹ thuật TP.HCM</p>
          <p className="text-xs">clblyluantre.org.vn</p>
        </div>
      </div>

      {/* Online Museum */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="font-semibold mb-3">Bảo tàng trực tuyến</h3>
        <div className="bg-gradient-to-br from-pink-200 to-pink-100 rounded-lg p-6 flex items-center justify-center">
          <div className="text-pink-500">
            <svg viewBox="0 0 100 100" className="w-20 h-20">
              <path
                d="M50 20 C30 20, 20 30, 20 45 C20 60, 30 70, 50 80 C70 70, 80 60, 80 45 C80 30, 70 20, 50 20"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
        <div className="mt-3 text-center">
          <a href="#" className="text-sm text-pink-600 hover:text-pink-700 font-semibold">
            Bảo tàng trực tuyến →
          </a>
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="font-semibold mb-3">Thống kê lượt truy cập</h3>
        <p className="text-sm text-gray-600">Lượt xem trang: 6</p>
      </div>

      {/* Secretary General */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="font-semibold mb-3">Tổng Bí thư Tô Lâm</h3>
        <img
          src={secretary.image}
          alt={secretary.name}
          className="w-full rounded-lg mb-3"
        />
        <ul className="space-y-2">
          {activities.map((activity, index) => (
            <li key={index} className="text-sm text-gray-700 hover:text-[#1bb143] cursor-pointer flex items-start gap-2">
              <span className="text-[#1bb143] mt-1">▸</span>
              <span>{activity}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* University Info */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="font-semibold mb-3">Trường ĐH Công nghệ Kỹ thuật TP.HCM</h3>
        <p className="text-sm text-gray-600 mb-3">
          01 Võ Văn Ngân, Phường Linh Chiểu, Thủ Đức, Thành phố Hồ Chí Minh
        </p>
        <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
          <MapPin className="w-8 h-8 text-gray-400" />
        </div>
        <div className="mt-3 text-center">
          <a href="#" className="text-sm text-[#1bb143] hover:underline">
            Xem bản đồ lớn hơn →
          </a>
        </div>
      </div>
    </aside>
  );
}