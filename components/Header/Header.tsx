import React, { useEffect, useState } from "react";
import TextLogo from "../../public/icons/text-logo.svg";
import DrawerMenu from "../../public/icons/drawer.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import Drawer from "@/components/Header/Drawer";
import SendIcon from "@/public/icons/send.svg";
import Button from "@/components/Button";
import Dropdown from "@/components/Header/Dropdown";
import NavLink from "@/components/Header/NavLink";
import Color from "color";

const Header = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const router = useRouter();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    setScrolled(window.scrollY > 0);
    const onScroll = (): void => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);
    return (): void => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
  }, [router.asPath]);

  return (
    <header>
      <nav
        className={`fixed top-0 z-40 flex w-full items-center px-5 py-5 transition-[background] transition-all duration-300 md:gap-x-[3%] md:px-10 lg:gap-x-[10%] md-max:justify-between ${
          scrolled
            ? "bg-white [@supports(backdrop-filter:blur(0))]:bg-white/60 [@supports(backdrop-filter:blur(0))]:backdrop-blur-md"
            : ""
        }`}
      >
        <Link href="/">
          <TextLogo className="shrink-0" />
        </Link>
        <div className="flex grow items-center justify-between text-sm md-max:hidden">
          <NavLink title="Hakkımızda" link="/hakkimizda" />
          <NavLink
            className="lg-max:hidden"
            title="Hizmetler"
            link="/hizmetlerimiz"
          >
            <ServicesDropdown />
          </NavLink>
          {/*<NavLink title="Blog" link="/blog" />*/}
          <NavLink
            className="lg-max:hidden"
            title="Takımlar"
            link="/takimlarimiz"
          />
          <NavLink title="Projelerimiz" link="/projelerimiz" />
          <NavLink title="Referanslarımız" link="/#business-partners" />
          <Link href="/iletisim">
            <Button className="flex gap-3">
              <SendIcon />
              <span>İletişim</span>
            </Button>
          </Link>
        </div>
        <DrawerMenu
          onClick={() => setDrawerOpen(true)}
          className="cursor-pointer md:hidden"
        />
      </nav>
      <Drawer isOpen={isDrawerOpen} setIsOpen={setDrawerOpen} />
    </header>
  );
};

export default Header;

const ServicesDropdown = () => {
  return (
    <Dropdown className="flex flex-col p-0">
      <div className="grid w-full grow grid-cols-[repeat(auto-fill,_30rem)] gap-y-10 gap-x-4 overflow-y-auto px-8 py-8 py-5 lg:justify-center">
        <ServiceDropdownItem
          title="Tasarım Hizmetleri"
          mainColor="#BE34FF"
          items={[
            "Web Tasarımı",
            "Mobil Tasarım",
            "Sosyal M. Tasarımı",
            "Kurumsal Kimlik",
            "Logo Tasarımı",
            "İllüstrasyon",
            "3D Modelleme",
            "Kartvizit",
            "Afiş Tasarımı",
            "Flama Tasarımı",
            "Broşür Tasarımı",
          ]}
          selected={7}
        />
        <ServiceDropdownItem
          title="Yazılım Hizmetleri"
          mainColor="#FFBD2E"
          items={[
            "Web Sitesi",
            "Mobil Uygulama",
            "WordPress",
            "Frontend",
            "Backend",
            "Devops",
          ]}
          selected={4}
        />
        <ServiceDropdownItem
          title="Danışmanlık Hizmetleri"
          mainColor="#4841FF"
          items={["Web", "Mobil", "Sosyal Medya"]}
          selected={1}
        />
      </div>
      <div className="flex items-center rounded-3xl bg-gradient-to-r from-[#5C57FF] to-[#CF6AFF] px-[3%] py-6">
        <span className="grow font-medium text-white">
          Aradığınız hizmeti bulamadıysanız bizimle iletişime geçebilirsiniz.
        </span>
        <Link href="/iletisim">
          <Button variant="secondary-light" className="flex gap-3">
            <span>İletişim</span>
            <SendIcon />
          </Button>
        </Link>
      </div>
    </Dropdown>
  );
};

const ServiceDropdownItem = ({
  title,
  items = [],
  selected,
  mainColor = "black",
}: {
  title: string;
  items?: string[];
  selected?: number;
  mainColor?: string;
}) => {
  return (
    <div className="flex flex-col font-medium">
      <h2 style={{ color: mainColor }} className="px-3 py-2 text-lg">
        {title}
      </h2>
      <div className="grid w-full grid-cols-[repeat(auto-fill,_10rem)] gap-y-2">
        {items.map((item, index) => (
          <span
            key={index}
            style={{
              color: selected == index ? mainColor : undefined,
              backgroundColor:
                selected == index
                  ? Color(mainColor).fade(0.9).toString()
                  : undefined,
            }}
            className={`rounded-lg px-3 py-2 text-sm text-gray`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
