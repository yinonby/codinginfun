
import ExerciseInfoAbs, { EX_TYPE } from "../../../../../../infra/info/ExerciseInfoAbs";

const md: string = `
What is the expected output of the following code?

> function printCarDetails(brand: string, model: string) {
    console.log("This " + brand + " is of " + model + " model");
}
printCarDetails("Mazda", "3");
printCarDetails("Ford", "Focus");

Remember that each print to output (console) is printed on a separate line.
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
