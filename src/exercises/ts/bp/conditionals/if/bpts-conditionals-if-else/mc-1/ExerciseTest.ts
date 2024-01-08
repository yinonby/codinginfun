
import MultiChoiceExerciseTestAbs, { MultiChoiceAnswer } from "#infra/test/MultiChoiceExerciseTestAbs";

const mcAnswerMd1: string = `
"Even number!"
`;
const mcExplanationMd1: string = `
Since the value of <<x>> is an odd number, the <<if>> condition
isn't met, and the <<else>> statement is executed.
`;

const mcAnswerMd2: string = `
"Odd number!"
`;
const mcExplanationMd2: string = mcExplanationMd1;

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

    return mcAnswers;
  }
  
}
