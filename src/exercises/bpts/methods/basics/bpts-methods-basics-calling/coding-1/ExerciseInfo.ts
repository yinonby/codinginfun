
import ExerciseInfoAbs, { EX_TYPE } from "../../../../../ExerciseInfoAbs";

const md: string = `
- In the first line, declare a method (function) named <<foo>>, followed by an opening bracket <<{>>.
- Then, in the next line, begin with 4 spaces, then print "<<Inside foo>>" to the output (console). Don't forget a semicolon <<;>> at the end of the line.
- Then, in the next line, close the method using a closing bracket <<}>>.
- Then, leave the next line empty.
- Then, in the next line, declare a method (function) named <<boo>>, followed by an opening bracket <<{>>.
- Then, in the next line, begin with 4 spaces, then print "<<Inside boo>>" to the output (console). Don't forget a semicolon <<;>> at the end of the line.
- Then, in the next line, begin with 4 spaces, then call the method <<foo>>.
- Then, in the next line, close the method using a closing bracket <<}>>.
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

    getType(): EX_TYPE {
        return EX_TYPE.EX_TYPE_TEXT;
    }

    getDescription(): string {
        return "Calling a method from another method";
    }

    getMdInstructions(): string {
        return md;
    }
    
}
