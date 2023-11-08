
import TextExerciseTestAdapter from "../../../../../TextExerciseTestAdapter";

const initialSolutionText: string = `
const squareOfTwo: number = 2 * 2;
const squareOfThree: number = 3 * 3;
const squareOfFour: number = 4 * 4;

function square(x: number): number {
    return ?;
}
`;

const expectedSolutionText: string = `
const squareOfTwo: number = square(2);
const squareOfThree: number = square(3);
const squareOfFour: number = square(4);

function square(x: number): number {
    return x * x;
}
`;

export default class ExerciseTest implements TextExerciseTestAdapter {

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
                "Remember that 'square' should return the arithmetic square of 'x', and be used to initialize the 3 variables."
            );
        }
    }

}
