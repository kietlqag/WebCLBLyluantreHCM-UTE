import { ChevronLeft, ChevronRight } from 'lucide-react';
import exampleImage from '../../assets/9c18b4a64d44711411a44e44c5772a40ea33ad51.png';

export function NewsTicker() {
  return (
    <div className="bg-[#1bb143] text-white py-3">
      <div className="container mx-auto px-4 flex items-center gap-3">
        <div className="bg-[#00aa00] px-4 py-2 rounded font-bold text-sm whitespace-nowrap flex items-center gap-2">
          <span className="text-lg">⚡</span>
          NỔI BẬT
        </div>
        
        <div className="flex-1 overflow-hidden">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 min-w-0">
              <img 
                src={exampleImage} 
                alt="News" 
                className="w-12 h-12 object-cover rounded"
              />
              <p className="text-sm truncate">
                Kế hoạch số 04-KH/LT/CLB về việc Tổ chức Điền đàn "Nâng cao chất lượng học tập các học phần ngành hành chính – pháp lý"
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <button className="p-1.5 hover:bg-white/10 rounded transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="p-1.5 hover:bg-white/10 rounded transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="bg-[#cc0000] px-4 py-2 rounded font-bold text-sm whitespace-nowrap">
          KẾ HOẠCH
        </div>
      </div>
    </div>
  );
}
