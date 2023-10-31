import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    onClose: () => void;
}

function Alert({ children, onClose }: Props) {
    return (
        <div className="alert alert-warning">
            {children}
            <button onClick={onClose} className="btn-close" aria-label="Close"></button>
        </div>
    );
}

export default Alert;
