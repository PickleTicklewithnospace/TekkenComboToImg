import React from "react";

// don't worry, i wrote a script to import this crap lol
import img1 from "../imgs/1.svg"
import img2 from "../imgs/2.svg"
import img3 from "../imgs/3.svg"
import img4 from "../imgs/4.svg"
import img12 from "../imgs/12.svg"
import img13 from "../imgs/13.svg"
import img14 from "../imgs/14.svg"
import img23 from "../imgs/23.svg"
import img24 from "../imgs/24.svg"
import img34 from "../imgs/34.svg"
import img123 from "../imgs/123.svg"
import img124 from "../imgs/124.svg"
import img134 from "../imgs/134.svg"
import img234 from "../imgs/234.svg"
import img1234 from "../imgs/1234.svg"
import imgu from "../imgs/u.svg"
import imgd from "../imgs/d.svg"
import imgb from "../imgs/b.svg"
import imgf from "../imgs/f.svg"
import imgup from "../imgs/up.svg"
import imgdp from "../imgs/dp.svg"
import imgbp from "../imgs/bp.svg"
import imgfp from "../imgs/fp.svg"
import imguf from "../imgs/uf.svg"
import imgub from "../imgs/ub.svg"
import imgdb from "../imgs/db.svg"
import imgdf from "../imgs/df.svg"
import imgufp from "../imgs/ufp.svg"
import imgubp from "../imgs/ubp.svg"
import imgdbp from "../imgs/dbp.svg"
import imgdfp from "../imgs/dfp.svg"
import img0 from "../imgs/0.svg"
import imgBracketL from "../imgs/(.svg"
import imgBracketR from "../imgs/).svg"
import imgnext from "../imgs/next.svg"
import imgn from "../imgs/n.svg"
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
}


type handleInputProp = {
  input: string;
}


export default function HandleInput({ input }: handleInputProp ) {

  if (Object.keys(inputToImg).includes(input)) {
    console.log(`/src/Components/imgs/${input}.svg`)
    return(
        <img src={inputToImg[input]} alt={input} width="50px" height="50px" />
    )
  } else {
    return(
      // TODO: make the text look nice
      <div>
        {input}
      </div>
    )
  }


}