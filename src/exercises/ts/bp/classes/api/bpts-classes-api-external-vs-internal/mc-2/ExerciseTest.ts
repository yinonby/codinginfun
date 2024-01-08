
import MultiChoiceExerciseTestAbs, { MultiChoiceAnswer } from "#infra/test/MultiChoiceExerciseTestAbs";

const mcAnswerMd1: string = `
Internal
`;
const mcExplanationMd1: string = `
Class member property <<companyName>> is external. It is given by
the user of the class upon creation of an instance.
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
