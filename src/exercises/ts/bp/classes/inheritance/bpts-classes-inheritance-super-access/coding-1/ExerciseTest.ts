
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
class Shape {
  constructor(private shapeArea: number) {
  }

  public getMessage(): string {
    return "I am a shape!";
  }
}

class Square extends Shape {
  constructor(private squareSideLength: number) {
    super(squareSideLength * squareSideLength);
  }

  public getMessage(): string {
    return "I am a square!";
  }

  public printMessage(): void {
    console.log(#1#.getMessage());
  }
}
`;

const expectedSolutionText: string = `
class Shape {
  constructor(private shapeArea: number) {
  }

  public getMessage(): string {
    return "I am a shape!";
  }
}

class Square extends Shape {
  constructor(private squareSideLength: number) {
    super(squareSideLength * squareSideLength);
  }

  public getMessage(): string {
    return "I am a square!";
  }

  public printMessage(): void {
    console.log(super.getMessage());
  }
}
`;

const explanationMd = `
- Class <<Square>> must use the keyword <<super>> in order
to access a member method from a parent class that was overriden.
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
