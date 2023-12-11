
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const explanationMd = `
`;

export default class ExerciseTest extends CodingExerciseTestAbs {

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

  getExpectedExplanationMd(): string {
    return explanationMd.replace(/^\s+|\s+$/g, '');
  }

}
