
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
- In the first line, declare a constant variable named <<myName>>, of type <<string>>, and initialize its value to <<"John">>. Don't forget a semicolon <<;>> at the end of the line.
- Then, leave the next line empty.
- Then, in the next line, declare a method (function) named <<foo>>, followed by an opening bracket <<{>>.
- Then, in the next line, declare a constant variable named <<myName>>, of type <<string>>, and initialize its value to <<"Bob">>. Don't forget a semicolon <<;>> at the end of the line.
- Then, in the next line, begin with 4 spaces, then print <<"Inside foo: myName is:">> to the output (console). Don't forget a semicolon <<;>> at the end of the line.
- Then, in the next line, begin with 4 spaces, then print <<myName>> to the output (console). Don't forget a semicolon <<;>> at the end of the line.
- Then, in the next line, close the method using a closing bracket <<}>>.
- Then, leave the next line empty.
- Then, in the next line, print <<"Outside foo: myName is:">> to the output (console). Don't forget a semicolon <<;>> at the end of the line.
- Then, in the next line, print <<myName>> to the output (console). Don't forget a semicolon <<;>> at the end of the line.
- Then, in the next line, call the method <<foo>>. Don't forget a semicolon <<;>> at the end of the line.
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_CODING;
  }

  getMdInstructions(): string {
    return md;
  }

}
