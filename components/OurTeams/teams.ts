import { StaticImageData } from "next/image";
import backendFrontendLogo from "../../public/images/backend-logo.png";
import backendImage from "../../public/images/backend-image.png";
import frontendImage from "../../public/images/fronted-team.jpg";
import mobileLogo from "../../public/images/mobile-logo.png";
import mobileImage from "../../public/images/mobile-image.jpg";
import devopsLogo from "../../public/images/devops-logo.png";
import devopsImage from "../../public/images/devops-team-image.jpg";
import octoLogo from "../../public/images/octo-logo.png";
import octoImage from "../../public/images/octo-image.png";
import worthazeLogo from "../../public/images/worthaze-logo.png";
import worthazeImage from "../../public/images/worthaze-image.png";
import zalisoftSocialLogo from "../../public/images/zalisoft-social.png";
import zalisoftSocialImage from "../../public/images/social-media-image.png";

export type Team = {
  id: number;
  logo: string | StaticImageData;
  name: string;
  description: string;
  images: [string | StaticImageData];
  link: string;
  skills: string[];
  technologies: string[];
};

export const teams: Team[] = [
  {
    id: 1,
    logo: octoLogo,
    name: "Octo Creativity",
    description:
      "Yaratıcılık ve keşfetme konusunda tutkulu ve bu enerjiyi dijital tasarım ürünleri üretmeye harcayan genç, dinamik ve yaratıcı bir ekibiz. Biz grafik tasarım, illüstrasyon, web dizayn, mobil dizayn, logo dizayn sosyal medya dizayn ve daha fazla tasarım işi için güvenebileceğiniz bir takımız.",
    images: [octoImage],
    link: "takimlarimiz/octo-creativity",
    skills: [
      "Logo Tasarımı",
      "Web Tasarımı",
      "Mobil Tasarım",
      "Kurumsal Kimlik",
      "İllüstrasyon",
      "Sosyal Medya Tasarımı",
      "3D Modelleme",
      "Kartvizit Tasarımı",
      "Araç Giydirme",
      "Bayrak-Flama Tasarımı",
      "Mail İmza Tasarımı",
      "Slogan",
    ],
    technologies: ["Figma", "Illustrator", "Photoshop", "Blender"],
  },
  {
    id: 2,
    logo: backendFrontendLogo,
    name: "Web Takımı",
    description:
      "En aktif çalışan takımlarımızdan biri olan web takımımız, web alanında en iyi hizmeti vermek için günden güne büyüyor ve kendini geliştiriyor. Projelerinizin, özgün çalışmalarımızla diğer projelerin arasından sıyrılmasını isterseniz doğru yerdesiniz.",
    images: [frontendImage],
    link: "takimlarimiz/web",
    skills: [
      "React",
      "Django",
      "NodeJS",
      "FastAPI",
      "ExpressJS",
      "MongoDB",
      "Firebase",
      "PostreSQL",
      "Figma",
    ],
    technologies: [
      "Kurumsal Web Sitesi",
      "Blog Sitesi",
      "E-Ticaret Sitesi",
      "Haber Sitesi",
    ],
  },
  {
    id: 3,
    logo: mobileLogo,
    name: "Mobil Takımı",
    description:
      "Mobil uygulamaların kullanımı ve popülerliği gün geçtikçe artarken mobil ekibimizle son teknolojiler kullanarak fikirlerinize özgü mobil uygulamalar geliştiriyoruz. Projelerinizi dijitale taşıdığımız bu süreçte mobil ekibimiz yanınızda size eşlik ediyor olacak",
    images: [mobileImage],
    link: "takimlarimiz/mobile",
    skills: [
      "Flutter",
      "Dart",
      "React Native",
      "Code Magic",
      "VS Code",
      "Android Studio",
      "Figma",
      "Zeplin",
    ],
    technologies: [
      "E-Ticaret Uygulaması",
      "Banka Uygulaması",
      "Sağlık Uygulaması",
      "Eğitim Uygulamaları",
      "Yönetim ve Takip Uygulaması",
    ],
  },
  {
    id: 4,
    logo: devopsLogo,
    name: "DevOps Takımı",
    description:
      "Kullanıcılarımıza sürekli değer aktarımını sağlamak için insanların birliğini sağlayarak süreçlerin ve ürünlerin takibi, projelerin ölçeklenebilirliği ve sürdürülebilirliğini sağlamak için kurduğumuz bu takım projenizin en iyi versiyonunu ortaya koymak için yanınızdadır.",
    images: [devopsImage],
    link: "takimlarimiz/devops",
    skills: ["Github Actions", "Google Cloud", "AWS", "Docker", "Kubernetes"],
    technologies: [
      "Sürekli Enteg-rasyon",
      "Sürekli Teslim",
      "Mikro Hizmetler",
      "Kod Olarak Yapı",
      "İzleme ve Günlük Kaydı",
      "İletişim ve İş birliği",
    ],
  },
  {
    id: 5,
    logo: worthazeLogo,
    name: "Worthaze",
    description:
      "Sadece yazılım ve tasarım alanlarıyla sınırlı kalmayıp aynı zamanda e-ticaret alanında da çalışmalarımız olmaktadır. E-ticaret takımımız Worthaze bu çalışmaları sürdürmektedir.",
    images: [worthazeImage],
    link: "takimlarimiz/worthaze",
    skills: ["Photoshop", "Excel", "Word"],
    technologies: [
      "Trendyol",
      "Hepsi-burada",
      "Amazon Amerika",
      "Amazon Kanada",
      "Amazon Meksika",
    ],
  },
  {
    id: 6,
    logo: backendFrontendLogo,
    name: "Backend Takımı",
    description:
      "Yazılım projelerinizi baştan sona tek bir elden çıkarmak için birçok takıma ihtiyaç duyuyoruz ve backend takımı bunlardan olmazsa olmazı diyebiliriz. Senior yazılımcı kaptanlığındaki takımımız en güncel ve stabil kodlama teknikleriyle projenizi bir üst seviyeye taşıyacak.",
    images: [backendImage],
    link: "takimlarimiz/backend",
    skills: [
      "VS Code",
      "IntelliJ",
      "PostgreSQL",
      "MongoDB",
      "FastAPI",
      "Express.js",
      "Spring Boot",
      "Django",
    ],
    technologies: ["Java", "JavaScript", "Python"],
  },
  {
    id: 7,
    logo: zalisoftSocialLogo,
    name: "Sosyal Medya Takımı",
    description:
      "Günümüzün olmazsa olmazlarından sosyal medyada yerimiz mutlaka olmalı. Verdiğimiz sosyal medya danışmanlığıyla gönderilerinizi düzenliyor, sayfanıza özgü istatistikler üzerine düşünerek en iyi planı sizlere sunuyoruz.",
    images: [zalisoftSocialImage],
    link: "takimlarimiz/sosyal-medya",
    skills: ["Instagram", "Facebook", "Twitter", "LinkedIn"],
    technologies: [
      "Sosyal Medya Tasarımları",
      "Gönderi Planlama",
      "Instagram Hikayeleri Planlama",
      "Sayfa Analizi",
      "Haftalık Erişim Analizi",
      "Aylık Etkileşim Analizi",
      "Reels Video Edit",
      "Reklam Verme",
    ],
  },
];
