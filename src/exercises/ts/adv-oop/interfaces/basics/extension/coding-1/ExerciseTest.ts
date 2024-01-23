
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
interface Audible {
  play(): void;
}

interface VolumeControlledAudible #1# Audible {
  increaseVolume(): void;
  decreaseVolume(): void;
}
`;

const expectedSolutionText: string = `
interface Audible {
  play(): void;
}

interface VolumeControlledAudible extends Audible {
  increaseVolume(): void;
  decreaseVolume(): void;
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
