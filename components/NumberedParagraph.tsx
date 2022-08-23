import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import { animated, easings, useSpring, useSpringRef } from "react-spring";
import AnimateReveal from "@/components/AnimateReveal";

const NumberedParagraph = ({
  className,
  count,
  title,
  content,
  revealDelay,
  ...rest
}: ComponentPropsWithoutRef<"div"> & {
  count: number;
  title: string;
  content: string;
  revealDelay?: number;
}) => {
  const springRef = useSpringRef();

  const animation = useSpring({
    ref: springRef,
    from: { count: 0 },
    delay: 600,
  });

  function animateCount() {
    springRef.start({
      to: { count: count },
      config: { duration: 1000, easing: easings.easeOutCubic },
    });
  }

  return (
    <AnimateReveal
      direction="from-right"
      delay={revealDelay}
      className={twMerge("flex max-w-[300px] flex-col gap-2", className)}
      onAnimationEnd={animateCount}
      {...rest}
    >
      <h2 className="text-3xl">
        <span>+ </span>
        <animated.span>{animation.count.to((n) => n.toFixed(0))}</animated.span>
      </h2>
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-sm text-dark">{content}</p>
    </AnimateReveal>
  );
};

export default NumberedParagraph;
