import { StaticImageData } from "next/image";
import React from "react";
import NextImage from "../NextImage";

type Props = {
  description?: string;
  images?: string[] | StaticImageData[];
};

const TeamSliderCard = ({ description, images = [] }: Props) => {
  const text = description?.split("    ");
  console.log("text", text);
  return (
    <div className="mb-8 flex w-full flex-row justify-between gap-6 px-1 md-max:flex-wrap md-max:justify-center">
      <div
        className={`${
          description && images
            ? "md:basis-[50%]"
            : !images
            ? "md:basis-[100%]"
            : "hidden"
        } max-h-[340px] `}
      >
        <p className="text-justify text-sm font-medium text-dark">
          &emsp;{text?.[0]}
        </p>
        <p className="mt-6 text-justify text-sm font-medium text-dark">
          {" "}
          &emsp;{text?.[1]}
        </p>
      </div>
      <div
        className={`${
          description && images
            ? "md:basis-[50%]"
            : !description
            ? "md:basis-[100%]"
            : "hidden"
        } flex flex-row md-max:w-full`}
      >
        {images.map((image, index) => (
          <NextImage
            src={image}
            className={`${
              description ? "max-w-[678px]" : "w-full"
            } h-[326px] w-full rounded-[36px]`}
            key={index}
            objectFit={`${description ? "cover" : "scale-down"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamSliderCard;
