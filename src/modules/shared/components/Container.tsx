import type { FC, ReactNode } from "react";
import { cn } from "../utils";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Container: FC<Props> = ({ children, className }) => (
  <div className={cn(["px-2 md:container md:mx-auto md:px-4", className])}>
    {children}
  </div>
);
