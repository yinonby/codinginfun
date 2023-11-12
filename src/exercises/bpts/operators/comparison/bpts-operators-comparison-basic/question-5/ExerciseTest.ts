
import QuestionExerciseTestAbs from "#infra/test/QuestionExerciseTestAbs";

const output: string = `
false
`;

const explanation: string = `
- The first character in <<str1>> is <<str2>>, while the first character \
in <<y>> is <<A>>.
- The character <<a>> has an Ascii value higher than the character <<A>>. \
We don't need to know the actual values - \
it's enough to remember that characters that uppercase letters have a lower \
Ascii value than lowercase letters.
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
