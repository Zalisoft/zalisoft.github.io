import React, { ComponentPropsWithoutRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import ReactParallaxTilt from "react-parallax-tilt";

const FloatingCard = ({
  leftBadge,
  rightBadge,
  children,
  className,
  ...rest
}: ComponentPropsWithoutRef<"div"> & {
  rightBadge?: ReactNode;
  leftBadge?: ReactNode;
}) => {
  return (
    <ReactParallaxTilt
      perspective={500}
      glareEnable={true}
      glareMaxOpacity={0.45}
      scale={1.02}
      className={twMerge(
        "relative flex w-60 flex-col rounded-xl bg-white/60 px-4 pb-3 pt-3 transition-all hover:bg-white hover:drop-shadow-lg",
        leftBadge != null && "ml-[25px] mt-[25px]",
        rightBadge != null && "mr-[25px] mt-[25px]",
        className
      )}
      {...rest}
    >
      {leftBadge != null && (
        <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2">
          {leftBadge}
        </div>
      )}
      {rightBadge != null && (
        <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2">
          {rightBadge}
        </div>
      )}
      <div className="mb-3 flex gap-1">
        <div className="aspect-square h-2 rounded-full bg-orange" />
        <div className="aspect-square h-2 rounded-full bg-yellow" />
        <div className="aspect-square h-2 rounded-full bg-green" />
      </div>
      {children}
    </ReactParallaxTilt>
  );
};

export default FloatingCard;
