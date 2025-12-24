import { z } from 'zod';

export const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'El nombre debe tener al menos 2 caracteres' })
    .max(100, { message: 'El nombre debe tener menos de 100 caracteres' }),
  email: z
    .string()
    .min(1, { message: 'El correo electrónico es requerido' })
    .email({ message: 'Debe ser un correo electrónico válido' }),
  subject: z
    .string()
    .min(2, { message: 'El asunto debe tener al menos 2 caracteres' })
    .max(200, { message: 'El asunto debe tener menos de 200 caracteres' }),
  message: z
    .string()
    .min(10, { message: 'El mensaje debe tener al menos 10 caracteres' })
    .max(2000, { message: 'El mensaje debe tener menos de 2000 caracteres' }),
});

export type TFormSchema = z.infer<typeof formSchema>;
