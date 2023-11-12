
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
- In the first part, there is a demonstration of code duplication.

- We can see that each print to console starts with the same words (<<My name is>>).

- In the second part, there is no code duplication.

- Your goal is to finish the implementation of the method <<printMyName>> and use it to print the names like in the first section.

- Replace the question mark <<?>> that is inside <<printMyName>>, with the variable <<myName>>.

- Replace the 3 question marks when calling the method <<printMyName>> with the 3 names from the first section.

- Don't forget to follow code conventions.
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

    getType(): EX_TYPE {
        return EX_TYPE.EX_TYPE_CODING;
    }

    getDescription(): string {
        return "Simple method declaration";
    }

    getMdInstructions(): string {
        return md;
    }
    
}
