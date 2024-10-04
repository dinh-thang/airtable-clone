import React from "react";
import PlusIcon from "~/app/_components/Icon/Base/PlusIcon";

import { api } from "~/trpc/react";
import { type TableHeaderProps } from "~/interfaces/interfaces";

const AddRowCell: React.FC<TableHeaderProps> = ({tableId, setFields, className, customFunction}) => {
  const utils = api.useUtils();
  const { mutate } = api.record.addNewEmptyRecord.useMutation({
    onMutate() {
      void utils.table.getTableById.cancel();

      // Get the data from the queryCache
      const prevData = utils.table.getTableById.getData();

      // Optimistically update the data with our new post
      if (setFields) {
        setFields(prevState => [...prevState, ""]);
      }

      // Return the previous data so we can revert if something goes wrong
      return { prevData };
    },
    onError(err, newField, ctx) {
      if (ctx?.prevData) {
        utils.table.getTableById.setData({ id: tableId! }, ctx.prevData);
      }
    },
    onSettled() {
      // Sync with server once mutation has settled
      void utils.table.getTableById.invalidate();
      },
  });

  const handleClick = () => {
    if (!tableId) return;

    if (customFunction) {
      customFunction();
    }

    mutate({tableId});
  }

  return (
    <div onClick={handleClick} className={`${className}`}>
      <PlusIcon />
    </div>
  );
};

export default AddRowCell;