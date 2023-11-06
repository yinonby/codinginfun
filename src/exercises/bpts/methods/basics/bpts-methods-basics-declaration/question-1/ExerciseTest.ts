
import QuestionExerciseTestAdapter from "../../../../../QuestionExerciseTestAdapter";

const output: string = `
`;

const explanation: string = `
Look carefually at the code.
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
