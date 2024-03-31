"use client";

import { ReactNode } from "react";

interface FlexProps {
  children: ReactNode;
  className?: string;
  logo: string;
  title: string;
  description: string;
}

export const OG = ({ children, className }: FlexProps) => {
  return (
    <div slant-flex className={className}>
      {children}
    </div>
  );
};
