import './Style/PlainText.css';
import useFitText from "use-fit-text/dist";
import React from "react";

type PlainTextProps = {
  text: string
}
export default function PlainText({ text }: PlainTextProps) {
  const { fontSize, ref } = useFitText();
  const backgroundColor = "gold";

  text = text.replace(/"/g, "");
  return(
    <span className="PlainText" style={{ backgroundColor }}>
      <div className="PlainTextText" style={{ fontSize }} ref={ref}>
        {text}
      </div>
    </span>
  )
}
