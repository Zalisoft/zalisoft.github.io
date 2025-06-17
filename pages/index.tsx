import type { NextPage } from "next";
import PagePaddingContainer from "@/components/PagePaddingContainer";
import PageTopSectionContainer from "@/components/PageTopSectionContainer";
import React, { useState } from "react";
import useResponsive from "@/components/hooks/useResponsive";
import AnimateReveal from "@/components/AnimateReveal";
import ContactRequestFormInput from "@/components/ContactRequestFormInput";
import SelectionAnimatedText, {
  SelectionAnimatedTextNoAnimationFallBack,
} from "@/components/Home/SelectionAnimatedText";
import NumberedParagraph from "@/components/NumberedParagraph";
import PictureFlow from "@/components/Home/PictureFlow";
import Title from "@/components/Home/Title";
import OurTeamsSection from "@/components/Home/OurTeamsSection";
import OurServicesSection from "@/components/Home/OurServicesSection";
import HorizontalSlidingTrack from "@/components/HorizontalSlidingTrack";
import LocationSection from "@/components/Home/LocationSection";
import ServiceRequestSection from "@/components/Home/ServiceRequestSection";
import TeamAppLanding from "@/components/TeamAppLanding";
import FloatingCardsSection from "@/components/Home/FloatingCardsSection";
import DelayedAnimateReveal from "@/components/DelayedAnimateReveal";
import { Toaster } from "react-hot-toast";

const Home: NextPage = () => {
  const { sm } = useResponsive({});
  const [landingTextAnimationComplete, setLandingTextAnimationComplete] =
    useState(false);

  return (
    <>
      <PagePaddingContainer>
        <PageTopSectionContainer
          className={`${
            !sm || landingTextAnimationComplete ? "cursor-fancy" : ""
          } group`}
        >
          <AnimateReveal className="mx-auto flex max-w-3xl flex-col items-center gap-4">
            {sm ? (
              <SelectionAnimatedText
                onAnimationComplete={() =>
                  setLandingTextAnimationComplete(true)
                }
              >
                İşlerinizi Dijitale Açıyoruz.
              </SelectionAnimatedText>
            ) : (
              <SelectionAnimatedTextNoAnimationFallBack>
                İşlerinizi Dijitale Açıyoruz.
              </SelectionAnimatedTextNoAnimationFallBack>
            )}
            <p className="max-w-[47rem] text-center">
              Bilgi teknolojileri alanında yenilikçi ve sürdürülebilir ürünleri
              ile Zalisoft işlerinizi dijitale çevirmeniz için her zaman
              yanınızda.
            </p>
            <AnimateReveal delay={400}>
              <ContactRequestFormInput
                animation={true}
                showAgreements={false}
              />
            </AnimateReveal>
          </AnimateReveal>
          <FloatingCardsSection />
        </PageTopSectionContainer>
        <div className="mt-32 grid grid-cols-2 gap-10 md:grid-cols-4 lg:mx-20">
          <NumberedParagraph
            className="text-main-purple"
            count={5}
            title="İş ortağı"
            content="Kendimizi ve şirketimizi daha ileriye taşırken bize destek olan ve yol gösteren iş ortaklarımız"
          />
          <NumberedParagraph
            revealDelay={400}
            className="text-orange"
            count={15}
            title="Proje"
            content="Teslim edilen ve hala üzerinde çalıştığımız 15’in üzerinde proje"
          />
          <NumberedParagraph
            revealDelay={800}
            className="text-green"
            count={4}
            title="Ofis"
            content="Merkez ofisimiz Bursa’da olmak üzere İstanbul ve Denizli’deki ofislerimizle beraber toplam 4 ofis"
          />
          <NumberedParagraph
            revealDelay={1200}
            className="text-yellow"
            count={20}
            title="Çalışan"
            content="Alanında uzman kadromuz eşliğinde altyapıdan yetiştirdiğimiz toplamda 20’nin üzerinde çalışan"
          />
        </div>
      </PagePaddingContainer>
      <DelayedAnimateReveal enabledDelay={2000}>
        <PictureFlow />
      </DelayedAnimateReveal>
      <OurTeamsSection />
      <OurServicesSection />
      <ServiceRequestSection />
      <TeamAppLanding />
      <LocationSection />
      <section
        id="business-partners"
        className="my-20 flex scroll-mt-20 flex-col"
      >
        <DelayedAnimateReveal enabledDelay={2000}>
          <HorizontalSlidingTrack className="h-16 items-center gap-8 [&>*]:h-14 [&>*]:w-32 [&>*]:cursor-pointer [&>*]:object-contain [&>*]:opacity-50 [&>*]:transition-[opacity,transform] [&>*]:duration-500 hover:[&>*]:scale-110 hover:[&>*]:opacity-100">
            <img src="/images/mobile-logo.png" alt="Mobile logo" />
            <img src="/images/devops-logo.png" alt="Devops logo" />
            <img src="/images/worthaze-logo.png" alt="Worthaze logo" />
            <img src="/images/zalisoft-social.png" alt="Social logo" />
            <img
              src="/images/octo-logo.png"
              alt="Octo logo"
              className="h-full"
            />
            <img
              src="/images/backend-logo.png"
              alt="Web logo"
              className="h-full"
            />
          </HorizontalSlidingTrack>
        </DelayedAnimateReveal>
        <PagePaddingContainer className="flex flex-col items-center">
          <Title>İş Ortaklarımız</Title>
          <p className="mb-10 max-w-2xl text-center">
            İşlerimizi daha da ileriye taşırken bu süreçte yanımızda olan iş
            ortaklarımız:
          </p>
        </PagePaddingContainer>
        {/*TODO Solve Width auto issue*/}
        <DelayedAnimateReveal enabledDelay={2000}>
          <HorizontalSlidingTrack className="h-16 items-center gap-8 [&>*]:h-14 [&>*]:w-32 [&>*]:cursor-pointer [&>*]:object-contain [&>*]:opacity-50 [&>*]:transition-[opacity,transform] [&>*]:duration-500 hover:[&>*]:scale-110 hover:[&>*]:opacity-100">
            <img
              src="/images/our-business-partners/as-logo.png"
              alt="AS logo"
            />
            <img
              src="/images/our-business-partners/filiz-turanli-logo.png"
              alt="Filiz Turanli logo"
            />
            <img src="/images/our-business-partners/g-logo.png" alt="G logo" />
            <img
              src="/images/our-business-partners/lazarun-logo.png"
              alt="Lazarun logo"
            />
            <img
              src="/images/our-business-partners/tur-filo-logo.png"
              alt="Tur Filo logo"
              className="h-full"
            />
          </HorizontalSlidingTrack>
        </DelayedAnimateReveal>
      </section>
      <Toaster position="top-center" />
    </>
  );
};

export default Home;
