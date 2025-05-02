import React from "react";
import Header from "@/components/header/Header";
import Tutorial from "@/components/tutorial/Tutorial";
import Information from "@/components/information/Information";

export default function Home() {
  return (
    <div>
      <Header />
      <Tutorial />
      <Information />
    </div>
  );
}
