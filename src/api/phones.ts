import { PhoneData } from '../types/phoneData';
import { client } from '../utils/fetchClient';

export const getPhones = () => client.get<PhoneData[]>('/phones');
export const getPhoneById = (id: string) => client.get<PhoneData>(`/phones/${id}`);
export const getFilteredPhones = (searchParams: string) => {
  // eslint-disable-next-line no-console
  console.log(`searchParams: /phones/pagination?${searchParams}`);

  return client.get<PhoneData[]>(`/phones/pagination?${searchParams}`);
};
