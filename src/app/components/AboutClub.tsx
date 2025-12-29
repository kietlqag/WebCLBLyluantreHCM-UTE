import {
  Target,
  Users,
  BookOpen,
  Trophy,
  Heart,
  Lightbulb,
} from 'lucide-react';

export function AboutClub() {
  const activities = [
    {
      icon: BookOpen,
      title: 'Học tập và nghiên cứu',
      description:
        'Tổ chức các buổi seminar, tọa đàm về lý luận chính trị, nghiên cứu khoa học',
    },
    {
      icon: Users,
      title: 'Hoạt động tình nguyện',
      description:
        'Tham gia các hoạt động phục vụ cộng đồng, công tác xã hội',
    },
    {
      icon: Lightbulb,
      title: 'Đổi mới sáng tạo',
      description: 'Xây dựng các mô hình sáng tạo trong học tập và truyền thông',
    },
    {
      icon: Trophy,
      title: 'Thi đua học tập',
      description:
        'Tổ chức các cuộc thi, hội thi về lý luận chính trị cho sinh viên',
    },
  ];

  const achievements = [
    'Đạt danh hiệu Tập thể xuất sắc nhiều năm liền',
    'Tổ chức thành công hơn 50 hoạt động lớn nhỏ mỗi năm',
    'Có hơn 200 thành viên tích cực tham gia hoạt động',
    'Đóng góp tích cực vào công tác giáo dục lý luận chính trị',
  ];

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-[#1bb143] mb-4 flex items-center gap-2">
          <Heart className="w-6 h-6" />
          Giới thiệu chung
        </h2>
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed">
            Câu lạc bộ Lý luận trẻ Trường Đại học Công nghệ Kỹ thuật TP. Hồ Chí
            Minh là một tổ chức sinh viên hoạt động nhằm tuyên truyền, giáo dục
            lý luận chính trị của Đảng, pháp luật của Nhà nước và các hoạt động
            xã hội có ích cho sinh viên trong nhà trường.
          </p>
          <p className="leading-relaxed">
            Được thành lập với mục tiêu tạo dựng một sân chơi bổ ích, góp phần
            nâng cao nhận thức chính trị, bồi dưỡng lý tưởng cách mạng cho sinh
            viên. Câu lạc bộ là cầu nối giữa nhà trường với sinh viên trong việc
            tuyên truyền, phổ biến đường lối, chính sách của Đảng và pháp luật
            của Nhà nước.
          </p>
          <p className="leading-relaxed">
            Qua nhiều năm hoạt động, CLB Lý luận trẻ đã trở thành một trong những
            tổ chức sinh viên năng động, sáng tạo, đóng góp tích cực vào đời sống
            tinh thần của sinh viên trường Đại học Công nghệ Kỹ thuật TP. Hồ Chí
            Minh.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-bold text-[#1bb143] mb-4 flex items-center gap-2">
            <Target className="w-6 h-6" />
            Mục tiêu
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-[#1bb143] mt-1">▸</span>
              <span className="text-gray-700">
                Tuyên truyền, giáo dục nâng cao nhận thức chính trị cho sinh
                viên
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#1bb143] mt-1">▸</span>
              <span className="text-gray-700">
                Xây dựng đội ngũ sinh viên có bản lĩnh chính trị vững vàng
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#1bb143] mt-1">▸</span>
              <span className="text-gray-700">
                Tạo sân chơi bổ ích cho sinh viên yêu thích lý luận chính trị
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#1bb143] mt-1">▸</span>
              <span className="text-gray-700">
                Đóng góp vào công tác giáo dục lý luận trong nhà trường
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-bold text-[#1bb143] mb-4 flex items-center gap-2">
            <Lightbulb className="w-6 h-6" />
            Định hướng
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-[#1bb143] mt-1">▸</span>
              <span className="text-gray-700">
                Đổi mới phương thức hoạt động, ứng dụng công nghệ số
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#1bb143] mt-1">▸</span>
              <span className="text-gray-700">
                Mở rộng quy mô và nâng cao chất lượng hoạt động
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#1bb143] mt-1">▸</span>
              <span className="text-gray-700">
                Tăng cường liên kết với các tổ chức, đơn vị trong và ngoài trường
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#1bb143] mt-1">▸</span>
              <span className="text-gray-700">
                Xây dựng thương hiệu CLB ngày càng vững mạnh
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Activities */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-[#1bb143] mb-6">
          Các hoạt động chính
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1bb143] to-[#15903a] rounded-full flex items-center justify-center mx-auto mb-4">
                <activity.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                {activity.title}
              </h3>
              <p className="text-sm text-gray-600">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-gradient-to-br from-green-50 to-white rounded-lg shadow-sm p-6 border-2 border-[#1bb143]">
        <h2 className="text-2xl font-bold text-[#1bb143] mb-6 flex items-center gap-2">
          <Trophy className="w-6 h-6" />
          Thành tích nổi bật
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg">
              <div className="w-8 h-8 bg-[#1bb143] text-white rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold">{index + 1}</span>
              </div>
              <p className="text-gray-700">{achievement}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Organization Structure */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-[#1bb143] mb-6 flex items-center gap-2">
          <Users className="w-6 h-6" />
          Cơ cấu tổ chức
        </h2>
        <div className="space-y-6">
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-[#1bb143] to-[#15903a] text-white px-8 py-4 rounded-lg shadow-lg">
              <p className="font-bold text-lg">BAN CHỦ NHIỆM</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 border-2 border-blue-300 px-6 py-4 rounded-lg">
                <p className="font-semibold text-gray-800">
                  LÝ LUẬN - HỌC THUẬT
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Nghiên cứu, biên soạn và phát triển nội dung lý luận
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 border-2 border-yellow-300 px-6 py-4 rounded-lg">
                <p className="font-semibold text-gray-800">
                  HÀNH CHÍNH - SỰ KIỆN
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Điều phối hoạt động, quản trị hồ sơ và tổ chức sự kiện
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-pink-100 to-pink-50 border-2 border-pink-300 px-6 py-4 rounded-lg">
                <p className="font-semibold text-gray-800">
                  TRUYỀN THÔNG - NỘI DUNG SỐ
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Xây dựng kế hoạch truyền thông, quản lý nội dung số
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-[#1bb143] mb-6">
          Hình ảnh hoạt động
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img
            src="https://images.unsplash.com/photo-1660795469319-9956a233a54d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHNlbWluYXIlMjBjb25mZXJlbmNlfGVufDF8fHx8MTc2Njk5ODA3N3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Hoạt động 1"
            className="w-full h-48 object-cover rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1722263147569-fa8873772867?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtZXNlJTIwc3R1ZGVudHMlMjBwb2xpdGljYWwlMjBjbGFzc3xlbnwxfHx8fDE3NjY5OTgwNzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Hoạt động 2"
            className="w-full h-48 object-cover rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1759922378187-11a435837df8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGxlYWRlcnNoaXAlMjBtZWV0aW5nfGVufDF8fHx8MTc2Njk5ODA3Nnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Hoạt động 3"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
      </div>

    </div>
  );
}
