import React from "react";
import { twMerge } from "tailwind-merge";

const PageTopSectionContainer = (
  props: React.HTMLAttributes<HTMLDivElement>
): JSX.Element => {
  const { children, className, ...rest } = props;
  return (
    <div className={twMerge("pt-28 md:pt-40", className)} {...rest}>
      {children}
    </div>
  );
};

export default PageTopSectionContainer;
