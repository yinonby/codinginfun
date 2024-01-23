
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
interface Audible {
  play(): void;
}

#1# class Podcast #2# Audible {
  public play(): void {
    console.log("This is a podcast playing!");
  }

  public abstract replay(): void;
}
`;

const expectedSolutionText: string = `
interface Audible {
  play(): void;
}

abstract class Podcast implements Audible {
  public play(): void {
    console.log("This is a podcast playing!");
  }

  public abstract replay(): void;
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
