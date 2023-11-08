
import QuestionExerciseTestAbs from "../../../../../../infra/test/QuestionExerciseTestAbs";

const output: string = `
"Inside foo"
"Inside foo"
`;

const explanation: string = `
The method is called twice, therefore we expect the output twice.
Notice that the quotes are included in the output;
`;

export default class ExerciseTest extends QuestionExerciseTestAbs {

    verify(solutionText: string) {
        this.verifySolution(solutionText);
    }

    getExpectedSolutionText(): string {
        return output.replace(/^\s+|\s+$/g, '');
    }

    getExpectedSolutionExplanation(): string {
        return explanation.replace(/^\s+|\s+$/g, '');
    }

    verifySolution(solutionText: string) {
        if (solutionText !== this.getExpectedSolutionText()) {
            throw new Error(
                "Note how many times the method is called. Also note the quotes are included in the output."
            );
        }
    }

}
