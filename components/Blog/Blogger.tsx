import React from "react";
import { AsideArrowIcon, AsideDateIcon, AsideFileIcon } from "../AsideIcon";
import NextImage from "../NextImage";
import blogImage from "@/public/images/blogImage.png";
import Link from "next/link";

const Blogger = (): JSX.Element => {
  return (
    <div>
      <Link href="/blog/1">
        <div className="flex min-w-[557px] cursor-pointer flex-row gap-x-6">
          <NextImage
            src={blogImage}
            className="h-[218px] w-[180px] rounded-[10px]"
          />
          <div className="flex h-[177px] w-[353px] flex-col text-dark">
            <h1>Blog başlığı</h1>
            <div className="mt-[15px] flex w-full flex-row">
              <AsideFileIcon /> <p className="ml-2 text-xs">teknoliji</p>{" "}
              <AsideDateIcon className="ml-[15px] text-xs" />
              <p className="ml-2 text-xs">04.17.2022</p>
            </div>
            <p className="mt-2 h-[72px] w-full text-justify text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
              quis ut elit adipiscing nunc. Arcu vel viverra vitae id non massa
              aliquet ac. Ipsum hendrerit netus turpis morbi nisi varius non.
            </p>
            <div className="flex w-[300px] items-center gap-x-5">
              <span className="text-main-blue">Devamını Oku</span>
              <AsideArrowIcon />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Blogger;
