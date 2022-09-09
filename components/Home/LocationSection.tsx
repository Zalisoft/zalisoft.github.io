import useResponsive from "@/components/hooks/useResponsive";
import PagePaddingContainer from "@/components/PagePaddingContainer";
import Title from "@/components/Home/Title";
import NextImage from "@/components/NextImage";
import zalisoftEntrance from "@/public/images/zalisoft-entrance.png";
import React, { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import StreetView from "../../public/icons/home/map/street-view.svg";
import Expand from "../../public/icons/home/map/expand.svg";
import Link from "next/link";

const LocationSection = () => {
  const { sm } = useResponsive({ watchPoints: ["sm"] });
  return (
    <PagePaddingContainer>
      <section className="my-20 flex flex-col items-center">
        <Title>Bizi Ziyaret Edin</Title>
        <p className="mb-10 max-w-2xl text-center">
          Bursa’da bulunan en güncel teknolojik altyapıyla çalıştığımız
          ofisimize çalışma saatlerimiz içerisinde her zaman gelebilir, bizi
          ziyaret edebilir ve şirketimiz hakkında daha fazla bilgi
          alabilirsiniz.
        </p>
        <div className="relative flex w-full flex-col overflow-hidden lg:px-16 xl:px-20">
          <NextImage
            src={zalisoftEntrance}
            className="aspect-[1.8] w-full rounded-xl sm:aspect-[2.2] md:rounded-3xl"
          />
          {sm && (
            <Map
              scale={2}
              className="absolute bottom-2 right-2 h-[50%] md:h-[35%] lg:right-[4.5rem] xl:right-[5.5rem]"
            />
          )}
          {!sm && <Map className="mx-auto mb-5 mt-3 shadow-md" />}
        </div>
      </section>
    </PagePaddingContainer>
  );
};

const Map = ({
  className,
  scale = 2,
  ...rest
}: ComponentPropsWithoutRef<"div"> & { scale?: number }) => {
  return (
    <div
      className={twMerge(
        "relative z-10 aspect-[1.7] overflow-hidden rounded-xl border-2 border-white bg-white md:rounded-3xl md:border-[5px]",
        className
      )}
      {...rest}
    >
      <div className="absolute top-2 left-2 flex gap-2">
        <a
          href="https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=40.2117069,28.9873064&heading=237.97&pitch=20.53"
          className="flex aspect-square w-10 rounded-xl bg-main-blue hover:bg-main-blue/90"
          target="_blank"
          rel="noreferrer"
        >
          <StreetView className="m-auto" />
        </a>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Zalisoft"
          target="_blank"
          rel="noreferrer"
          className="flex aspect-square w-10 rounded-xl bg-main-blue hover:bg-main-blue/90"
        >
          <Expand className="m-auto" />
        </a>
      </div>
      <a
        href="https://www.google.com/maps/search/?api=1&query=Zalisoft"
        className="cursor-pointer"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={`https://maps.googleapis.com/maps/api/staticmap?markers=Zalisoft&zoom=16&size=1200x1200&scale=${scale}&key=AIzaSyAy4plJ-U7QWxbYtCtu_QqohPleN5lj_MM&language=tr`}
          alt="Zalisoft location"
          className="h-full w-full object-cover"
        />
      </a>
    </div>
  );
};

export default LocationSection;
