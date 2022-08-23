import PagePaddingContainer from "@/components/PagePaddingContainer";
import PageTopSectionContainer from "@/components/PageTopSectionContainer";
import React from "react";
import TechList from "@/components/OurTeams/TechList";
import NextImage from "@/components/NextImage";
import { teams } from "@/components/OurTeams/teams";
import backendTeamImage from "@/public/PNGs/backend-team-image.png";
import CompletedWorks from "@/components/OurTeams/CompletedWorks";
import Seo from "@/components/Seo";

const BackendTeam = () => {
  return (
    <PageTopSectionContainer>
      <Seo mainTitle="Backend" />
      <PagePaddingContainer>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center text-center">
            <p className="text-4xl font-medium text-main-blue">
              Backend Takımı
            </p>
            <p className="mt-6 max-w-[630px] text-sm font-medium text-dark">
              İşlerin arka plandan yürütülmesini sağlayan ve en az frontend
              kadar önemli olan backend takımımızla en iyi işleri ortaya koymaya
              çalışıyoruz.
            </p>
          </div>
          <div className="mt-14 w-[calc(70%)]">
            <div className="mb-8 flex w-full flex-row justify-between gap-6 px-1 md-max:flex-wrap md-max:justify-center">
              <div className="flex flex-row md:basis-[50%] md-max:w-full">
                <NextImage
                  src={backendTeamImage}
                  className="h-[326px] w-full max-w-[678px] rounded-[36px]"
                />
              </div>
              <div className=" max-h-[340px] max-w-[560px] md:basis-[50%]">
                <p className="text-justify text-sm font-medium text-dark">
                  &emsp; Bir mobil uygulama ya da web sitesi Backend&rsquo;i
                  olmadan yapması gerekenleri yerine getiremez. Frontend ne
                  kadar görünürde olsa da Backend&rsquo;le beraber tam olarak
                  işlevini yerine getirebilir.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-20 flex min-h-[462px] w-4/5 flex-row justify-center gap-9 md-max:flex-wrap">
            <div className="flex basis-full justify-center md:basis-[50%]">
              <TechList
                data={teams[5].skills}
                title="Kullandığımız Teknolojiler"
              />
            </div>
            <div className="flex basis-full justify-center md:basis-[50%]">
              <TechList
                data={teams[5].technologies}
                title="Kullandığımız Yazılım Dilleri"
              />
            </div>
          </div>
          <CompletedWorks />
        </div>
      </PagePaddingContainer>
    </PageTopSectionContainer>
  );
};

export default BackendTeam;
