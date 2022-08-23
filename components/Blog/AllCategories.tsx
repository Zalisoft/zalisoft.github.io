import React from "react";
import { AsideArrowIcon } from "../AsideIcon";

const AllCategories = (): JSX.Element => {
  return (
    <div className="flex flex-row items-center gap-x-4">
      <p className="text-main-blue">Tüm kategoriyi gör</p>
      <AsideArrowIcon />
    </div>
  );
};

export default AllCategories;
