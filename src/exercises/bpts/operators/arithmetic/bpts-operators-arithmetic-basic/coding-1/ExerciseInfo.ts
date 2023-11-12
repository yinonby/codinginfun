
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
- Declare a constant variable named <<result>> of type <<number>>,
and initialize it with <<3 + 6>>.

- Note that we are **not** asked to initialize <<result>> with the value <<9>>
explicitly, but rather to use the expression: <<3 + 6>>.
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

    getType(): EX_TYPE {
        return EX_TYPE.EX_TYPE_CODING;
    }

    getDescription(): string {
        return "Addition operator";
    }

    getMdInstructions(): string {
        return md;
    }
    
}
