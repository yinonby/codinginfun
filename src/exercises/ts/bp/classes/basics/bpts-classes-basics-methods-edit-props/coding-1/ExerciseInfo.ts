
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
Tasks:
- Replace the first placeholder <<#1#>> with an expression so that
the member method <<setRestaurantName()>> changes the
value of the member property <<restaurantName>> to the value given by
the parameter <<newRestaurantName>>.

- Replace the second placeholder <<#2#>> with the correct method call
so that the restaurant represented by the variable <<restaurant>>
changes its name to <<"Pizza Italy">>.

Don't forget to follow code conventions.
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_CODING;
  }

  getMdInstructions(): string {
    return md;
  }

}
