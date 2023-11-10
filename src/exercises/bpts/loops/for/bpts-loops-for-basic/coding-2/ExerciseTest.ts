
import CodingExerciseTestAbs from "../../../../../../infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
`;

const expectedSolutionText: string = `
for (let i: number = 3; i <= 4; i++) {
    console.log(i);
}
`;

const explanationText = `
- We declared the loop as requested, following all code conventions. \
Note we were asked to use a Less Than or Equal operator <<<=>>.
`;

export default class ExerciseTest extends CodingExerciseTestAbs {

    verify(solutionText: string) {
        this.verifySolution(solutionText);
    }

    getInitialSolutionText(): string {
        return initialSolutionText.replace(/^\s+|\s+$/g, '');;
    }
    
    getExpectedSolutionText(): string {
        return expectedSolutionText.replace(/^\s+|\s+$/g, '');;
    }

    getExpectedSolutionRowNum() {
        return this.getExpectedSolutionText().split(/\n/).length;
    }

    verifySolution(solutionText: string) {
        if (solutionText !== this.getExpectedSolutionText()) {
            throw new Error(
                "Did you follow code conventions?"
            );
        }
    }

}
