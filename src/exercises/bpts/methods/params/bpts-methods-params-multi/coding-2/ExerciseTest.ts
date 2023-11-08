
import TextExerciseTestAdapter from "../../../../../TextExerciseTestAdapter";

const initialSolutionText: string = `
`;

const expectedSolutionText: string = `
function multiplyAndPrint(x: number, y: number) {
    const result: number = x * y;
    console.log(result);
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
                "Did you declare a new variable called 'result'? Did you follow code conventions?"
            );
        }
    }

}
