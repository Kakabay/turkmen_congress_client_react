import { FieldError } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { cn } from '@/lib/utils';
import clsx from 'clsx';

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
  type = 'text',
  className,
  disabled,
}: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn(className, 'flex flex-col w-full relative ga-2')}>
          <FormLabel className="font-16-medium text-left">{label}</FormLabel>
          <FormControl>
            {!area ? (
              <Input
                type={type}
                placeholder={placeholder}
                {...field}
                disabled={disabled}
                className={clsx({
                  'bg-transparent border-b outline-none p-0 pb-2 font-14-regular selection:bg-transparent text-onAnySurface placeholder:font-14-regular placeholder:text-onAnySurfaceVariant border-outline focus:border-outline2 focus:bg-transparent transition-all duration-300 ease-in-out':
                    true,
                  '!border-error': error?.message,
                })}
              />
            ) : (
              <Textarea
                rows={1}
                placeholder={placeholder}
                {...field}
                className={clsx(
                  'bg-transparent border-b outline-none p-0 pb-2 font-14-regular selection:bg-transparent text-onAnySurface placeholder:font-14-regular placeholder:text-onAnySurfaceVariant  focus:bg-transparent transition-all duration-300 ease-in-out',
                  {
                    '!border-error focus:border-error': error?.message,
                  },
                  {
                    'border-outline focus:border-outline2': !error?.message,
                  },
                )}
              />
            )}
          </FormControl>
          <FormMessage className={cn('absolute -bottom-5 left-0 font-14-regular text-error')}>
            {error?.message}
          </FormMessage>
        </FormItem>
      )}
    />
  );
};

export default CustomField;
