import { useEffect, useState } from 'react';
import { Mail } from 'lucide-react';

export function Header() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  const pad2 = (value: number) => String(value).padStart(2, '0');
  const formattedDate = `${pad2(now.getDate())}/${pad2(
    now.getMonth() + 1
  )}/${now.getFullYear()}`;
  const formattedTime = `${pad2(now.getHours())}:${pad2(
    now.getMinutes()
  )}:${pad2(now.getSeconds())}`;

  return (
    <header className="bg-white shadow-sm">
      {/* Top Info Bar */}
      <div className="bg-[#1bb143] text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <span>{formattedDate}</span>
            <span>{formattedTime}</span>
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
