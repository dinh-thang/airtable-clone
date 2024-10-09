import React, { useState } from "react";
import { type CellProps } from "~/interfaces/interfaces";
import { api } from "~/trpc/react";
import cuid from "cuid";

const EditableCell: React.FC<CellProps> = ({ data, columnKey, rowId, setIsEditing }) => {
  const [editingValue, setEditingValue] = useState<string>(data ?? "");

  const utils = api.useUtils();
  const { mutate } = api.record.updateRowContent.useMutation({
    onMutate() {
      void utils.table.getTableById.cancel();
      const prevData = data;

      return { prevData };
    },
    onError(err, newPost, ctx) {
      if (ctx?.prevData) {
        setEditingValue(ctx.prevData);
      }
    },
    onSettled() {
      void utils.table.getTableById.invalidate();
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
      className={`w-full outline-none`}
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