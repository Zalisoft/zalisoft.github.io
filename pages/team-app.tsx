import NextImage from "@/components/NextImage";
import PagePaddingContainer from "@/components/PagePaddingContainer";
import PageTopSectionContainer from "@/components/PageTopSectionContainer";
import TeamAppLanding from "@/components/TeamAppLanding";
import { StaticImageData } from "next/image";
import React from "react";
import RotarySVG from "../public/icons/rotary.svg";
import AnimateRevael from "../components/AnimateReveal";
import profile1 from "../public/images/Profile.png";
import profile2 from "../public/images/Profile2.png";
import profile3 from "../public/images/Profile3.png";
import profile4 from "../public/images/Profile4.png";
import profile5 from "../public/images/Profile5.png";
import profile6 from "../public/images/Profile6.png";
import Seo from "@/components/Seo";

type Props = {
  image: string | StaticImageData;
  title: string;
  description: string;
};
const fakeCategories: Props[] = [
  {
    image: profile1,
    title: "Profil Sayfası",
    description:
      "    Çalışanlarınızın haftalık kaç saat çalıştığını, projelerde ne durumda olduklarını, yıllık izin sayılarını ve onlar hakkında daha bir sürü ayrıntıyı öğrenebilirsiniz.",
  },
  {
    image: profile2,
    title: "Kronometre Sayfası",
    description:
      "    Günlük hangi projede ne kadar çalıştığınızı kaydedip daha sonra kontrol etmek işlerinizi sistematikleştirmek ve takip etmek için çok faydalı olacaktır  ",
  },
  {
    image: profile3,
    title: "Rapor Filtreleme Sayfası",
    description:
      "    Tüm çalışanlarınızın günük veya aylık ne kadar süre çalıştıklarını, hangi projede ne kadar vakit geçirdiklerini kolaylıkla öğrenebilirsiniz.",
  },
  {
    image: profile4,
    title: "Projeler Sayfası",
    description:
      "    Yönettiğiniz tüm projelelerin takibini kolaylıkla yapabilir ve proje durumu hakkında bilgi edinebilirsiniz.",
  },
  {
    image: profile5,
    title: "Proje Ayrıntıları Sayfası",
    description:
      "    Proje içerisinde değiştirmek istediğiniz ayrıntılar için, proje içerisinde görevlendirmeler yapmak için ve proje hakkında ayrıntılı bilgi edinmek için bu sayfayı kullanabilirsiniz",
  },
  {
    image: profile6,
    title: "Takım Ayrıntıları Sayfası",
    description:
      "Yönettiğiniz veya üyesi olduğunuz takım hakkında bilgi edinmek ve iş arkadaşlarınız hakkında bilgi edinmek için takım sayfasına gidebilirsiniz.",
  },
];

const TeamApp = () => {
  return (
    <>
      <PageTopSectionContainer>
        <Seo mainTitle="Team App" />
        <PagePaddingContainer>
          <TeamAppLanding />
          <div className="flex justify-center">
            <div className="mb-28 grid grid-cols-3 gap-y-20 gap-x-5 lg-max:grid-cols-2 md-max:grid-cols-1 sm-max:mt-[-150px]">
              {fakeCategories.map((fake, index) => (
                <div
                  key={index}
                  className="mt-[50px] flex w-[390px] sm:ml-28 xl-max:ml-14"
                >
                  <div className="max-w-[303px]">
                    <NextImage
                      src={fake.image}
                      objectFit="contain"
                      className="h-[466.24px] w-[203px]"
                    />
                    <h1 className="mt-2 font-medium text-main-blue">
                      {fake.title}
                    </h1>
                    <p className="absolute mt-2 h-28 w-[303px] text-justify text-sm text-dark">
                      {fake.description}
                    </p>
                  </div>

                  <AnimateRevael direction="from-left" delay={1000}>
                    <div className="">
                      {!(index === 2 || index === 5) && (
                        <RotarySVG className="ml-10  mt-40 xl-max:ml-7 xl-max:h-[120px] xl-max:w-[80px] lg-max:hidden" />
                      )}
                    </div>
                  </AnimateRevael>
                </div>
              ))}
            </div>
          </div>
        </PagePaddingContainer>
      </PageTopSectionContainer>
    </>
  );
};

export default TeamApp;
