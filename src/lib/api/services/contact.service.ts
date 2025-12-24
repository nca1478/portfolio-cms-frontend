import { axiosClient } from '../axios-client';
import { API_ENDPOINTS } from '../endpoints';

import { ContactMessageData } from '@/lib/types/portfolio.types';

export const contactService = {
  sendMessage: async (data: ContactMessageData): Promise<void> => {
    await axiosClient.post(API_ENDPOINTS.CONTACT_SEND, data);
  },
};
