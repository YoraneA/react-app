import {ReactNode} from "react";

export default function Button({children, onClick, color = Color.SECONDARY}: Props) {


  return (
    <button
      className={`btn btn-${color}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

interface Props {
  children: ReactNode;
  color?: Color;
  onClick: () => void;
}

export enum Color {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  SUCCESS = "success",
  DANGER = "danger",
  WARNING = "warning",
  INFO = "info",
  LIGHT = "light",
  DARK = "dark"
}