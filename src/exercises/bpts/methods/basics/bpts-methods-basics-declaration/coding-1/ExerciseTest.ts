
import TextExerciseTestAdapter from "../../../../../TextExerciseTestAdapter";

export default class ExerciseTest implements TextExerciseTestAdapter {

    verify(solutionText: string) {
        this.verifySolution(solutionText);
    }

    getExpectedSolutionText(): string {
        return "" +
            "function foo() {\n" +
            "    console.log(\"Inside foo\");\n" +
            "}";
    }

    getExpectedSolutionRowNum(): number {
        return 3;
    }

    verifySolution(solutionText: string) {
        if (solutionText !== this.getExpectedSolutionText()) {
            throw new Error(
                "Have you followed all code conventions?"
            );
        }
    }

}
