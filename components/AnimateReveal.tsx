import React, { ComponentPropsWithoutRef, ReactNode, useRef } from "react";
import useOnRevealed from "@/components/hooks/useOnRevealed";
import { twMerge } from "tailwind-merge";

const AnimateReveal = ({
  direction = "from-bottom",
  className,
  children,
  delay,
  disableAnimation = false,
  ...rest
}: ComponentPropsWithoutRef<"div"> & {
  direction?: "from-bottom" | "from-left" | "from-right";
  delay?: number;
  disableAnimation?: boolean;
}) => {
  const ref = useRef(null);
  const revealed = useOnRevealed(ref);
  return (
    <div
      ref={ref}
      style={{
        animationPlayState: disableAnimation
          ? undefined
          : revealed
          ? "running"
          : "paused",
        animationDelay: delay != null ? delay + "ms" : undefined,
      }}
      className={twMerge(
        !disableAnimation &&
          (direction == "from-left"
            ? "animate-revealFromLeft"
            : direction == "from-right"
            ? "animate-revealFromRight"
            : "animate-revealFromBottom"),
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default AnimateReveal;
