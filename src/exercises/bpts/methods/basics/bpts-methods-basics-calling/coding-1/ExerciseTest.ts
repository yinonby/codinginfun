
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
            "}\n" +
            "\n" +
            "function boo() {\n" +
            "    console.log(\"Inside boo\");\n" +
            "    foo();\n" +
            "}";
    }

    getExpectedSolutionRowNum() {
        return 8;
    }

    verifySolution(solutionText: string) {
        if (solutionText !== this.getExpectedSolutionText()) {
            throw new Error(
                "Did you declare the method with the correct value?"
            );
        }
    }

}
