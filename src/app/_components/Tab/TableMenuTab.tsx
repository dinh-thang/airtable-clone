import React from "react";
import CurvedIcon from "~/app/_components/Icon/CurvedIcon";

interface TableMenuTabProps {
  name: string;
  id: string;
  setTab: React.Dispatch<React.SetStateAction<string>>;
  curTable: string;
}

const TableMenuTab: React.FC<TableMenuTabProps> = ({ name, id, setTab, curTable }) => {
  const handleSelect = () => {
    console.log(id);
    setTab(id);
  };

  return (
    <div className={`flex flex-row items-center`}>
      {curTable === id ? (
        <div
          className={`relative flex h-full  items-center rounded-t-sm px-3 bg-white`}
        >
          <CurvedIcon className="absolute bottom-0 left-[-3px] scale-x-[-1]" />
          <span
            className={`cursor-pointer text-at-half-black font-medium`}
            onClick={handleSelect}
          >
            {name}
          </span>
          <CurvedIcon className="absolute bottom-0 right-[-3px]" />
        </div>
      ) : (
        <div
          className={`flex h-full items-center rounded-t-sm px-3 hover:bg-black/10`}
        >
          <span
            className={`cursor-pointer`}
            onClick={handleSelect}
          >
            {name}
          </span>
        </div>
      )}

      {/*<div className={`relative h-3 w-[1px] bg-white/30`} />*/}
    </div>);
};

export default TableMenuTab;