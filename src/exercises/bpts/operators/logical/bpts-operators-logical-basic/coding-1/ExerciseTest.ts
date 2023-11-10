
import CodingExerciseTestAbs from "../../../../../../infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
const isFast: boolean = true;
const isFurious: boolean = false;
?
`;

const expectedSolutionText: string = `
const isFast: boolean = true;
const isFurious: boolean = false;
const isFastAndFurious: boolean = isFast && isFurious;
`;

const explanationText = `
- We added a declaration of a constant variable <<isFastAndFurious>> of \
type <<boolean>> and initialized as requested. The value of \
<<isFastAndFurious>> is <<false>> because the value of <<isFurious>> is \
<<false>>.
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
