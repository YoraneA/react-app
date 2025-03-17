import {useEffect, useRef} from "react";

export default function App() {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  })

  useEffect(() => {
    document.title = "My App"
  })

  return (
    <>
      <input ref={ref}/>
    </>
  );
}