import { PhoneData } from '../types/phoneData';
import { client } from '../utils/fetchClient';

export const getPhones = () => client.get<PhoneData[]>('/phones');
