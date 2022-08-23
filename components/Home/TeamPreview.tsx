import React, { ComponentPropsWithoutRef } from "react";
import RightArrow from "../../public/icons/arrow-right-long.svg";
import Button from "@/components/Button";
import Link, { LinkProps } from "next/link";
import CheckSVG from "../../public/SVGs/check.svg";
import { twMerge } from "tailwind-merge";
import NextImage from "@/components/NextImage";
import { ImageProps } from "next/image";

const TeamPreview = ({
  name,
  qualities,
  description,
  link,
  className,
  backgroundImage,
  ...rest
}: ComponentPropsWithoutRef<"div"> & {
  name: string;
  qualities: string[];
  description: string;
  link: LinkProps["href"];
  backgroundImage?: ImageProps["src"];
}) => {
  return (
    <div
      className={twMerge(
        "relative flex max-w-xl flex-col items-center gap-6 text-center sm-max:px-6",
        className
      )}
      {...rest}
    >
      {backgroundImage && (
        <NextImage
          className="absolute inset-0 z-0 opacity-20"
          src={backgroundImage}
          objectFit="contain"
          alt="TeamAppLanding logo"
        />
      )}

      <h3 className="text-lg text-main-purple md:text-2xl">{name}</h3>
      <div className="flex justify-center gap-2">
        {qualities.map((quality, index) => (
          <div
            key={index}
            className="flex flex-row items-center justify-center gap-2"
          >
            <CheckSVG />
            <p className="text-xs font-medium text-dark">{quality}</p>
          </div>
        ))}
      </div>
      <p className="text-sm">{description}</p>
      <Link href={link} className="z-10">
        <Button className="flex gap-3 py-2.5 px-5 text-sm">
          <span>Takımı Gör</span>
          <RightArrow />
        </Button>
      </Link>
    </div>
  );
};

export default TeamPreview;
