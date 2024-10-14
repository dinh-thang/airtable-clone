"use client"

import React, { useState } from "react";
import BaseTopBar from "~/app/_components/Header/BaseTopBar";
import TableMenuBar from "~/app/_components/Menu/TableMenuBar";
import ViewTopBar from "~/app/_components/Menu/ViewTopBar";

import TableContainer2 from "~/app/_components/Container/TableContainer2";

const BasePage = ({ params }: { params: { baseId: string }}) => {
  const { baseId } = params;

  // STATES
  const [curTable, setCurTable] = useState<string>("");

  return (
    <main className={`font-base-sans text-[13px] leading-[1.38] overflow-hidden`}>
      {/* top bar */}
      <BaseTopBar
        baseId={baseId}
        className={`bg-teal-500 pl-5 text-white pr-4`}
      />

      <div className={`relative mt-14 flex h-[calc(100vh-56px)] flex-col`}>
        <TableMenuBar setCurTable={setCurTable} curTable={curTable} className={`relative text-white`} baseId={baseId} />

        {/* table toolbar */}
        <ViewTopBar className={`relative z-20`} />

        <TableContainer2 tableId={curTable} className={`relative`} />
      </div>
    </main>
  );
};

export default BasePage;