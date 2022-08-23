import { axios } from "@/lib/axios";

export const reachUs = async (email: string): Promise<void> => {
  await axios.post(`/reachus`, {
    email,
  });
};

export const getOffer = async ({
  name,
  surname,
  email,
  phoneNumber,
  fields,
}: {
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
  fields: string[];
}): Promise<void> => {
  await axios.post(`/getoffer`, {
    name,
    surname,
    email,
    phoneNumber,
    fields,
  });
};
