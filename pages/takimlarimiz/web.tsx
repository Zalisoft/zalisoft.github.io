import PagePaddingContainer from "@/components/PagePaddingContainer";
import PageTopSectionContainer from "@/components/PageTopSectionContainer";
import React from "react";
import TechList from "@/components/OurTeams/TechList";
import NextImage from "@/components/NextImage";
import { teams } from "@/components/OurTeams/teams";
import webTeamImage from "@/public/images/web-team-image.png";
import CompletedWorks from "@/components/OurTeams/CompletedWorks";
import Seo from "@/components/Seo";
import web3x from "@/public/PNGs/web_logo.png";

const WebTeam = () => {
  return (
    <>
      <NextImage
        src={web3x}
        className="mt-30 absolute top-[160px] z-[-99] mt-20 h-[278%] w-[100%] overflow-x-hidden opacity-10 xl-max:max-w-[1280px]"
      />
      <PageTopSectionContainer>
        <PagePaddingContainer>
          <Seo mainTitle="Web" />
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center text-center">
              <p className="text-4xl font-medium text-main-blue">Web Takımı</p>
              <p className="mt-6 max-w-[630px] text-sm font-medium text-dark">
                Hayalinizdeki web sitesini size en uygun bütçeye göre
                tasarlayalım ve kodlayalım.
              </p>
            </div>
            <div className="mt-14 w-[calc(70%)]">
              <div className="mb-8 flex w-full flex-row justify-between gap-6 px-1 md-max:flex-wrap md-max:justify-center">
                <div className="flex flex-row md:basis-[50%] md-max:w-full">
                  <NextImage
                    src={webTeamImage}
                    className="h-[326px] w-full max-w-[678px] rounded-[36px]"
                  />
                </div>
                <div className="max-w-[560px] md:basis-[50%] [@media_(min-width:767px)]:max-h-[340px]">
                  <p className="text-justify text-sm font-medium text-dark">
                    &emsp;En aktif çalışan takımlarımızdan biri olan web
                    takımımız, web alanında en iyi hizmeti vermek için günden
                    güne büyüyor ve kendini geliştiriyor. Projelerinizin, özgün
                    çalışmalarımızla diğer projelerin arasından sıyrılmasını
                    isterseniz doğru yerdesiniz.
                  </p>
                  <p className="mt-6 text-justify text-sm font-medium text-dark">
                    &emsp;En güncel tasarımlarla web sitenizi sıfırdan inşa
                    etmek isterseniz eğer web takımımız bu süreçte en iyi
                    hizmeti size sunmak için çalışıyor olacak.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-20 flex min-h-[462px] w-[%93] flex-row justify-center gap-9 md-max:flex-wrap [@media_(min-width:767px)]:w-4/5">
              <div className="flex basis-full justify-center md:basis-[50%]">
                <TechList
                  data={teams[1].skills}
                  title="Kullandığımız Teknolojiler"
                />
              </div>
              <div className="flex basis-full justify-center md:basis-[50%]">
                <TechList
                  data={teams[1].technologies}
                  title="Yapabileceğimiz Site Örnekleri"
                />
              </div>
            </div>
            <CompletedWorks />
          </div>
        </PagePaddingContainer>
      </PageTopSectionContainer>
    </>
  );
};

export default WebTeam;
