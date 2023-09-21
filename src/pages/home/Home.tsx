import { FC } from "react";
import { Header } from "../../components/Header";
import { Hero } from "./components/hero/Hero";

export const Home: FC = () => {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
};
