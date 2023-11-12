
import QuestionExerciseTestAbs from "#infra/test/QuestionExerciseTestAbs";

const output: string = `
true
`;

const explanation: string = `
- The first character in <<str1>> is <<a>>, while the first character \
in <<str2>> is <<b>>.
- The character <<a>> has an Ascii value lower than the character <<b>>. \
We don't need to know the actual values - \
it's enough to remember that characters that appear later in the alphabet \
have a higher value than characters that appear earlier in the alphabet.
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
