
import MultiChoiceExerciseTestAbs, { MultiChoiceAnswer } from "#infra/test/MultiChoiceExerciseTestAbs";

const mcAnswerMd1: string = `
"Even number!"
`;
const mcExplanationMd1: string = `
- The 1st <<if>> condition is not met because the value of <<x>>
is not an even number.
- The <<else if>> statement is met because the value of <<x>>
is positive.
`;

const mcAnswerMd2: string = `
"Positive odd number!"
`;
const mcExplanationMd2: string = mcExplanationMd1;

const mcAnswerMd3: string = `
"Negative odd number!"
`;
const mcExplanationMd3: string = mcExplanationMd1;

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
      isCorrect: true,
    });
    mcAnswers.push({
      mcAnswerMd: mcAnswerMd3.replace(/^\s+|\s+$/g, ''),
      mcExplanationMd: mcExplanationMd3,
      isCorrect: false,
    });

    return mcAnswers;
  }
  
}
