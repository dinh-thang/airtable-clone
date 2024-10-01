import React, { forwardRef } from "react";
import { type ClickableProps } from "~/interfaces/interfaces";
import NewFieldInputField from "~/app/_components/InputField/NewFieldInputField";
import SearchIcon from "~/app/_components/Icon/Main/SearchIcon";
import SecondaryBtn from "~/app/_components/Btn/SecondaryBtn";
import PrimaryBtn from "~/app/_components/Btn/PrimaryBtn";

const AddFieldForm = forwardRef<HTMLDivElement, ClickableProps>(
  ({ className, onClick }, ref) => {
    return (
      <div
        ref={ref}
        className={`absolute bottom-0 left-0 top-9 z-40 -mx-1 h-16 min-h-80 min-w-[400px] cursor-default rounded-md bg-white px-4 py-2 shadow-at-add-cell ${className}`}
      >
        <div className={` w-full`}>
          <NewFieldInputField
            className={`mt-2`}
            id={`fieldName`}
            placeholder={`Field name (optional)`}
          />

          <div className={`mt-4 flex flex-col`}>
            <NewFieldInputField
              className={`px-3`}
              id={`fieldSearch`}
              placeholder={`Find a field type`}
            >
              <SearchIcon />
            </NewFieldInputField>

            <NewFieldInputField
              className={`mt-4`}
              id={`description`}
              placeholder={`Description (optional)`}
            />
          </div>

        </div>

        {/* lower half */}
        <div className={`absolute bottom-4 right-4 flex flex-row`}>
          {/* TODO: future description */}
          <div></div>

          {/* TODO: implement cancel */}
          <SecondaryBtn className={`mr-2`}>
            <p>Cancel</p>
          </SecondaryBtn>

          {/* add new field btn */}
          <PrimaryBtn onClick={onClick}>
            <p>Create field</p>
          </PrimaryBtn>
        </div>
      </div>
    );
  }
);
AddFieldForm.displayName = "AddFieldForm";

export default AddFieldForm;