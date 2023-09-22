import { FC } from "react";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
