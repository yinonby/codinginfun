
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
- In the first line, declare a <<function>> named <<foo>>, followed by an opening bracket <<{>>.
- Then, in the next line, begin with 2 spaces, then print "<<Inside foo>>" to the output (console). Don't forget a semicolon <<;>> at the end of the line.
- Then, in the next line, close the function using a closing bracket <<}>>.
- Then, leave the next line empty.
- Then, in the next line, declare a <<function>> named <<boo>>, followed by an opening bracket <<{>>.
- Then, in the next line, begin with 2 spaces, then print "<<Inside boo>>" to the output (console). Don't forget a semicolon <<;>> at the end of the line.
- Then, in the next line, begin with 2 spaces, then call the function <<foo>>.
- Then, in the next line, close the function using a closing bracket <<}>>.
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_CODING;
  }

  getMdInstructions(): string {
    return md;
  }

}
