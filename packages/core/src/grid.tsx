"use client";

import { ReactNode } from "react";

interface FlexProps {
  children: ReactNode;
  className?: string;
}

export const Grid = ({ children, className }: FlexProps) => {
  return (
    <div slant-grid className={className}>
      {children}
    </div>
  );
};
