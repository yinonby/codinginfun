
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
const firstName: string = "Marco";
const lastName: string = "Polo";
?
`;

const expectedSolutionText: string = `
const firstName: string = "Marco";
const lastName: string = "Polo";
const fullName: string = firstName + " " + lastName;
`;

const explanationText = `
- We declared a constant variable <<fullName>> of type <<string>>, \
and initialized its value to <<"Marco Polo">> by concatenating <<firstName>> \
with a space <<" ">> and <<lastName>>. Note that without the space <<" ">> \
we would get <<"MarcoPolo">>.
`;

export default class ExerciseTest extends CodingExerciseTestAbs {

  verify(solutionText: string) {
    this.verifySolution(solutionText);
  }

  getInitialSolutionText(): string {
    return initialSolutionText.replace(/^\s+|\s+$/g, '');;
  }

  getExpectedSolutionText(): string {
    return expectedSolutionText.replace(/^\s+|\s+$/g, '');;
  }

  getExpectedSolutionRowNum() {
    return this.getExpectedSolutionText().split(/\n/).length;
  }

  verifySolution(solutionText: string) {
    if (solutionText !== this.getExpectedSolutionText()) {
      throw new Error(
        "Did you follow code conventions?"
      );
    }
  }

}
