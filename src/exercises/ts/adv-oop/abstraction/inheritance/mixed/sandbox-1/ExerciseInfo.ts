
import SandboxExerciseInfoAbs from "#infra/info/SandboxExerciseInfoAbs";
import { EX_TYPE } from "../../../../../../../infra/info/ExerciseInfoAbs";

const md: string = `
Constants <<COFFEE_TYPE_FILTER>>, <<COFFEE_MELITTA>>, and
<<COFFEE_RUSSEL_HOBBS>> are given.

Implement the following hierarchy:

Class <<CoffeeMaker>>:
- Should be an abstract class.
- Should declare an abstract method, <<public>>, named <<getCoffeeType()>>,
whose return-type is <<string>>.
- Should declare an abstract method, <<public>>, named <<getCoffee()>>,
whose return-type is <<string>>.

Class <<FilterCoffeeMaker>>:
- Should be an abstract class, which extends class <<CoffeeMaker>>.
- Should implement <<getCoffeeType()>> by returning <<COFFEE_TYPE_FILTER>>.

Class <<MelittaFilterCoffeeMaker>>:
- Should be a non-abstract class, which extends class <<FilterCoffeeMaker>>.
- Should implement <<getCoffee()>> by returning <<COFFEE_MELITTA>>.

Class <<RusselHobbsFilterCoffeeMaker>>:
- Should be a non-abstract class, which extends class <<FilterCoffeeMaker>>.
- Should implement <<getCoffee()>> by returning <<COFFEE_RUSSEL_HOBBS>>.

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
