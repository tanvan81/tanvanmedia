import { Course, Banner, Bot } from './types';

export const COURSES: Course[] = [
  {
    id: 1,
    title: "Adobe Premiere Pro - Từ Cơ Bản Đến Chuyên Nghiệp",
    instructor: "Lưu Văn Tân",
    price: "1.990.000 đ",
    rating: 4.9,
    reviews: 234,
    duration: "12 giờ",
    level: "Cơ bản",
    category: ["Video Editing", "Adobe"],
    image: "/Image/course1.jpg"
  },
  {
    id: 2,
    title: "Thiết Kế Đồ Họa với Adobe Illustrator",
    instructor: "Nguyễn Minh Anh",
    price: "1.790.000 đ",
    rating: 4.8,
    reviews: 189,
    duration: "10 giờ",
    level: "Cơ bản",
    category: ["Graphic Design", "Adobe"],
    image: "/Image/course2.jpg"
  },
  {
    id: 3,
    title: "Facebook Ads Mastery - Chiến Lược Quảng Cáo Hiệu Quả",
    instructor: "Trần Quốc Huy",
    price: "2.490.000 đ",
    rating: 4.9,
    reviews: 312,
    duration: "15 giờ",
    level: "Trung cấp",
    category: ["Marketing", "Facebook Ads"],
    image: "/Image/course3.jpg"
  },
  {
    id: 4,
    title: "Nhiếp Ảnh Chuyên Nghiệp & Hậu Kỳ Lightroom",
    instructor: "Phạm Gia Bảo",
    price: "1.590.000 đ",
    rating: 4.7,
    reviews: 156,
    duration: "8 giờ",
    level: "Cơ bản",
    category: ["Photography", "Lightroom"],
    image: "/Image/course4.jpg"
  },
  {
    id: 5,
    title: "Xây Dựng Thương Hiệu Cá Nhân Trên Mạng Xã Hội",
    instructor: "Lưu Văn Tân",
    price: "1.290.000 đ",
    rating: 5.0,
    reviews: 420,
    duration: "6 giờ",
    level: "Cơ bản",
    category: ["Branding", "Social Media"],
    image: "/Image/course5.jpg"
  },
  {
    id: 6,
    title: "Kỹ Thuật Quay Phim & Kể Chuyện Bằng Hình Ảnh",
    instructor: "Hoàng Nam",
    price: "2.190.000 đ",
    rating: 4.9,
    reviews: 201,
    duration: "14 giờ",
    level: "Nâng cao",
    category: ["Cinematography", "Storytelling"],
    image: "/Image/course6.jpg"
  }
];

export const BANNERS: Banner[] = [
  {
    id: 1,
    title: "Thiết Kế Đồ Họa với Adobe Illustrator",
    description: "Tạo logo, icon, và vector art chuyên nghiệp với Illustrator. Phù hợp cho designer và marketer.",
    image: "/Image/banner1.jpg",
    link: "#course-2"
  },
  {
    id: 2,
    title: "Làm Chủ Video với Premiere Pro",
    description: "Biến những thước phim thô thành tác phẩm nghệ thuật. Khóa học từ con số 0 đến chuyên gia.",
    image: "/Image/banner2.jpg",
    link: "#course-1"
  },
  {
    id: 3,
    title: "Bùng Nổ Doanh Số với Facebook Ads",
    description: "Học cách tối ưu chi phí và tiếp cận đúng khách hàng mục tiêu một cách bền vững.",
    image: "/Image/banner3.jpg",
    link: "#course-3"
  }
];

export const BOTS: Bot[] = [
  {
    id: 1,
    name: "AI Content Creator Bot",
    description: "Tự động tạo nội dung bài viết, kịch bản video chuẩn SEO chỉ trong vài giây.",
    features: ["Viết bài chuẩn SEO", "Sáng tạo kịch bản TikTok", "Tóm tắt nội dung video"],
    price: "490.000 đ/tháng",
    image: "/Image/bot1.jpg",
    category: "Content"
  },
  {
    id: 2,
    name: "Auto Video Editor Bot",
    description: "Hỗ trợ cắt ghép, thêm phụ đề và hiệu ứng cơ bản cho video ngắn hoàn toàn tự động.",
    features: ["Tự động thêm phụ đề", "Cắt ghép video thông minh", "Thêm nhạc nền phù hợp"],
    price: "690.000 đ/tháng",
    image: "/Image/bot2.jpg",
    category: "Video"
  },
  {
    id: 3,
    name: "Marketing Automation Bot",
    description: "Quản lý chiến dịch quảng cáo, tự động trả lời khách hàng và tối ưu hóa chuyển đổi.",
    features: ["Chatbot thông minh", "Tự động hóa email marketing", "Phân tích đối thủ"],
    price: "890.000 đ/tháng",
    image: "/Image/bot3.jpg",
    category: "Marketing"
  }
];
