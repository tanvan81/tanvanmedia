import { Course, Banner, Bot } from './types';

export const COURSES: Course[] = [
  {
    id: 3,
    title: "Master Prompt: Phân tích, xây dựng DNA cho kênh",
    price: "3.000.000 đ",
    reviews: 30,
    duration: "6 giờ",
    level: "Cơ bản",
    image: "/Image/master-prompt.jpg",
    description: "Là khóa học giúp bạn phân tích kênh đối thủ một cách sâu sắc nhất. Từ bản phân tích đó, hướng đến xây dựng BOT mang dấu ấn cá nhân của mỗi chúng ta. Bên cạnh đó, khóa học cũng mag đến cho bạn toàn bộ quy trình từ khâu sản xuất nội dung đến khi có video hoàn chỉnh",
    learningPoints: [
      "Tìm hiểu về NoteboolLM, cách khai khác công cụ",
      "Xây dựng DNA cho kênh mình",
      "Xây dựng Master Prompt hoàn chỉnh dựa trên DNA vừa hoàn thiện",
      "Xây dựng BOT sản xuất nội dung, theo phong cách cá nhân",
      "Tối ưu hóa BOT để viết nội dung",
      "Sử dụng công cụ sao chép voice cục bộ",
      "Sử dụng ứng dụng khớp voice, hình",
      "Quy trình tối ưu, khép kín sản xuất video"
    ],
    curriculum: [
      { title: "2 Prompt được tối ưu để sử dụng NotebookLM" },
      { title: "Quy trình huấn luyện để tạo Master prompt"},
      { title: "Quy trình tối ưu BOT" },
      { title: "Công cụ clone voice, ứng dụng tạo voice hàng loạt" },
      { title: "Ứng dụng phân tách nội dung kịch bản" },
      { title: "Ứng dụng đọc nội dung kịch bản, tạo prompt minh họa" },
      { title: "Phần mềm ghép voice, ảnh, khớp voice hình" },
      { title: "Quy trình 10 bước để xây dựng kênh" },
      { title: "Nhóm chung để trao đổi, hỗ trợ" },
      { title: "Các buổi zoom để cập nhật kiến thức" }


    ]
  },
 {
    id: 6,
    title: "Share key, cam kết bkt trong 45 ngày",
    price: "0 đ",
    reviews: 50,
    duration: "14 giờ",
    level: "Nâng cao",
    image: "/Image/cam-ket-bkt.jpg",
    description: "Khóa học cầm tay chỉ việc, chia sẻ key, cam kết bật kiếm tiền trong 45 ngày. Bạn sẽ được đồng hành trong suốt quá trình làm việc. Tất cả theo lộ trình rõ ràng, cùng nhau cam kết đi đến thành công ",
    learningPoints: [
      "Định hướng tư duy, xây dựng lộ trình phát triển",
      "Xây dựng nội dung kịch bản, đào tạo BOT phục vụ cho công việc sáng tạo nội dung",
      "Xây dựng nguồn tài nguyên đề dựng video bao gồm âm thanh, hình ảnh, hiệu ứng",
      "Phối hợp các công cụ để dựng video chuyên nghiệp",
      "Quy trình sáng tạo thumb, yếu tố quyết định sự thành công",
      "Kỹ thuật upload video, tối ưu hóa hệ thống để đạt kết quả",
      "Tư duy nhân bản kênh, gia tăng thu nhập",
      "Tư duy sản xuất video, xây kênh đúng luật Youtube",
    ],
    curriculum: [
      { title: "3 Prompt đã được tối ưu hóa để sáng tạo nội dung" },
      { title: "Công cụ sao chép âm thanh, tối ưu hóa chi phí" },
      { title: "Công cụ download video, xử lý hình ành" },
      { title: "Ứng dụng tạo hàng loạt hình ảnh, tối ưu hóa hiệu suất công việc" },
      { title: "Công cụ download video, xử lý hình ành" },
    ]
  },
  {
    id: 1,
    title: "Ngách Học tiếng anh",
    price: "2.000.000 đ",
    level: "Cơ bản",
    reviews: 34,
    duration: "4 giờ",
    image: "/Image/key-tieng-anh.jpg",
    description: "Khóa học giúp bạn xây dựng 1 kênh dạy học tiếng anh thông qua các chủ đề như lịch sử, tôn giáo, câu chuyện yêu thương. Hoàn tất khóa học, bạn sẽ có khả năng xây dựng kênh, ngoài ra có thể nhân bản, dạy theo nhiều chủ đề, hoặc theo các ngôn ngữ khác nhau",
    learningPoints: [
      "Xác định nội dung chủ đề cần phát triển",
      "Xây dựng nội dung, theo từng giai đoạn",
      "Quy trình xử lý nội dung từ tạo âm thanh đến hình ảnh",
      "Sử dụng công cụ tạo video nhanh chóng, hiệu suất",
      "Đa dạng hóa nội dung thể hiện: cơ bản, nâng cao",
      "Nhân bản kênh, mở rộng hệ thống"
    ],
    curriculum: [
      { title: "Ứng dụng xử lý lỗi chính tả, chuẩn hóa nội dung" },
      { title: "Ứng dụng bóc tách nội dung, xuất excel" },
      { title: "Template video" },
      { title: "Công cụ tạo âm thanh miễn phí", lessons: 5 },
      { title: "Công cụ tạo video miễn phí", lessons: 3 }
    ]
  },
  {
    id: 2,
    title: "Ngách tôn giáo",
    price: "2.500.000 đ",
    level: "Trung cấp",
    reviews: "0",
    duration: "4 giờ",
    image: "/Image/bible-study.jpg",
    description: "Khóa học chuyên sâu giúp bạn làm chủ Adobe Premiere Pro từ con số 0. Bạn sẽ học được quy trình dựng phim chuyên nghiệp, cách xử lý hình ảnh, âm thanh và tư duy kể chuyện bằng hình ảnh để tạo ra những video ấn tượng cho YouTube, TikTok hay các dự án truyền thông.",
    learningPoints: [
      "Làm chủ giao diện và các công cụ cắt ghép trong Premiere Pro",
      "Kỹ thuật chỉnh màu (Color Correction & Grading) chuyên nghiệp",
      "Xử lý âm thanh, lọc tạp âm và chèn nhạc nền hiệu quả",
      "Tạo hiệu ứng chuyển cảnh và kỹ thuật Keyframe nâng cao",
      "Quy trình xuất video chuẩn 4K cho YouTube, Facebook, TikTok",
      "Tư duy kể chuyện qua video (Storytelling)"
    ],
    curriculum: [
      { title: "Chương 1: Làm quen với giao diện và Import dữ liệu", lessons: 4 },
      { title: "Chương 2: Kỹ thuật cắt ghép cơ bản và quản lý Timeline", lessons: 6 },
      { title: "Chương 3: Hiệu ứng hình ảnh và Chuyển cảnh", lessons: 8 },
      { title: "Chương 4: Chỉnh màu và Xử lý âm thanh", lessons: 5 },
      { title: "Chương 5: Xuất bản và Tối ưu hóa video", lessons: 3 }
    ]
  },
  {
    id: 4,
    title: "Ngách Tài Chính",
    price: "2.500.000 đ",
    reviews: "0",
    duration: "6 giờ",
    level: "Trung cấp",
    image: "/Image/finance.jpg",
    description: "Khóa học chuyên sâu giúp bạn làm chủ Adobe Premiere Pro từ con số 0. Bạn sẽ học được quy trình dựng phim chuyên nghiệp, cách xử lý hình ảnh, âm thanh và tư duy kể chuyện bằng hình ảnh để tạo ra những video ấn tượng cho YouTube, TikTok hay các dự án truyền thông.",
    learningPoints: [
      "Làm chủ giao diện và các công cụ cắt ghép trong Premiere Pro",
      "Kỹ thuật chỉnh màu (Color Correction & Grading) chuyên nghiệp",
      "Xử lý âm thanh, lọc tạp âm và chèn nhạc nền hiệu quả",
      "Tạo hiệu ứng chuyển cảnh và kỹ thuật Keyframe nâng cao",
      "Quy trình xuất video chuẩn 4K cho YouTube, Facebook, TikTok",
      "Tư duy kể chuyện qua video (Storytelling)"
    ],
    curriculum: [
      { title: "Chương 1: Làm quen với giao diện và Import dữ liệu", lessons: 4 },
      { title: "Chương 2: Kỹ thuật cắt ghép cơ bản và quản lý Timeline", lessons: 6 },
      { title: "Chương 3: Hiệu ứng hình ảnh và Chuyển cảnh", lessons: 8 },
      { title: "Chương 4: Chỉnh màu và Xử lý âm thanh", lessons: 5 },
      { title: "Chương 5: Xuất bản và Tối ưu hóa video", lessons: 3 }
    ]
  },
  {
    id: 5,
    title: "Ngách Truyền Động Lực",
    instructor: "Lưu Văn Tân",
    price: "2.500.000 đ",
    reviews: "0",
    duration: "6 giờ",
    level: "Trung cấp",
    image: "/Image/motivation.jpg",
    description: "Khóa học chuyên sâu giúp bạn làm chủ Adobe Premiere Pro từ con số 0. Bạn sẽ học được quy trình dựng phim chuyên nghiệp, cách xử lý hình ảnh, âm thanh và tư duy kể chuyện bằng hình ảnh để tạo ra những video ấn tượng cho YouTube, TikTok hay các dự án truyền thông.",
    learningPoints: [
      "Làm chủ giao diện và các công cụ cắt ghép trong Premiere Pro",
      "Kỹ thuật chỉnh màu (Color Correction & Grading) chuyên nghiệp",
      "Xử lý âm thanh, lọc tạp âm và chèn nhạc nền hiệu quả",
      "Tạo hiệu ứng chuyển cảnh và kỹ thuật Keyframe nâng cao",
      "Quy trình xuất video chuẩn 4K cho YouTube, Facebook, TikTok",
      "Tư duy kể chuyện qua video (Storytelling)"
    ],
    curriculum: [
      { title: "Chương 1: Làm quen với giao diện và Import dữ liệu", lessons: 4 },
      { title: "Chương 2: Kỹ thuật cắt ghép cơ bản và quản lý Timeline", lessons: 6 },
      { title: "Chương 3: Hiệu ứng hình ảnh và Chuyển cảnh", lessons: 8 },
      { title: "Chương 4: Chỉnh màu và Xử lý âm thanh", lessons: 5 },
      { title: "Chương 5: Xuất bản và Tối ưu hóa video", lessons: 3 }
    ]
  }
];

