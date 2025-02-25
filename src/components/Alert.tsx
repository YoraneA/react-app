import {ReactNode} from "react";

export default function Alert ({children, onClose}: Props) {
  return (
    <div className="alert alert-primary alert-dissmissible fade show">
      {children}
      <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={onClose}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  )
}

interface Props {
  children: ReactNode;
  onClose: () => void;
}