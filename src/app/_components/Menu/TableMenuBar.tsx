"use client"

import React, { useEffect, useState } from "react";
import { type Table, type TableContainerProps } from "~/interfaces/interfaces";
import { api } from "~/trpc/react";
import PlusIcon from "~/app/_components/Icon/Base/PlusIcon";

const TableMenuBar: React.FC<TableContainerProps> = ({ className, baseId, curTable, setCurTable }) => {
  const { data: fetchedTables } = api.base.getListOfTables.useQuery({ baseId: baseId! });

  // STATES
  const [tables, setTables] = useState<Table[]>([]);

  const switchTable = (id: string) => {
    setCurTable!(id);
  }

  useEffect(() => {
    if (!fetchedTables) return;

    setTables(fetchedTables.tables);
    setCurTable!(fetchedTables.tables[0]!.id);
  }, [fetchedTables]);

  return (
    <div className={`h-8 bg-teal-500 ${className}`}>
      {/* left most group */}
      <div className={`flex h-8 flex-row bg-black/10 pl-2`}>
        {tables.map((table) => (
          <div key={table.id}
               className={`flex h-full items-center bg-white px-3 ${table.id === curTable ? "bg-white" : ""}`}>
            <span className={`cursor-pointer`} onClick={() => switchTable(table.id)}>
              {table.name}
            </span>
          </div>
        ))}

        {/* cell to add table */}
        <div className={`flex h-full items-center bg-white px-3`}>
            <span className={`cursor-pointer`}>
              <PlusIcon/>
            </span>
        </div>

      </div>

      {/* curved end */}
      <div className={`bg-black/10`}></div>

      {/* right most group */}
      <div className={`bg-black/10`}></div>
    </div>
  );
};

export default TableMenuBar;