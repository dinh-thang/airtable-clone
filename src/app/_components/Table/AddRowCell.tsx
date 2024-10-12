import React from "react";
import PlusIcon from "~/app/_components/Icon/Base/PlusIcon";

import { api } from "~/trpc/react";
import { type TableHeaderProps } from "~/interfaces/interfaces";
import cuid from "cuid";
import { type RecordFieldsType } from "~/app/_components/Container/TableContainer2";

const AddRowCell: React.FC<TableHeaderProps> = ({tableId, fields, className, customFunction}) => {
  const utils = api.useUtils();
  const { mutate } = api.record.addNewEmptyRecord.useMutation({
    onMutate() {
      void utils.table.getTableById.cancel();

      // Get the data from the queryCache
      const prevData = utils.record.getAllRecordsByTableId.getInfiniteData();

      // Optimistically update the data with our new post
      utils.record.getAllRecordsByTableId.setInfiniteData(
        {
          tableId: tableId!,
          limit: 50,
        },
        (oldRecords) => {
          if (!oldRecords) return oldRecords;

          return {
            ...oldRecords,
            pages: oldRecords.pages.map((page, pageIndex) => {
              if (pageIndex === oldRecords.pages.length - 1) {
                const newRecord = {
                  id: cuid(),
                  index: oldRecords.pages.length,
                  createdAt: new Date(),
                  fields: fields!.reduce((fieldsObj, key) => {
                    fieldsObj[key] = key === 'Age' ? null : '';
                    return fieldsObj;
                  }, {} as RecordFieldsType),
                  tableId: tableId!
                };

                return {
                  ...page,
                  records: [...page.records, newRecord],
                };
              }
              return page;
            }),
          };
        }
      );

      // Return the previous data so we can revert if something goes wrong
      return { prevData };
    },
    onError(err, newField, ctx) {
      if (ctx?.prevData) {
        utils.record.getAllRecordsByTableId.setInfiniteData(
          {
            tableId: tableId!,
            limit: 50,
          },
          ctx.prevData);
      }
    },
    onSettled() {
      // Sync with server once mutation has settled
      void utils.record.getAllRecordsByTableId.invalidate();
      },
  });

  const handleClick = () => {
    if (!tableId) return;

    // if (customFunction) {
    //   customFunction();
    // }

    mutate({tableId});
  }

  return (
    <div onClick={handleClick} className={`${className}`}>
      <PlusIcon />
    </div>
  );
};

export default AddRowCell;