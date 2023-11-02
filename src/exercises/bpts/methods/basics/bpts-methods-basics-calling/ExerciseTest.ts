
import TextExerciseTestAdapter from "../../../../TextExerciseTestAdapter";
import Solution from "./Exercise";

export default class ExerciseTest implements TextExerciseTestAdapter {

    verify(solutionText: string) {
        this.verifySolution(solutionText);
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
        console.log(solutionText)
        console.log(this.getExpectedSolutionText())
        if (solutionText !== this.getExpectedSolutionText()) {
            throw new Error(
                "Did you declare the method with the correct value?"
            );
        }
    }

}
