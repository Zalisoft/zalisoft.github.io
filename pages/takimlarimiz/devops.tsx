import PagePaddingContainer from "@/components/PagePaddingContainer";
import PageTopSectionContainer from "@/components/PageTopSectionContainer";
import React from "react";
import devopsImage from "@/public/images/web-slider1.png";
import TechList from "@/components/OurTeams/TechList";
import NextImage from "@/components/NextImage";
import { teams } from "@/components/OurTeams/teams";
import CompletedWorks from "@/components/OurTeams/CompletedWorks";
import Seo from "@/components/Seo";
import devops from "@/public/images/devops-logo.png";
const DevOpsTeam = () => {
  return (
    <>
      <NextImage
        src={devops}
        className="absolute top-[180px] z-[-99] mt-20 h-[1276px] w-full opacity-10"
      />

      <PageTopSectionContainer>
        <PagePaddingContainer>
          <Seo mainTitle="Devops" />
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center text-center">
              <p className="text-4xl font-medium text-main-blue">
                DevOps Takımı
              </p>
              <p className="mt-6 max-w-[630px] text-sm font-medium text-dark">
                Bütün yazılım takımlarımız için çok önemli olan devops takımımız
                projeleri bir üst seviyeye taşımak için hizmet gösteriyor.
              </p>
            </div>
            <div className="mt-14 w-[calc(70%)]">
              <div className="mb-8 flex w-full flex-row justify-between gap-6 px-1 md-max:flex-wrap md-max:justify-center">
                <div className="flex flex-row md:basis-[50%] md-max:w-full">
                  <NextImage
                    src={devopsImage}
                    className="h-[326px] w-full max-w-[678px] rounded-[36px]"
                  />
                </div>
                <div className="max-w-[560px] md:basis-[50%] [@media_(min-width:767px)]:max-h-[340px]">
                  <p className="text-justify text-sm font-medium text-dark">
                    &emsp;DevOps hizmetini kısaca tanımlamak istersek;
                    kullanıcılarımıza sürekli değer aktarımını sağlamak için
                    insanların birliğini sağlayarak süreçlerin ve ürünlerin
                    takibi, projelerin ölçeklenebilirliği ve
                    sürdürülebilirliğini sağlamak olarak özetleyebiliriz.
                  </p>
                  <p className="mt-6 text-justify text-sm font-medium text-dark">
                    &emsp;DevOps takımını geliştirici ekibi ve operasyon ekibi
                    olarak ikiye ayırabiliriz. Geliştirici ekip; yeni ürünler
                    çıkarmak, yeni özellikler geliştirmek, hataları çözmek ve
                    güvenlik yamalar yapmaktan sorumluyken operasyon ekibi
                    müşterilerin uygulamalara sürekli erişebilir olduğunun
                    takibini yapmaktan sorumludur. DevOps ise bu iki ekibin
                    birleşimidir.
                  </p>
                  <p className="mt-6 text-justify text-sm font-medium text-dark">
                    &emsp;DevOps takımımız belirttiğimiz görevleri en iyi
                    şekilde yerine getirerek projeleri ileri seviyeye taşımak
                    için faaliyet göstermektedir.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-20 flex min-h-[462px] w-4/5 flex-row justify-center gap-9 md-max:flex-wrap ">
              <div className="flex basis-full justify-center md:basis-[50%]">
                <TechList
                  data={teams[3].skills}
                  title="Kullandığımız Teknolojiler"
                />
              </div>
              <div className="flex basis-full justify-center md:basis-[50%]">
                <TechList
                  data={teams[3].technologies}
                  title="Devopsun Kullanıldığı Alanlar"
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

export default DevOpsTeam;
