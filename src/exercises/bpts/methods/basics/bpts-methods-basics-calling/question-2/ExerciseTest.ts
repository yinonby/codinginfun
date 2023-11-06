
import QuestionExerciseTestAdapter from "../../../../../QuestionExerciseTestAdapter";

const output: string = `
"Inside foo"
"Inside boo"
"Inside foo"
`;

const explanation: string = `
The method 'foo' is called first, directly.
Then the method 'boo' is called, and 'boo' is calling 'foo'.
Notice that the quotes are included in the output;
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
