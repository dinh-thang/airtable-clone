import React from "react";
import { type TextInputFieldProps } from "~/interfaces/interfaces";

const NewFieldInputField: React.FC<TextInputFieldProps> = ({ className, placeholder, id, children, setValue, value }) => {
  return (
    <div className={`flex items-center w-full rounded-md shadow-at-rainbow-shadow focus:border ${className}`}>
      {children}
      <input
        value={value}
        onChange={(e) => setValue!(e.target.value)}
        className={`h-8 p-2 rounded-md w-full focus:outline-none`} id={id} placeholder={placeholder} />
    </div>
  );
};

export default NewFieldInputField;