import React from "react";
import NextImage from "./NextImage";
import phones from "../public/images/phones.png";
import PagePaddingContainer from "./PagePaddingContainer";
import AppleSVG from "../public/icons/apple.svg";
import PlaystoreSVG from "../public/icons/playstore.svg";
import AnimateReveal from "./AnimateReveal";

const TeamAppLanding = () => {
  return (
    <PagePaddingContainer className="flex flex-row items-center justify-center gap-x-8 lg-max:flex-col ">
      <AnimateReveal
        direction="from-left"
        className="flex w-1/2 flex-col items-center justify-center lg-max:w-full"
      >
        <NextImage
          src={phones}
          objectFit="contain"
          className="aspect-[1] h-full w-full  lg-max:w-3/4 sm-max:aspect-[0.6] "
        />
      </AnimateReveal>

      <AnimateReveal
        direction="from-right"
        className=" w-1/2 flex-col items-center justify-center lg-max:w-full"
      >
        <div className="mx-auto h-64 max-w-[572px] rounded-3xl  sm-max:h-[170px] sm-max:w-full ">
          <iframe
            allowFullScreen
            className="h-full w-full rounded-3xl "
            src="https://www.youtube.com/embed/EObjoLRXCV8"
            title="Zalisoft video"
          ></iframe>
        </div>

        <div className="mx-auto mt-11 max-w-[572px] text-4xl font-medium text-main-blue xl-max:text-2xl sm-max:text-base">
          TeamApp |
          <span className="font-extralight sm-max:font-medium">
            {" "}
            Yönetim & Plan{" "}
          </span>
        </div>
        <p className="mx-auto mt-4 max-w-[572px] items-center text-sm font-medium text-dark">
          Yönetim, takip ve planlama alanında sektöre yeni bir soluk getirecek
          olan mobil uygulamamız TeamApp çok yakında AppStore ve PlayStore da
          yayında olacak.
        </p>
        <div className="mx-auto mt-4 flex  max-w-[572px] flex-row gap-x-2">
          <div className="flex h-[53px] w-[180px] items-center justify-center gap-x-2 rounded-xl bg-black p-2">
            <AppleSVG />
            <span className="text-sm text-white">App Store dan İndirin</span>
          </div>
          <div className=" flex h-[53px] w-[180px] items-center justify-center gap-x-2 rounded-xl bg-black p-2">
            <PlaystoreSVG />
            <span className="text-sm text-white">Google Play den İndirin</span>
          </div>
        </div>
      </AnimateReveal>
    </PagePaddingContainer>
  );
};

export default TeamAppLanding;
