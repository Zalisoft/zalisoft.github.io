import NextImage from "@/components/NextImage";
import PagePaddingContainer from "@/components/PagePaddingContainer";
import PageTopSectionContainer from "@/components/PageTopSectionContainer";
import React from "react";
import RotarySVG from "../public/icons/rotary.svg";
import Seo from "@/components/Seo";
import Link from "next/link";
import AppleSVG from "../public/icons/apple.svg";
import AsLogo from "../public/icons/as-logo.svg";
import PlaystoreSVG from "../public/icons/playstore.svg";
import AnimateReveal from "@/components/AnimateReveal";
import { ReactNode } from "react";
import as1 from "../public/images/as1.png";
import as2 from "../public/images/as2.png";
import as3 from "../public/images/as3.png";
import as4 from "../public/images/as4.png";
import as5 from "../public/images/as5.png";
import as6 from "../public/images/as6.png";

const AsApp = () => {
  return (
    <>
      <PageTopSectionContainer>
        <Seo mainTitle="anneler-satiyor" />
        <PagePaddingContainer>
          <div className="mb-[-40px]  flex h-16 w-52 cursor-pointer sm-max:mx-auto sm-max:mb-[-80px]">
            <Link href={"https://annelersatiyor.com/"} target={"_blank"}>
              <AsLogo className="h-full w-full" />
            </Link>
          </div>
        </PagePaddingContainer>
        <PagePaddingContainer className="flex flex-row items-center justify-center gap-x-8 lg-max:flex-col ">
          <AnimateReveal
            direction="from-left"
            className="flex w-1/2 flex-col items-center justify-center lg-max:w-full"
          >
            <NextImage
              src={as1}
              objectFit="contain"
              className="aspect-[1] h-full w-full  lg-max:w-3/4 sm-max:aspect-[0.6]"
            />
          </AnimateReveal>

          <AnimateReveal
            direction="from-right"
            className=" w-1/2 flex-col items-center justify-center lg-max:w-full"
          >
            <div className="mx-auto h-64 max-w-[572px] rounded-3xl sm-max:mt-[-90px] sm-max:h-[170px] sm-max:w-full">
              <iframe
                allowFullScreen
                className="h-full w-full rounded-3xl "
                src="https://www.youtube.com/embed/EObjoLRXCV8"
                // src="https://www.youtube.com/watch?v=Jv_2ogTgWOQ&list=WL&index=10"
                // BU ÇALIŞMIYOR
                title="AnnelerSatıyor video"
              ></iframe>
            </div>

            <div className="mx-auto mt-4 flex  max-w-[572px] flex-row gap-x-2">
              <div className="ml-[-20px] flex h-[53px] w-[180px] items-center justify-center">
                <AsLogo className="h-11 w-32" />
              </div>
              <div className=" flex flex-col items-center justify-center gap-x-2">
                <p className="sm-max:text-xs">Annelerin Sosyal Pazar Yeri</p>
                <p className="duration-300 ease-linear hover:font-medium hover:text-black sm-max:text-xs">
                  <Link target={"_blank"} href={"https://annelersatiyor.com/"}>
                    https://annlersatiyor.com
                  </Link>
                </p>
              </div>
            </div>
            <div className="mx-auto mt-4 flex  max-w-[572px] flex-row gap-x-2 ">
              <div className="flex h-[53px] w-[180px] items-center justify-center gap-x-2 rounded-xl bg-black p-2">
                <AppleSVG />
                <span className="text-sm text-white">
                  App Store dan İndirin
                </span>
              </div>
              <div className=" flex h-[53px] w-[180px] items-center justify-center gap-x-2 rounded-xl bg-black p-2">
                <PlaystoreSVG />
                <span className="text-sm text-white">
                  Google Play den İndirin
                </span>
              </div>
            </div>
          </AnimateReveal>
        </PagePaddingContainer>
        <PagePaddingContainer>
          <div className="flex flex-row items-center justify-center gap-x-32  lg-max:flex-col">
            <div className="h-[500px] w-[500px] items-center justify-center xs-max:w-full">
              <NextImage
                src={as2}
                objectFit="contain"
                className="h-full w-full"
              />
            </div>
            <AnimateReveal direction="from-right">
              <div className="h-[500px] w-[500px] items-center justify-center pt-[70px] lg-max:mt-[-50px] xs-max:w-full">
                <MainTitle>Anneler Satıyor Hakkında</MainTitle>
                <p className="text-gray">
                  Anneler Satıyor; binlerce ürüne anında ulaşabileceğiniz, en
                  uygun fiyatlarla alışveriş yapabileceğiniz ve isterseniz
                  elinizdeki ürünleri kolaylıkla alıcılarla buluşturabileceğiz
                  bir platform, annelerin yeni pazaryeridir. Anneler kullandığı
                  veya kullanmaya zaman bile bulamadığı anne, bebek eşyalarını
                  kolayca diğer anneler ile buluşturabilirler. Sayısız
                  kategorideki ürünlere kolayca ulaşıp dilerlerse bu
                  kategorilerde satış yapabilirler. Dilerlerse de el emeği göz
                  nuru ürünlerini de Anneler Satıyor üzerinden kolayca alıcılara
                  sunabilirler.
                </p>
              </div>
            </AnimateReveal>
          </div>
        </PagePaddingContainer>
        <PagePaddingContainer>
          <div className="flex flex-row items-center justify-center gap-x-14  lg-max:flex-col">
            <div className="h-[500px] w-[500px] items-center justify-center xs-max:w-full">
              <NextImage
                src={as3}
                objectFit="contain"
                className="h-full w-full"
              />
            </div>
            <AnimateReveal direction="from-bottom">
              <div className="lg-max:hidden sm-max:block">
                <RotarySVG className="h-9 w-full" />
              </div>
            </AnimateReveal>

            <div className="h-[500px] w-[500px] items-center justify-center xs-max:w-full">
              <NextImage
                src={as4}
                objectFit="contain"
                className="h-full w-full"
              />
            </div>
          </div>
        </PagePaddingContainer>
        <PagePaddingContainer>
          <div className="flex flex-row items-center justify-center gap-x-32  lg-max:flex-col">
            <AnimateReveal direction="from-left">
              <div className="h-[500px] w-[500px] items-center justify-center pt-[70px] lg-max:mt-[-50px] xs-max:w-full">
                <MainTitle>Anneler Satıyor Nedir?</MainTitle>
                <p className="text-gray">
                  Anneler Satıyor annelerin kendi el emekleri ile üretmiş
                  oldukları ürünlerden, miniklerin ikinci kez giymesine fırsat
                  kalmadan küçülen kıyafetlerine kadar daha birçok ürünün
                  satılabildiği bir alışveriş platformudur. Fakat Anneler
                  Satıyor yalnızca maddi alışverişin değil anneler arasında
                  fikir alışverişinin de yapılabildiği çok yönlü bir alandır.
                  Burada yeni anne adayları, taze anneler, tecrübeli anneler
                  birbirleri ile fikir alışverişi yapabilir, gülüp eğlenebilir.
                  Kısacası Annelersatıyor.com annelerin isteklerini tek bir
                  noktada toplayan harika bir platformdur.
                </p>
              </div>
            </AnimateReveal>
            <AnimateReveal direction="from-right">
              <div className="h-[500px] w-[500px] items-center justify-center pt-[70px] lg-max:mt-[-50px] xs-max:mb-44 xs-max:w-full">
                <MainTitle>Anneler Satıyor Üzerinden Ne Satabilirim?</MainTitle>
                <p className="text-gray">
                  Annelersatiyor.com annelere sınır koymayan ikinci el satış
                  platformudur. Burada anneler bebek arabasından beşiğe,
                  oyuncaklardan, kitaplara, tasarlamış oldukları el
                  emeklerinden, kapı süslerine kadar aklınıza gelebilecek her
                  şeyi satabilmektedir. Ayrıca yalnızca ikinci el değil sıfır
                  ürün satan mağazalar da Annelersatıyor.com içerisinde yer
                  almaktadır. Böylece tek bir platform içerisinde ihtiyacınız
                  olan ürünün hem sıfır hem de ikinci eline rahatlıkla
                  ulaşabilir ve güvenle alışveriş yapabilirsiniz. Anneler
                  Satıyor’da satış yapmak isteyen anneler sanal bir dükkâna
                  sahip olurlar. Bu sanal dükkân içerisinde diledikleri
                  ürünleri, fotoğrafları ve açıklamalarını ekleyerek kolayca
                  satış yapabilirler. Böylece ellerinde bulunan ve
                  kullanmadıkları ürünleri nakitte çevirirken aynı zamanda o
                  ürüne ihtiyaç duyan annelere ürünleri kolayca
                  ulaştırabilirler.
                </p>
              </div>
            </AnimateReveal>
          </div>
        </PagePaddingContainer>
        <PagePaddingContainer>
          <div className="flex flex-row items-center justify-center gap-x-14  lg-max:flex-col">
            <div className="h-[500px] w-[500px] items-center justify-center xs-max:w-full">
              <NextImage
                src={as5}
                objectFit="contain"
                className="h-full w-full"
              />
            </div>
            <AnimateReveal direction="from-bottom">
              <div className="lg-max:hidden sm-max:block">
                <RotarySVG className="h-9 w-full" />
              </div>
            </AnimateReveal>

            <div className="h-[500px] w-[500px] items-center justify-center xs-max:w-full">
              <NextImage
                src={as6}
                objectFit="contain"
                className="h-full w-full"
              />
            </div>
          </div>
        </PagePaddingContainer>
        <PagePaddingContainer>
          <div className="flex flex-row items-center justify-center gap-x-32  lg-max:flex-col">
            <AnimateReveal direction="from-left">
              <div className="h-[500px] w-[500px] items-center justify-center pt-[70px] lg-max:mt-[-50px] xs-max:w-full">
                <MainTitle>
                  Anneler Satıyor Uygulamasının Diğerlerinden Farkı Nedir?
                </MainTitle>
                <p className="text-gray">
                  Annelersatiyor.com annelerine herhangi bir sınır kısıtlama
                  koymuyor. Annelerin satışa koymak istedikleri ürünleri
                  platformuna kabul ederek ihtiyaç duyan annelerin ürüne
                  ulaşması için aracı oluyor. Yeni ürün satın almaktan çok daha
                  uygun fiyata 1-2 defa kullanılmış veya hiç kullanılmamış
                  ürünlere sahip olan anneler de satışı yapan anneler de aile
                  ekonomilerine sağladıkları katkı sebebiyle mutlu oluyor. Mutlu
                  anneler eşittir Mutluannelersatıyor!
                </p>
              </div>
            </AnimateReveal>
            <AnimateReveal direction="from-right">
              <div className="h-[500px] w-[500px] items-center justify-center pt-[70px] lg-max:mt-[-50px] xs-max:w-full">
                <MainTitle>Nasıl Satış Yapabilirim?</MainTitle>
                <p className="text-gray">
                  Annelersatiyor.com tüm annelerin fazla vakit harcamadan,
                  gereksiz uğraşlara girmeden kolayca satışlarını
                  yapabilecekleri şekilde tasarlanmıştır. Kolay ara yüzü
                  sayesinde platformda satışa sunulacak ürünleri yüklemek
                  oldukça basittir. Satışı yapılacak ürünün fotoğrafı,
                  açıklaması ve fiyat bilgisi ilgili alanlara girildikten sonra
                  yapılması gereken tek şey Annelersatiyor.com bildirimlerini
                  takip etmektir. Annelersatiyor.com sisteme yeni eklenen ürünü
                  diğer annelerin karşısına çıkararak kolaylıkla fark edilmesini
                  sağlamaktadır. Herhangi bir satış işleminin ardından satışı
                  yapan anneye bildirim gelmekte ve ürün satılmaktadır.
                  Anlaşmalı kargo şirketi ile gönderimi yapılan ürün güvenle
                  diğer anneye ulaşır!
                </p>
              </div>
            </AnimateReveal>
          </div>
        </PagePaddingContainer>
      </PageTopSectionContainer>
    </>
  );
};

const MainTitle = ({ children }: { children?: ReactNode }) => {
  return <h2 className="mb-5 text-2xl text-main-asGreen">{children}</h2>;
};

export default AsApp;
