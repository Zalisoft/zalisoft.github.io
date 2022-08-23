import React, {
  ComponentPropsWithoutRef,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import useOnRevealed from "@/components/hooks/useOnRevealed";
import { twMerge } from "tailwind-merge";
import AnimateReveal from "@/components/AnimateReveal";

const DelayedAnimateReveal = ({
  direction = "from-bottom",
  children,
  animationDelay,
  enabledDelay,
  disableAnimation = false,
  ...rest
}: ComponentPropsWithoutRef<"div"> & {
  direction?: "from-bottom" | "from-left" | "from-right";
  disableAnimation?: boolean;
  animationDelay?: number;
  enabledDelay?: number;
}) => {
  const [enabled, setEnabled] = useState(!enabledDelay);

  useEffect(() => {
    if (enabledDelay && enabledDelay > 0) {
      setTimeout(() => {
        setEnabled(true);
      }, enabledDelay);
    }
  }, [enabledDelay]);

  return enabled ? (
    <AnimateReveal
      disableAnimation={disableAnimation}
      delay={animationDelay}
      {...rest}
    >
      {children}
    </AnimateReveal>
  ) : (
    <></>
  );
};

export default DelayedAnimateReveal;
