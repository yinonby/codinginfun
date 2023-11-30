
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const explanationMd = `
`;

export default class ExerciseTest extends CodingExerciseTestAbs {

  getInitialSolutionText(): string {
    return "";
  }

  getExpectedSolutionText(): string {
    return "" +
      "const myName: string = \"John\";\n" +
      "\n" +
      "function foo() {\n" +
      "    console.log(\"Inside foo: myName is:\");\n" +
      "    console.log(myName);\n" +
      "}\n" +
      "\n" +
      "console.log(\"Outside foo: myName is:\");\n" +
      "console.log(myName);\n" +
      "foo();";
  }

  getExpectedExplanationMd(): string {
    return explanationMd.replace(/^\s+|\s+$/g, '');
  }

}
