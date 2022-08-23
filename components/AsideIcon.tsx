import React from "react";
import ArrowSVG from "@/public/SVGs/arrow.svg";
import FileSVG from "@/public/SVGs/file.svg";
import DateSVG from "@/public/SVGs/date.svg";

export const AsideArrowIcon = (
  props: React.HTMLAttributes<HTMLOrSVGElement>
): JSX.Element => <ArrowSVG {...props} />;

export const AsideFileIcon = (
  props: React.HTMLAttributes<HTMLOrSVGElement>
): JSX.Element => <FileSVG {...props} />;

export const AsideDateIcon = (
  props: React.HTMLAttributes<HTMLOrSVGElement>
): JSX.Element => <DateSVG {...props} />;
