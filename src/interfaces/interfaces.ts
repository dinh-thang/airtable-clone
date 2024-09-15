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

