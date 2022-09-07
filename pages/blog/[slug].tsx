import NextImage from "@/components/NextImage";
import PagePaddingContainer from "@/components/PagePaddingContainer";
import PageTopSectionContainer from "@/components/PageTopSectionContainer";
import React from "react";
import blogImage from "@/public/images/blogImage.png";
import blogImage2 from "@/public/images/blogImage2.png";
import Interesting from "@/components/Blog/Interesting";
import Blogger from "@/components/Blog/Blogger";
import BlogButton from "@/components/Blog/BlogButton";
import BlogCard from "@/components/Blog/BlogCard";

const BlogPage = () => {
  const slidercard = Array(12)
    .fill(1)
    .map((e, index) => {
      return {};
    });
  const blogcard = Array(4)
    .fill(1)
    .map((e, index) => {
      return {};
    });
  const bloggercard = Array(5)
    .fill(1)
    .map((e, index) => {
      return {};
    });
  return (
    <div>
      <PagePaddingContainer>
        <PageTopSectionContainer>
          <div className="mt-[81px] mb-[46px] flex justify-center">
            <div className="custom-scrollbar xl-max:max:w-[1200px] flex h-[50px] w-[1155px] flex-row items-center gap-x-5 overflow-x-auto overflow-y-hidden py-4 text-dark xl:hidden">
              {slidercard.map((e, index) => (
                <BlogButton key={index} />
              ))}
            </div>
          </div>
          <h3 className="flex h-[18px] w-[650px] gap-x-9 text-xs font-medium text-dark md-max:max-w-[350px] md-max:gap-x-2 md-max:text-[9px]">
            <p>Blog/Teknoloji/Blog Yazısı Ana Başlığı</p>
            <p>04.17.2022 - 11:31 Tarihinde yayınlandı</p>
          </h3>
        </PageTopSectionContainer>
        <h1 className="mt-[16px] text-4xl font-medium text-dark md-max:text-xl">
          Blog Yazısı Ana Başlığı
        </h1>
      </PagePaddingContainer>
      <div className="mt-[53px] flex gap-x-[154px]">
        <div className="flex flex-col xl:min-w-[798px] xl-max:w-full">
          <NextImage
            src={blogImage}
            className="important mx-[40px] h-[243px] w-full rounded-[20px] xl-max:ml-0"
            alt="technology"
          />
          <PagePaddingContainer className="xl:!pr-0">
            <div className="flex w-full flex-col text-dark ">
              <h1 className="mt-[24px] text-2xl font-medium">Blog Başlığı</h1>
              <p className="mt-[16px] w-full  text-justify text-sm md-max:text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                nulla tellus at tristique enim, fames faucibus senectus diam.
                Egestas eget ut nisi ut nunc nibh euismod fringilla hendrerit.
                Bibendum neque facilisis mi, sociis rutrum ante sodales id.
                Luctus praesent at in nulla tristique at hac eget. Donec mattis
                nisl, aliquet est felis auctor commodo feugiat porttitor. Mi
                risus, in eu fames. Semper risus integer pellentesque rhoncus
                lacus aliquet. Maecenas nibh nam tristique enim scelerisque id
                pulvinar. Suspendisse viverra risus orci nec. Interdum proin
                tellus cursus porttitor elementum lobortis rutrum tempus. Nulla
                consequat eleifend condimentum viverra volutpat sit praesent
                interdum. Purus nulla nisi, gravida lorem diam. Turpis nulla
                urna, dictum malesuada varius. Et donec consequat scelerisque
                suscipit commodo sed id netus.
              </p>
            </div>
          </PagePaddingContainer>
          <NextImage
            src={blogImage2}
            className="mt-[36px] ml-[40px] h-[214px] w-[70%] rounded-[10px] xl-max:ml-0 xl-max:w-full"
            alt="team image"
          />
          <PagePaddingContainer className="xl:!pr-0">
            <div className="flex flex-col text-dark">
              <h1 className="mt-[24px] text-2xl font-medium">
                Blog ikincil Başlığı
              </h1>
              <p className="mt-[16px] text-justify text-sm md-max:text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                nulla tellus at tristique enim, fames faucibus senectus diam.
                Egestas eget ut nisi ut nunc nibh euismod fringilla hendrerit.
                Bibendum neque facilisis mi, sociis rutrum ante sodales id.
                Luctus praesent at in nulla tristique at hac eget. Donec mattis
                nisl, aliquet est felis auctor commodo feugiat porttitor. Mi
                risus, in eu fames. Semper risus integer pellentesque rhoncus
                lacus aliquet. Maecenas nibh nam tristique enim scelerisque id
                pulvinar. Suspendisse viverra risus orci nec. Interdum proin
                tellus cursus porttitor elementum lobortis rutrum tempus. Nulla
                consequat eleifend condimentum viverra volutpat sit praesent
                interdum. Purus nulla nisi, gravida lorem diam. Turpis nulla
                urna, dictum malesuada varius. Et donec consequat scelerisque
                suscipit commodo sed id netus.
              </p>
            </div>
            <li className="mt-[81px] list-disc md-max:hidden">
              <span className="text-xl">Yazar ismi</span>/ Yazarın Uzman Olduğu
              Alan
            </li>
          </PagePaddingContainer>
        </div>
        <div className="max-w-[441px] xl-max:hidden">
          <h1 className="text-2xl text-main-blue">İlginizi Çekebilir</h1>
          <div className="mt-6 flex w-[400px] flex-row flex-wrap gap-x-4 gap-y-9 text-dark">
            {slidercard.map((e, index) => (
              <BlogButton key={index} />
            ))}
          </div>
          <div className="mt-[81px] w-full">
            <h1 className="text-2xl text-main-blue">İlginizi Çekebilir</h1>
            {bloggercard.map((e, index) => (
              <Interesting key={index} />
            ))}
          </div>
        </div>
      </div>
      <PagePaddingContainer>
        <div className="mx-auto mt-[180px] mb-[150px] max-w-[1153px]">
          <h1 className="mb-[24px] text-2xl font-semibold text-main-blue">
            İlgili Blog Yazılarımız
          </h1>
          <div className="grid grid-cols-2  gap-x-[39px] gap-y-[50px] xl-max:hidden">
            {blogcard.map((e, index) => (
              <Blogger key={index} />
            ))}
          </div>
          <div className="scrollbar-none flex max-w-[1200px]  flex-row overflow-auto xl:hidden">
            {blogcard.map((e, index) => (
              <BlogCard key={index} />
            ))}
          </div>
          <h1 className="mt-[24px] mb-[20px] text-2xl font-semibold text-main-blue xl:hidden">
            İlginizi çekebilir
          </h1>
          <div className="scrollbar-none flex max-w-[1200px]  flex-row overflow-auto xl:hidden">
            {blogcard.map((e, index) => (
              <BlogCard key={index} />
            ))}
          </div>
        </div>
      </PagePaddingContainer>
    </div>
  );
};

export default BlogPage;
