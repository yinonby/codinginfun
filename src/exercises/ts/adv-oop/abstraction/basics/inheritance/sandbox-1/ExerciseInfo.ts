
import SandboxExerciseInfoAbs from "#infra/info/SandboxExerciseInfoAbs";
import { EX_TYPE } from "../../../../../../../infra/info/ExerciseInfoAbs";

const md: string = `
Constants <<COFFEE_NESPRESSO>> and <<COFFEE_DELONGHI>> are given.

Implement the following hierarchy:

Class <<CoffeeMaker>>:
- Should be an abstract class.
- Should declare an abstract method, <<public>>, named <<getCoffee()>>,
whose return-type is <<string>>.

Class <<NespressoCoffeeMaker>>:
- Should be a non-abstract class, which extends class <<CoffeeMaker>>.
- Should return <<COFFEE_NESPRESSO>> when implementing <<getCoffee()>>.

Class <<DelonghiCoffeeMaker>>:
- Should be a non-abstract class, which extends class <<CoffeeMaker>>.
- Should return <<COFFEE_DELONGHI>> when implementing <<getCoffee()>>.

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
