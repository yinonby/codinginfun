
import MultiChoiceExerciseTestAbs, { MultiChoiceAnswer }
  from "#infra/test/MultiChoiceExerciseTestAbs";

const mcAnswerMd1: string = `
10
`;
const mcExplanationMd1: string = `
- The first <<if>> condition is not met.
- The second <<if>> condition is met because <<10>> divided by <<3>>
has a remainder of <<1>>. Then, a new variable with the same name <<x>> is
declared and initialized to <<30>>, and that is the value that is printed
to the output.
`;

const mcAnswerMd2: string = `
20
`;
const mcExplanationMd2: string = mcExplanationMd1;

const mcAnswerMd3: string = `
30
`;
const mcExplanationMd3: string = mcExplanationMd1;

const mcAnswerMd4: string = `
40
`;
const mcExplanationMd4: string = mcExplanationMd1;

export default class ExerciseTest extends MultiChoiceExerciseTestAbs {

  getMcAnswers(): MultiChoiceAnswer[] {
    const mcAnswers: MultiChoiceAnswer[] = [];

    mcAnswers.push({
      mcAnswerMd: mcAnswerMd1.replace(/^\s+|\s+$/g, ''),
      mcExplanationMd: mcExplanationMd1,
      isCorrect: false,
    });
    mcAnswers.push({
      mcAnswerMd: mcAnswerMd2.replace(/^\s+|\s+$/g, ''),
      mcExplanationMd: mcExplanationMd2,
      isCorrect: false,
    });
    mcAnswers.push({
      mcAnswerMd: mcAnswerMd3.replace(/^\s+|\s+$/g, ''),
      mcExplanationMd: mcExplanationMd3,
      isCorrect: true,
    });
    mcAnswers.push({
      mcAnswerMd: mcAnswerMd4.replace(/^\s+|\s+$/g, ''),
      mcExplanationMd: mcExplanationMd4,
      isCorrect: false,
    });

    return mcAnswers;
  }
  
}
