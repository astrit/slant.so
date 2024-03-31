"use client";

import { ReactNode } from "react";

interface FlexProps {
  children: ReactNode;
  className?: string;
  appName: string;
  span: string;
  rows: string;
  flex: string;
  order: string;
  align: string;
  justify: string;
  ratio: string;
  padding: string;
  direction: string;
}

export const Flex = ({ children, className }: FlexProps) => {
  return (
    <div slant-flex className={className}>
      {children}
    </div>
  );
};
