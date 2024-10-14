"use client"

import React, { useEffect, useRef, useState } from "react";
import HeaderWrapper from "~/app/_components/Table/HeaderWrapper";
import { type TableHeaderProps } from "~/interfaces/interfaces";
import { api } from "~/trpc/react";
import NewFieldInputField from "~/app/_components/InputField/NewFieldInputField";
import SearchIcon from "~/app/_components/Icon/Main/SearchIcon";
import SecondaryBtn from "~/app/_components/Btn/SecondaryBtn";
import PrimaryBtn from "~/app/_components/Btn/PrimaryBtn";
import cuid from "cuid";

const AddColumnCell: React.FC<TableHeaderProps> = ({ className, tableId }) => {
  const utils = api.useUtils();

  const { mutate } = api.field.createField.useMutation({
    onMutate(newField) {
      void utils.field.getAllFieldsByTableId.cancel();

      // Get the data from the queryCache
      const prevData = utils.field.getAllFieldsByTableId.getData();

      // Optimistically update the data with our new post
      utils.field.getAllFieldsByTableId.setData(
        {tableId: tableId!},
        (oldFields) => [...oldFields ?? [], { name: newField.name, id: cuid() }],
      );

      // Return the previous data so we can revert if something goes wrong
      return { prevData };
    },
    onError(err, newField, ctx) {
      if (ctx?.prevData) {
        utils.field.getAllFieldsByTableId.setData({ tableId: tableId! }, ctx.prevData);
      }
    },
    onSettled() {
      // Sync with server once mutation has settled
      void utils.field.getAllFieldsByTableId.invalidate();
    },
  });

  const [fieldName, setFieldName] = useState<string>("");
  const [fieldDesc, setFieldDesc] = useState<string>("");
  const [fieldType, setFieldType] = useState<string>("text");
  const [position, setPosition] = useState({ left: "0", right: 'auto' });

  const [isAddingField, setIsAddingField] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLTableCellElement>(null);
  const addFieldDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node) &&
        addFieldDivRef.current &&
        !addFieldDivRef.current.contains(event.target as Node)
      ) {
        setIsAddingField(false);
      }
    }

    // check pop up screen
    if (isAddingField && addFieldDivRef.current) {
      const rect = addFieldDivRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;

      if (rect.right > viewportWidth) {
        setPosition({ right: "0", left: 'auto' });
      } else {
        // Otherwise, keep it positioned from the left
        setPosition({ left: "0", right: 'auto' });
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isAddingField]);

  // Handle pop up menu
  const handleHeaderClick = (e: React.MouseEvent<HTMLTableCellElement>) => {
    if (!isAddingField) {
      setIsAddingField(true);
    }
  };

  const handlePlusClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsAddingField(true);
  };

  // Handle mutation
  const handleAddField = (e: React.MouseEvent) => {
    e.preventDefault();

    if (fieldType === "") {
      // mutate on server
      const newField = {
        name: fieldName,
        type: "text",
        tableId: tableId!,
        description: fieldDesc,
      };

      // Call the mutate function to perform the mutation
      mutate(newField);
      return;
    }

    // mutate on server
    const newField = {
      name: fieldName,
      type: fieldType,
      tableId: tableId!,
      description: fieldDesc,
    };

    // Call the mutate function to perform the mutation
    mutate(newField);
  };

  return (
    <HeaderWrapper onClick={handleHeaderClick} ref={wrapperRef} className={`min-w-20 max-w-20 ${className}`}>
      <div onClick={handlePlusClick} className={`flex h-full items-center justify-center`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className="icon">
          <use fill="currentColor" href="/icons/icon_definitions.svg?v=4ff0794f56fc1e06fa1e614b25254a46#Plus"></use></svg>
      </div>

      {isAddingField && (
        <div
          style={{
            left: position.left,
            right: position.right,
          }}
          ref={addFieldDivRef}
          className={`absolute bottom-0 left-0 top-9 z-40 -mx-1 h-16 min-h-80 min-w-[400px] cursor-default rounded-md bg-white px-4 py-2 shadow-at-add-cell`}
        >
          <div className={` w-full`}>
            {/* name field */}
            <NewFieldInputField
              className={`mt-2`}
              value={fieldName}
              setValue={setFieldName}
              id={`fieldName`}
              placeholder={`Field name (optional)`}
            />

            <div className={`mt-4 flex flex-col`}>
              {/* type field */}
              <NewFieldInputField
                className={`px-3`}
                value={fieldType}
                setValue={setFieldType}
                id={`fieldSearch`}
                placeholder={`Find a field type`}
              >
                <SearchIcon />
              </NewFieldInputField>

              {/* description field */}
              <NewFieldInputField
                className={`mt-4`}
                id={`description`}
                value={fieldDesc}
                setValue={setFieldDesc}
                placeholder={`Description (optional)`}
              />
            </div>

          </div>

          {/* lower half */}
          <div className={`absolute bottom-4 right-4 flex flex-row`}>
            {/* TODO: future description */}
            <div></div>

            <SecondaryBtn className={`mr-2`}>
              <p>Cancel</p>
            </SecondaryBtn>

            {/* add new field btn */}
            <PrimaryBtn onClick={(e) => handleAddField(e)}>
              <p>Create field</p>
            </PrimaryBtn>
          </div>
        </div>
      )}
    </HeaderWrapper>
  );
};

export default AddColumnCell;