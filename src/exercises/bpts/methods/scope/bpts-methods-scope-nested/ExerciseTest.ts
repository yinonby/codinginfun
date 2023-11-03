
import TextExerciseTestAdapter from "../../../../TextExerciseTestAdapter";

export default class ExerciseTest implements TextExerciseTestAdapter {

    verify(solutionText: string) {
        this.verifySolution(solutionText);
    }

    getExpectedSolutionText(): string {
        return "" +
            "const myName: string = \"John\";\n" +
            "\n" +
            "function foo() {\n" +
            "    const myName: string = \"Bob\";\n" +
            "    console.log(\"Inside foo: myName is:\");\n" +
            "    console.log(myName);\n" +
            "}\n" +
            "\n" +
            "console.log(\"Outside foo: myName is:\");\n" +
            "console.log(myName);\n" +
            "foo();";
    }

    getExpectedSolutionRowNum() {
        return this.getExpectedSolutionText().split(/\n/).length;
    }

    verifySolution(solutionText: string) {
        if (solutionText !== this.getExpectedSolutionText()) {
            throw new Error(
                "Did you follow all code conventions? Did you remember a semicolon at the end of lines?"
            );
        }
    }

}
