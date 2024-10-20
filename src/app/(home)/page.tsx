import MainHeroBanner from "~/app/_components/Banner/MainHeroBanner";
import React from "react";

export default async function Home() {
  return (
    <main className={`w-full h-full`}>
      <MainHeroBanner/>
    </main>
  );
}
