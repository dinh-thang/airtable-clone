"use client"

import React from "react";
import { type TextInputFieldProps } from "~/interfaces/interfaces";

const TextInputField: React.FC<TextInputFieldProps> = ({ className, label, id, value, setValue, placeholder }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label className={`text-[20px] text-[#333333]`} htmlFor={id}>{label}</label>}
      <input
        className={`border border-[#333333]/20 rounded-[12px] mt-2 py-3 px-[15px] placeholder-[#333333]/80`}
        id={id} placeholder={placeholder} value={value} onChange={(e) => setValue?.(e.target.value)} type="text" />
    </div>
  );
};

export default TextInputField;