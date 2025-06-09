import { cn } from "@src/modules/shared/utils";
import { Search } from "lucide-react";
import type { ChangeEvent, FC } from "react";

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const SearchInput: FC<Props> = ({
  value,
  onChange,
  placeholder = "Search",
  className,
  ...props
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={cn("relative col-span-2 md:col-span-3", className)}>
      <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-red-400" />
      <input
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={cn(
          "ring-offset-background w-full rounded-xl bg-white p-2 pl-10 placeholder:text-gray-300",
          "md:p-3 md:pl-10 lg:p-4 lg:pl-10",
          "focus-visible:ring-ring ring-red-400 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      />
    </div>
  );
};
