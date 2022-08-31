import HandleInput from "./HandleInput";
import PlainText from "./PlainText";

type handleSingleCommandProp = {
  commands: string;
}


const splitQuotedString = (str: string) => {
  const myRegexp = /[^\s,"]+|"([^"]*)"/gi;
  const myArray = [];
  let match = null;
  do {
      //Each call to exec returns the next regex match as an array
      match = myRegexp.exec(str);

      if (match != null) myArray.push(match[0]);

  } while (match != null);

  return myArray;
}

// A commands == string or series of inputs for a move
export default function HandleSingleCommand({ commands }: handleSingleCommandProp) {
  const shorthand: {[key: string]: string} = {
    pewgf: "f,n,df2",
    ewgf: "f,n,d,df2",
    JU: "f,b2",
    qcf: "d,df,f",
    qcb: "d,db,b",
    hcf: "b,db,d,df,f",
    hcb: "f,df,d,db,b",
  }
  if (!commands) {
    console.log("no command");
    return <></>;
  }
  const separatedCommands = splitQuotedString(commands);
  let elements = [];

  for (let command of separatedCommands) {
    // Convert the shorthand (e.g. pewgf or qcf) to normal inputs
    if (command in shorthand) {
      command = shorthand[command];
    }

    if (command.includes('"')) {
      // this is just plain text
      elements.push(
        <PlainText text={command} />
      )
      continue;
    }



    // 1,2,4,3
    // df2+3
    // f,n,d,df2
    // commands = command.split("");
    const inputs = command.split(",")

    console.log(`${inputs} :`)
    for (const input of inputs) {
      // 1 or 2 or 3 or 4 or df2, df2+3 etc.
      // create the input graphic from images

      const numbers = input.match(/\d+/);
      const directions = input.match(/\D+/)?.join("");


      if (directions) {
        elements.push(<HandleInput input={directions} />);
      }

      if (numbers) {
        for (const num of numbers) {
          elements.push(<HandleInput input={num} />);
        }
      }
    }

  }


  return(
    <>
      {elements}
    </>
  )
}