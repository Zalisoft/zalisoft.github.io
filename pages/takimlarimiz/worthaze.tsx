import PagePaddingContainer from "@/components/PagePaddingContainer";
import PageTopSectionContainer from "@/components/PageTopSectionContainer";
import React from "react";
import TechList from "@/components/OurTeams/TechList";
import { teams } from "@/components/OurTeams/teams";
import worthazeSliderImage1 from "@/public/PNGs/worthaze-slider-1.png";
import NextImage from "@/components/NextImage";
import Seo from "@/components/Seo";

const Worthaze = () => {
  return (
    <PageTopSectionContainer>
      <PagePaddingContainer>
        <Seo mainTitle="Worthaze" />
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center text-center">
            <p className="text-4xl font-medium text-main-blue">WortHaze</p>
            <p className="mt-6 max-w-[630px] text-sm font-medium text-dark">
              Sadece yazılım ve tasarım alanlarıyla sınırlı kalmayıp aynı
              zamanda e-ticaret alanında da çalışmalarımız olmaktadır. E-ticaret
              takımımız Worthaze bu çalışmaları sürdürmektedir.
            </p>
          </div>
          <div className="mt-14 w-[calc(70%)]">
            <div className="mb-8 flex w-full flex-row justify-between gap-6 px-1 md-max:flex-wrap md-max:justify-center">
              <div className="flex flex-row md:basis-[50%] md-max:w-full">
                <NextImage
                  src={worthazeSliderImage1}
                  className="h-[326px] w-full max-w-[678px] rounded-[36px]"
                />
              </div>
              <div className="max-h-[340px] md:basis-[50%]">
                <p className="text-justify text-sm font-medium text-dark">
                  &emsp;Geleneksel ticaretin gitgide yerini devrettiği e-ticaret
                  alanında tecrübeli çalışma arkadaşlarımız ile yurt içi ve yurt
                  dışı pazarlarında mağaza açılışları, sahip olduğunuz ürün
                  yelpazesine göre satış stratejileri geliştirme, kar artırımı
                  gibi e-ticaretin her alanında sizlere rehberlik edecek ve
                  güvenle ticaretinizi genişletebileceğiniz yeni alanlar için
                  lütfen bizimle iletişime geçin.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-20 flex min-h-[462px] w-4/5 flex-row justify-center gap-9 md-max:flex-wrap">
            <div className="flex basis-full justify-center md:basis-[50%]">
              <TechList
                data={teams[4].skills}
                title="Kullandığımız Programlar"
              />
            </div>
            <div className="flex basis-full justify-center md:basis-[50%]">
              <TechList
                data={teams[4].technologies}
                title="Online Mağazalarımız"
              />
            </div>
          </div>
        </div>
      </PagePaddingContainer>
    </PageTopSectionContainer>
  );
};

export default Worthaze;
