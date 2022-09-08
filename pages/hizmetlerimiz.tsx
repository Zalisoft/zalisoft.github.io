import React, { ComponentPropsWithoutRef } from "react";
import PageTopSectionContainer from "@/components/PageTopSectionContainer";
import PagePaddingContainer from "@/components/PagePaddingContainer";
import { ImageProps } from "next/image";
import { twMerge } from "tailwind-merge";
import NextImage from "@/components/NextImage";
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
import AnimateReveal from "@/components/AnimateReveal";
import useResponsive from "@/components/hooks/useResponsive";
import Seo from "@/components/Seo";
import Button from "@/components/Button";
import Link from "next/link";
import SendIcon from "../public/icons/send.svg";

const Services = () => {
  const { md, lg } = useResponsive({});

  return (
    <PageTopSectionContainer>
      <Seo mainTitle="Hizmetlerimiz" />
      <PagePaddingContainer className="flex flex-col items-center pb-10">
        <AnimateReveal className="flex flex-col items-center">
          <Title className="mt-0">Hizmetlerimiz</Title>
          <p className="mb-20 max-w-2xl text-center">
            Yazılım, tasarım ve danışmanlık alanlarında verdiğimiz hizmetleri
            aşağıdan inceleyebilirsiniz. ihtiyacınıza göre bizimle iletişime
            geçerek fiyat teklifi alabilirsiniz.
          </p>
        </AnimateReveal>
        <div className="grid w-full grid-cols-1 justify-center gap-14 sm:grid-cols-[repeat(auto-fill,_30rem)]">
          <AnimateReveal delay={400}>
            <ServiceCard
              title="Web Tasarım"
              image={webDesignServices}
              className="bg-[#FFF1E9] text-orange"
              description="Kendi tasarım ekibimiz hayalinizdeki web sitesini dijital ortama taşıyor.  Web sitenizin size özgü olmasına ve rakiperinizden ayrılmanıza yardımcı oluyoruz."
            />
          </AnimateReveal>
          <AnimateReveal delay={400}>
            <ServiceCard
              title="Mobil Tasarım"
              image={mobileDesignServices}
              className="bg-[#E9FFEC] text-green"
              description="Kendi tasarım ekibimiz hayalinizdeki mobil uygulamayı dijital ortama taşıyor. Mobil uygulamanızın size özgü olmasına ve rakiperinizden ayrılmanıza yardımcı oluyoruz."
            />
          </AnimateReveal>
          <AnimateReveal delay={md ? 400 : undefined}>
            <ServiceCard
              title="Kurumsal Kimlik"
              image={institutionalIdentityServices}
              className="bg-[#FFF7E5] text-yellow"
              description="Kurumunuz yeni açılmış olsun veya tasarımlarınızı yenilemek istiyor olabilirsiniz. Profesyonel tasarım ekibimiz sizin zevkinize göre en iyi tasarımları yapmak için hazır."
            />
          </AnimateReveal>
          <AnimateReveal delay={lg ? 800 : undefined}>
            <ServiceCard
              title="Sosyal Medya Danışmanlığı"
              className="bg-[#FFF1E9] text-orange"
              image={socialMediaServices}
              description="Verdiğimiz sosyal medya danışmanlığıyla gönderilerinizi düzenliyor, sayfanıza özgü istatistikler üzerine düşünerek en iyi planı sizlere sunuyoruz."
            />
          </AnimateReveal>
          <AnimateReveal delay={lg ? 800 : undefined}>
            <ServiceCard
              title="Logo Tasarımı"
              image={logoServices}
              className="bg-[#E9FFEC] text-green"
              description="Bir markanın olmazsa olmazı logodur. Markanız için en iyi renkleri ve yazı tipini bularak sizlere en modern tasarımı sunuyoruz."
            />
          </AnimateReveal>
          <AnimateReveal delay={lg ? 800 : undefined}>
            <ServiceCard
              title="Backend"
              image={backendServices}
              className="bg-[#FFF7E5] text-yellow"
              description="Projelerinizi baştan sona bize yaptırmak zorunda değilsiniz. Eğer frontend ve tasarım tarafında eksiğiniz yoksa ama backend konusunda yardıma ihtiyacınız varsa yanınızdayız."
            />
          </AnimateReveal>
          <AnimateReveal>
            <ServiceCard
              title="Frontend"
              className="bg-[#FFF1E9] text-orange"
              image={frontendServices}
              description="Sadece frontend alanında desteğe ihtiyacınız olabilir. Bu durumda da bize sunduğunuz tasarımı ve backendle frontend bilgimizi birleştirerek projenizi bitirmenize yardım ediyoruz."
            />
          </AnimateReveal>
          <AnimateReveal>
            <ServiceCard
              title="Web Sitesi"
              image={websiteServices}
              className="bg-[#E9FFEC] text-green"
              description="Bütçenize en uygun şekilde istediğiniz web sitesini baştan sona tasarımıyla ve kodlamasıyla yapıp teslim ediyoruz."
            />
          </AnimateReveal>
          <AnimateReveal>
            <ServiceCard
              title="Mobil Uygulama"
              image={mobileAppServices}
              className="bg-[#FFF7E5] text-yellow"
              description="Mobilde gerçeğe dönüştürmek istediğiniz bir projeniz varsa eğer en güncel yazılım dilleriyle ve en güncel tasarımlarla hizmetinize sunuyoruz."
            />
          </AnimateReveal>
        </div>
        <Link href={"/iletisim"}>
          <Button className="mt-32 flex justify-center gap-x-3">
            <SendIcon />
            <span>İletişim</span>
          </Button>
        </Link>
      </PagePaddingContainer>
    </PageTopSectionContainer>
  );
};

export default Services;

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
      className={twMerge(
        "flex flex-col items-start gap-3 rounded-xl p-5 md:p-8",
        className
      )}
      {...rest}
    >
      <div className="rounded-2xl bg-blueBg py-1 px-[10%]">
        <NextImage
          src={image}
          objectFit="contain"
          alt="Hizmet Logosu"
          className="aspect-square h-40"
        />
      </div>
      <h3 className="text-lg md:text-2xl">{title}</h3>
      <p className="text-sm text-dark">{description}</p>
    </div>
  );
};
