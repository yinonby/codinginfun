
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
What is the expected output of the following code?

> function foo() {
    console.log("Inside foo");
}
function boo() {
    console.log("Inside boo");
    foo();
}
foo();
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

    getType(): EX_TYPE {
        return EX_TYPE.EX_TYPE_QUESTION;
    }

    getDescription(): string {
        return "Simple method declaration";
    }

    getMdInstructions(): string {
        return md;
    }
    
}
