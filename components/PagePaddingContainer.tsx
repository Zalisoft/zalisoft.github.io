import React from "react";
import { twMerge } from "tailwind-merge";

const PagePaddingContainer = (
  props: React.HTMLAttributes<HTMLDivElement>
): JSX.Element => {
  const { children, className, ...rest } = props;
  return (
    <div className={twMerge("px-5 md:px-10", className)} {...rest}>
      {children}
    </div>
  );
};
export default PagePaddingContainer;
