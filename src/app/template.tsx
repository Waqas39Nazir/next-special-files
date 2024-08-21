"use client";
import React from "react";
import Header2 from "@/components/Header2";

const template = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  console.log("TEMPLATE FILE");
  return (
    <>
      <Header2 />
      {children}
    </>
  );
};

export default template;
