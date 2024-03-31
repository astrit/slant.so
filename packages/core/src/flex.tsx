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

//

// flex features

// span = "2-4"
// rows="1-2"
// flex="1" o flex: 2 or so
// order: 1
// align:
// justify
// ratio
// padding
// direction

export const Flex = ({ children, className, appName }: FlexProps) => {
  return (
    <div slant-flex className={className}>
      {children}
    </div>
  );
};
