
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
class Shape {
  public printShapeMessage(): void {
    console.log("This is a shape!");
  }
}

class Triangle #1# Shape {
  public printTriangleMessage(): void {
    console.log("This is a triangle!");
  }
}
`;

const expectedSolutionText: string = `
class Shape {
  public printShapeMessage(): void {
    console.log("This is a shape!");
  }
}

class Triangle extends Shape {
  public printTriangleMessage(): void {
    console.log("This is a triangle!");
  }
}
`;

const explanationMd = `
- Class <<Triangle>> must use the keyword <<extends>> in order
to inherit from class <<Shape>>.
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
