import React, {createRef, useState} from 'react';
import HandleSingleCommand from "./HandleSingleCommand";
import HandleInput from "./HandleInput";
import { exportComponentAsPNG } from "react-component-export-image";

export default function HandleCombo() {

  const [notation, setNotation] = useState("");
  const ref = createRef<HTMLDivElement>();
  const handleChange = (e: any) => {
    setNotation(e.target.value.split("+").join(""))

  }

  let newElements = <></>
  if (notation) {
    const inputs = notation.split(", ");
    let elements: JSX.Element[] = [];
    for (const command of inputs) {
      elements.push(
        <HandleSingleCommand command={command} />
      )
    }
    newElements = elements.reduce(
      (prev, curr) => <>{prev}<HandleInput input="next" />{curr}</>
    );
  }

  return (
    <div>
      <div>
      <button
        onClick={() =>
          exportComponentAsPNG(ref, {
            html2CanvasOptions: {
              onclone: (clonedDoc) => {
                const thing = clonedDoc.getElementById("myImage")
                if (thing !== null) {
                  thing.style.visibility = "visible";
                }
              }
            }
          })
        }
      >
        Screenshot
      </button>
      </div>

      <div ref={ref} id="myImage" >
        { newElements }
      </div>
              <input type="text" name="combo" onChange={handleChange} />

    {/*<form>*/}

    {/*  <label>*/}
    {/*    Combo:*/}
    {/*  </label>*/}
    {/*</form>*/}
    </div>

  );
}
