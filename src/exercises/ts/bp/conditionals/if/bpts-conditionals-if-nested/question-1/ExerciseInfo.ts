
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
What is the output of the following code?

>>>>
const areAllPassengersInside: boolean = false;
const areAllDoorsClosed: boolean = false;

if (areAllPassengersInside) {
  console.log("Cannot start driving, waiting for passengers!");
} else {
  if (areAllDoorsClosed) {
    console.log("Cannot start driving, not all doors are closed!");
  } else {
    console.log("Can start driving!");
  }
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
