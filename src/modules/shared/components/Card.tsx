import { cn } from "@src/modules/shared/utils";
import type { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Card: FC<Props> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center rounded-xl bg-white p-4 shadow-md",
        className,
      )}
    >
      {children}
    </div>
  );
};
