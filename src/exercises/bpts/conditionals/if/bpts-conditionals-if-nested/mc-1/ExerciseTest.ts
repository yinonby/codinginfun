
import MultiChoiceExerciseTestAbs, { MultiChoiceAnswer } from "#infra/test/MultiChoiceExerciseTestAbs";

const mcAnswerMd1: string = `
"Odd number!"
`;
const mcExplanationMd1: string = `
- The outer <<if>> condition is not met. Therefore, the outer <<else>>
statement is executed.
- The inner <<if>> condition is not met. Therefore, the inner <<else>>
statement is executed.
`;

const mcAnswerMd2: string = `
"Positive even number!"
`;
const mcExplanationMd2: string = mcExplanationMd1;

const mcAnswerMd3: string = `
"Non-positive even number!"
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
      isCorrect: false,
    });
    mcAnswers.push({
      mcAnswerMd: mcAnswerMd3.replace(/^\s+|\s+$/g, ''),
      mcExplanationMd: mcExplanationMd3,
      isCorrect: true,
    });

    return mcAnswers;
  }
  
}
