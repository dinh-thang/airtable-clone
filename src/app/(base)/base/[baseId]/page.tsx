"use client"

import React, { useState } from "react";
import BaseTopBar from "~/app/_components/Header/BaseTopBar";
import TableMenuBar from "~/app/_components/Menu/TableMenuBar";
import ViewTopBar from "~/app/_components/Menu/ViewTopBar";
import TableContainer from "~/app/_components/Container/TableContainer";

import { useSession } from "next-auth/react";


const BasePage = ({ params }: { params: { baseId: string }}) => {
  const { data: session } = useSession();
  const { baseId } = params;

  // STATES
  const [curTable, setCurTable] = useState<string>("");

  return (
    <main className={`font-base-sans text-[13px] leading-[1.38] overflow-hidden`}>
      {/* top bar */}
      <BaseTopBar
        baseId={baseId}
        userImage={session?.user?.image ?? ""}
        className={`bg-teal-500 pl-5 pr-4`}
      />

      <div className={`relative mt-14 flex h-[calc(100vh-56px)] flex-col`}>
        <TableMenuBar setCurTable={setCurTable} className={`relative`} baseId={baseId} />

        {/* table toolbar */}
        <ViewTopBar className={`relative z-20`} />

        <div className={`relative z-10 h-full overflow-auto`}>
          <TableContainer
            tableId={curTable}
            className={`left-0 top-0 z-20 w-auto overflow-auto`}
          />
        </div>
      </div>
    </main>
  );
};

export default BasePage;