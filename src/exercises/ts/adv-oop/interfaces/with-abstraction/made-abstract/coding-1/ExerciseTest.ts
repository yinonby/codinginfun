
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
interface Audible {
  play(): void;
}

abstract class Podcast implements Audible {
  public #1# play(): void;
}
`;

const expectedSolutionText: string = `
interface Audible {
  play(): void;
}

abstract class Podcast implements Audible {
  public abstract play(): void;
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
