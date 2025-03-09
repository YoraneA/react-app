import {ReactNode, useState} from "react";

interface Props {
  children: string;
  maxLength?: number;
}

export default function ExpandableText({children, maxLength = 100}: Props) {
  const [showFullText, setShowFullText] = useState(false);

  const showText = () => {
    if (showFullText || children.length <= showFullText) {
      return children;
    }

    const text = children.slice(0, maxLength);

    return <p>{text}...</p>;
  }

  const showButton = () => {
    if (children.length <= maxLength) {
      return null;
    }

    return (
      <button onClick={() => setShowFullText(!showFullText)}>
        {showFullText ? "Show less" : "Show more"}
      </button>
    );
  }

  return (
    <>
      <div>{showText()}</div>
      {showButton()}
    </>
  );
}