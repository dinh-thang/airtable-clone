"use client"

import { getCoreRowModel } from "@tanstack/table-core";
import React, { useEffect, useMemo, useState } from "react";
import { flexRender, useReactTable } from "@tanstack/react-table";
import { api } from "~/trpc/react";

import { type TableContainerProps } from "~/interfaces/interfaces";

import HeaderWrapper from "~/app/_components/Table/HeaderWrapper";
import Checkbox from "~/app/_components/Form/Checkbox";
import CellArrowIcon from "~/app/_components/Icon/Base/CellArrowIcon";
import AddColumnCell from "~/app/_components/Table/AddColumnCell";
import EditableCell from "~/app/_components/Table/EditableCell";
import AddRowCell from "~/app/_components/Table/AddRowCell";

type RecordFieldsType = Record<string, string | number | boolean | null>;

const TableContainer: React.FC<TableContainerProps> = ({ className, tableId }) => {
  // SERVER
  const { data: fetchedTableContent } = api.table.getTableById.useQuery(
    { id: tableId!},
  )

  // STATES
  const [fields, setFields] = useState<string[]>([]); // List of table columns
  const [columnSizing, setColumnSizing] = useState({}); // For resizing table columns
  const [data, setData] = useState<(RecordFieldsType)[]>([]);

  const columns = useMemo(() =>
    fields.map(field => ({
      accessorKey: field,
      header: field.charAt(0).toUpperCase() + field.slice(1),
      // @ts-ignore
      cell: ({ cell, row }) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        return <EditableCell data={cell.getValue()} rowId={row.original.id} columnKey={field}/>
      },
      minSize: 50,
      maxSize: 500,
    })), [fields]
  );

  useEffect(() => {
    if (!fetchedTableContent) return;

    // update the rows with data
    const mappedData = fetchedTableContent?.records.map((record) => ({
      id: record.id,
      ...record.fields as RecordFieldsType,
    })) ?? [];
    setData(mappedData); // Store the fetched data in state

    // update the columns state
    const extractedFields = fetchedTableContent.fields.map((field) => field.name);
    setFields(extractedFields);

  }, [fetchedTableContent]);

  const addEmptyRecord = () => {
    const newRecord = {
      id: crypto.randomUUID(),
      ...fields.reduce((acc, field) => ({ ...acc, [field]: "" }), {}),
    };

    setData((prevData) => [...prevData, newRecord]);  // Add the new record to the existing data
  };

  const table = useReactTable({
    columns,
    data: data,
    state: {
      columnSizing,
    },
    getCoreRowModel: getCoreRowModel(),
    enableColumnResizing: true,
    columnResizeMode: "onChange",
    onColumnSizingChange: setColumnSizing,
    getRowId: (originalRow: RecordFieldsType) => originalRow.id as string,
  })

  return (
    <table className={`p-0 cursor-pointer ${className}`}>
      <thead className={`h-8`}>
       {table.getHeaderGroups().map((headerGroup) => (
          <tr className={`h-8`} key={headerGroup.id}>
            <HeaderWrapper className={`leading-6 min-w-16`}>
              <Checkbox/>
            </HeaderWrapper>

            {headerGroup.headers.map((header) => (
              <HeaderWrapper
                className={`border-r-[0.8px] font-normal leading-6 min-w-20`}
                key={header.id}
                style={{ width: header.getSize() }}
              >
                <p className={`text-[13px] pl-2 text-start`}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                  )}
                </p>

                {/* TODO: drop down arrow menu here */}
                <span className={`absolute flex items-center pl-1 pr-1.5 top-0 bottom-0 right-0`}>
                  <CellArrowIcon className={`opacity-75`}/>
                </span>

                <div
                  onMouseDown={header.getResizeHandler()}
                  onTouchStart={header.getResizeHandler()}
                  className={`absolute top-0 right-0 bottom-0 w-1 cursor-col-resize z-10 
                    ${header.column.getIsResizing() ? 'bg-blue-500' : 'bg-transparent'} `}
                ></div>
              </HeaderWrapper>
            ))}
            
            <AddColumnCell tableId={tableId} className={`border-r-[0.8px] font-normal leading-6 min-w-20`}/>
          </tr>
        ))}
      </thead>

      <tbody>
        {table.getRowModel().rows.map((row, index) => (
          <tr className={`h-8`} key={row.id}>
            <td className="leading-6 pl-2 min-w-16 border-r bg-white border-b-[0.8px] border-r-at-table-bot-gray">
              {index + 1}
            </td>

            {row.getVisibleCells().map((cell) => (
              <td
                className={`border-r-[0.8px] bg-white pl-2 border-b-[0.8px]`}
                key={cell.id}
                style={{ width: cell.column.getSize() }}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}

        <tr className={`relative h-8 w-full hover:bg-[#f8f8f8] bg-white border-b-[0.8px] border-r border-r-at-table-bot-gray`}>
          <td className={`h-8 w-16 border-r border-r-at-table-bot-gray`}>
            <AddRowCell customFunction={addEmptyRecord} tableId={tableId} className={`absolute top-2 left-2`}/>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableContainer;