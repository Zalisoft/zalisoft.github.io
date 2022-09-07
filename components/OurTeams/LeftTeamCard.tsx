import { StaticImageData } from "next/image";
import React from "react";
import NextImage from "../NextImage";
import CheckSVG from "../../public/icons/check.svg";
import Link from "next/link";

export type Team = {
  id: number;
  logo: string | StaticImageData;
  name: string;
  description: string;
  images: string | StaticImageData;
  link: string;
};

const LeftTeamCard = ({
  name,
  description,
  images,
  logo,
  link,
}: Team): JSX.Element => {
  return (
    <div className="flex flex-row gap-10 xs-max:flex-col xs-min:h-[428px]">
      <div className="xs-min:basis-[50%]">
        <div className="flex h-[144.14px] w-[144.14px] items-center justify-center rounded-[42.6px] bg-white shadow-[0_2.84016px_42.6024px_rgba(177,174,255,0.3)]">
          <NextImage
            src={logo}
            className="h-[70.08px] w-[100px]"
            objectFit="scale-down"
          />
        </div>
        <Link href={link}>
          <h3 className="mt-6 text-4xl text-main-blue">{name}</h3>
        </Link>
        <div className="mt-6 flex flex-row">
          {/*TODO Refactor Duplicate code*/}
          <div className="flex flex-row items-center">
            <CheckSVG />
            <p className="ml-[.625rem] text-xs font-medium text-dark">
              Genç ve Dinamik Yapı
            </p>
          </div>
          <div className="ml-9 flex flex-row items-center">
            <CheckSVG />
            <p className="ml-[.625rem] text-xs font-medium text-dark">
              Kreatif Ekip Üyeleri
            </p>
          </div>
          <div className="ml-9 flex flex-row items-center">
            <CheckSVG />
            <p className="ml-[.625rem] text-xs font-medium text-dark">
              Hızlı ve Teknolojik Çözümler
            </p>
          </div>
        </div>
        <p className="mt-6 text-justify text-sm text-dark">
          &emsp;{description}
        </p>
      </div>
      <div className="flex basis-[50%] flex-col xs-max:mt-9 xs-min:overflow-hidden">
        <NextImage src={images} className="h-[428px] w-full rounded-[36px]" />
      </div>
    </div>
  );
};

// TODO: button will be added here
export default LeftTeamCard;
