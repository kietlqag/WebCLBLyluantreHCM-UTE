import { Search, MapPin } from 'lucide-react';

export function Sidebar() {
  const secretary = {
    name: 'Tá»• BÃ­ thÆ° TÃ´ LÃ¢m',
    image: 'https://images.unsplash.com/photo-1759922378187-11a435837df8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGxlYWRlcnNoaXAlMjBtZWV0aW5nfGVufDF8fHx8MTc2Njk5ODA3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
  };

  const activities = [
    'Há»c táº­p suá»‘t Ä‘á»i Ä‘á»ƒ trá»Ÿ thÃ nh ngÆ°á»i cÃ³ Ã­ch cho xÃ£ há»™i',
    'Thá»±c hÃ nh tiáº¿t kiá»‡m',
    'RÃ¨ng ra Viá»‡t Nam',
    'BÃ¡c vá»›i cá»™ng Ä‘á»“ng hÃ nh quÃ¢n',
  ];

  return (
    <aside className="space-y-6">
      {/* Search Box */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="font-semibold mb-3">TÃ¬m kiáº¿m</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="TÃ¬m kiáº¿m..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg pr-10 focus:outline-none focus:border-[#1bb143]"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#1bb143] text-white p-2 rounded">
            <Search className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Introduction Video */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="font-semibold mb-3">Giá»›i thiá»‡u vá» cÃ´ng trÃ¬nh sá»‘ hÃ³a CLB LÃ½ luáº­n tráº» UTE</h3>
        <div className="relative bg-gradient-to-br from-blue-900 to-blue-600 rounded-lg p-6 text-white text-center">
          <div className="mb-3">
            <div className="w-16 h-16 bg-white/20 rounded-full mx-auto flex items-center justify-center">
              <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-8 border-l-white border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>
          <p className="text-xs mb-1">CLB LÃ½ luáº­n tráº» - TrÆ°á»ng Äáº¡i há»c CÃ´ng nghá»‡ Ká»¹ thuáº­t TP.HCM</p>
          <p className="text-xs">clblyluantre.org.vn</p>
        </div>
      </div>

      {/* Online Museum */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="font-semibold mb-3">Báº£o tÃ ng trá»±c tuyáº¿n</h3>
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
            Báº£o tÃ ng trá»±c tuyáº¿n â†’
          </a>
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="font-semibold mb-3">Thá»‘ng kÃª lÆ°á»£t truy cáº­p</h3>
        <p className="text-sm text-gray-600">LÆ°á»£t xem trang: 6</p>
      </div>

      {/* Secretary General */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="font-semibold mb-3">Tá»•ng BÃ­ thÆ° TÃ´ LÃ¢m</h3>
        <img
          src={secretary.image}
          alt={secretary.name}
          className="w-full rounded-lg mb-3"
        />
        <ul className="space-y-2">
          {activities.map((activity, index) => (
            <li key={index} className="text-sm text-gray-700 hover:text-[#1bb143] cursor-pointer flex items-start gap-2">
              <span className="text-[#1bb143] mt-1">â–¸</span>
              <span>{activity}</span>
            </li>
          ))}
        </ul>
      </div>

            {/* University Info */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="font-semibold mb-3">
          Trường ĐH Công nghệ Kỹ thuật TP.HCM
        </h3>
        <p className="text-sm text-gray-600 mb-3">
          1 Võ Văn Ngân, Phường Thủ Đức, TP. Hồ Chí Minh
        </p>
        <div className="rounded-lg overflow-hidden h-48">
          <iframe
            title="Bản đồ Trường ĐH Công nghệ Kỹ thuật TP.HCM"
            src="https://www.google.com/maps?q=1%20V%C3%B5%20V%C4%83n%20Ng%C3%A2n%2C%20Linh%20Chi%E1%BB%83u&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="mt-3 text-center">
          <a
            href="https://maps.google.com/?q=1%20V%C3%B5%20V%C4%83n%20Ng%C3%A2n%2C%20Linh%20Chi%E1%BB%83u"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-[#1bb143] hover:underline"
          >
            Xem bản đồ lớn hơn →
          </a>
        </div>
      </div>
    </aside>
  );
}
