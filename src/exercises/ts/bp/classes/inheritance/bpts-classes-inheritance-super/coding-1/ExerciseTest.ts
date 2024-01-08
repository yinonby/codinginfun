
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
class Shape {
  constructor() {
    console.log("A new shape has been created!");
  }
}

class Square extends Shape {
  constructor() {
    #1#();
    console.log("A new square has been created!");
  }
}
`;

const expectedSolutionText: string = `
class Shape {
  constructor() {
    console.log("A new shape has been created!");
  }
}

class Square extends Shape {
  constructor() {
    super();
    console.log("A new square has been created!");
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
