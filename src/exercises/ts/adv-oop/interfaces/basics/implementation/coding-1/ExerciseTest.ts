
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
interface Audible {
  play(): void;
}

class Song #1# Audible {
  public play(): void {
    console.log("This is a song playing!");
  }
}
`;

const expectedSolutionText: string = `
interface Audible {
  play(): void;
}

class Song implements Audible {
  public play(): void {
    console.log("This is a song playing!");
  }
}
`;

const explanationMd = `
`;

export default class ExerciseTest extends CodingExerciseTestAbs {

  getInitialSolutionText(): string {
    return initialSolutionText.replace(/^\s+|\s+$/g, '');;
  }

  getExpectedSolutionText(): string {
    return expectedSolutionText.replace(/^\s+|\s+$/g, '');;
  }

  getExpectedExplanationMd(): string {
    return explanationMd.replace(/^\s+|\s+$/g, '');
  }

}
