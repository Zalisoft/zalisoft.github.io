import PageTopSectionContainer from "@/components/PageTopSectionContainer";
import React from "react";
import LeftTeamCard from "@/components/OurTeams/LeftTeamCard";
import { teams } from "@/components/OurTeams/teams";
import PagePaddingContainer from "@/components/PagePaddingContainer";
import RightTeamCard from "@/components/OurTeams/RightTeamCard";
import AnimateReveal from "@/components/AnimateReveal";
import Seo from "@/components/Seo";

const Teams = () => {
  return (
    <PageTopSectionContainer>
      <Seo mainTitle="Takımlarımız" />
      <PagePaddingContainer>
        <div className="mb-36">
          <AnimateReveal>
            <div>
              {/*Add qualities as parameter*/}
              <LeftTeamCard
                id={teams[0].id}
                logo={teams[0].logo}
                name={teams[0].name}
                description={teams[0].description}
                images={teams[0].images[0]}
                link={teams[0].link}
              />
            </div>
          </AnimateReveal>
          <AnimateReveal delay={400}>
            <div className="mt-56 sm:mt-32 xs-max:mt-20">
              <RightTeamCard
                id={teams[1].id}
                logo={teams[1].logo}
                name={teams[1].name}
                description={teams[1].description}
                images={teams[1].images[0]}
                link={teams[1].link}
              />
            </div>
          </AnimateReveal>
          <AnimateReveal>
            <div className="mt-56 sm:mt-32 xs-max:mt-20">
              <LeftTeamCard
                id={teams[2].id}
                logo={teams[2].logo}
                name={teams[2].name}
                description={teams[2].description}
                images={teams[2].images[0]}
                link={teams[2].link}
              />
            </div>
          </AnimateReveal>
          <AnimateReveal>
            <div className="mt-56 sm:mt-32 xs-max:mt-20">
              <RightTeamCard
                id={teams[3].id}
                logo={teams[3].logo}
                name={teams[3].name}
                description={teams[3].description}
                images={teams[3].images[0]}
                link={teams[3].link}
              />
            </div>
          </AnimateReveal>
          <AnimateReveal>
            <div className="mt-56 sm:mt-32 xs-max:mt-20">
              <LeftTeamCard
                id={teams[4].id}
                logo={teams[4].logo}
                name={teams[4].name}
                description={teams[4].description}
                images={teams[4].images[0]}
                link={teams[4].link}
              />
            </div>
          </AnimateReveal>
          <AnimateReveal>
            <div className="mt-56 sm:mt-32 xs-max:mt-20">
              <RightTeamCard
                id={teams[5].id}
                logo={teams[5].logo}
                name={teams[5].name}
                description={teams[5].description}
                images={teams[5].images[0]}
                link={teams[5].link}
              />
            </div>
          </AnimateReveal>
          <AnimateReveal>
            <div className="mt-56 sm:mt-32 xs-max:mt-20">
              <LeftTeamCard
                id={teams[6].id}
                logo={teams[6].logo}
                name={teams[6].name}
                description={teams[6].description}
                images={teams[6].images[0]}
                link={teams[6].link}
              />
            </div>
          </AnimateReveal>
        </div>
      </PagePaddingContainer>
    </PageTopSectionContainer>
  );
};

export default Teams;
