'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import { usePortfolio } from '@/hooks/use-portfolio';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { sendContactAction } from '@/lib/actions/send-contact.action';
import { DEFAULT_SETTINGS } from '@/lib/constants/default-settings';
import { formSchema, TFormSchema } from '@/lib/schemas/form-schema';
import type { PortfolioData } from '@/lib/types/portfolio.types';

interface UsePortfolioContactOptions {
  initialData?: PortfolioData | null;
}

export const usePortfolioContact = (
  options: UsePortfolioContactOptions = {}
) => {
  const { initialData } = options;
  const { ref } = useSectionInView('Contacto');

  const { data: portfolio, isLoading, error } = usePortfolio({ initialData });

  // Estados derivados
  const title =
    portfolio?.settings?.titleContact || DEFAULT_SETTINGS.titleContact;
  const subtitle =
    portfolio?.settings?.subTitleContact || DEFAULT_SETTINGS.subTitleContact;
  const hasNoData = !isLoading && !portfolio;
  const hasRealError = error && !isLoading;

  // Configuración del formulario
  const form = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = form;

  // Lógica de envío del formulario
  const onSubmit = async (values: TFormSchema) => {
    const { data, error } = await sendContactAction(values);

    if (error) {
      toast.error(error);
      return;
    }

    toast.success(data);
    reset();
  };

  return {
    ref,
    title,
    subtitle,
    hasNoData,
    hasRealError,
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
  };
};
