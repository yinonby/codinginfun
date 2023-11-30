
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
class Spy {
  #1# getName(): string {
    return "Lisa";
  }

  #2# getInitial(): string {
    return this.getName()[0];
  }
}
`;

const expectedSolutionText: string = `
class Spy {
  private getName(): string {
    return "Lisa";
  }

  public getInitial(): string {
    return this.getName()[0];
  }
}
`;

const explanationMd = `
The member method <<getName()>> should be declared <<private>> so
that it is not accessible from outside the class, while <<getInitial()>>
should be declared <<public>>.
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
