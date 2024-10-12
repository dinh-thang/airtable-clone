import React, { useCallback, useEffect, useMemo, useState } from "react";
import { type TableContainerProps } from "~/interfaces/interfaces";
import { api } from "~/trpc/react";
import { type ColumnDef, getCoreRowModel } from "@tanstack/table-core";
import EditableCell from "~/app/_components/Table/EditableCell";
import { flexRender, useReactTable } from "@tanstack/react-table";
import { useVirtualizer } from "@tanstack/react-virtual";
import HeaderWrapper from "~/app/_components/Table/HeaderWrapper";
import Checkbox from "~/app/_components/Form/Checkbox";
import CellArrowIcon from "~/app/_components/Icon/Base/CellArrowIcon";
import AddRowCell from "~/app/_components/Table/AddRowCell";
import AddColumnCell from "~/app/_components/Table/AddColumnCell";

export type RecordFieldsType = Record<string, string | number | boolean | null>;

const TableContainer2: React.FC<TableContainerProps> = ({ className, tableId }) => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const observerRef = React.useRef<HTMLTableRowElement>(null);

  const [page, setPage] = React.useState(0);
  // if a cell is being edited then true
  const [isEditing, setIsEditing] = useState<boolean>(false);
  // for resizing
  const [columnSizing, setColumnSizing] = useState({});

  // fetches list of fields
  const { data: rawFields } = api.field.getAllFieldsByTableId.useQuery(
    { tableId: tableId! },
    { enabled: !!tableId }
  );

  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    data: rawData,
    isLoading
  } = api.record.getAllRecordsByTableId.useInfiniteQuery(
    {
      limit: 50,
      tableId: tableId!
    },
    {
      initialCursor: null,
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      refetchOnWindowFocus: false,
      enabled: !!tableId && !isEditing,
    }
  )

  const handleFetchNextPage = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      void fetchNextPage();
      setPage((prev) => prev + 1);
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const handleFieldsUpdate = useMemo(() => {
    if (!rawFields) return [];

    return rawFields.map((field) => field.name);
  }, [rawFields]);

  const handleUpdateData = () => {
    // update and re fetch data everytime updated
  }

  const tableData: RecordFieldsType[] = useMemo(() => {
    if (!rawData) return [];

    return rawData.pages.flatMap((page) =>
      page.records.map((record) => ({
        id: record.id,
        ...record.fields as RecordFieldsType,
      }))
    );
  }, [rawData]);

  const columns = useMemo<ColumnDef<RecordFieldsType>[]>(() =>
    handleFieldsUpdate.map(field => ({
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
    })), [handleFieldsUpdate]
  );


  const table = useReactTable({
    columns,
    data: tableData,
    state: {
      columnSizing,
    },
    getCoreRowModel: getCoreRowModel(),
    enableColumnResizing: true,
    columnResizeMode: "onChange",
    onColumnSizingChange: setColumnSizing,
    getRowId: (originalRow: RecordFieldsType) => originalRow.id as string,
  })

  const rowVirtualizer = useVirtualizer({
    count: table.getRowModel().rows.length,
    estimateSize: () => 32,
    getScrollElement: () => scrollContainerRef.current,
    measureElement:
      typeof window !== 'undefined' &&
      !navigator.userAgent.includes('Firefox')
        ? element => element?.getBoundingClientRect().height
        : undefined,
    overscan: 5,
  });

  useEffect(() => {
    const currentObserverRef = observerRef.current;

    if (currentObserverRef) {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];

          if (!entry) return;

          if (entry.isIntersecting) {
            handleFetchNextPage();
          }
        },
        {
          root: null,
          rootMargin: '300px',
          threshold: 1.0,
        }
      );

      observer.observe(currentObserverRef);

      return () => {
        if (currentObserverRef) {
          observer.unobserve(currentObserverRef);
        }
      };
    }
  }, [handleFetchNextPage]);

  if (isLoading || !tableId || handleFieldsUpdate.length === 0) {
    return (
      <div className={`fixed flex h-full w-full items-center justify-center`}>
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
    <div ref={scrollContainerRef} className={`relative flex flex-row overflow-auto h-screen ${className}`}>
      <table className={`cursor-pointer border-r-0 p-0`}>
        <thead className={`h-8`}>
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

                  <span
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

        <tbody className={`relative`} style={{
          height: `${rowVirtualizer.getTotalSize()}px + 32px`,
        }}>
          {table.getRowModel().rows.length > 0 ? (
            rowVirtualizer.getVirtualItems().map((virtualRow) => {
              const row = table.getRowModel().rows[virtualRow.index];

              if (row) return (
                <tr
                  data-index={virtualRow.index}
                  ref={node => rowVirtualizer.measureElement(node)}
                  className={`absolute flex h-8 bg-white hover:bg-[#f8f8f8]`}
                  key={row.id}
                  style={{
                    top: `${virtualRow.start}px`,
                    left: 0,
                    width: '100%'
                  }}
                >
                  <td className="min-w-16 border-b-[0.8px] border-r border-r-at-table-bot-gray bg-white pl-2 leading-6">
                    {virtualRow.index + 1}
                  </td>

                  {row.getVisibleCells().map((cell) => (
                    <td
                      className={`flex border-b-[0.8px] border-r-[0.8px] bg-white focus:border-at-btn-primary`}
                      key={cell.id}
                      style={{ width: cell.column.getSize() }}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              );
            })
          ) : (
            <tr className={`hover:bg-[#f8f8f8]`} />
          )}

          <tr
            style={{
              top: `${rowVirtualizer.getTotalSize()}px`,
            }}
            ref={observerRef}
            className={`absolute flex h-8 w-full bg-white hover:bg-[#f8f8f8]`}
          >
            <td
              className={`h-8 w-full border-b-[0.8px] border-r-[0.8px] border-at-table-bot-gray`}
            >
              <AddRowCell
                // customFunction={addEmptyRecord}
                tableId={tableId}
                fields={handleFieldsUpdate}
                className={`absolute left-2 top-2`}
              />
            </td>
          </tr>
        </tbody>
      </table>

      <table className={`relative right-0 z-10 m-0 border-none p-0`}>
        <thead className={`relative h-8`}>
        <tr>
          <AddColumnCell
            // setFields={setFields}
            tableId={tableId}
            className={`flex h-8 min-w-16 justify-center border-r-[0.8px] font-normal leading-6`}
          />
        </tr>
        </thead>
      </table>
    </div>
  );
};

export default TableContainer2;