
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
let x: number = 7;
let y: number = ?;
`;

const expectedSolutionText: string = `
let x: number = 7;
let y: number = x++;
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
