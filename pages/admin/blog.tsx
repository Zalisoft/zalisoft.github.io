import AdminCard from "@/components/Admin/AdminCard";
import BlogButton from "@/components/Blog/BlogButton";
import Button from "@/components/Button";
import PagePaddingContainer from "@/components/PagePaddingContainer";
import PageTopSectionContainer from "@/components/PageTopSectionContainer";
import Added from "@/public/icons/added.svg";
import DownArrow from "@/public/icons/downarrow.svg";
import React from "react";

const Blog = () => {
  const slidercard = Array(10)
    .fill(1)
    .map((e, index) => {
      return {};
    });
  const admincard = Array(8)
    .fill(1)
    .map((e, index) => {
      return {};
    });
  return (
    <div>
      <PagePaddingContainer>
        <PageTopSectionContainer>
          <h1 className="text-center text-4xl font-medium text-main-blue">
            Blog Ekle
          </h1>
        </PageTopSectionContainer>
        <p className="mx-auto mt-[24px] max-w-[630px] text-center text-sm font-medium md-max:text-justify md-max:text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu lobortis
          integer eu in. Ipsum magna a vestibulum erat ultricies gravida egestas
          amet turpis.{" "}
        </p>

        <div className="mt-[81px] mb-[81px] flex justify-center ">
          <div className="custom-scrollbar flex h-[50px] max-w-[1215px] flex-row items-center gap-x-5 overflow-x-auto overflow-y-hidden py-4 text-dark">
            {slidercard.map((e, index) => (
              <BlogButton key={index} />
            ))}
          </div>
        </div>
        <div className="mt-[54px] flex flex-row md:justify-between md-max:flex-col md-max:items-center md-max:gap-y-[17px]">
          <p className="text-2xl font-medium text-main-blue md-max:text-base">
            Teknoloji Kategorisindeki Blog Yazıları
          </p>
          <Button className="flex gap-x-3">
            <Added /> <p>Yeni Blog Ekle</p>
          </Button>
        </div>
        <div className="mt-[44px]  grid grid-cols-2 gap-y-[23px] gap-x-[35px] lg-max:grid-cols-1 ">
          {admincard.map((e, index) => (
            <AdminCard key={index} />
          ))}
        </div>
        <div className="mt-[81px] mb-[200px] flex justify-center">
          <Button className="flex gap-x-3">
            <p>Daha Fazla Gör</p>
            <DownArrow />
          </Button>
        </div>
      </PagePaddingContainer>
    </div>
  );
};

export default Blog;
