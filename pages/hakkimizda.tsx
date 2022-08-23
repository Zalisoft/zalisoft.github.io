import React, { ComponentPropsWithoutRef } from "react";
import PagePaddingContainer from "@/components/PagePaddingContainer";
import PageTopSectionContainer from "@/components/PageTopSectionContainer";
import NextImage from "@/components/NextImage";
import aboutPic1 from "@/public/images/aboutUs/aboutPic1.jpeg";
import aboutPic2 from "@/public/images/aboutUs/aboutPic2.jpeg";
import aboutPic3 from "@/public/images/aboutUs/aboutPic3.jpeg";
import aboutPic4 from "@/public/images/aboutUs/aboutPic4.jpeg";
import aboutPic5 from "@/public/images/aboutUs/aboutPic5.jpeg";
import aboutPic6 from "@/public/images/aboutUs/aboutPic6.jpeg";
import FloatingCard from "@/components/Home/FloatingCard";
import { twMerge } from "tailwind-merge";
import { ImageProps } from "next/image";
import ReactParallaxTilt from "react-parallax-tilt";
import Title from "@/components/Home/Title";
import Seo from "@/components/Seo";

const AboutUs = () => {
  return (
    <PagePaddingContainer>
      <Seo mainTitle="Hakkımızda" />
      <PageTopSectionContainer className="mb-10 flex flex-row items-center md:mb-20 xl:px-20">
        <div className="flex w-full grow flex-col md-max:hidden">
          {/**/}
          <div className="flex items-start justify-between gap-[10%]">
            <PictureCard
              src={aboutPic1}
              className="ml-[20%] -mt-3 aspect-square h-32"
            />
            <FloatingCard className="mr-[-15%]">
              <span className="text-green">20+ Ekip Üyesi</span>
            </FloatingCard>
          </div>
          {/**/}
          <div className="mt-10 flex items-start justify-between gap-[10%]">
            <FloatingCard>
              <span className="text-orange">5 İş Ortağı</span>
            </FloatingCard>
            <PictureCard
              src={aboutPic2}
              className="mr-[20%] -mt-3 aspect-square h-40"
            />
          </div>
          {/**/}
          <div className="flex items-end justify-between gap-[10%]">
            <PictureCard
              src={aboutPic3}
              className="ml-[10%] -mt-3 aspect-square h-36"
            />
            <FloatingCard>
              <span className="text-green">4 Ofis</span>
            </FloatingCard>
          </div>
        </div>
        <div className="flex w-full grow flex-col gap-5 text-start md:text-end">
          <div className="flex items-end justify-between gap-[10%]">
            <h1 className="text-3xl font-medium text-main-blue md:text-5xl">
              Zalisoft Hakkında
            </h1>
            <PictureCard
              src={aboutPic1}
              className="aspect-square h-20 md:hidden"
            />
          </div>
          <p>
            Geleceğin teknolojilerine odaklanan Zalisoft şirketi, iki yıllık bir
            serüvenin sonunda kurulmuştur. Hedefimiz hizmet verdiğimiz alanlarda
            en iyisi olmak. Genç ve dinamik kadromuzla her gün daha iyiye
            giderken yeni teknolojileri bünyemize dahil ediyoruz.
          </p>
          <div className="flex items-start justify-between gap-[10%] px-[10%] md:hidden">
            <PictureCard src={aboutPic3} className="aspect-square h-16" />
            <PictureCard src={aboutPic2} className="aspect-square h-28" />
          </div>
        </div>
      </PageTopSectionContainer>
      <div className="flex flex-row">
        <div className="flex flex-col md:basis-1/4 md:px-[3%] lg:px-[5%] md-max:hidden">
          <PictureCard
            src={aboutPic5}
            className="mt-40 aspect-[1.21] w-full rounded-[2rem]"
          />
        </div>
        <div className="flex basis-full flex-col text-center md:basis-1/2">
          <Title>Our Story</Title>
          <p>
            İşimizi severek yapmanın ve çalışanlarımızın değerinin farkındayız.
            Bu sebeple ekibimiz için çalışma koşullarını her zaman daha iyi hale
            getirmek için çabalıyoruz. İyi bir ekibin iyi bir takım çalışmasıyla
            bizi daha iyiye taşıyacağını biliyoruz.
          </p>
          <p className="my-10">
            Tamamen özgün projeler ve benzersiz tasarımlarla Zalisoft’un tüm
            takımları ihtiyacınıza uygun ürünü ortaya çıkarmak için her zaman
            yanınızda.
          </p>
          <PictureCard
            src={aboutPic6}
            className="mt-10 aspect-[2.77] w-full rounded-3xl md:mt-20"
          />
        </div>
        <div className="flex flex-col md:basis-1/4 md:px-[3%] lg:px-[5%] md-max:hidden">
          <PictureCard
            src={aboutPic4}
            className="-mt-14 aspect-[1.21] w-full rounded-[2rem]"
          />
        </div>
      </div>
    </PagePaddingContainer>
  );
};

export default AboutUs;

const PictureCard = ({
  className,
  src,
  imageClassName,
  ...rest
}: ComponentPropsWithoutRef<"div"> & {
  src: ImageProps["src"];
  imageClassName?: string;
}) => {
  return (
    <ReactParallaxTilt
      perspective={500}
      glareEnable={true}
      glareMaxOpacity={0.45}
      scale={1.02}
      className={twMerge("overflow-hidden rounded-full", className)}
      {...rest}
    >
      <NextImage
        src={src}
        className={twMerge("h-full w-full", imageClassName)}
      />
    </ReactParallaxTilt>
  );
};
