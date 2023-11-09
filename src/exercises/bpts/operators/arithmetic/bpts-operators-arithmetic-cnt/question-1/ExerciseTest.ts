
import QuestionExerciseTestAbs from "../../../../../../infra/test/QuestionExerciseTestAbs";

const output: string = `
10
9
10
`;

const explanation: string = `
<<x>> is initialized with <<9>>, and incremented in the next line, therefore
its end value is <<10>>.
<<y>> is initialized with the the value of <<x>> after it was incremented
(<<10>>), and is decremented in the next line, therefore its end value is <<9>>.
<<z>> is initialized with the value of <<y>> before it is decremented,
therefore its value is <<10>>.
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
