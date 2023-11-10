
import QuestionExerciseTestAbs from "../../../../../../infra/test/QuestionExerciseTestAbs";

const output: string = `
"begin"
-2
-1
0
"end"
`;

const explanation: string = `
- The loop variable <<i>> is initialized with the value <<-2>>.
- As long as <<i>> is less than or equal to <<0>>, the loop keeps iterating.
- <<i>> is incremented by 1 at the end of each iteration.
- Therefore, in the first iteration <<i>> is <<-2>>, in the second iteration \
<<i>> is <<-1>>, and in the third iteration <<i>> equals <<0>>.
- At the end of the third iteration, <<i>> is incremented by <<1>> \
(now becoming <<1>>), and then \
the condition <<i <= 0>> is not met and the loop ends.
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
