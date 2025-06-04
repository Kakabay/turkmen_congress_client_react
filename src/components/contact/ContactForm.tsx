import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomField from "../global/CustomField";
import { useState } from "react";
import { useZusLang } from "@/zustand/use-zus-lang";
import { sectionsTranslations } from "@/lib/constants";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email("Invalid email"),
  message: z.string().min(2, "Message must be at least 10 characters"),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [mailSuccess, setMailSuccess] = useState<boolean>(false);
  const [mailError, setMailError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const lang = useZusLang((state) => state.activeLang.value);

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const serviceId = "service_30vlker";
    const templateId = "template_o2dx9ir";
    const publicKey = "w3ZE9u9xv7HznrSSt";

    setIsLoading(true);

    const dataParams = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: values.name,
        from_email: values.email,
        to_name: "Turkmen Congress",
        message: values.message,
      },
    };

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        dataParams
      );
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
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-[628px] w-full flex flex-col gap-8"
      >
        <div className="flex sm:flex-row flex-col gap-8 w-full">
          <CustomField
            control={form.control}
            name={"name"}
            label={
              lang === "ru"
                ? sectionsTranslations.ru.contact.nameLabel
                : sectionsTranslations.en.contact.nameLabel
            }
            placeholder={
              lang === "ru"
                ? sectionsTranslations.ru.contact.namePlaceholder
                : sectionsTranslations.en.contact.namePlaceholder
            }
            error={undefined}
            className=""
          />
          <CustomField
            control={form.control}
            name={"email"}
            label={
              lang === "ru"
                ? sectionsTranslations.ru.contact.emailLabel
                : sectionsTranslations.en.contact.emailLabel
            }
            placeholder={
              lang === "ru"
                ? sectionsTranslations.ru.contact.emailPlaceholder
                : sectionsTranslations.en.contact.emailPlaceholder
            }
            error={undefined}
          />
        </div>
        <CustomField
          control={form.control}
          area
          name={"message"}
          label={
            lang === "ru"
              ? sectionsTranslations.ru.contact.messageLabel
              : sectionsTranslations.en.contact.messageLabel
          }
          placeholder={
            lang === "ru"
              ? sectionsTranslations.ru.contact.messagePlaceholder
              : sectionsTranslations.en.contact.messagePlaceholder
          }
          error={undefined}
        />
        <div className="flex flex-col gap-4">
          <Button disabled={isLoading}>
            {lang === "ru"
              ? isLoading
                ? "Загрузка..."
                : sectionsTranslations.ru.contact.submitButton
              : isLoading
              ? "Loading..."
              : sectionsTranslations.en.contact.submitButton}
          </Button>
          {mailSuccess ? (
            <p className="text-gold font-16-regular">
              {lang === "ru"
                ? "Ваше сообщение успешно отправленно!"
                : "Your message has been sent successfully!"}
            </p>
          ) : mailError ? (
            <p className="text-error font-16-regular">
              {lang === "ru"
                ? "Ошибка. Попробуйте снова."
                : "Error. Try again."}
            </p>
          ) : null}
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
