
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
class Shape {
  constructor(private shapeArea: number) {
  }

  // API

  public getMessage(): string {
    return "I am a shape!";
  }
}

class Square extends Shape {
  constructor(private squareSideLength: number) {
    super(squareSideLength * squareSideLength);
  }

  // API

  public #1#(): string {
    return "I am a square!";
  }
}
`;

const expectedSolutionText: string = `
class Shape {
  constructor(private shapeArea: number) {
  }

  // API

  public getMessage(): string {
    return "I am a shape!";
  }
}

class Square extends Shape {
  constructor(private squareSideLength: number) {
    super(squareSideLength * squareSideLength);
  }

  // API

  public getMessage(): string {
    return "I am a square!";
  }
}
`;

const explanationMd = `
- In order to override a member method of a parent class, we
must give it the same name.
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
