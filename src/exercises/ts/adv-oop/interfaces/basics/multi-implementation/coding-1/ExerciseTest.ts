
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
interface Audible {
  play(): void;
}

interface Downloadable {
  download(): void;
}

class Song implements #1#, #2# {
  public play(): void {
    console.log("This is a song playing!");
  }

  public download(): void {
    console.log("This is a song being downloaded!");
  }
}
`;

const expectedSolutionText: string = `
interface Audible {
  play(): void;
}

interface Downloadable {
  download(): void;
}

class Song implements Audible, Downloadable {
  public play(): void {
    console.log("This is a song playing!");
  }

  public download(): void {
    console.log("This is a song being downloaded!");
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
