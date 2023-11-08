
import QuestionExerciseTestAdapter from "../../../../../QuestionExerciseTestAdapter";

const output: string = `
"This Mazda is of model 3"
"This Ford is of model Focus"
`;

const explanation: string = `
The method prints to the output a single string which is built from the
input parameters.
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
