export interface BaseComponentProps {
  children?: React.ReactNode;
  className?: string;
}

export interface SvgProps {
  className?: string;
}

export interface BtnProps extends BaseComponentProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface LinkProps extends BaseComponentProps {
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export interface TextInputFieldProps extends BaseComponentProps {
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  id: string;
  label?: string;
  placeholder?: string;
}

export interface BaseListContainerProps extends BaseComponentProps {
  workspaceId: string;
}

export interface TableContainerProps extends BaseComponentProps {
  baseId?: string;
  tableId?: string;
}
