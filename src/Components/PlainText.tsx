import './Style/PlainText.css';
import useFitText from "use-fit-text/dist";
import React from "react";

type PlainTextProps = {
  text: string
}
const backgroundColours = ["#E6459A", "#E68A45", "#22D1E6", "#E6CD17"];
const wordToBgColour: {[key: string]: string} = {
  DASH: "#E68A45",
  "WHILE STANDING": "#22D1E6",
  "WHILE RUNNING": "#22D1E6",
  "FULL CROUCH": "#E6CD17",
}
const wordShortcuts: {[key: string]: string} = {
  "WS": "WHILE STANDING",
  "iWS": "INSTANT WHILE STANDING",
  "WR": "WHILE RUNNING",
  "FC": "FULL CROUCH",
}
export default function PlainText({ text }: PlainTextProps) {
  const { fontSize, ref } = useFitText();

  text = text.replace(/"/g, "");
  if (text in wordShortcuts) {
    text = wordShortcuts[text];
  }
  let backgroundColor = backgroundColours[Math.floor(Math.random()*backgroundColours.length)];
  if (text in wordToBgColour) {
    backgroundColor = wordToBgColour[text];
  }

  return(
    <span className="PlainText" style={{ backgroundColor }}>
      <div className="PlainTextText" style={{ fontSize }} ref={ref}>
        {text}
      </div>
    </span>
  )
}
