import { Mail } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      {/* Top Info Bar */}
      <div className="bg-[#1bb143] text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <span>29/12/2025</span>
            <span>15:42:09</span>
          </div>
          <div className="hidden md:block text-center flex-1">
            <span>Kế hoạch số 01-KH/LT/LCD-CLB về việc Tổ chức Tọa đàm "Nâng cao chất lượng học tập các học phần lý luận chính trị"</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span className="text-xs md:text-sm">CLBLYLUANTRE.2018.HCA@GMAIL.COM</span>
          </div>
        </div>
      </div>

      <div className="bg-white py-3 px-4 border-b">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex-1 text-center">
            <h1 className="text-[#1bb143] font-bold tracking-wide">CÂU LẠC BỘ LÝ LUẬN TRẺ</h1>
            <h1 className="text-[#1bb143] font-bold tracking-wide">ĐOÀN TRƯỜNG ĐẠI HỌC CÔNG NGHỆ KỸ THUẬT TP. HỒ CHÍ MINH</h1>
          </div>
        </div>
      </div>
    </header>
  );
}
