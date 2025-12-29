import secondImage from '../../assets/e0095c66b2bd8d8f4ca8615db3d51cafa2428fce.png';

export function HomeContent() {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      {/* Header with Logo */}
      <div className="border-b p-6">
        <h2 className="text-2xl font-bold text-[#1bb143] mb-4">TRANG CHỦ</h2>
        <div className="bg-gradient-to-r from-green-50 to-white p-6 rounded-lg border-2 border-[#1bb143]">
          <p className="text-center text-sm text-gray-700 mb-4">
            CHÀO MỪNG VÔI CẦU LẠC BỘ LÝ LUẬN TRẺ TRƯỜNG ĐẠI HỌC CÔNG NGHỆ KỸ THUẬT TP. HCM
          </p>
          <div className="flex justify-center items-center gap-6 mb-4">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-yellow-400 text-2xl">☭</span>
            </div>
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xl">🌸</span>
            </div>
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xl">△</span>
            </div>
          </div>
          <div className="bg-[#1bb143] text-white text-center py-3 rounded font-bold">
            CÔNG TRÌNH SỐ HÓA HOẠT ĐỘNG
            <br />
            CÂU LẠC BỘ LÝ LUẬN TRẺ TRƯỜNG ĐẠI HỌC CÔNG NGHỆ KỸ THUẬT TP. HỒ CHÍ MINH
          </div>
        </div>
        <div className="text-right mt-3">
          <a href="#" className="text-sm text-[#1bb143] hover:underline font-semibold">
            TIỂU ĐIỂM
          </a>
        </div>
      </div>

      {/* Featured Image Section */}
      <div className="p-6">
        <img
          src={secondImage}
          alt="Hoạt động CLB"
          className="w-full rounded-lg mb-6"
        />
        
        <div className="space-y-4">
          <div className="border-l-4 border-[#1bb143] pl-4">
            <h3 className="font-semibold text-lg mb-2 text-[#1bb143]">HOẠT ĐỘNG ĐẢNG DIỄN RA</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Trong không khí tưng bừng của tháng thanh niên, Câu lạc bộ Lý luận trẻ đã tổ chức nhiều hoạt động ý nghĩa nhằm nâng cao nhận thức chính trị cho sinh viên...
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <img
              src="https://images.unsplash.com/photo-1660795469319-9956a233a54d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHNlbWluYXIlMjBjb25mZXJlbmNlfGVufDF8fHx8MTc2Njk5ODA3N3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Hoạt động 1"
              className="w-full rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1730313533691-badce0b6e376?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtJTIwZmxhZyUyMHJlZHxlbnwxfHx8fDE3NjY5OTgwNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Hoạt động 2"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
