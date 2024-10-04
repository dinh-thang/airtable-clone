"use client"

import { type ColumnDef, getCoreRowModel } from "@tanstack/table-core";
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
  // STATES
  const [fields, setFields] = useState<string[]>([]); // List of table columns
  const [columnSizing, setColumnSizing] = useState({}); // For resizing table columns
  const [data, setData] = useState<(RecordFieldsType)[]>([]);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [rowIsReady, setRowIsReady] = useState<boolean>(false);

  // SERVER
  const { data: fetchedTableContent, isLoading } = api.table.getTableById.useQuery(
    { id: tableId!},
    { enabled: !!tableId && !isEditing }
  )

  const columns = useMemo<ColumnDef<RecordFieldsType>[]>(() =>
    fields.map(field => ({
      accessorKey: field,
      header: field.charAt(0).toUpperCase() + field.slice(1),
      cell: ({ cell, row }) => {
        const value = cell.getValue();

        const stringValue = value === null || value === undefined
          ? undefined
          : String(value);

        const rowId = typeof row.original.id === 'string'
          ? row.original.id
          : String(row.original.id);

        if (rowId === "temp") return;

        return (
          <EditableCell
            setIsEditing={setIsEditing}
            data={stringValue}
            rowId={rowId}
            columnKey={field}
          />
        );
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
      id: "temp",
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

  if (isLoading || !tableId) {
    return (
      <div className={`flex h-full w-full items-center justify-center`}>
        <div
          className="text-surface inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-at-btn-primary"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start">
      <table className={`relative cursor-pointer border-r-0 p-0 ${className}`}>
        <thead className={`relative h-8`}>
          {table.getHeaderGroups().length > 0 ? (
            table.getHeaderGroups().map((headerGroup) => (
              <tr className={`flex h-8`} key={headerGroup.id}>
                <HeaderWrapper className={`flex h-8 min-w-16 leading-6`}>
                  <Checkbox />
                </HeaderWrapper>

                {headerGroup.headers.map((header, index) => (
                  <HeaderWrapper
                    className={`flex h-8 flex-row items-center border-r-[0.8px] font-normal leading-6`}
                    key={header.id + index}
                    style={{ width: header.getSize() }}
                  >
                    <span
                      className={`relative flex h-full w-[124px] flex-grow items-center`}
                    >
                      <p
                        className={`relative h-auto w-full overflow-clip text-ellipsis whitespace-nowrap pl-2 text-start text-[13px]`}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </p>
                    </span>

                    {/* TODO: drop down arrow menu here */}
                    <span
                      // className={`absolute flex items-center pl-1 pr-1.5 top-0 bottom-0 right-0`}
                      className={`flex-end relative bottom-0 right-0 top-0 flex h-full items-center pl-1 pr-1.5`}
                    >
                      <CellArrowIcon className={`opacity-75`} />
                    </span>

                    <div
                      onMouseDown={header.getResizeHandler()}
                      onTouchStart={header.getResizeHandler()}
                      className={`absolute bottom-0 right-0 top-0 z-10 w-1 cursor-col-resize ${header.column.getIsResizing() ? "bg-blue-500" : "bg-transparent"} `}
                    ></div>
                  </HeaderWrapper>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={table.getAllColumns().length}
                className="py-4 text-center"
              ></td>
            </tr>
          )}
        </thead>

        <tbody>
          {table.getRowModel().rows.length > 0 ? (
            table.getRowModel().rows.map((row, index) => (
              <tr
                className={`relative flex h-8 bg-white hover:bg-[#f8f8f8]`}
                key={row.id}
              >
                <td className="min-w-16 border-b-[0.8px] border-r border-r-at-table-bot-gray bg-white pl-2 leading-6">
                  {index + 1}
                </td>

                {row.getVisibleCells().map((cell, index) => (
                  <td
                    className={`flex border-b-[0.8px] border-r-[0.8px] bg-white focus:border-at-btn-primary`}
                    key={cell.id + index}
                    style={{ width: cell.column.getSize() }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr className={`hover:bg-[#f8f8f8]`} />
          )}

          <tr
            className={`relative flex h-8 w-full bg-white hover:bg-[#f8f8f8]`}
          >
            <td
              className={`h-8 w-full border-b-[0.8px] border-r-[0.8px] border-at-table-bot-gray`}
            >
              <AddRowCell
                customFunction={addEmptyRecord}
                tableId={tableId}
                className={`absolute left-2 top-2`}
              />
            </td>
          </tr>
        </tbody>
      </table>

      <table className={`relative z-50 m-0 border-none p-0`}>
        <thead className={`relative h-8`}>
          <tr>
            <AddColumnCell
              setFields={setFields}
              tableId={tableId}
              className={`flex h-8 min-w-16 justify-center border-r-[0.8px] font-normal leading-6`}
            />
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default TableContainer;