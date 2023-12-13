
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
What is the output of the following code?

>>>>
const plantName: string = "Uranus";

if (plantName === "Venus" || plantName === "Mercury") {
  console.log("Hot planet!");
} else if (plantName === "Earth" || plantName === "Mars") {
  console.log("Warm planet!");
} else {
  console.log("Cold planet!");
}
<<<<
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_QUESTION;
  }

  getMdInstructions(): string {
    return md;
  }

}
