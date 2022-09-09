import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import NavDropdown from "@/components/Header/NavDropdown";

const NavLink = ({
  title,
  link,
  className,
  children,
}: {
  title: string;
  link?: string;
  className?: string;
  children?: ReactNode;
}) => {
  const router = useRouter();
  const isCurrentPage =
    link &&
    ((link != "/" && router.asPath.startsWith(link)) ||
      (link == "/" && router.asPath == link));

  return !children && link ? (
    <Link
      className={twMerge(
        `${
          isCurrentPage ? "text-main-blue" : "hover:text-main-blue"
        } whitespace-nowrap py-3 px-4`,
        className
      )}
      href={link}
    >
      {title}
    </Link>
  ) : (
    <NavDropdown className={className} title={title}>
      {children}
    </NavDropdown>
  );
};

export default NavLink;
