import { PhoneData } from '../types/phoneData';
import { client } from '../utils/fetchClient';

type Info = {
  pages: number;
  visiblePhones: PhoneData[];
};

export const getPhones = () => client.get<PhoneData[]>('/phones');
export const getPhoneById = (id: string) => client.get<PhoneData>(`/phones/${id}`);
export const getFilteredPhones = (searchParams: string) => {
  return client.get<Info>(`/phones/pagination?${searchParams}`);
};
