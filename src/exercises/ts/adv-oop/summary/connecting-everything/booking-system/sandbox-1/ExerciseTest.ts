
import ExerciseTestAbs from "#infra/test/ExerciseTestAbs";

const initialSolutionText: string = `
`;

const expectedSolutionText: string = `
`;

export default class Test extends ExerciseTestAbs {

  getInitialSolutionText(): string {
    return initialSolutionText.replace(/^\s+|\s+$/g, '');;
  }

  getExpectedSolutionText(): string {
    return expectedSolutionText.replace(/^\s+|\s+$/g, '');;
  }

  verifySolution() {
  }

  runSolution() {
  }

}

