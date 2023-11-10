
import QuestionExerciseTestAbs from "../../../../../../infra/test/QuestionExerciseTestAbs";

const output: string = `
true
`;

const explanation: string = `
- <<x>> and <<y>> are initialized with different strings.
- Therefore, the Strict Inequality operator <<!==>> evaluates to <<true>>.
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
