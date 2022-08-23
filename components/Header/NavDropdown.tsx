import React, { ReactNode, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import ArrowDown from "@/public/icons/arrow-down.svg";
import { animated, config, easings, useTransition } from "react-spring";

const NavDropdown = ({
  title,
  link,
  className,
  children,
}: {
  title: string;
  link?: string;
  className?: string;
  children?: ReactNode;
}): JSX.Element => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [timer, setTimer] = useState<number | undefined>();
  const hovered = useRef(false);

  type MountingAnimationProps = {
    opacity: number;
    transform: string;
  };

  const mountedParams = {
    opacity: 1,
    transform: "translate(-50%, 0px)",
  } as MountingAnimationProps;

  const unmountedParams = {
    opacity: 0,
    transform: "translate(-50%, -10px)",
  } as MountingAnimationProps;

  const presenceTransitions = useTransition(showDropdown, {
    from: unmountedParams,
    enter: mountedParams,
    leave: unmountedParams,
    reverse: showDropdown,
    config: { duration: 250, easing: easings.easeInOutSine },
  });

  const onMouseEnter = () => {
    hovered.current = true;
    setTimer(
      window.setTimeout(() => {
        if (hovered.current) setShowDropdown(true);
      }, 300)
    );
  };

  const onMouseLeave = () => {
    hovered.current = false;
    setTimer(
      window.setTimeout(() => {
        if (!hovered.current) {
          setShowDropdown(false);
          window.clearTimeout(timer);
        }
      }, 500)
    );
  };

  return (
    <div
      className={twMerge(
        `flex flex-col whitespace-nowrap ${
          showDropdown && children ? "rounded-md bg-white" : ""
        }`,
        className
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {link ? (
        <Link
          href={link}
          className="flex cursor-pointer items-center gap-4 py-3 px-4 hover:text-main-blue "
        >
          <span className="grow">{title}</span>
          {children && <ArrowDown />}
        </Link>
      ) : (
        <div className="flex cursor-pointer items-center gap-4 py-3 px-4 hover:text-main-blue ">
          <span className="grow">{title}</span>
          {children && <ArrowDown />}
        </div>
      )}
      {children &&
        presenceTransitions(
          (styles, show) =>
            show && (
              <animated.div
                className="absolute top-full left-1/2 z-50 -translate-x-1/2 lg:w-4/5 lg-max:w-[95%]"
                style={styles}
              >
                {children}
              </animated.div>
            )
        )}
    </div>
  );
};

export default NavDropdown;
