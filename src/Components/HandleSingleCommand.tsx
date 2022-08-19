import HandleInput from "./HandleInput";

type handleSingleCommandProp = {
  command: string;
}

// 4. for each command in string -> convert that to image
// 5. parens are converted into parens
export default function HandleSingleCommand({ command }: handleSingleCommandProp) {
  const shorthand: {[key: string]: string} = {
    pewgf: "f,n,df2",
    ewgf: "f,n,d,df2",
    JU: "f,b2"
  }
  if (!command) {
    console.log("no command");
    return <></>;
  }
  if (command in shorthand) {
    command = shorthand[command];
  }
  // 1,2,4,3
  // df2+3
  // f,n,d,df2
  // commands = command.split("");
  const inputs = command.split(",")
  let elements = [];

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

  return(
    <>
      {elements}
    </>
  )
}