import React from "react";
import ArrowSVG from "@/public/icons/arrow.svg";
import FileSVG from "@/public/icons/file.svg";
import DateSVG from "@/public/icons/date.svg";

export const AsideArrowIcon = (
  props: React.HTMLAttributes<HTMLOrSVGElement>
): JSX.Element => <ArrowSVG {...props} />;

export const AsideFileIcon = (
  props: React.HTMLAttributes<HTMLOrSVGElement>
): JSX.Element => <FileSVG {...props} />;

export const AsideDateIcon = (
  props: React.HTMLAttributes<HTMLOrSVGElement>
): JSX.Element => <DateSVG {...props} />;
