// import React from 'react';

import HandleSingleCommand from "./HandleSingleCommand";
import HandleInput from "./HandleInput";
import React, {ForwardedRef, forwardRef, RefObject} from "react";

type HandleDisplayProps = {
  combo: string;
  ref: ForwardedRef<HTMLDivElement>;
}
export default function HandleDisplay({ combo, ref }: HandleDisplayProps) {
/*
      shit I want to do:
      - I type in a series of combo inputs, separated by spaces?
      1. separate combo by spaces === one attack/one string
      2. for each move, check if the WHOLE thing is in a list of shorthand (ewgf, pewgf, JU etc.) -> convert to image
      3. if not, separate by commas to get each individual commands in string


      df2, pewgf, ewgf, (1,2),4,3


 */
  if (!combo) {
    return <></>
  }
  const inputs = combo.split(", ");
  console.log(inputs);


  let elements: JSX.Element[] = [];
  for (const command of inputs) {
    elements.push(
      <HandleSingleCommand commands={command} />
    )
  }
  const newElements = elements.reduce(
    (prev, curr) => <>{prev}<HandleInput input="next" />{curr}</>

  );

  const DisplayThis = forwardRef<HTMLDivElement>((props, ref) => (
    <div ref={ref}>
      {
        newElements
      }
    </div>
  ))

  return (
    <DisplayThis />
  )
}