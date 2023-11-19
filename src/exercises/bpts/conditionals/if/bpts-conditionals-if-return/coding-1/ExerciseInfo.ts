
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
- We declared a method <<isPersonTall>> that accepts a parameter
<<personHeightCm>> of type <<number>>.

Tasks:
- Replace the 1st placeholder <<#1#>> with the correct return-type.
- Replace the 2nd placeholder <<#2#>> with the correct return-value.
- Replace the 3rd placeholder <<#3#>> with the correct return-value.

- Don't forget to follow code conventions.
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_CODING;
  }

  getDescription(): string {
    return "Single method parameter";
  }

  getMdInstructions(): string {
    return md;
  }

}
