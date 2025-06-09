import { cn } from "@src/modules/shared/utils";
import { Loader2 } from "lucide-react";
import type { FC } from "react";

interface Props {
  className?: string;
}

export const Loader: FC<Props> = ({ className }) => {
  return (
    <Loader2
      className={cn("size-16 animate-spin text-red-400 opacity-50", className)}
    />
  );
};
