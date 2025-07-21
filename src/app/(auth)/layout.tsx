import React from "react";

type props = {
  children: React.ReactNode;
};

const Layout = ({ children }: props) => {
  return <div className="flex justify-center
  items-center
  h-screen
  w-full">{children}</div>;
};
export default Layout;