import React from "react";

// don't worry, i wrote a script to import this crap lol
import img1 from "../imgs/1.png"
import img2 from "../imgs/2.png"
import img3 from "../imgs/3.png"
import img4 from "../imgs/4.png"
import img12 from "../imgs/12.png"
import img13 from "../imgs/13.png"
import img14 from "../imgs/14.png"
import img23 from "../imgs/23.png"
import img24 from "../imgs/24.png"
import img34 from "../imgs/34.png"
import img123 from "../imgs/123.png"
import img124 from "../imgs/124.png"
import img134 from "../imgs/134.png"
import img234 from "../imgs/234.png"
import img1234 from "../imgs/1234.png"
import imgu from "../imgs/u.png"
import imgd from "../imgs/d.png"
import imgb from "../imgs/b.png"
import imgf from "../imgs/f.png"
import imgup from "../imgs/up.png"
import imgdp from "../imgs/dp.png"
import imgbp from "../imgs/bp.png"
import imgfp from "../imgs/fp.png"
import imguf from "../imgs/uf.png"
import imgub from "../imgs/ub.png"
import imgdb from "../imgs/db.png"
import imgdf from "../imgs/df.png"
import imgufp from "../imgs/ufp.png"
import imgubp from "../imgs/ubp.png"
import imgdbp from "../imgs/dbp.png"
import imgdfp from "../imgs/dfp.png"
import img0 from "../imgs/0.png"
import imgBracketL from "../imgs/(.png"
import imgBracketR from "../imgs/).png"
import imgnext from "../imgs/next.png"
import imgn from "../imgs/n.png"
import screw from "../imgs/screw.png";
import {imgHeight, imgWidth} from "./Constants";
const inputToImg: {[key: string]: string} = {
  'n': imgn,
  '1': img1,
  '2': img2,
  '3': img3,
  '4': img4,
  '12': img12,
  '13': img13,
  '14': img14,
  '23': img23,
  '24': img24,
  '34': img34,
  '123': img123,
  '124': img124,
  '134': img134,
  '234': img234,
  '1234': img1234,
  'u': imgu,
  'd': imgd,
  'b': imgb,
  'f': imgf,
  'U': imgup,
  'D': imgdp,
  'B': imgbp,
  'F': imgfp,
  'uf': imguf,
  'ub': imgub,
  'db': imgdb,
  'df': imgdf,
  'UF': imgufp,
  'UB': imgubp,
  'DB': imgdbp,
  'DF': imgdfp,
  '0': img0,
  '(': imgBracketL,
  ')': imgBracketR,
  'next': imgnext,
  'S!': screw,
}


type handleInputProp = {
  input: string;
}


export default function HandleInput({ input }: handleInputProp ) {

  if (Object.keys(inputToImg).includes(input)) {
    return(
        <img src={inputToImg[input]} alt={input} width={imgWidth} height={imgHeight} />
    )
  } else {
    return(
      // This where the errors go
      <span>
        {input}
      </span>
    )
  }


}