import React from "react";
import NextImage from "./NextImage";
import as7 from "../public/images/as7.png";
import PagePaddingContainer from "./PagePaddingContainer";
import AppleSVG from "../public/icons/apple.svg";
import PlaystoreSVG from "../public/icons/playstore.svg";
import AnimateReveal from "./AnimateReveal";
import AsLogo from "../public/icons/as-logo.svg";
import Link from "next/link";

const AsApp = () => {
  return (
    <>
      <PagePaddingContainer>
        <div className="flex items-center sm-max:mb-[-80px]  sm-max:justify-center">
          <AsLogo className="h-20 w-72 sm-max:h-32 sm-max:w-32" />
        </div>
      </PagePaddingContainer>
      <PagePaddingContainer className="flex flex-row items-center justify-center gap-x-8 lg-max:flex-col ">
        <AnimateReveal
          direction="from-left"
          className="flex w-1/2 flex-col items-center justify-center lg-max:w-full"
        >
          <NextImage
            src={as7}
            objectFit="contain"
            className="aspect-[1] h-full w-full  lg-max:w-3/4 sm-max:aspect-[0.6]"
          />
        </AnimateReveal>

        <AnimateReveal
          direction="from-right"
          className=" w-1/2 flex-col items-center justify-center lg-max:w-full"
        >
          <div className="mx-auto h-64 max-w-[572px] rounded-3xl pt-6 sm-max:h-[170px] sm-max:w-full">
            <iframe
              allowFullScreen
              className="h-full w-full rounded-3xl "
              src="https://www.youtube.com/embed/EObjoLRXCV8"
              // src="https://www.youtube.com/watch?v=Jv_2ogTgWOQ&list=WL&index=10"
              // BU ÇALIŞMIYOR
              title="AnnelerSatıyor video"
            ></iframe>
          </div>

          <div className="sm-max: mt-8 mb-12 w-full">
            <p className="ml-9 sm-max:ml-[-6px]">Annelerin Sosyal Pazar Yeri</p>
            <p className="hover:tracking-wider hover:text-black">
              <Link href={"https://annelersatiyor.com/"} className="ml-9">
                https://annlersatiyor.com
              </Link>
            </p>
          </div>

          <div className="mx-auto mt-4 flex  max-w-[572px] flex-row gap-x-2 pb-36">
            <div className="flex h-[53px] w-[180px] items-center justify-center gap-x-2 rounded-xl bg-black p-2">
              <AppleSVG />
              <span className="text-sm text-white">App Store dan İndirin</span>
            </div>
            <div className=" flex h-[53px] w-[180px] items-center justify-center gap-x-2 rounded-xl bg-black p-2">
              <PlaystoreSVG />
              <span className="text-sm text-white">
                Google Play den İndirin
              </span>
            </div>
          </div>
        </AnimateReveal>
      </PagePaddingContainer>
    </>
  );
};

export default AsApp;
