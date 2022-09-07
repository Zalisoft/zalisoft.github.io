import Link from "next/link";
import React from "react";
import NextImage from "../NextImage";
import Button from "../Button";
import ArrowDown from "@/public/icons/arrow-down-long.svg";

import bonnoyMacbook1 from "@/public/images/macbook/bonnoy-macbook-1.png";
import bonnoyMacbook2 from "@/public/images/macbook/bonnoy-macbook-2.png";
import bonnoyMacbook3 from "@/public/images/macbook/bonnoy-macbook-3.png";

import asMacbook1 from "@/public/images/macbook/as-macbook-1.png";
import asMacbook2 from "@/public/images/macbook/as-macbook-2.png";
import asMacbook3 from "@/public/images/macbook/as-macbook-3.png";

const CompletedWorks = () => {
  return (
    <div className="mt-20 mb-32 flex w-full flex-col items-center [@media_(max-width:430px)]:px-5">
      <p className="text-4xl font-medium text-main-blue">
        Tamamlanan İşlerimiz
      </p>
      <div className="w-full">
        <div className="mt-14 flex flex-row flex-wrap justify-between [@media_(max-width:527px)]:justify-center">
          <p className="text-2xl font-medium text-gray">Bonnoy Web Sitesi</p>
          <Link
            href="http://bonnoy.com/"
            className="text-2xl font-medium text-main-blue"
          >
            http://bonnoy.com/
          </Link>
        </div>
        <div className="mt-9 flex w-full flex-row justify-center sm-max:flex-wrap [@media_(min-width:1150px)]:gap-9">
          <div className="h-[255px] w-[400px]">
            <NextImage
              src={bonnoyMacbook1}
              alt="finished-works"
              className="h-full w-full"
              objectFit="scale-down"
            />
          </div>
          <div className="h-[255px] w-[400px]">
            <NextImage
              src={bonnoyMacbook2}
              alt="finished-works"
              className="h-full w-full"
              objectFit="scale-down"
            />
          </div>
          <div className="h-[255px] w-[400px]">
            <NextImage
              src={bonnoyMacbook3}
              alt="finished-works"
              className="h-full w-full"
              objectFit="scale-down"
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="mt-14 flex flex-row flex-wrap justify-between [@media_(max-width:730px)]:justify-center">
          <p className="text-2xl font-medium text-gray">
            Anneler Satıyor Web Sitesi
          </p>
          <Link
            href="https://annelersatiyor.com/"
            className="text-2xl font-medium text-main-blue"
          >
            https://annelersatiyor.com/
          </Link>
        </div>
        <div className="mt-9 flex w-full flex-row justify-center sm-max:flex-wrap [@media_(min-width:1150px)]:gap-9">
          <div className="h-[255px] w-[400px]">
            <NextImage
              src={asMacbook1}
              alt="finished-works"
              className="h-full w-full"
              objectFit="scale-down"
            />
          </div>
          <div className="h-[255px] w-[400px]">
            <NextImage
              src={asMacbook2}
              alt="finished-works"
              className="h-full w-full"
              objectFit="scale-down"
            />
          </div>
          <div className="h-[255px] w-[400px]">
            <NextImage
              src={asMacbook3}
              alt="finished-works"
              className="h-full w-full"
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
  );
};

export default CompletedWorks;
