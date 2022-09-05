import PagePaddingContainer from "@/components/PagePaddingContainer";
import PageTopSectionContainer from "@/components/PageTopSectionContainer";
import React from "react";
import TechList from "@/components/OurTeams/TechList";
import { teams } from "@/components/OurTeams/teams";
import socialMediaTeamImage from "@/public/images/social-media-team.png";
import NextImage from "@/components/NextImage";
import Seo from "@/components/Seo";

const SocialTeam = () => {
  return (
    <PageTopSectionContainer>
      <PagePaddingContainer>
        <Seo mainTitle="Sosyal Medya" />
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center text-center">
            <p className="text-4xl font-medium text-main-blue">
              Sosyal Medya Takımı
            </p>
            <p className="mt-6 max-w-[630px] text-sm font-medium text-dark">
              Günümüzün olmazsa olmazı sosyal medyada profesyonelce yerinizi
              almak istiyorsanız en iyi destek için sosyal medya takımımız
              yanınızda.
            </p>
          </div>
          <div className="mt-14 w-[calc(70%)]">
            <div className="mb-8 flex w-full flex-row justify-between gap-6 px-1 md-max:flex-wrap md-max:justify-center">
              <div className="flex flex-row md:basis-[50%] md-max:w-full">
                <NextImage
                  src={socialMediaTeamImage}
                  className="h-[326px] w-full max-w-[678px] rounded-[36px]"
                />
              </div>
              <div className=" max-h-[340px] md:basis-[50%]">
                <p className="text-justify text-sm font-medium text-dark">
                  &emsp;Sosyal medya artık hayatımızın çok önemli bir kısmını
                  kaplıyor. Gerek iş olsun gerek kişisel yaşamımız olsun sürekli
                  sosyal medyanın içerisindeyiz. Sosyal medya aynı zamanda çok
                  etkili bir reklam aracı. Durum bu olunca sosyal medya
                  hesaplarının da tabii ki profesyonel olması gerekiyor.
                </p>
                <p className="mt-6 text-justify text-sm font-medium text-dark">
                  &emsp; Profesyonel bir yardım gerektiği için buradayız ve
                  hesaplarınızı büyütmenize olanak sağlıyoruz. Sıfırdan özgün
                  sosyal medya tasarımlarıyla, doğru reklam verme yollarını
                  izleyerek ve sosyal medya hesabınızın istatistiklerini
                  inceleyerek size en iyi programı sunuyoruz.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-20 flex min-h-[462px] w-4/5 flex-row justify-center gap-9 md-max:flex-wrap">
            <div className="flex basis-full justify-center md:basis-[50%]">
              <TechList
                data={teams[6].skills}
                title="Danışmanlık Verdiğimiz Sosyal Medya Kanalları"
              />
            </div>
            <div className="flex min-h-[462px] basis-full justify-center md:basis-[50%]">
              <TechList
                data={teams[6].technologies}
                title="Sosyal Medya Paketleri"
              />
            </div>
          </div>
        </div>
      </PagePaddingContainer>
    </PageTopSectionContainer>
  );
};

export default SocialTeam;
