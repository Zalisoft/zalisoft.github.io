import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import Button from "@/components/Button";
import SendIcon from "@/public/icons/send.svg";
import useResponsive from "@/components/hooks/useResponsive";
import toast, { Toaster } from "react-hot-toast";
import { reachUs } from "@/lib/data/communication";
import { AxiosError } from "axios";

const ContactRequestFormInput = ({
  showAgreements = true,
  animation = false,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"div"> & {
  showAgreements?: boolean;
  animation?: boolean;
}) => {
  const { sm } = useResponsive({ watchPoints: ["sm"] });
  const [loading, setLoading] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const emailInput = (
      event.currentTarget.elements.namedItem("email") as HTMLInputElement
    )?.value;
    console.log("emailInput", emailInput);
    if ((emailInput ?? "").trim()) {
      setLoading(true);
      reachUs(emailInput)
        .then(() => {
          toast.success(
            "E-postanız başarıyla bize ulaştı. Kısa bir süre içinde sizinle iletişime geçeceğiz."
          );
        })
        .catch((e: AxiosError) => {
          toast.error("Bir hata oluştu. Lütfen tekrar deneyin.");
        })
        .finally(() => setLoading(false));
    } else toast.error("Lütfen e-postanızı giriniz.");
  }

  const animate = sm && animation;

  return (
    <div
      className={twMerge(
        "my-3 flex flex-col",
        animate ? "w-min" : "w-full",
        className
      )}
      {...rest}
    >
      <form
        onSubmit={handleSubmit}
        className={`flex flex-row rounded-full bg-white p-1 text-sm ${
          animate ? "w-min" : "w-full"
        }`}
      >
        <input
          className={`${
            animate ? "animate-contact-input " : "w-full grow px-4"
          } rounded-l-full text-dark outline-none`}
          type="email"
          name="email"
          placeholder="E-posta adresinizi yazmalısınız :)"
        />
        <Button isLoading={loading} className="flex gap-3" type="submit">
          <SendIcon />
          <span>Gönder</span>
        </Button>
      </form>
      {showAgreements && (
        <p className="py-2 text-xs">
          <a className="underline">Gizlilik Sözleşmesi</a> ve{" "}
          <a className="underline">Kullanım Koşullarını</a> okuyunuz.
        </p>
      )}
    </div>
  );
};

export default ContactRequestFormInput;
