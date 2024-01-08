
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
class Shape {
  constructor(private shapeArea: number) {
  }
}

class Square extends Shape {
  constructor(private squareSideLength: number) {
    super(#1#);
  }
}
`;

const expectedSolutionText: string = `
class Shape {
  constructor(private shapeArea: number) {
  }
}

class Square extends Shape {
  constructor(private squareSideLength: number) {
    super(squareSideLength * squareSideLength);
  }
}
`;

const explanationMd = `
- Class <<Square>> must use the keyword <<extends>> in order
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
