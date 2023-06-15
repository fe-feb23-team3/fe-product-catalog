import { ItemCardData } from '../types/itemCardData';
import { PhoneData } from '../types/phoneData';
import { client } from '../utils/fetchClient';

type Info = {
  pages: number;
  visiblePhones: PhoneData[];
};

export const getPhones = () => client.get<PhoneData[]>('/products/phones');
export const getPhoneById = (id: string) => client.get<PhoneData>(`/products/phones/${id}`);
export const getFilteredPhones = (searchParams: string) => {
  return client.get<Info>(`/products/phones/pagination?${searchParams}`);
};

export const getNewestPhones = () => client.get<PhoneData[]>('/products/phones/newest');
export const getByDiscount = () => client.get<PhoneData[]>('/products/phones/discount');

export const getItemCardDataById = (id: string) => client.get<ItemCardData>(`/phoneCardData/${id}`);
