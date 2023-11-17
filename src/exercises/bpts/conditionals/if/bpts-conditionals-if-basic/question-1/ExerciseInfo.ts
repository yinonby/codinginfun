
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
What is the expected output of the following code?

> const firstName: string = "Bob";
> const isAustralian: boolean = false;
> const isSoccerPlayer: boolean = true;
>
> if (isAustralian && isSoccerPlayer) {
>   console.log(firstName + " is from Australia and plays soccer");
> }
>
> if (isSoccerPlayer) {
>   console.log(firstName + " plays soccer");
> }

Remember that each print to output (console) is printed on a separate line.
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_QUESTION;
  }

  getDescription(): string {
    return "Simple method declaration";
  }

  getMdInstructions(): string {
    return md;
  }

}
