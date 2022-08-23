import PagePaddingContainer from "@/components/PagePaddingContainer";
import PageTopSectionContainer from "@/components/PageTopSectionContainer";
import React from "react";
import TechList from "@/components/OurTeams/TechList";
import NextImage from "@/components/NextImage";
import Button from "@/components/Button";
import ArrowDown from "@/public/icons/arrow-down-long.svg";
import { teams } from "@/components/OurTeams/teams";
import mobileAs1 from "@/public/PNGs/phone/mobile-as-1.png";
import mobileAs2 from "@/public/PNGs/phone/mobile-as-2.png";
import mobileAs3 from "@/public/PNGs/phone/mobile-as-3.png";
import mobileTeamApp1 from "@/public/PNGs/phone/mobile-team-app-1.png";
import mobileTeamApp2 from "@/public/PNGs/phone/mobile-team-app-2.png";
import mobileTeamApp3 from "@/public/PNGs/phone/mobile-team-app-3.png";
import mobileTeamImage from "@/public/PNGs/mobile-team-page-image.png";
import Seo from "@/components/Seo";

const MobileTeam = () => {
  return (
    <PageTopSectionContainer>
      <Seo mainTitle="Mobil" />
      <PagePaddingContainer>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center text-center">
            <p className="text-4xl font-medium text-main-blue">Mobil Takımı</p>
            <p className="mt-6 max-w-[630px] text-sm font-medium text-dark">
              Mobil dünyasında yerinizi almak istiyorsanız eğer mobil takımımız
              projenizi gerçeğe dönüştürmeniz de size kolaylık sağlayacaktır.
            </p>
          </div>
          <div className="mt-14 w-[calc(70%)]">
            <div className="mb-8 flex w-full flex-row justify-between gap-6 px-1 md-max:flex-wrap md-max:justify-center">
              <div className="flex flex-row md:basis-[50%] md-max:w-full">
                <NextImage
                  src={mobileTeamImage}
                  className="h-[326px] w-full max-w-[678px] rounded-[36px]"
                />
              </div>
              <div className=" max-h-[340px] max-w-[560px] md:basis-[50%]">
                <p className="text-justify text-sm font-medium text-dark">
                  &emsp;Mobil uygulamaların kullanımı ve popülerliği gün
                  geçtikçe artarken mobil ekibimizle son teknolojiler kullanarak
                  fikirlerinize özgü mobil uygulamalar geliştiriyoruz.
                </p>
                <p className="mt-6 text-justify text-sm font-medium text-dark">
                  &emsp;Teknoloji ve tasarımı en iyi şekilde birleştirerek hem
                  kurumsal firmalar için hem de kişisel projeleriniz için
                  Android ve IOS tabanlı mobil uygulama çözümleri sunuyoruz.
                  Mobil uygulama fikirlerinizi detaylı incelemelerden
                  geçirdikten sonra en kısa zamanda performanslı, güvenli ve
                  kullanıcı deneyimine odaklı uygulamalar ortaya çıkarmak için
                  çalışıyoruz.
                </p>
                <p className="mt-6 text-justify text-sm font-medium text-dark">
                  &emsp;Mobil uygulamanızı kullanıcılarınızı memnun eden
                  istikrarlı bir yapıda sunmak için test süreçlerinden
                  geçiriyoruz. Sonuç olarak işlerinizi büyütecek ve
                  kullanıcılarınızı memnun edecek işler ortaya çıkararak mobil
                  dünyasında yerinizi almanızı sağlıyoruz.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-20 flex min-h-[462px] flex-row justify-center gap-9 md-max:flex-wrap">
            <div className="flex basis-full justify-center md:basis-[50%]">
              <TechList
                data={teams[2].skills}
                title="Kullandığımız Teknolojiler"
              />
            </div>
            <div className="flex basis-full justify-center md:basis-[50%]">
              <TechList
                data={teams[2].technologies}
                title="Kullandığımız Teknolojiler"
              />
            </div>
          </div>
          <div className="mt-20 mb-32 flex flex-col items-center">
            <p className="text-4xl font-medium text-main-blue">
              Tamamlanan İşlerimiz
            </p>
            <div className="w-full">
              <div className="justify-left mt-14 flex flex-row flex-wrap">
                <p className="text-2xl font-medium text-gray">
                  Anneler Satıyor Mobil Uygulaması
                </p>
              </div>
              <div className="mt-9 flex w-full flex-row flex-wrap justify-center gap-9">
                <div>
                  <NextImage
                    src={mobileAs1}
                    alt="finished-works"
                    className="h-[553px] w-[550px]"
                    objectFit="scale-down"
                  />
                </div>
                <div>
                  <NextImage
                    src={mobileAs2}
                    alt="finished-works"
                    className="h-[553px] w-[550px]"
                    objectFit="scale-down"
                  />
                </div>
                <div>
                  <NextImage
                    src={mobileAs3}
                    alt="finished-works"
                    className="h-[553px] w-[550px]"
                    objectFit="scale-down"
                  />
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="mt-14 flex flex-row justify-start">
                <p className="text-2xl font-medium text-gray">
                  TeamApp Mobil Uygulaması
                </p>
              </div>
              <div className="mt-9 flex flex-row flex-wrap justify-center gap-9">
                <div>
                  <NextImage
                    src={mobileTeamApp1}
                    alt="finished-works"
                    className="h-[553px] w-[550px]"
                    objectFit="scale-down"
                  />
                </div>
                <div>
                  <NextImage
                    src={mobileTeamApp2}
                    alt="finished-works"
                    className="h-[553px] w-[550px]"
                    objectFit="scale-down"
                  />
                </div>
                <div>
                  <NextImage
                    src={mobileTeamApp3}
                    alt="finished-works"
                    className="h-[553px] w-[550px]"
                    objectFit="scale-down"
                  />
                </div>
              </div>
            </div>
            <Button className="mt-16 flex gap-3" type="submit">
              <span>Daha Fazla Gör</span>
              <ArrowDown />
            </Button>
          </div>
        </div>
      </PagePaddingContainer>
    </PageTopSectionContainer>
  );
};

export default MobileTeam;