export const BANNERS: Banner[] = [
  {
    id: 1,
    title: "Master Prompt",
    description: "Khai thác sức mạnh NotebookLM. Phân tích, xây dựng DNA cho kênh.",
    image: "/Image/master-prompt.jpg",
    link: "course/3"
  },
  {
    id: 2,
    title: "Share key, xây kênh BKT",
    description: "Đồng hành cùng bạn xây kênh, bkt trong 45 ngày.",
    image: "/Image/cam-ket-bkt.jpg",
    link: "course/6"
  },
  {
    id: 3,
    title: "Chủ đề xanh: Dạy học tiếng Anh",
    description: "Giúp khán giả học tiếng anh qua các chủ đề lịch sử, drama, truyền động lực",
    image: "/Image/key-tieng-anh.jpg",
    link: "course/1"
  }
];
export const BOTS: Bot[] = [
  {
    id: 1,
    name: "Bot viết chủ đề Lịch sử, thương hiệu",
    description: "Chỉ cần nhập tên chủ đề, mọi thứ để BOT lo. Nội dung chuẩn, chính xác",
    detailedDescription: "AI Content Creator Bot là giải pháp tối ưu cho các nhà sáng tạo nội dung, marketer và chủ doanh nghiệp. Sử dụng mô hình ngôn ngữ tiên tiến nhất, bot có khả năng hiểu ngữ cảnh và tạo ra nội dung chất lượng cao, mang tính cá nhân hóa và tối ưu hóa cho các công cụ tìm kiếm.",
    features: ["Chính xác", "Cảm xúc"],
    useCases: [
      "Xây dựng blog cá nhân hoặc website doanh nghiệp",
      "Lên ý tưởng và kịch bản cho kênh TikTok, YouTube",
      "Viết nội dung quảng cáo Facebook, Google Ads",
      "Tạo bản tin email marketing hàng tuần"
    ],
    specifications: [
      { label: "Mô hình AI", value: "GPT-4 Turbo / Gemini 1.5 Pro" },
      { label: "Ngôn ngữ hỗ trợ", value: "Tiếng Việt, Tiếng Anh và 50+ ngôn ngữ khác" },
      { label: "Tốc độ xử lý", value: "< 5 giây / 1000 từ" },
      { label: "Độ chính xác", value: "95% chuẩn ngữ pháp và ngữ cảnh" }
    ],
    price: "300.000 đ",
    image: "/Image/bot1.jpg",
  },
  {
    id: 2,
    name: "Bot viết chủ đề Tôn Giáo",
    description: "Kịch bản 30 phút về đức tin tôn giảo",
    detailedDescription: "Auto Video Editor Bot giúp bạn tiết kiệm hàng giờ đồng hồ ngồi trước máy tính để edit video. Chỉ cần tải lên thước phim thô, bot sẽ tự động nhận diện giọng nói để tạo phụ đề, cắt bỏ các đoạn thừa và thêm nhạc nền phù hợp với tâm trạng của video.",
    features: ["Trau chuốt", "Cảm xúc"],
    useCases: [
      "Sản xuất video ngắn hàng loạt cho Reels, Shorts, TikTok",
      "Làm video review sản phẩm nhanh chóng",
      "Tạo video tin nhắn, thông báo cho khách hàng",
      "Chuyển đổi podcast âm thanh thành video có phụ đề"
    ],
    specifications: [
      { label: "Định dạng hỗ trợ", value: "MP4, MOV, AVI" },
      { label: "Độ phân giải", value: "Lên đến 4K 60fps" },
      { label: "Công nghệ", value: "Computer Vision & Speech-to-Text" },
      { label: "Thời gian render", value: "Nhanh gấp 5 lần thời gian thực" }
    ],
    price: "500.000 đ",
    image: "/Image/bot2.jpg",
  },
  {
    id: 3,
    name: "Bot viết chủ đề học tiếng anh 30 phút",
    description: "Viết nội dung theo các cấp độ học",
    detailedDescription: "Marketing Automation Bot là trợ lý ảo 24/7 cho bộ phận kinh doanh của bạn. Không chỉ dừng lại ở việc trả lời tin nhắn, bot còn có khả năng phân tích hành vi khách hàng, tự động phân loại lead và gợi ý các kịch bản chốt đơn hiệu quả nhất dựa trên dữ liệu lịch sử.",
    features: ["Đơn giản", "Hiệu quả"],
    useCases: [
      "Chăm sóc khách hàng tự động trên Fanpage, Zalo",
      "Tự động gửi email bám đuổi khách hàng chưa thanh toán",
      "Theo dõi và báo cáo hiệu quả quảng cáo theo thời gian thực",
      "Nghiên cứu từ khóa và xu hướng thị trường của đối thủ"
    ],
    specifications: [
      { label: "Tích hợp", value: "Facebook, Zalo, Website, CRM" },
      { label: "Khả năng học hỏi", value: "Học máy liên tục từ phản hồi khách hàng" },
      { label: "Bảo mật", value: "Mã hóa dữ liệu đầu cuối" },
      { label: "Hỗ trợ", value: "Đa nền tảng, đa kênh" }
    ],
    price: "400.000 đ",
    image: "/Image/bot3.jpg",
    category: "Marketing"
  }
];

