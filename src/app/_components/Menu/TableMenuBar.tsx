"use client"

import React, { useEffect, useState } from "react";
import { type Table, type TableContainerProps } from "~/interfaces/interfaces";
import { api } from "~/trpc/react";
import PlusIcon from "~/app/_components/Icon/Base/PlusIcon";

const TableMenuBar: React.FC<TableContainerProps> = ({ className, baseId, setCurTable }) => {
  const utils = api.useUtils();

  const { data: fetchedTables, isLoading } = api.base.getListOfTables.useQuery(
    { baseId: baseId! },
    { enabled: !!baseId }
  );
  const { mutate } = api.table.createTable.useMutation({
    async onMutate (newTable) {
      await utils.base.getListOfTables.cancel();

      const prevData = utils.base.getListOfTables.getData();

      if (newTable) {
        setTables(prevState => [...prevState, {
          id: "temp-table-id",
          name: newTableName,
        }]);
      }
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

  // STATES
  const [tables, setTables] = useState<Table[]>([]);
  const [newTableName, setNewTableName] = useState<string>("New Table");
  const [newDescription, setNewDescription] = useState<string>("");

  const switchTable = (id: string) => {
    setCurTable!(id);
  }

  const handleAddTable = () => {
    mutate({
      baseId: baseId!,
      name: newTableName,
      description: newDescription,
    })
  }

  useEffect(() => {
    if (!fetchedTables) return;

    setTables(fetchedTables.tables);

    if (fetchedTables.tables.length > 0) {
      setCurTable!(fetchedTables.tables[0]!.id);
    }
  }, [fetchedTables]);

  return (
    <div className={`h-8 bg-teal-500 ${className}`}>
      {/* left most group */}
      <div className={`flex h-8 flex-row bg-black/10 pl-2`}>
        {isLoading && (
          <div className={`relative flex w-full items-center`}>
            <div
              className={`mx-3 flex h-3 w-16 animate-pulse rounded-full bg-black/10`}
            />
            <div
              className={`mx-3 flex h-3 w-20 animate-pulse rounded-full bg-black/10`}
            />
            <div
              className={`mx-3 flex h-3 w-16 animate-pulse rounded-full bg-black/10`}
            />
            <div
              className={`mx-3 flex h-3 w-20 animate-pulse rounded-full bg-black/10`}
            />
            <div
              className={`mx-3 flex h-3 w-16 animate-pulse rounded-full bg-black/10`}
            />
          </div>
        )}

        {tables.map((table, index) => (
          <div key={index} className={`flex flex-row items-center`}>
            <div
              className={`flex h-full items-center rounded-t-[4px] px-3 hover:bg-black/10`}
            >
              <span
                className={`cursor-pointer`}
                onClick={() => switchTable(table.id)}
              >
                {table.name}
              </span>
            </div>

            <div className={`h-4 w-[1px] bg-black/30`} />
          </div>
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