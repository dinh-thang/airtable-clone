"use client"

import React, { useState } from "react";
import { type TableContainerProps } from "~/interfaces/interfaces";
import { api } from "~/trpc/react";
import { ColumnDef, createColumnHelper, createTable, getCoreRowModel } from "@tanstack/table-core";
import { flexRender, useReactTable } from "@tanstack/react-table";
import HeaderWrapper from "~/app/_components/Table/HeaderWrapper";
import Checkbox from "~/app/_components/Form/Checkbox";
import CellArrowIcon from "~/app/_components/Icon/Base/CellArrowIcon";
// import { type inferRouterOutputs } from "@trpc/server";
// import { type AppRouter } from "~/server/api/root";

// type RecordType = inferRouterOutputs<AppRouter>["table"]["getTableById"];

type Student = {
  studentId: number;
  name: string;
  dateOfBirth: string;
  major: string;
};

const TableContainer: React.FC<TableContainerProps> = ({ className }) => {
  const defaultData: Student[] = [
    {
      studentId: 1111,
      name: "Bahar Constantia",
      dateOfBirth: "1984-01-04",
      major: "Business",
    },
    {
      studentId: 2222,
      name: "Harold Nona",
      dateOfBirth: "1961-05-10",
      major: "Communications",
    },
    {
      studentId: 3333,
      name: "Raginolf Arnulf",
      dateOfBirth: "1991-10-12",
      major: "Business",
    },
    {
      studentId: 4444,
      name: "Marvyn Wendi",
      dateOfBirth: "1978-09-24",
      major: "Business",
    },
  ];
  const [data, setData] = useState<Student[]>([...defaultData]);
  const [columnSizing, setColumnSizing] = useState({});

  const columnHelper = createColumnHelper<Student>();

  const columns = [
    columnHelper.accessor("studentId", {
      header: "Student ID",
      minSize: 64,
    }),
    columnHelper.accessor("name", {
      header: "Full Name",
      minSize: 64,
    }),
    columnHelper.accessor("dateOfBirth", {
      header: "Date Of Birth",
      minSize: 64,
    }),
    columnHelper.accessor("major", {
      header: "Major",
      minSize: 64,
    }),
  ];

  const table = useReactTable({
    columns,
    data,
    state: {
      columnSizing,
    },
    getCoreRowModel: getCoreRowModel(),
    enableColumnResizing: true,
    columnResizeMode: "onChange",
    onColumnSizingChange: setColumnSizing,
  })

  return (
    <table className={`p-0 ${className}`}>
      <thead className={`h-8`}>

       {table.getHeaderGroups().map((headerGroup) => (
          <tr className={`h-8`} key={headerGroup.id}>
            <HeaderWrapper className={`leading-6 w-[66px]`}>
              <Checkbox></Checkbox>
            </HeaderWrapper>
            {headerGroup.headers.map((header) => (
              <HeaderWrapper
                className={`border-r-[0.8px] font-normal leading-6`}
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
          </tr>
        ))}
      </thead>

      <tbody>
        {table.getRowModel().rows.map((row, index) => (
          <tr key={row.id}>
            <td className="leading-6 w-[66px] border-r border-b-[0.8px] border-r-at-table-bot-gray">
              {index + 1}
            </td>

            {row.getVisibleCells().map((cell) => (
              <td
                className={`border-r-[0.8px] border-b-[0.8px]`}
                key={cell.id}
                style={{ width: cell.column.getSize() }}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableContainer;