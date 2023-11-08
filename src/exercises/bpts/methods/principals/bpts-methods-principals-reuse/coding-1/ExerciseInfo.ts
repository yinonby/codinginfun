
import ExerciseInfoAbs, { EX_TYPE } from "../../../../../ExerciseInfoAbs";

const md: string = `
- The following code demonstrates code duplication.

- We can see that each variable is initialized with the arithmetic square of some number.

- Your goal is to finish the implementation of the method <<square>> and use it to initialize the variables.

- Replace the question mark <<?>> with the arithmetic square of <<x>> (i.e. <<x * x>>).

- Use the method <<square>> to initialize the 3 variales.

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
