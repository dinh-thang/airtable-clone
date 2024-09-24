import React from "react";
import { type TextInputFieldProps } from "~/interfaces/interfaces";
import SearchIcon from "~/app/_components/Icon/Main/SearchIcon";

const SearchBox: React.FC<TextInputFieldProps> = ({ className, id, value, placeholder }) => {
  return (
    <div className={`flex flex-row items-center w-full ${className}`}>
      <div className="flex flex-row items-center w-full h-8 rounded-full hover:shadow-at-main-nav-hover px-4 shadow-at-main-nav">
        <SearchIcon/>
        <input
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={temp}
          className={`ml-2 text-[13px] outline-none placeholder-at-half-black/75`}
          type="text"
        />
      </div>
    </div>
  );
};

export default SearchBox;