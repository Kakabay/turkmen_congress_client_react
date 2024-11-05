// import { useState } from 'react';
// import Button from './ui/Button';
// import { SubmitHandler, useForm } from 'react-hook-form';
// import clsx from 'clsx';

import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import CustomField from '../global/CustomField';
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z.string().email('Invalid email'),
  message: z.string().min(2, 'Message must be at least 10 characters'),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const [mailSuccess, setMailSuccess] = useState<boolean>(false);
  const [mailError, setMailError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const serviceId = 'service_iunvqrq';
    const templateId = 'template_vo62m8g';
    const publicKey = '3GCbdgnH8kLHNGPHr';

    setIsLoading(true);

    const dataParams = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: values.name,
        from_email: values.email,
        to_name: 'Turkmen Congress',
        message: values.message,
      },
    };

    try {
      const res = await axios.post('https://api.emailjs.com/api/v1.0/email/send', dataParams);
      if (res.status === 200) {
        setIsLoading(false);
        setMailSuccess(true);
        setMailError(false);
      }
    } catch (error) {
      setMailError(true);
      setIsLoading(false);

      console.error(error);
    }
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-[628px] w-full flex flex-col gap-8">
        <div className="flex gap-8 w-full">
          <CustomField
            control={form.control}
            name={'name'}
            label={'Name'}
            placeholder={'Murykov Bayram'}
            error={undefined}
            className=""
          />
          <CustomField
            control={form.control}
            name={'email'}
            label={'Email'}
            placeholder={'mur.bayram@mail.com'}
            error={undefined}
          />
        </div>
        <CustomField
          control={form.control}
          area
          name={'message'}
          label={'Message'}
          placeholder={'Hello! I suggest...'}
          error={undefined}
        />
        <div className="flex flex-col gap-4">
          <Button disabled={isLoading}>{isLoading ? 'Loading...' : 'Submit'}</Button>
          {mailSuccess ? (
            <p className="text-gold font-16-regular">Ваше сообщение успешно отправленно!</p>
          ) : mailError ? (
            <p className="text-error font-16-regular">Ошибка. Попробуйте снова.</p>
          ) : null}
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
