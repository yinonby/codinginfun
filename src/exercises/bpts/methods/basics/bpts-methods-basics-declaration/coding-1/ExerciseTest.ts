
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

export default class ExerciseTest extends CodingExerciseTestAbs {

    verify(solutionText: string) {
        this.verifySolution(solutionText);
    }

    getInitialSolutionText(): string {
        return "";
    }

    getExpectedSolutionText(): string {
        return "" +
            "function foo() {\n" +
            "    console.log(\"Inside foo\");\n" +
            "}";
    }

    verifySolution(solutionText: string) {
        if (solutionText !== this.getExpectedSolutionText()) {
            throw new Error(
                "Have you followed all code conventions?"
            );
        }
    }

}
