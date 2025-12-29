import mainImage from '../../assets/9c18b4a64d44711411a44e44c5772a40ea33ad51.png';
import secondImage from '../../assets/e0095c66b2bd8d8f4ca8615db3d51cafa2428fce.png';
import thirdImage from '../../assets/4c8a2f223fb2d82c1ba724feb808ac01fd3a732f.png';

export function FeaturedArticles() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Main Featured Article */}
        <div className="relative group cursor-pointer overflow-hidden rounded-lg">
          <img
            src={mainImage}
            alt="Tọa đàm Tuổi trẻ với biển đảo quê hương"
            className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <span className="inline-block bg-[#1bb143] px-3 py-1 text-xs font-semibold rounded mb-3">
              TIN TỨC - HOẠT ĐỘNG
            </span>
            <h2 className="text-2xl font-bold mb-2 line-clamp-2">
              TỌA ĐÀM "TUỔI TRẺ VỚI BIỂN ĐẢO QUÊ HƯƠNG & CÔNG CỐ KẾT QUẢ CUỘC THI..."
            </h2>
          </div>
        </div>

        {/* Side Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Article 1 */}
          <div className="relative group cursor-pointer overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1660795469319-9956a233a54d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHNlbWluYXIlMjBjb25mZXJlbmNlfGVufDF8fHx8MTc2Njk5ODA3N3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Hoạt động đoàn kết"
              className="w-full h-[190px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <span className="inline-block bg-[#1bb143] px-2 py-1 text-xs font-semibold rounded mb-2">
                BẢO VỆ NỀN TẢNG TƯ TƯỞNG CỦA ĐẢNG
              </span>
              <h3 className="text-sm font-bold line-clamp-2">
                HOẠT ĐỘNG KẾT TOÀN DÂN TỘC - GỌI NGUỒN SỨC MẠNH, ĐỘNG LỰC CHO YÊU...
              </h3>
            </div>
          </div>

          {/* Article 2 */}
          <div className="relative group cursor-pointer overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1759922378187-11a435837df8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGxlYWRlcnNoaXAlMjBtZWV0aW5nfGVufDF8fHx8MTc2Njk5ODA3Nnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Bảo tàng trực tuyến"
              className="w-full h-[190px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <span className="inline-block bg-pink-500 px-2 py-1 text-xs font-semibold rounded mb-2">
                BẢO TÀNG TRỰC TUYẾN
              </span>
              <h3 className="text-sm font-bold line-clamp-2">
                BẢO TÀNG TRỰC TUYẾN
              </h3>
            </div>
          </div>

          {/* Article 3 */}
          <div className="relative group cursor-pointer overflow-hidden rounded-lg">
            <img
              src={thirdImage}
              alt="Hoạt động đảng"
              className="w-full h-[190px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <span className="inline-block bg-[#1bb143] px-2 py-1 text-xs font-semibold rounded mb-2">
                TIN TỨC - HOẠT ĐỘNG
              </span>
              <h3 className="text-sm font-bold line-clamp-2">
                HOẠT ĐỘNG ĐẢNG DIỄN RA
              </h3>
            </div>
          </div>

          {/* Article 4 */}
          <div className="relative group cursor-pointer overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1747625119757-1b5c92aec5e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwZXZlbnQlMjBWaWV0bmFtfGVufDF8fHx8MTc2Njk5ODA3N3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Sáng mãi mùa thu độc lập"
              className="w-full h-[190px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <span className="inline-block bg-[#cc0000] px-2 py-1 text-xs font-semibold rounded mb-2">
                TIN TỨC - HOẠT ĐỘNG
              </span>
              <h3 className="text-sm font-bold line-clamp-2">
                SÁNG MÃI MÙA THU ĐỘC LẬT
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
