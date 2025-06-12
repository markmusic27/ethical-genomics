import { type ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  className?: string;
  isSerif?: boolean;
}

export function Text({ children, className = "", isSerif = false }: TextProps) {
  return (
    <span className={`${isSerif ? "font-serif" : "font-sans"} ${className}`}>
      {children}
    </span>
  );
}
