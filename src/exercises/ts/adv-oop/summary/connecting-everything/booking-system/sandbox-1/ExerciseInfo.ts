
import ModularSandboxExerciseInfoAbs from "#infra/info/ModularSandboxExerciseInfoAbs";
import { EX_TYPE } from "../../../../../../../infra/info/ExerciseInfoAbs";

const md: string = `
In this sandbox, the instructions are given inside.

Don't forget to follow code conventions.
`;

export default class ExerciseInfo extends ModularSandboxExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_MODULAR_SANDBOX;
  }

  getMdInstructions(): string {
    return md;
  }

  public getInitialFilePath(): string {
    return "payments" + "%2F" + "Payable.ts";
  }

}
