import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const repeatBackground = router.pathname.startsWith("/takimlarimiz");

  return (
    <div
      className={`bg-background-layer-mobile bg-[length:100%_auto] bg-[center_top_-60vw] md:bg-background-layer md:bg-[length:130%_auto] md:bg-[center_top_-30vw] ${
        repeatBackground ? "bg-repeat-y" : "bg-no-repeat"
      }`}
    >
      <DefaultSeo
        defaultTitle="Zalisoft"
        titleTemplate="%s - Zalisoft"
        description="Zalisoft"
        canonical={`https://zalisoft.com${
          router.asPath === "/" ? "" : router.asPath
        }`}
        openGraph={{
          type: "website",
          url: `https://zalisoft.com${
            router.asPath === "/" ? "" : router.asPath
          }`,
          locale: "tr-TR",
          title: "Zalisoft",
          description: "Zalisoft",
          site_name: "Zalisoft",
        }}
        mobileAlternate={{
          media: "only screen and (max-width: 640px)",
          href: `https://zalisoft.com${
            router.asPath === "/" ? "" : router.asPath
          }`,
        }}
        twitter={{
          handle: "@zalisoft",
          site: "@zalisoft",
          cardType: "summary_large_image",
        }}
      />
      <Header />
      <main className="overflow-x-hidden pb-20">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
