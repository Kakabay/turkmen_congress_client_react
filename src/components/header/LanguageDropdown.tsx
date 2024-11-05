import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useZusLang } from '@/zustand/use-zus-lang';
import { ChevronDown } from 'lucide-react';

const languages = [
  {
    value: 'ru',
    view: 'Русский',
  },
  {
    value: 'en',
    view: 'English',
  },
  {
    value: 'tm',
    view: 'Türkmen',
  },
];

const LanguageDropdown = () => {
  const { activeLang } = useZusLang();
  const { setActiveLang } = useZusLang();
  return (
    <div>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger className="flex gap-[4px] focus:outline-none">
          <span className="font-14-regular text-inherit">{activeLang.view}</span>{' '}
          <ChevronDown className="text-inherit" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-surfaceContainerLow border border-surfaceContainerLowOutline p-0 rounded-sm">
          {languages
            .filter((item) => item.value !== activeLang.value)
            .map((item, i) => (
              <DropdownMenuItem
                className="font-14-regular px-2 py-3 hover:bg-transparent focus:bg-transparent hover:text-onAnySurfaceVariant focus:text-onAnySurfaceVariant cursor-pointer "
                onClick={() => setActiveLang(item)}
                key={i}>
                {item.view}
              </DropdownMenuItem>
            ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageDropdown;
