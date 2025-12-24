'use server';

import { contactService } from '@/lib/api/services/contact.service';
import { TFormSchema } from '@/lib/schemas/form-schema';

export const sendContactAction = async (values: TFormSchema) => {
  try {
    await contactService.sendMessage(values);

    return {
      data: '¡Mensaje enviado exitosamente!',
    };
  } catch (error) {
    console.error('Error sending contact message:', error);
    return {
      error: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.',
    };
  }
};
