
import CodingExerciseTestAbs from "../../../../../../infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
let x: number = 3;
?
?
console.log(x); // output: 4
`;

const expectedSolutionText: string = `
let x: number = 3;
x += 9;
x /= 3;
console.log(x); // output: 4
`;

const explanationText = `
- In the expression <<x += 9>> we used the Addition-Assignment operator <<+=>>
to add <<9>> to <<x>>, and assign the result (<<12>>) back to <<x>>.
- In the expression <<x /= 3>> we used the Division-Assignment operator <</=>>
to divide the value of <<x>> by <<3>>, and assign the result (<<4>>) to <<x>>.
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
                "Did you declare a new variable called 'result'? Did you follow code conventions?"
            );
        }
    }

}
