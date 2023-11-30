
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
What is the output of the following code?

>>>>
function isCloserToTheSunThanEarth(plantName: string): boolean {
  if (plantName === "Venus" || plantName === "Mercury") {
    return true;
  } else {
    return false;
  }
}

console.log(isCloserToTheSunThanEarth("Earth"));
console.log(isCloserToTheSunThanEarth("Jupiter"));
console.log(isCloserToTheSunThanEarth("Mercury"));
<<<<

Remember that each print to output (console) is printed on a separate line.
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_QUESTION;
  }

  getMdInstructions(): string {
    return md;
  }

}
