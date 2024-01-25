
import SandboxExerciseInfoAbs from "#infra/info/SandboxExerciseInfoAbs";
import { EX_TYPE } from "../../../../../../../infra/info/ExerciseInfoAbs";

const md: string = `
In this sandbox, the instructions are given inside.

Don't forget to follow code conventions.
`;

export default class ExerciseInfo extends SandboxExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_SANDBOX;
  }

  getMdInstructions(): string {
    return md;
  }

  public getSandboxId(): string {
    return "sb-1";
  }

}
