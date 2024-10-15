"use client"

import React, { useEffect } from "react";
import { type TableContainerProps } from "~/interfaces/interfaces";
import { api } from "~/trpc/react";
import PlusIcon from "~/app/_components/Icon/Base/PlusIcon";
import cuid from "cuid";
import TableMenuTab from "~/app/_components/Tab/TableMenuTab";

const TableMenuBar: React.FC<TableContainerProps> = ({ className, baseId, setCurTable, curTable }) => {
  const utils = api.useUtils();

  const { data: fetchedTables, isLoading } = api.base.getListOfTables.useQuery(
    { baseId: baseId! },
    { enabled: !!baseId }
  );
  const { mutate } = api.table.createTable.useMutation({
    async onMutate (newTable) {
      await utils.base.getListOfTables.cancel();

      const prevData = utils.base.getListOfTables.getData();

      utils.base.getListOfTables.setData({ baseId: baseId! }, (oldTables) => {
        return {
          ...oldTables,
          tables: [
            ...(oldTables?.tables ?? []),
            {
              id: cuid(),
              name: newTable.name,
            },
          ],
        };
      });
      return { prevData };
    },
    onError(err, newData, ctx) {
      if (ctx?.prevData) {
        utils.base.getListOfTables.setData({baseId: baseId!}, ctx.prevData);
      }
    },
    onSettled() {
      // Sync with server once mutation has
      void utils.base.getListOfTables.invalidate();
    },
  });

  useEffect(() => {
    if (!fetchedTables) return;

    if (!isLoading && fetchedTables?.tables.length > 0 && !curTable) {
      setCurTable!(fetchedTables.tables[0]!.id);
    }
  }, [fetchedTables, isLoading, curTable, setCurTable]);

  const handleAddTable = () => {
    mutate({
      baseId: baseId!,
      name: "My Table",
      description: "",
    })
  }

  if (isLoading || !fetchedTables) return (
    <div className={`w-full bg-teal-500 h-8`}>
      <div className={`flex flex-row w-full bg-black/10 h-8 items-center`}>
        <div
          className={`mx-3 flex h-3 px-3 w-16 animate-pulse rounded-full bg-black/10`}
        />
        <div
          className={`mx-3 flex h-3 px-3 w-20 animate-pulse rounded-full bg-black/10`}
        />
        <div
          className={`mx-3 flex h-3 px-3 w-16 animate-pulse rounded-full bg-black/10`}
        />
        <div
          className={`mx-3 flex h-3 px-3 w-20 animate-pulse rounded-full bg-black/10`}
        />
        <div
          className={`mx-3 flex h-3 px-3 w-16 animate-pulse rounded-full bg-black/10`}
        />
      </div>
    </div>
  );


  return (
    <div className={`h-8 bg-teal-500 ${className}`}>
      {/* left most group */}
      <div className={`flex h-8 flex-row bg-black/10 pl-2`}>
        {fetchedTables.tables.map((table, index) => (
          <TableMenuTab key={index} curTable={curTable!} name={table.name} id={table.id} setTab={setCurTable!}/>
        ))}

        {/* cell to add table */}
        {!isLoading && (
          <div
            onClick={handleAddTable}
            className={`flex h-full items-center rounded-t-[4px] px-3 hover:bg-black/10`}
          >
            <span className={`flex cursor-pointer flex-row`}>
              <PlusIcon />
              <p className={`pl-3`}>Add or import</p>
            </span>
          </div>
        )}
      </div>

      {/* curved end */}
      <div className={`bg-black/10`}></div>

      {/* right most group */}
      <div className={`bg-black/10`}></div>
    </div>
  );
};

export default TableMenuBar;