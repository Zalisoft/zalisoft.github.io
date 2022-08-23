import React, { ComponentPropsWithoutRef } from "react";
import PagePaddingContainer from "@/components/PagePaddingContainer";
import Title from "@/components/Home/Title";
import webDesignServices from "@/public/images/our-services/web-design-services.png";
import mobileDesignServices from "@/public/images/our-services/mobile-design-services.png";
import institutionalIdentityServices from "@/public/images/our-services/institutional-services.png";
import socialMediaServices from "@/public/images/our-services/social-services.png";
import logoServices from "@/public/images/our-services/logo-design-services.png";
import backendServices from "@/public/images/our-services/backend-services.png";
import frontendServices from "@/public/images/our-services/frontend-services.png";
import websiteServices from "@/public/images/our-services/website-services.png";
import mobileAppServices from "@/public/images/our-services/mobile-app-services.png";
import Link from "next/link";
import Button from "@/components/Button";
import RightArrow from "@/public/icons/arrow-right-long.svg";
import { ImageProps } from "next/image";
import { twMerge } from "tailwind-merge";
import NextImage from "@/components/NextImage";

const OurServicesSection = () => {
  return (
    <PagePaddingContainer>
      <section className="mb-10 flex flex-col items-center">
        <Title>Hizmetlerimiz</Title>
        <div className="mt-5 grid w-full grid-cols-1 justify-center gap-14 sm:grid-cols-[repeat(auto-fill,_24rem)]">
          <ServiceCard
            title="Web Tasarım"
            image={webDesignServices}
            description="Kendi tasarım ekibimiz hayalinizdeki web sitesini dijital ortama taşıyor.  Web sitenizin size özgü olmasına ve rakiperinizden ayrılmanıza yardımcı oluyoruz."
          />
          <ServiceCard
            title="Mobil Tasarım"
            image={mobileDesignServices}
            description="Kendi tasarım ekibimiz hayalinizdeki mobil uygulamayı dijital ortama taşıyor. Mobil uygulamanızın size özgü olmasına ve rakiperinizden ayrılmanıza yardımcı oluyoruz."
          />
          <ServiceCard
            title="Kurumsal Kimlik"
            image={institutionalIdentityServices}
            description="Kurumunuz yeni açılmış olsun veya tasarımlarınızı yenilemek istiyor olabilirsiniz. Profesyonel tasarım ekibimiz sizin zevkinize göre en iyi tasarımları yapmak için hazır."
          />
          <ServiceCard
            title="Sosyal Medya Danışmanlığı"
            image={socialMediaServices}
            description="Verdiğimiz sosyal medya danışmanlığıyla gönderilerinizi düzenliyor, sayfanıza özgü istatistikler üzerine düşünerek en iyi planı sizlere sunuyoruz."
          />
          <ServiceCard
            title="Logo Tasarımı"
            image={logoServices}
            description="Bir markanın olmazsa olmazı logodur. Markanız için en iyi renkleri ve yazı tipini bularak sizlere en modern tasarımı sunuyoruz."
          />
          <ServiceCard
            title="Backend"
            image={backendServices}
            description="Projelerinizi baştan sona bize yaptırmak zorunda değilsiniz. Eğer frontend ve tasarım tarafında eksiğiniz yoksa ama backend konusunda yardıma ihtiyacınız varsa yanınızdayız."
          />
          <ServiceCard
            title="Frontend"
            image={frontendServices}
            description="Sadece frontend alanında desteğe ihtiyacınız olabilir. Bu durumda da bize sunduğunuz tasarımı ve backendle frontend bilgimizi birleştirerek projenizi bitirmenize yardım ediyoruz."
          />
          <ServiceCard
            title="Web Sitesi"
            image={websiteServices}
            description="Bütçenize en uygun şekilde istediğiniz web sitesini baştan sona tasarımıyla ve kodlamasıyla yapıp teslim ediyoruz."
          />
          <ServiceCard
            title="Mobil Uygulama"
            image={mobileAppServices}
            description="Mobilde gerçeğe dönüştürmek istediğiniz bir projeniz varsa eğer en güncel yazılım dilleriyle ve en güncel tasarımlarla hizmetinize sunuyoruz."
          />
        </div>
        <Link className="mt-10" href="/hizmetlerimiz">
          <Button className="flex gap-3 py-3 px-5 text-sm">
            <span>Tüm Hizmetleri Gör</span>
            <RightArrow />
          </Button>
        </Link>
      </section>
    </PagePaddingContainer>
  );
};

export default OurServicesSection;

const ServiceCard = ({
  image,
  title,
  description,
  className,
  ...rest
}: ComponentPropsWithoutRef<"div"> & {
  image: ImageProps["src"];
  title: string;
  description: string;
}) => {
  return (
    <div
      className={twMerge("flex flex-col items-start gap-3", className)}
      {...rest}
    >
      <NextImage
        src={image}
        objectFit="contain"
        alt="Hizmet Logosu"
        className="aspect-square h-20 rounded-2xl bg-blueBg"
      />
      <h3 className="text-lg text-main-blue md:text-2xl">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};
