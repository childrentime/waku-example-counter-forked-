"use client";

import { PropsWithChildren } from "react";

export const Counter = (props: PropsWithChildren<{}>) => {
  const { children } = props;
  return (
    <div style={{ border: "3px blue dashed", margin: "1em", padding: "1em" }}
    onClick={() => {
      console.log('navigate')
    }}>
      {children}
    </div>
  );
};
