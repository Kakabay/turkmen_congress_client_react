import { FieldError } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";

type Props = {
  control: any;
  name: string;
  label: string;
  placeholder: string;
  error: FieldError | undefined;
  area?: boolean;
  type?: string;
  className?: string;
  disabled?: boolean;
};

const CustomField = ({
  control,
  name,
  label,
  placeholder,
  error,
  area = false,
  type = "text",
  className,
  disabled,
}: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem
          className={cn(className, "flex flex-col w-full relative ga-2")}
        >
          <FormLabel className="font-16-medium text-left">{label}</FormLabel>
          <FormControl>
            {!area ? (
              <Input
                type={type}
                placeholder={placeholder}
                {...field}
                disabled={disabled}
                className={cn(
                  "bg-transparent border-b outline-none p-0 pb-2 font-14-regular selection:bg-transparent text-onAnySurface placeholder:font-14-regular placeholder:text-onAnySurfaceVariant border-outline focus:border-outline2 focus:bg-transparent transition-all duration-300 ease-in-out",
                  {
                    "!border-b !border-error !focus:border-error !outline-error":
                      error?.message,
                  }
                )}
              />
            ) : (
              <Textarea
                rows={1}
                placeholder={placeholder}
                {...field}
                className={cn(
                  "bg-transparent border-b outline-none p-0 pb-2 font-14-regular selection:bg-transparent text-onAnySurface placeholder:font-14-regular placeholder:text-onAnySurfaceVariant focus:border-outline2 focus:bg-transparent transition-all duration-300 ease-in-out",
                  error?.message ? "!border-error" : "!border-outline"
                )}
              />
            )}
          </FormControl>
          <FormMessage
            className={cn(
              "absolute -bottom-5 left-0 font-14-regular text-error"
            )}
          >
            {error?.message}
          </FormMessage>
        </FormItem>
      )}
    />
  );
};

export default CustomField;
