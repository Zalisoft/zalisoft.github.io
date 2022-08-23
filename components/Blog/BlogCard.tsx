import React from "react";
import NextImage from "../NextImage";
import blogImage from "@/public/PNGs/blogImage.png";
import { AsideArrowIcon } from "../AsideIcon";
import Link from "next/link";
const BlogCard = (): JSX.Element => {
  return (
    <>
      <Link href="/blog/1">
        <div className="h-[400px] max-w-[292px] cursor-pointer">
          <NextImage
            src={blogImage}
            className="h-[194px] max-w-[252px] rounded-[15px]"
          />
          <h3 className="mt-[16px] font-medium">Blog başlığı</h3>
          <p className="mt-[16px] w-full text-justify text-xs line-clamp-3 md-max:w-[282px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet luctus
            elementum elit pulvinar mauris sapien egestas..Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Amet luctus elementum elit
            pulvinar mauris sapien egestas..
          </p>
          <div className="mt-[16px] flex w-[300px] gap-x-5 text-xs">
            <p>#teknoloji</p>
            <p>04.17.2022</p>
          </div>
          <div className="mt-[16px] flex w-[300px] items-center gap-x-5">
            <span className="text-sm text-main-blue">Devamını Oku</span>
            <AsideArrowIcon />
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
