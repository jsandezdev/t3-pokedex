import type { ChangeEvent, FC } from "react";
import { cn } from "../utils";

export interface SelectOption {
  label: string;
  value: string;
}

interface Props {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export const Select: FC<Props> = ({
  value,
  onChange,
  options,
  placeholder = "Select an option",
  disabled = false,
  className = "",
  ...props
}) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <select
      className={cn([
        "ring-offset-background w-full bg-white p-2 placeholder:text-gray-300 md:p-3 lg:p-4",
        "focus-visible:ring-ring ring-red-400 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        "rounded-xl",
        className,
      ])}
      value={value}
      onChange={handleChange}
      disabled={disabled}
      {...props}
    >
      <option value="">{placeholder}</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};
