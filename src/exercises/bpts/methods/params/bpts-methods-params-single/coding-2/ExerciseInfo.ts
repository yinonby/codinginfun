
import ExerciseInfoAbs, { EX_TYPE } from "../../../../../../infra/info/ExerciseInfoAbs";

const md: string = `
- Write a method <<printName>>.

- The method is given a parameter <<firstName>> of type <<number>>.

- The method prints to the output (console) the value of <<firstName>>,
preceded by <<"First name is ">>.

- Remember that in order to concatenate strings, we use the plus sign <<+>>.

- Don't forget to follow code conventions.
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

    getType(): EX_TYPE {
        return EX_TYPE.EX_TYPE_CODING;
    }

    getDescription(): string {
        return "Simple method declaration";
    }

    getMdInstructions(): string {
        return md;
    }
    
}
