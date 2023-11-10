
import QuestionExerciseTestAbs from "../../../../../../infra/test/QuestionExerciseTestAbs";

const output: string = `
"begin"
"end"
`;

const explanation: string = `
- There is no output from the loop, since the variable <<i>> is \
initialized with <<0>>, and the condition <<i < 0>> is never met.
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
                "Look carefually at the code."
            );
        }
    }

}
