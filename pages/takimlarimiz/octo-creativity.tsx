import TeamSliderCard from "@/components/OurTeams/TeamSliderCard";
import PagePaddingContainer from "@/components/PagePaddingContainer";
import PageTopSectionContainer from "@/components/PageTopSectionContainer";
import { StaticImageData } from "next/image";
import React from "react";
import Slider from "react-slick";
import webImage from "@/public/PNGs/web-slider1.png";
import TechList from "@/components/OurTeams/TechList";
import Link from "next/link";
import NextImage from "@/components/NextImage";
import homeLandingPNG from "@/public/PNGs/home-landing-page.png";
import Button from "@/components/Button";
import ArrowDown from "@/public/icons/arrow-down-long.svg";
import { teams } from "@/components/OurTeams/teams";
import octoImage from "@/public/PNGs/octo-image-1.png";
import octoImage2 from "@/public/PNGs/octo-creativity-slider-1.png";
import CompletedWorks from "@/components/OurTeams/CompletedWorks";
import Seo from "@/components/Seo";

const OctoCreativityTeam = () => {
  function ArrowHidden(props: any) {
    const { style } = props;
    return <div style={{ ...style, display: "hidden" }} />;
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowHidden />,
    prevArrow: <ArrowHidden />,
  };
  type TeamDetail = {
    description?: string;
    images?: string[] | StaticImageData[];
  };

  const teamDetails: TeamDetail[] = [
    {
      description:
        "Yaratıcılık ve keşfetme konusunda tutkulu ve bu enerjiyi dijital tasarım ürünleri üretmeye harcayan genç, dinamik ve yaratıcı bir ekibiz. Biz grafik tasarım, illüstrasyon, web dizayn, mobil dizayn, logo dizayn sosyal medya dizayn ve daha fazla tasarım işi için güvenebileceğiniz bir takımız.    Ahtapotlar; ekibimizin üyeleri gibi, desenleri, dokuları, renkleri ve şekilleri değiştirme yeteneğine sahiptir. Bu yetenekleri doğru ekipte ve doğru yerde kullanırken ahtapotlarla benzer yeteneklerimiz olduğunu fark ettik.",
      images: [octoImage2],
    },
    { images: [octoImage] },
  ];
  return (
    <PageTopSectionContainer>
      <Seo mainTitle="Octo Creativity" />
      <PagePaddingContainer>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center text-center">
            <p className="text-4xl font-medium text-main-blue ">
              Octo Creativity
            </p>
            <p className="mt-6 max-w-[630px] text-sm font-medium text-dark">
              Yaratıcı, yenilikçi ve modern tasarımlarla her türlü tasarım
              işinizde Octo ekibi yanınızda.
            </p>
          </div>
          <div className="mt-14 w-[calc(80%+1px)]">
            <Slider {...settings}>
              {teamDetails.map((e, index) => (
                <TeamSliderCard
                  key={index}
                  images={e.images}
                  description={e.description}
                />
              ))}
            </Slider>
          </div>
          <div className="mt-20 flex min-h-[462px] w-4/5 flex-row justify-center gap-9 md-max:flex-wrap">
            <div className="flex basis-full justify-center md:basis-[50%]">
              <TechList data={teams[0].skills} title="Yapabildiklerimiz" />
            </div>
            <div className="flex basis-full justify-center md:basis-[50%]">
              <TechList
                data={teams[0].technologies}
                title="Kullandığımız Programlar"
              />
            </div>
          </div>
          <CompletedWorks />
        </div>
      </PagePaddingContainer>
    </PageTopSectionContainer>
  );
};

export default OctoCreativityTeam;
