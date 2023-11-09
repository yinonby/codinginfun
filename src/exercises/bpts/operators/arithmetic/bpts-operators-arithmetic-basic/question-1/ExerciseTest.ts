
import QuestionExerciseTestAbs from "../../../../../../infra/test/QuestionExerciseTestAbs";

const output: string = `
20
2
`;

const explanation: string = `
<<x>> is initialized with the result of <<4 * 5>>.
<<y>> is initialized with the result of <<x % 3>>, and since <<x>> is equal
to <<20>> at this point, then the <<y>> is evaluated to <<20 % 3>> (the
remiander of <<20>> divided by <<3>>).
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
