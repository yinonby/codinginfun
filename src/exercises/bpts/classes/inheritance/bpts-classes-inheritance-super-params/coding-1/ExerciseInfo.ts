
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
- The area of a square equals the arithmetic square of the length
of the square side. That is, if <<x>> is the length of the side,
then <<x * x>> equals the area of the square.
- In the exercise, the constructor of class <<Square>> receives
a parameter <<squareSideLength>> representing the length
of the square side.

Tasks:
- Replace the placeholder <<#1#>> with the correct expression so
that the parent class <<Shape>> is initialized with the value of
the area of the square.

- Don't forget to follow code conventions.
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_CODING;
  }

  getMdInstructions(): string {
    return md;
  }

}
