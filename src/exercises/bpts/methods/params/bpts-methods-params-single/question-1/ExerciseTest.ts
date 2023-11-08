
import QuestionExerciseTestAdapter from "../../../../../QuestionExerciseTestAdapter";

const output: string = `
4
25
`;

const explanation: string = `
The method prints the arithmetic square of the given number parameter.
2 * 2 = 4.
5 * 5 = 25.
`;

export default class ExerciseTest implements QuestionExerciseTestAdapter {

    verify(solutionText: string) {
        this.verifySolution(solutionText);
    }

    getExpectedSolutionText(): string {
        return output.replace(/^\s+|\s+$/g, '');
    }

    getExpectedSolutionRowNum(): number {
        return this.getExpectedSolutionText().split(/\n/).length;
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
