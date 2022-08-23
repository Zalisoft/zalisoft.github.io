import React, {
  ComponentPropsWithoutRef,
  ReactNode,
  useEffect,
  useState,
} from "react";
import TextLogo from "../../public/icons/text-logo-white.svg";
import Close from "../../public/icons/close-white.svg";
import RightArrow from "../../public/icons/arrow-right-white.svg";
import Link, { LinkProps } from "next/link";
import AnimateHeight from "react-animate-height";

const Drawer = ({
  isOpen = false,
  setIsOpen,
}: {
  isOpen?: boolean;
  setIsOpen: (open: boolean) => void;
}): JSX.Element => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <div
      className={`fixed top-0 z-50 flex h-full w-full flex-col items-stretch overflow-auto bg-background-drawer bg-cover bg-center bg-no-repeat px-5 py-5 text-white md:hidden ${
        isOpen ? "right-0" : "-right-full"
      } drop-shadow-xl transition-all duration-1000`}
    >
      <div className="mb-5 flex w-full items-center justify-between">
        <Link href="/">
          <TextLogo />
        </Link>
        <Close
          className="w-5 cursor-pointer hover:stroke-black"
          onClick={() => {
            setIsOpen(false);
          }}
        />
      </div>
      <div className="mx-auto mt-16 flex flex-col gap-10">
        <h2 className="mb-5 text-center text-4xl">Menü</h2>
        <DrawerItem href="/" title="Ana Sayfa" />
        <DrawerItem href="/hakkimizda" title="Hakkımızda" />
        <DrawerItem href="/hizmetlerimiz" title="Hizmetlerimiz" />
        {/*<DrawerItem href="/blog" title="Blog" />*/}
        <DrawerItem title="Takımlar">
          <DrawerItem
            href="/takimlarimiz/octo-creativity"
            title="Octo Creativity"
          />
          <DrawerItem href="/takimlarimiz/web" title="Web Takımı" />
          <DrawerItem href="/takimlarimiz/backend" title="Backend Takımı" />
          <DrawerItem href="/takimlarimiz/mobil" title="Mobil Takımı" />
          <DrawerItem href="/takimlarimiz/devops" title="Devops Takımı" />
          <DrawerItem
            href="/takimlarimiz/sosyal-medya"
            title="Sosyal Medya Takımı"
          />
          <DrawerItem href="/takimlarimiz/worthaze" title="Worthaze" />
        </DrawerItem>
        <DrawerItem href="/team-app" title="Projelerimiz" />
        <DrawerItem href="/#business-partners" title="Referanslarımız" />
      </div>
    </div>
  );
};

export default Drawer;

const DrawerItem = ({
  href,
  title,
  scrollToTop,
  children,
  onClick,
}: {
  href?: LinkProps["href"];
  title: string;
  scrollToTop?: boolean;
  children?: ReactNode;
  onClick?: ComponentPropsWithoutRef<"div">["onClick"];
}) => {
  const [expanded, setExpanded] = useState(false);
  return href ? (
    <Link href={href} scroll={scrollToTop} className="w-full">
      {title}
    </Link>
  ) : (
    <div className="flex w-full cursor-pointer flex-col">
      <div
        className="flex w-full items-center"
        onClick={(e) => {
          if (children) {
            setExpanded(!expanded);
          }
          onClick?.(e);
        }}
      >
        <span className="grow">{title}</span>
        {children && (
          <RightArrow
            className={`${expanded ? "rotate-90" : ""} transition-transform`}
          />
        )}
      </div>
      <AnimateHeight
        height={expanded ? "auto" : 0}
        duration={300}
        contentClassName="flex pt-3 w-full px-5 gap-3 flex-col"
      >
        {children}
      </AnimateHeight>
    </div>
  );
};
