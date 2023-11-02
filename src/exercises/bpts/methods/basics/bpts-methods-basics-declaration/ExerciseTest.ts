
import TextExerciseTestAdapter from "../../../../TextExerciseTestAdapter";
import Solution from "./Exercise";

export default class ExerciseTest implements TextExerciseTestAdapter {

    verify(solutionText: string) {
        this.verifySolution(solutionText);
    }

    getExpectedSolutionText() {
        return "" +
            "function foo() {\n" +
            "    console.log(\"Inside foo\");\n" +
            "}";
    }

    verifySolution(solutionText: string) {
        if (solutionText !== this.getExpectedSolutionText()) {
            throw new Error(
                "Did you declare the method with the correct value?"
            );
        }
    }

}
