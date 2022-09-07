import React from "react";
import NextImage from "../NextImage";
import blogImage3 from "@/public/images/blogImage3.png";

const Interesting = (): JSX.Element => {
  return (
    <div>
      <div className="flex h-[118px] w-full cursor-pointer flex-row gap-x-4 p-5">
        <NextImage src={blogImage3} className="h-[74px] w-[74px] rounded-lg" />
        <div className="flex h-[325px] w-[312px] flex-col">
          <h1 className="text-sm">Javascript’e +ES987 ile Gelen Enerjiler</h1>
          <p className="mt-2 text-[10px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
            viverra nisl, adipiscing lectus leo tempor dignissim quam morbi.
            Eget vulputate eget faucibus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Interesting;
