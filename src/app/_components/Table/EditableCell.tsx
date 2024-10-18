import React, { useState } from "react";
import { type CellProps } from "~/interfaces/interfaces";
import { api } from "~/trpc/react";
import cuid from "cuid";
import { type RecordFieldsType } from "~/app/_components/Container/TableContainer2";

const EditableCell: React.FC<CellProps> = ({ data, tableId, columnKey, rowId, setIsEditing }) => {
  const [editingValue, setEditingValue] = useState<string>(data ?? "");

  const utils = api.useUtils();
  const { mutate } = api.record.updateRowContent.useMutation({
    onMutate(updatedRow) {
      void utils.record.getAllRecordsByTableId.cancel();

      const prevData = data;

      utils.record.getAllRecordsByTableId.setInfiniteData(
        {
          tableId: tableId!,
          limit: 200,
        },
        (oldRecords) => {
          if (!oldRecords) return oldRecords;

          return {
            ...oldRecords,
            pages: oldRecords.pages.map((page) => ({
              ...page,
              records: page.records.map((record) =>
                record.id === rowId
                  ? {
                    ...record,
                    fields: {
                      ...((record.fields as RecordFieldsType) || {}),
                      [updatedRow.fieldKey]: updatedRow.fieldValue,
                    },
                  }
                  : record
              ),
            })),
          };
        }
      );
      return { prevData };
    },
    onError(err, newPost, ctx) {
      return "temp error";
    },
    onSettled() {
      void utils.record.getAllRecordsByTableId.invalidate();
    },
  });

  const handleFocus = () => {
    setIsEditing!(true);
  }

  const handleSave = async () => {
    setIsEditing!(false);

    if (editingValue !== data && rowId) {
      mutate({
        rowId: rowId,
        fieldKey: columnKey,
        fieldValue: editingValue,
      });
    }
  };

  return (
    <input
      className={`w-full text-ellipsis p-1.5 outline-none caret-transparent focus:shadow-at-focus-cell focus:z-50 focus:rounded-sm`}
      id={cuid()}
      value={editingValue}
      onFocus={handleFocus}
      onChange={(e) => setEditingValue(e.target.value)}
      onBlur={handleSave}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          void handleSave();
        }
      }}
    />
  );
};

export default EditableCell;