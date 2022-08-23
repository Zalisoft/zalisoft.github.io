import React, { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import HorizontalSlidingTrack from "../HorizontalSlidingTrack";

const PictureFlow = () => {
  return (
    <div className="my-40 flex flex-col gap-8">
      <HorizontalSlidingTrack className="gap-8">
        <Picture src="/images/home/picture-flow/pic-flow-1.jpeg" />
        <Picture src="/images/home/picture-flow/pic-flow-2.jpeg" />
        <Picture src="/images/home/picture-flow/pic-flow-3.jpeg" />
        <Picture src="/images/home/picture-flow/pic-flow-4.jpeg" />
        <Picture src="/images/home/picture-flow/pic-flow-5.jpeg" />
        <Picture src="/images/home/picture-flow/pic-flow-6.jpeg" />
      </HorizontalSlidingTrack>
      <HorizontalSlidingTrack direction="to-right" className="gap-8">
        <Picture src="/images/home/picture-flow/pic-flow-7.jpeg" />
        <Picture src="/images/home/picture-flow/pic-flow-8.jpeg" />
        <Picture src="/images/home/picture-flow/pic-flow-9.jpeg" />
        <Picture src="/images/home/picture-flow/pic-flow-10.jpeg" />
        <Picture src="/images/home/picture-flow/pic-flow-11.jpeg" />
        <Picture src="/images/home/picture-flow/pic-flow-12.jpeg" />
      </HorizontalSlidingTrack>
      <HorizontalSlidingTrack className="gap-8">
        <Picture src="/images/home/picture-flow/pic-flow-13.jpeg" />
        <Picture src="/images/home/picture-flow/pic-flow-14.jpeg" />
        <Picture src="/images/home/picture-flow/pic-flow-15.jpeg" />
        <Picture src="/images/home/picture-flow/pic-flow-1.jpeg" />
        <Picture src="/images/home/picture-flow/pic-flow-16.jpeg" />
        <Picture src="/images/home/picture-flow/pic-flow-17.jpeg" />
      </HorizontalSlidingTrack>
    </div>
  );
};

export default PictureFlow;

const Picture = ({ className, ...rest }: ComponentPropsWithoutRef<"img">) => {
  //TODO Check why NextJsImage bugging when used here
  return (
    <div>
      <img
        className={twMerge(
          "h-20 w-32 rounded-full object-cover md:h-32 md:w-52",
          className
        )}
        {...rest}
        alt="Flow Picture"
      />
    </div>
  );
};
