import PagePaddingContainer from "@/components/PagePaddingContainer";
import Title from "@/components/Home/Title";
import React, {
  ComponentPropsWithoutRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";
import Button from "@/components/Button";
import AnimateHeight from "react-animate-height";
import TurkeySVG from "@/public/icons/turkey.svg";
import NumberFormat from "react-number-format";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { getOffer } from "@/lib/data/communication";
import toast, { Toaster } from "react-hot-toast";
import { AxiosError } from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type Inputs = {
  name: string;
  email: string;
  phoneNumber: string;
  fields: string[];
};

const schema = yup
  .object<Record<keyof Partial<Inputs>, yup.AnySchema>>({
    fields: yup
      .array()
      .nullable()
      .required("Lütfen an azından 1 ilgilendiğiniz hizmeti seçin.")
      .min(
        1,
        (min) => `Lütfen an azından ${min.min} ilgilendiğiniz hizmeti seçin.`
      ),
    name: yup.string().required("Lütfen adınızı giriniz"),
    email: yup
      .string()
      .required("Lütfen e-postanızı giriniz")
      .email("Lütfen doğru bir e-posta giriniz."),
    phoneNumber: yup.string().optional(),
  })
  .required();

const ServiceRequestSection = () => {
  const [selectedServices, setSelectedServices] = useState<Set<string>>(
    new Set([])
  );
  const [contactFormOpened, setContactFormOpened] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const services = [
    "Web Tasarım",
    "Mobil Tasarım",
    "Kurumsal Kimlik",
    "Logo Tasarımı",
    "Kartvizit Tasarımı",
    "Sosyal Medya Danışmanlığı",
    "Backend",
    "Frontend",
    "Web Sitesi",
    "Mobil Uygulama",
    "Sosyal medya tasarımı",
  ];

  function resetFilter() {
    setSelectedServices(new Set([]));
  }

  const onError: SubmitErrorHandler<Inputs> = (errors, event) => {
    console.log("errors", errors);
    if (errors) {
      for (let subject of Object.keys(errors)) {
        // @ts-ignore
        if (errors[subject]) {
          // @ts-ignore
          toast.error(errors[subject].message);
          return;
        }
      }
    }
  };

  useEffect(() => {
    setValue("fields", [...selectedServices], {
      shouldDirty: true,
      shouldTouch: true,
    });
  }, [selectedServices]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("data", JSON.stringify(data));
    setLoading(true);
    getOffer({
      name: data.name.substring(0, data.name.indexOf(" ")),
      surname: data.name.substring(data.name.indexOf(" ")),
      email: data.email,
      phoneNumber: data.phoneNumber,
      fields: data.fields,
    })
      .then(() => {
        toast.success(
          "Talebiniz başarıyla bize ulaştı. Kısa bir süre içinde sizinle iletişime geçeceğiz."
        );
      })
      .catch((e: AxiosError) => {
        toast.error("Bir hata oluştu. Lütfen tekrar deneyin.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <PagePaddingContainer className="mb-20">
      <section className="flex flex-col items-center">
        <Title>Aceleniz mi var?</Title>
        <p className="mb-10 max-w-2xl text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu lobortis
          integer eu in. Ipsum magna a vestibulum erat ultricies gravida egestas
          amet turpis.
        </p>
        <form
          className="flex flex-col items-center"
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <div className="mb-10 flex flex-wrap items-center justify-center gap-6">
            {services.map((service, index) => (
              <Checkbox
                key={index}
                className={
                  (index + 1) % 4 == 0
                    ? "text-main-blue"
                    : (index + 1) % 3 == 0
                    ? "text-green"
                    : (index + 1) % 2 == 0
                    ? "text-orange"
                    : "text-main-purple"
                }
                label={service}
                checked={selectedServices.has(service)}
                onCheck={(checked) => {
                  if (checked) {
                    setSelectedServices((old) => {
                      const newSet = new Set(old);
                      newSet.add(service);
                      return newSet;
                    });
                  } else {
                    setSelectedServices((old) => {
                      const newSet = new Set(old);
                      newSet.delete(service);
                      return newSet;
                    });
                  }
                }}
              />
            ))}
          </div>
          <div className="mb-5 flex items-center justify-center gap-4">
            <Button
              disabled={selectedServices.size == 0}
              className="flex gap-3 py-3 px-5 text-sm"
              variant="light"
              type="button"
              onClick={resetFilter}
            >
              Filtreyi Sıfırla
            </Button>
            {!contactFormOpened && (
              <Button
                type="button"
                disabled={selectedServices.size == 0}
                className="flex gap-3 py-3 px-5 text-sm"
                onClick={() => setContactFormOpened(true)}
              >
                Teklif Al
              </Button>
            )}
          </div>
          <AnimateHeight
            height={contactFormOpened ? "auto" : 0}
            duration={300}
            contentClassName="flex w-full flex-col"
          >
            <div className="mx-auto mt-10 flex max-w-[1155px] flex-col items-center justify-center gap-4 ">
              <label htmlFor="text" className="mb-2 font-medium text-dark">
                Ad Soyad
              </label>
              <input
                className="h-[54px] w-full rounded-[16px] bg-neutral-100 p-3 text-sm outline-none placeholder:text-gray"
                placeholder="Adınızı ve soyadınızı giriniz.."
                {...register("name")}
              />
              <label
                htmlFor="email"
                className="mb-2 mt-6 font-medium text-dark"
              >
                E-Posta
              </label>
              <input
                className="h-[54px] w-full rounded-[16px] bg-neutral-100 p-3 outline-none placeholder:text-sm placeholder:text-gray"
                placeholder="E-posta adresinizi giriniz.."
                {...register("email")}
              />
              <label className="mb-1 mt-8 font-medium text-dark">
                Telefon Numarası (Opsiyonel)
              </label>
              <div className="flex h-[54px] w-full flex-row gap-x-5 rounded-[16px]">
                <div className=" flex h-[54px] flex-row items-center  rounded-[16px] bg-white px-3">
                  <TurkeySVG className="h-9 w-11" />
                  <p className="min-w-[93px] text-xs text-dark">Turkey (+90)</p>
                  {/*<ArrowSVG className="h-5 w-5" />*/}
                </div>
                <NumberFormat
                  placeholder="5xx xxx xxxx"
                  className="h-[54px] w-full rounded-[16px] bg-neutral-100 p-3 outline-none placeholder:text-sm placeholder:text-gray"
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
              <Button
                type="submit"
                className="mx-auto mt-5 flex gap-3 py-3 px-5 text-sm"
                isLoading={loading}
              >
                Teklif Al
              </Button>
            </div>
          </AnimateHeight>
        </form>
      </section>
      <Toaster position="top-center" />
    </PagePaddingContainer>
  );
};

export default ServiceRequestSection;

const Checkbox = ({
  className,
  initiallyChecked = false,
  onCheck,
  checked,
  label,
  ...rest
}: ComponentPropsWithoutRef<"div"> & {
  initiallyChecked?: boolean;
  label: string;
  checked?: boolean;
  onCheck?: (checked: boolean) => void;
}): JSX.Element => {
  const [internalChecked, setInternalChecked] = useState(
    checked != null ? checked : initiallyChecked
  );

  const check = () => {
    setInternalChecked(checked != null ? !checked : !internalChecked);
    onCheck?.(checked != null ? !checked : !internalChecked);
  };

  return (
    <div className={twMerge("my-4", className)} {...rest}>
      <label className="group relative block cursor-pointer select-none pl-8">
        <input
          className="peer absolute h-0 w-0 cursor-pointer opacity-0 checked:block"
          type="checkbox"
          checked={checked != null ? checked : internalChecked}
          onChange={check}
        />
        <div className="absolute top-0 left-0 flex aspect-square h-6 items-center justify-center rounded-md border border-current p-0.5 [&>*]:peer-checked:bg-current">
          {/*<span className="h-full w-full rounded group-hover:bg-current peer-checked:bg-current" />*/}
          <span className="h-full w-full rounded" />
        </div>
        <span className="text-sm text-dark">{label}</span>
      </label>
    </div>
  );
};
