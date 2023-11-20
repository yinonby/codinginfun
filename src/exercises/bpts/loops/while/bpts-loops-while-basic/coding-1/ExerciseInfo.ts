
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
The built-in JavaScript method <<prompt()>> instructs the browser
to display a dialog with an optional message prompting the user
to input some text, and to wait until the user either submits
the text or cancels the dialog.
If the user clicks <<Cancel>>, the method <<prompt()>>
returns <<null>>. If the user clicks <<OK>>, the method <<prompt()>>
returns the string submitted by the user.

For example:
const userInput: string | null = prompt("Enter some text");
console.log(userInput); // outputs whatever the user submitted in the prompt,
or <<null>> if cancelled

Tasks:
- Replace the first placeholder <<#1#>> with the correct keyword,
and the second placeholder <<#2#>> with the correct variable,
so that a loop keeps prompting the user for input,
until they submit <<"Hello">>.

- Don't forget to follow code conventions.
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_CODING;
  }

  getMdInstructions(): string {
    return md;
  }

}
