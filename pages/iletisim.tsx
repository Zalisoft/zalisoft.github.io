import PagePaddingContainer from "@/components/PagePaddingContainer";
import PageTopSectionContainer from "@/components/PageTopSectionContainer";
import TurkeySVG from "../public/icons/turkey.svg";
import ArrowSVG from "../public/icons/arrow-down.svg";
import SendIcon from "../public/icons/send.svg";
import React, { useState } from "react";
import Button from "@/components/Button";
import NumberFormat from "react-number-format";
import * as yup from "yup";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast, { Toaster } from "react-hot-toast";
import { getOffer } from "@/lib/data/communication";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import Seo from "@/components/Seo";

type Inputs = {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
};

const schema = yup
  .object<Record<keyof Partial<Inputs>, yup.AnySchema>>({
    name: yup.string().required("Lütfen adınızı giriniz"),
    email: yup
      .string()
      .required("Lütfen e-postanızı giriniz")
      .email("Lütfen doğru bir e-posta giriniz."),
    phoneNumber: yup.string().optional(),
    message: yup.string().required("Lütfen mesajınızı giriniz."),
  })
  .required();

const ContactUs = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const onError: SubmitErrorHandler<Inputs> = (errors, event) => {
    console.log("errors", errors);
    if (errors) {
      for (let subject of Object.keys(errors)) {
        // @ts-ignore
        if (errors[subject]) {
          // @ts-ignore
          toast.error(errors[subject].message, { id: "toast" });
          return;
        }
      }
    }
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("data", JSON.stringify(data));
    setLoading(true);
    getOffer({
      name: data.name.substring(0, data.name.indexOf(" ")),
      surname: data.name.substring(data.name.indexOf(" ")),
      email: data.email,
      phoneNumber: data.phoneNumber,
      fields: [data.message],
    })
      .then(() => {
        toast.success(
          "Mesajınız başarıyla bize ulaştı. Kısa bir süre içinde sizinle iletişime geçeceğiz.",
          { id: "toast" }
        );
        router.push("/");
      })
      .catch((e: AxiosError) => {
        toast.error("Bir hata oluştu. Lütfen tekrar deneyin.", { id: "toast" });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <PagePaddingContainer>
        <Seo mainTitle="İletişim" />
        <PageTopSectionContainer>
          <h1 className="text-center text-4xl font-medium text-main-blue">
            İletişim
          </h1>
          <p className="mx-auto mt-6 mb-[68px] h-[45px] max-w-[630px] text-center text-dark ">
            Projeleriniz için veya sorularınız için bizimle iletişime geçin. En
            kısa zamanda size geri dönüş yapacağız.
          </p>
        </PageTopSectionContainer>
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="mx-auto flex max-w-[1155px] flex-row items-center justify-center gap-x-[35px] md-max:mt-16 md-max:flex-col "
        >
          <div className="flex h-[310px] w-1/2 flex-col md-max:w-full">
            <label htmlFor="text" className="mb-2 font-medium text-dark">
              Ad Soyad
            </label>
            <input
              className="h-[54px] w-full rounded-[16px] bg-white p-3 text-sm outline-none placeholder:text-gray"
              placeholder="Adınızı ve soyadınızı giriniz.."
              {...register("name")}
            />
            <label htmlFor="email" className="mb-2 mt-6 font-medium text-dark">
              E-Posta
            </label>
            <input
              className="h-[54px] w-full rounded-[16px] bg-white p-3 outline-none placeholder:text-sm placeholder:text-gray"
              placeholder="E-posta adresiniz"
              {...register("email")}
            />
            <label className="mb-1 mt-8 font-medium text-dark">
              Telefon Numarası (Opsiyonel)
            </label>
            <div className="flex h-[54px] w-full flex-row gap-x-7 rounded-[16px]">
              <div className=" flex h-[54px] flex-row items-center  rounded-[16px] bg-white px-3">
                <TurkeySVG className="h-9 w-11" />
                <p className="min-w-[93px] text-xs text-dark">Turkey (+90)</p>
                {/*<ArrowSVG className="h-5 w-5" />*/}
              </div>
              <NumberFormat
                placeholder="5xx xxx xxxx"
                className="h-[54px] w-full rounded-[16px] p-3 outline-none placeholder:text-sm placeholder:text-gray"
                format="0### ### ## ##"
                type="tel"
                isNumericString={true}
                onValueChange={(values, sourceInfo) => {
                  const { formattedValue, value } = values;
                  setValue("phoneNumber", value, {
                    shouldDirty: true,
                    shouldTouch: true,
                  });
                }}
                {...register("phoneNumber")}
              />
            </div>
          </div>
          <div className="flex h-[310px] w-1/2 flex-col md-max:mt-6 md-max:w-full">
            <label className="mb-2 font-medium text-dark">Mesajınız</label>
            <textarea
              placeholder="Mesajınızı bu alana girebilirsiniz."
              className="h-[164px] w-full resize-none rounded-[16px] p-4 outline-none placeholder:text-sm placeholder:text-gray"
              {...register("message")}
            />
            <div className="mt-8 flex  w-full flex-row items-center gap-x-2 md-max:hidden">
              <div>
                <p className="h-full min-w-[96px] text-xs text-dark">
                  Bazı kategoriler:
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2  ">
                <Button className="rounded-full bg-white px-2 py-1 text-[10px] font-medium text-main-blue hover:bg-main-blue hover:text-white">
                  web design
                </Button>
                <Button className="rounded-full bg-white px-2 py-1 text-[10px] font-medium text-main-blue hover:bg-main-blue hover:text-white">
                  mobile app
                </Button>
                <Button className="rounded-full bg-white px-2 py-1 text-[10px] font-medium text-main-blue hover:bg-main-blue hover:text-white">
                  e-commerce
                </Button>
                <Button className="rounded-full bg-white px-2 py-1 text-[10px] font-medium text-main-blue hover:bg-main-blue hover:text-white">
                  game
                </Button>
                <Button className="rounded-full bg-white px-2 py-1 text-[10px] font-medium text-main-blue hover:bg-main-blue hover:text-white">
                  ercan
                </Button>
              </div>
            </div>
            <Button
              isLoading={loading}
              type="submit"
              className="mt-5 flex justify-center gap-x-4"
            >
              <span>Mesajımı Gönder</span>
              <SendIcon />
            </Button>
          </div>
        </form>
        <Toaster />
      </PagePaddingContainer>
    </>
  );
};

export default ContactUs;
