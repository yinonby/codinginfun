
import CodingExerciseTestAbs from "../../../../../../infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
let x: number = 3;
?
console.log(x); // output: 7
`;

const expectedSolutionText: string = `
let x: number = 3;
x += 4;
console.log(x); // output: 7
`;

const explanationText = `
- In the expression <<x += 4>> we used the Addition-Assignment operator <<+=>>
to add <<4>> to <<x>>, and assign the result (<<7>>) back to <<x>>.
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
