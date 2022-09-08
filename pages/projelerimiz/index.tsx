import Button from "@/components/Button";
import PageTopSectionContainer from "@/components/PageTopSectionContainer";
import TeamAppLanding from "@/components/TeamAppLanding";
import AsAppLanding from "@/components/AsApp";
import Link from "next/link";
import React from "react";
import ArrowRight from "@/public/icons/arrow-right-long.svg";

const Layout = () => {
  return (
    <PageTopSectionContainer>
      <TeamAppLanding />
      <div className="mb-16 flex justify-center sm-max:mt-[-50px]">
        <Link href="/team-app">
          <Button className="flex gap-3">
            <span>Daha Fazla Gör</span>
            <ArrowRight />
          </Button>
        </Link>
      </div>
      <AsAppLanding />
      <div className="flex justify-center sm-max:mt-[-50px]">
        <Link href="/anneler-satiyor">
          <Button className="flex gap-3">
            <span>Daha Fazla Gör</span>
            <ArrowRight />
          </Button>
        </Link>
      </div>
    </PageTopSectionContainer>
  );
};

export default Layout;
