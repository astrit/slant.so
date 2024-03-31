"use client";

import { ReactNode } from "react";

interface FlexProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

// all features from the grid, auto columns etc

export const Grid = ({ children, className, appName }: FlexProps) => {
  return (
    <div slant-grid className={className}>
      {children}
    </div>
  );
};
