import React from "react";
import AllCategories from "@/components/Blog/AllCategories";
import BlogButton from "@/components/Blog/BlogButton";
import BlogCard from "@/components/Blog/BlogCard";
import Blogger from "@/components/Blog/Blogger";
import PagePaddingContainer from "@/components/PagePaddingContainer";
import PageTopSectionContainer from "@/components/PageTopSectionContainer";
import Slider from "react-slick";

const Blog = () => {
  function ArrowHidden(props: any) {
    const { style } = props;
    return <div style={{ ...style, display: "hidden" }} />;
  }

  const slidercard = Array(10)
    .fill(1)
    .map((e, index) => {
      return {};
    });
  const blogcard = Array(4)
    .fill(1)
    .map((e, index) => {
      return {};
    });

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    nextArrow: <ArrowHidden />,
    prevArrow: <ArrowHidden />,
  };
  const bloggercard = Array(5)
    .fill(1)
    .map((e, index) => {
      return {};
    });
  return (
    <div>
      <PagePaddingContainer>
        <PageTopSectionContainer>
          <h1 className="text-center text-4xl font-medium text-main-blue">
            Zalisoft | Blog
          </h1>
        </PageTopSectionContainer>
        <p className="mx-auto mt-[24px] max-w-[630px] text-center text-sm font-medium md-max:text-justify md-max:text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu lobortis
          integer eu in. Ipsum magna a vestibulum erat ultricies gravida egestas
          amet turpis.{" "}
        </p>

        <div className="mt-[81px] mb-[81px] flex justify-center xl-max:hidden">
          <div className="custom-scrollbar flex h-[50px] max-w-[1215px] flex-row items-center gap-x-5 overflow-x-auto overflow-y-hidden py-4 text-dark">
            {slidercard.map((e, index) => (
              <BlogButton key={index} />
            ))}
          </div>
        </div>
        <div className="flex justify-center xl-max:hidden">
          <div className="h-[565px] w-[1115px]">
            <h1 className="mb-[20px] text-2xl font-semibold text-dark md-max:text-lg">
              <span className="text-main-blue">Öne çıkanlar</span> eklenenler
            </h1>
            <Slider {...settings} className="w-[1115px]">
              {bloggercard.map((e, index) => (
                <BlogCard key={index} />
              ))}
            </Slider>
            <div className="mt-[50px] flex justify-center">
              <AllCategories />
            </div>
          </div>
        </div>
        <div className="flex justify-center xl-max:hidden">
          <div className="h-[565px] w-[1115px]">
            <h1 className="mb-[20px] text-2xl font-semibold text-dark md-max:text-lg">
              <span className="text-main-blue">JavaScript</span> kategorisinde
              öne çıkanlar
            </h1>
            <Slider {...settings} className="w-[1115px]">
              {bloggercard.map((e, index) => (
                <BlogCard key={index} />
              ))}
            </Slider>
            <div className="mt-[50px] flex justify-center">
              <AllCategories />
            </div>
          </div>
        </div>
        <div className="flex justify-center xl-max:hidden">
          <div className="h-[565px] w-[1115px]">
            <h1 className="mb-[20px] text-2xl font-semibold text-dark md-max:text-lg">
              <span className="text-main-blue">C++</span> kategorisinde öne
              çıkanlar
            </h1>
            <Slider {...settings} className="w-[1115px]">
              {bloggercard.map((e, index) => (
                <BlogCard key={index} />
              ))}
            </Slider>
            <div className="mt-[50px] flex justify-center">
              <AllCategories />
            </div>
          </div>
        </div>
        <div className="flex justify-center xl-max:hidden">
          <div className="h-[565px] w-[1115px]">
            <h1 className="mb-[20px] text-2xl font-semibold text-dark md-max:text-lg">
              <span className="text-main-blue">Flutter</span> kategorisinde öne
              çıkanlar
            </h1>
            <Slider {...settings} className="w-[1115px]">
              {bloggercard.map((e, index) => (
                <BlogCard key={index} />
              ))}
            </Slider>
            <div className="mt-[50px] flex justify-center">
              <AllCategories />
            </div>
          </div>
        </div>
        <PagePaddingContainer>
          <div className="mx-auto mt-[60px] mb-[150px] max-w-[1153px] xl:hidden">
            <h1 className="mb-[20px] text-2xl font-semibold text-dark md-max:text-lg">
              <span className="text-main-blue">Öne son</span> eklenenler
            </h1>
            <div className="scrollbar-none flex max-w-[1200px]  flex-row overflow-auto xl:hidden">
              {blogcard.map((e, index) => (
                <BlogCard key={index} />
              ))}
            </div>
            <h1 className="mb-[20px] text-2xl font-semibold text-dark md-max:text-lg">
              <span className="text-main-blue">Öne son</span> eklenenler
            </h1>
            <div className="scrollbar-none flex max-w-[1200px]  flex-row overflow-auto xl:hidden">
              {blogcard.map((e, index) => (
                <BlogCard key={index} />
              ))}
            </div>
            <h1 className="mb-[20px] text-2xl font-semibold text-dark md-max:text-lg">
              <span className="text-main-blue">Öne son</span> eklenenler
            </h1>
            <div className="scrollbar-none flex max-w-[1200px]  flex-row overflow-auto xl:hidden">
              {blogcard.map((e, index) => (
                <BlogCard key={index} />
              ))}
            </div>
            <h1 className="mb-[20px] text-2xl font-semibold text-dark md-max:text-lg">
              <span className="text-main-blue">Öne son</span> eklenenler
            </h1>
            <div className="scrollbar-none flex max-w-[1200px]  flex-row overflow-auto xl:hidden">
              {blogcard.map((e, index) => (
                <BlogCard key={index} />
              ))}
            </div>
          </div>
        </PagePaddingContainer>
      </PagePaddingContainer>
    </div>
  );
};

export default Blog;
