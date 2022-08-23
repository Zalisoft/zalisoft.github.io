import React from "react";
import NextImage from "../NextImage";
import blogImage from "@/public/PNGs/blogImage.png";
import Edit from "@/public/icons/edit.svg";

const AdminCard = (): JSX.Element => {
  return (
    <div className="flex h-[148px] min-w-[340px] flex-row gap-x-[37px] rounded-[24px] bg-white px-[16px] py-4">
      <NextImage
        src={blogImage}
        className="h-[112px] w-[161px] rounded-[15px] md-max:h-[66px] md-max:w-[95px]"
      />
      <div className="flex h-[115px] w-full flex-col">
        <div className="flex flex-row justify-between">
          <p className="text-main-blue md-max:text-xs">Blog Başlığı</p>
          <Edit className="cursor-pointer" />
        </div>
        <p className="mt-4 text-sm text-main-blue md-max:mt-2 md-max:text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet luctus
          elementum elit pulvinar mauris sapien egestas..
        </p>
      </div>
    </div>
  );
};

export default AdminCard;
