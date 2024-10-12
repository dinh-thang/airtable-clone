import type { CSSProperties, Dispatch, MouseEventHandler, ReactNode, SetStateAction } from "react";

export interface BaseComponentProps {
  children?: ReactNode;
  className?: string;
}

export interface SvgProps {
  className?: string;
}

export interface ClickableProps extends BaseComponentProps {
  onClick?: () => void;
}

export interface BtnProps extends BaseComponentProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface LinkProps extends BaseComponentProps {
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export interface TextInputFieldProps extends BaseComponentProps {
  value?: string;
  setValue?: Dispatch<SetStateAction<string>>;
  id: string;
  label?: string;
  placeholder?: string;
}

export interface BaseListContainerProps extends BaseComponentProps {
  workspaceId: string;
}

export interface TableContainerProps extends BaseComponentProps {
  className?: string;
  baseId?: string;
  tableId?: string;
  curTable?: string;
  setCurTable?: Dispatch<SetStateAction<string>>;
}

export interface Table {
  id: string;
  name: string;
}

export interface TableHeaderProps extends BaseComponentProps {
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLTableCellElement>;
  className?: string;
  children?: ReactNode;
  fields?: string[];
  setFields?: Dispatch<SetStateAction<string[]>>;
  tableId?: string;
  customFunction?: () => void;
  setReady?: Dispatch<SetStateAction<boolean>>;
}

export interface Field {
  name: string;
  type: string;
  description?: string;
}

export interface CellProps extends BaseComponentProps {
  data?: string;
  tableId?: string;
  setData?: Dispatch<SetStateAction<string>>;
  rowId: string;
  columnKey: string;
  currentData?: Field;
  setIsEditing?: Dispatch<SetStateAction<boolean>>;
  isReady?: boolean;
}



