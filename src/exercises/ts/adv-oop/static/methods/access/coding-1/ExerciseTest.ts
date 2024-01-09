
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
class Furniture {
  public static getMaterial(): string {
    return "Wood";
  }
}

console.log(#1#);
`;

const expectedSolutionText: string = `
class Furniture {
  public static getMaterial(): string {
    return "Wood";
  }
}

console.log(Furniture.getMaterial());
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
