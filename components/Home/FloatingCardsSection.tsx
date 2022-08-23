import React from "react";
import AnimateReveal from "@/components/AnimateReveal";
import FloatingCard from "@/components/Home/FloatingCard";
import JsBadge from "@/public/icons/home/floating-cards/js-badge.svg";
import HtmlBadge from "@/public/icons/home/floating-cards/html-badge.svg";
import CssBadge from "@/public/icons/home/floating-cards/css-badge.svg";
import ReactParallaxTilt from "react-parallax-tilt";
import MagicCard from "@/public/icons/home/floating-cards/magic-card.svg";
import ResizeCard from "@/public/icons/home/floating-cards/resize-card.svg";
import SelectCard from "@/public/icons/home/floating-cards/select-card.svg";
import TextCard from "@/public/icons/home/floating-cards/text-card.svg";
import BrushCard from "@/public/icons/home/floating-cards/brush-card.svg";
import RandomCard from "@/public/icons/home/floating-cards/random-card.svg";
import PencilCard from "@/public/icons/home/floating-cards/pencil-card.svg";

const FloatingCardsSection = () => {
  return (
    <AnimateReveal className="flex px-10 md-max:hidden [@media_(max-width:1214px)]:mt-16">
      {/*Left*/}
      <div className="flex basis-1/3 -translate-y-[4vw] flex-col items-start gap-4">
        <FloatingCard rightBadge={<JsBadge className="drop-shadow" />}>
          <p className="text-xs">
            <span className="text-green">console</span>
            <span className="text-orange">.</span>
            <span className="text-yellow">log</span>
            <span className="text-orange">(“Hello World!”);</span>
          </p>
        </FloatingCard>
        <FloatingCard
          className="self-end"
          rightBadge={<HtmlBadge className="drop-shadow" />}
        >
          <p className="text-xs">
            <span className="text-green">{"<p>"}</span>
            <span className="text-orange">Crazy Coders</span>
            <span className="text-green">{"</p>"}</span>
          </p>
        </FloatingCard>
        <FloatingCard
          className="mr-[25%] mt-12 self-end"
          rightBadge={<CssBadge className="drop-shadow" />}
        >
          <p className="text-xs">
            <span className="text-orange">body</span>
            <span className="text-yellow">{" { "}</span>
            <span className="text-green">height: 100vh;</span>
            <span className="text-yellow">{" } "}</span>
          </p>
        </FloatingCard>
      </div>
      {/*Center*/}
      <div className="mt-14 flex basis-1/3 flex-col gap-4">
        <div className="flex flex-row justify-between gap-2 px-[22%]">
          <ReactParallaxTilt
            perspective={500}
            glareEnable={true}
            glareMaxOpacity={0.45}
            scale={1.02}
            className="transition-all hover:drop-shadow-lg"
          >
            <MagicCard className="self-end" />
          </ReactParallaxTilt>
          <ReactParallaxTilt
            perspective={500}
            glareEnable={true}
            glareMaxOpacity={0.45}
            scale={1.02}
            className="transition-all hover:drop-shadow-lg"
          >
            <ResizeCard />
          </ReactParallaxTilt>
        </div>
        <ReactParallaxTilt
          perspective={500}
          glareEnable={true}
          glareMaxOpacity={0.45}
          scale={1.02}
          className="mx-auto transition-all hover:drop-shadow-lg"
        >
          <SelectCard />
        </ReactParallaxTilt>
        <div className="flex flex-row justify-between px-[8%]">
          <ReactParallaxTilt
            perspective={500}
            glareEnable={true}
            glareMaxOpacity={0.45}
            scale={1.02}
            className="transition-all hover:drop-shadow-lg"
          >
            <TextCard className="self-end" />
          </ReactParallaxTilt>
          <ReactParallaxTilt
            perspective={500}
            glareEnable={true}
            glareMaxOpacity={0.45}
            scale={1.02}
            className="transition-all hover:drop-shadow-lg"
          >
            <BrushCard className="-translate-y-8" />
          </ReactParallaxTilt>
        </div>
        <div className="flex flex-row justify-between gap-2 pl-[34%] pr-[26%]">
          <ReactParallaxTilt
            perspective={500}
            glareEnable={true}
            glareMaxOpacity={0.45}
            scale={1.02}
            className="transition-all hover:drop-shadow-lg"
          >
            <RandomCard />
          </ReactParallaxTilt>
          <ReactParallaxTilt
            perspective={500}
            glareEnable={true}
            glareMaxOpacity={0.45}
            scale={1.02}
            className="transition-all hover:drop-shadow-lg"
          >
            <PencilCard />
          </ReactParallaxTilt>
        </div>
      </div>
      {/*Right*/}
      <div className="flex basis-1/3 -translate-y-[4vw] flex-col items-end gap-4">
        <FloatingCard leftBadge={<JsBadge className="drop-shadow" />}>
          <p className="text-xs">
            <span className="text-green">console</span>
            <span className="text-orange">.</span>
            <span className="text-yellow">log</span>
            <span className="text-orange">(“Welcome!”);</span>
          </p>
        </FloatingCard>
        <FloatingCard
          className="self-start"
          leftBadge={<HtmlBadge className="drop-shadow" />}
        >
          <p className="text-xs">
            <span className="text-yellow">{"<p>"}</span>
            <span className="text-orange">Talented Designers</span>
            <span className="text-yellow">{"</p>"}</span>
          </p>
        </FloatingCard>
        <FloatingCard
          className="ml-[25%] mt-12 self-start"
          leftBadge={<CssBadge className="drop-shadow" />}
        >
          <p className="text-xs">
            <span className="text-orange">p</span>
            <span className="text-yellow">{" { "}</span>
            <span className="text-green">color: #FB5800;</span>
            <span className="text-yellow">{" } "}</span>
          </p>
        </FloatingCard>
      </div>
    </AnimateReveal>
  );
};

export default FloatingCardsSection;
