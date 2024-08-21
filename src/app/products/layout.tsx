import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <h1> I am Your Shared Layout Data</h1>
      {children}
    </div>
  );
};

export default layout;
