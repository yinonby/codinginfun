
import QuestionExerciseTestAbs from "../../../../../../infra/test/QuestionExerciseTestAbs";

const output: string = `
true
true
false
false
false
`;

const explanation: string = `
- <<x>> is initialized with the value <<4>>.
- <<y>> is initialized with the value <<5>>.
- The only operators that are evaluated to <<true>> are the Less Than \
operator <<<>> and the Less Than or Equal operator <<<=>>, because the value \
of <<x>> (<<4>>) is less than the value of <<y>> (<<5>>).
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
