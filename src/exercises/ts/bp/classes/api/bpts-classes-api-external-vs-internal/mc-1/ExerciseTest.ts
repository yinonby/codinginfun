
import MultiChoiceExerciseTestAbs, { MultiChoiceAnswer } from "#infra/test/MultiChoiceExerciseTestAbs";

const mcAnswerMd1: string = `
Internal
`;
const mcExplanationMd1: string = `
Class member property <<employeeNames>> is internal. It is used internally
to keep track of employy names.
`;

const mcAnswerMd2: string = `
External
`;
const mcExplanationMd2: string = mcExplanationMd1;

export default class ExerciseTest extends MultiChoiceExerciseTestAbs {

  getMcAnswers(): MultiChoiceAnswer[] {
    const mcAnswers: MultiChoiceAnswer[] = [];

    mcAnswers.push({
      mcAnswerMd: mcAnswerMd1.replace(/^\s+|\s+$/g, ''),
      mcExplanationMd: mcExplanationMd1,
      isCorrect: true,
    });
    mcAnswers.push({
      mcAnswerMd: mcAnswerMd2.replace(/^\s+|\s+$/g, ''),
      mcExplanationMd: mcExplanationMd2,
      isCorrect: false,
    });

    return mcAnswers;
  }
  
}
