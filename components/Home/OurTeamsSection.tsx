import React from "react";
import useResponsive from "@/components/hooks/useResponsive";
import Title from "@/components/Home/Title";
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// Swiper modules
import { Autoplay, Pagination, Navigation } from "swiper";
import TeamPreview from "@/components/Home/TeamPreview";
import octoLogo from "../../public/images/octo-logo.png";
import webLogo from "../../public/images/backend-logo.png";
import sosyalLogo from "../../public/images/zalisoft-social.png";
import worthazeLogo from "../../public/images/worthaze-logo.png";
import devopsLogo from "../../public/images/devops-logo.png";
import mobilLogo from "../../public/images/mobile-logo.png";

const OurTeamsSection = () => {
  const { sm } = useResponsive({ watchPoints: ["sm"] });

  return (
    <section className="my-20">
      <Title>Takımlarımız</Title>
      <Swiper
        slidesPerView={sm ? "auto" : 1}
        modules={[Navigation, Pagination, Autoplay]}
        centeredSlides={true}
        spaceBetween={100}
        speed={500}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        grabCursor={true}
        pagination={
          sm
            ? {
                clickable: true,
              }
            : false
        }
        loop={true}
        navigation={!sm}
        className="[--swiper-navigation-size:1.5rem] [--swiper-theme-color:#4841FF] [&_.swiper-slide]:max-w-xl [&_.swiper-slide]:scale-90 [&_.swiper-slide]:opacity-60 [&_.swiper-slide]:transition-[transform,opacity] [&_.swiper-slide]:duration-1000 sm:[&_.swiper-slide]:pb-20 [&_.swiper-slide-active]:scale-100 [&_.swiper-slide-active]:opacity-100"
      >
        <SwiperSlide>
          <TeamPreview
            name="Octo Creativity"
            backgroundImage={octoLogo}
            qualities={[
              "Genç ve Dinamik Yapı",
              "Kreatif Ekip Üyeleri",
              "Hızlı ve Teknolojik Çözümler",
            ]}
            description="Yaratıcılık ve keşfetme konusunda tutkulu ve bu enerjiyi dijital tasarım ürünleri üretmeye harcayan genç, dinamik ve yaratıcı bir ekibiz. Biz grafik tasarım, illüstrasyon, web tasarım, mobil tasarım, logo tasarımı, sosyal medya tasarımı ve daha fazla tasarım projesi için güvenebileceğiniz bir iş ortağıyız."
            link="/takimlarimiz/octo-creativity"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TeamPreview
            name="Web Takımı"
            backgroundImage={webLogo}
            qualities={[
              "Genç ve Dinamik Yapı",
              "Kreatif Ekip Üyeleri",
              "Hızlı ve Teknolojik Çözümler",
            ]}
            description="En aktif çalışan takımlarımızdan biri olan web takımımız, web alanında en iyi hizmeti vermek için günden güne büyüyor ve kendini geliştiriyor. Projelerinizin, özgün çalışmalarımızla diğer projelerin arasından sıyrılmasını isterseniz doğru yerdesiniz."
            link="/takimlarimiz/web"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TeamPreview
            name="Mobil Takımı"
            backgroundImage={mobilLogo}
            qualities={[
              "Genç ve Dinamik Yapı",
              "Kreatif Ekip Üyeleri",
              "Hızlı ve Teknolojik Çözümler",
            ]}
            description="Mobil uygulamaların kullanımı ve popülerliği gün geçtikçe artarken mobil ekibimizle son teknolojileri kullanarak fikirlerinize özgü mobil uygulamalar geliştiriyoruz. Projelerinizi mobile taşıdığımız bu süreçte mobil ekibimiz size eşlik edecek."
            link="/takimlarimiz/mobil"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TeamPreview
            name="Sosyal Medya"
            backgroundImage={sosyalLogo}
            qualities={[
              "Genç ve Dinamik Yapı",
              "Kreatif Ekip Üyeleri",
              "Hızlı ve Teknolojik Çözümler",
            ]}
            description="Günümüzün olmazsa olmazlarından sosyal medyada yerimiz mutlaka olmalı. Verdiğimiz sosyal medya danışmanlığıyla gönderilerinizi düzenliyor, sayfanıza özgü istatistikler üzerine düşünerek en iyi planı sizlere sunuyoruz."
            link="/takimlarimiz/sosyal-medya"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TeamPreview
            name="Worthaze"
            backgroundImage={worthazeLogo}
            qualities={[
              "Genç ve Dinamik Yapı",
              "Kreatif Ekip Üyeleri",
              "Hızlı ve Teknolojik Çözümler",
            ]}
            description="Sadece yazılım ve tasarım alanlarıyla sınırlı kalmayıp aynı zamanda e-ticaret alanında da çalışmalarımız olmaktadır. E-ticaret takımımız Worthaze bu çalışmaları sürdürmektedir. Bu konuda danışmanlık, ekibe dahil olmak ya da destekçimiz olmak isterseniz iletişime geçebilirsiniz."
            link="/takimlarimiz/worthaze"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TeamPreview
            name="Devops Takımı"
            backgroundImage={devopsLogo}
            qualities={[
              "Genç ve Dinamik Yapı",
              "Kreatif Ekip Üyeleri",
              "Hızlı ve Teknolojik Çözümler",
            ]}
            description="Kullanıcılarımıza sürekli değer aktarımını sağlamak için insanların birliğini sağlayarak süreçlerin ve ürünlerin takibi, projelerin ölçeklenebilirliği ve sürdürülebilirliğini sağlamak için kurduğumuz bu takım projenizin en iyi versiyonunu ortaya koymak için yanınızdadır."
            link="/takimlarimiz/devops"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TeamPreview
            name="Backend Takımı"
            backgroundImage={webLogo}
            qualities={[
              "Genç ve Dinamik Yapı",
              "Kreatif Ekip Üyeleri",
              "Hızlı ve Teknolojik Çözümler",
            ]}
            description="Yazılım projelerinizi başton sona tek bir elden çıkarmak için birçok takıma ihtiyaç duyuyoruz ve backend takımı bunlardan olmazsa olmazı diyebiliriz. Senior yazılımcı kaptanlığındaki takımımız en güncel ve stabil kodlama teknikleriyle projenizi bir üst seviyeye taşıyacak."
            link="/takimlarimiz/backend"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default OurTeamsSection;
