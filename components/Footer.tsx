import React from "react";
import NextImage from "@/components/NextImage";
import tablet from "../public/images/tablet.png";
import TextLogo from "../public/icons/logo-white-vertical.svg";
import FadedLogo from "../public/icons/logo-background-faded.svg";
import Button from "@/components/Button";
import SendIcon from "@/public/icons/send.svg";
import Facebook from "@/public/icons/facebook.svg";
import Twitter from "@/public/icons/twitter.svg";
import Instagram from "@/public/icons/instagram.svg";
import Youtube from "@/public/icons/youtube.svg";
import Linkedin from "@/public/icons/linkedin.svg";
import UserIcon from "@/public/icons/user.svg";
import Link from "next/link";
import ContactRequestFormInput from "@/components/ContactRequestFormInput";

const Footer = () => {
  return (
    <footer className="mt-[21%] flex flex-col bg-main-blue pb-10 text-white md:mt-[10.5%] md:flex-row">
      <div className="mt-[-21%] flex basis-[45%] flex-col gap-y-5 md:mt-[-10.5%] md:items-center md-max:px-5">
        <NextImage
          className="aspect-[1.0363] w-[50%]"
          objectFit="contain"
          src={tablet}
        />
        <div className="relative flex w-full justify-center pt-14 pb-8 md-max:hidden">
          <FadedLogo className="absolute top-0 left-0 h-full w-auto" />
          <TextLogo className="h-auto w-[35%]" />
        </div>
      </div>
      <div className="flex max-w-[700px] basis-[55%] flex-col pt-10 pr-5 md:pr-10 md-max:pl-5">
        <h2 className="text-2xl md:text-3xl">E-posta Listemize Kayıt Olun!</h2>
        <p className="my-3 text-sm">
          Mail listemize kaydolarak güncellemelerden haberdar olabilirsiiz ve
          güncel kalabilirsiniz.
        </p>
        <ContactRequestFormInput />
        <div className="flex flex-col gap-y-5 py-5 text-sm sm:flex-row sm:gap-[20%]">
          <div className="flex flex-col gap-y-2 hover:[&>a]:underline">
            <h3 className="text-xl ">Menü</h3>
            <Link href="/">Ana Sayfa</Link>
            <Link href="/hakkimizda">Hakkımızda</Link>
            <Link href="/hizmetlerimiz">Hizmetler</Link>
            {/*<Link href="/blog">Blog</Link>*/}
            <Link href="/iletisim">iletişim</Link>
          </div>
          <div className="flex flex-col gap-y-2 hover:[&>table>tbody>tr>td>a]:underline first:[&>table>tbody>tr>td]:pr-2">
            <h3 className="text-xl ">İletişim</h3>
            <table>
              <tbody className="[&>tr>td]:pb-2 first:[&>tr>td]:whitespace-nowrap">
                <tr>
                  <td>GSM:</td>
                  <td>
                    <a href="tel:0535 443 22 05">0535 443 22 05</a>
                  </td>
                </tr>
                <tr>
                  <td>Adres:</td>
                  <td>
                    Konak mah. 1. Badem Caddesi Lotus Plaza <br />
                    No: 26B İç Kapı No: 68 Nilüfer/Bursa
                  </td>
                </tr>
                <tr>
                  <td>E-Posta:</td>
                  <td>
                    <a href="mailto:info@zalisoft.com">info@zalisoft.com</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex items-center gap-2 sm-max:justify-center">
          <a
            href=""
            className="rounded-full p-2 hover:bg-white/20"
            target="_blank"
            rel="noreferrer"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="https://twitter.com/zalisoft"
            className="rounded-full p-2 hover:bg-white/20"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/zalisoft"
            className="rounded-full p-2 hover:bg-white/20"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href=""
            className="rounded-full p-2 hover:bg-white/20"
            target="_blank"
            rel="noreferrer"
          >
            <Youtube className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/company/zalisoft"
            className="rounded-full p-2 hover:bg-white/20"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          {/*<Link*/}
          {/*  href="/admin/blog"*/}
          {/*  className="rounded-full p-2 hover:bg-white/20"*/}
          {/*>*/}
          {/*  <UserIcon className="h-5 w-5" />*/}
          {/*</Link>*/}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
