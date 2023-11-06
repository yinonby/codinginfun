
import QuestionExerciseTestAdapter from "../../../../../QuestionExerciseTestAdapter";

export default class ExerciseTest implements QuestionExerciseTestAdapter {

    verify(solutionText: string) {
        this.verifySolution(solutionText);
    }

    getExpectedSolutionText(): string {
        return "";
    }

    getExpectedSolutionRowNum(): number {
        return 1;
    }

    getExpectedSolutionExplanation(): string {
        return "The method is declared, but it is never called. Therefore, we don't expect any output.";
    }

    verifySolution(solutionText: string) {
        if (solutionText !== this.getExpectedSolutionText()) {
            throw new Error(
                "Look carefually at the code."
            );
        }
    }

}
