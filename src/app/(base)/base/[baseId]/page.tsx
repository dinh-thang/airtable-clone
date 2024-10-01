import React from "react";
import BaseTopBar from "~/app/_components/Header/BaseTopBar";
import TableMenuBar from "~/app/_components/Menu/TableMenuBar";
import ViewTopBar from "~/app/_components/Menu/ViewTopBar";
import TableContainer from "~/app/_components/Container/TableContainer";

const BasePage = () => {
  return (
    <main className={`font-base-sans leading-[1.38] text-[13px]`}>
      {/* top bar */}
      <BaseTopBar className={`pl-5 pr-4 bg-teal-500`}/>

      <div className={`relative flex flex-col mt-14 h-[calc(100vh-56px)]`}>
        <TableMenuBar className={`relative`} baseId={`1`} />

        {/* table toolbar */}
        <ViewTopBar className={`relative z-20`} />

        <div className={`relative z-10 h-full w-full`}>
          {/* right pane */}
          <TableContainer tableId={`f3e2307a-056f-44b0-b68f-403c9a35da09`} className={`absolute w-full z-20 overflow-auto top-0 left-0`} />
        </div>
      </div>
    </main>
  );
};

export default BasePage;