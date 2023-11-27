
import MultiChoiceExerciseTestAbs, { MultiChoiceAnswer }
  from "#infra/test/MultiChoiceExerciseTestAbs";

const mcAnswerMd1: string = `
Yes
`;
const mcExplanationMd1: string = `
Class <<Restaurant>> is properly defined with a constructor.
Then, a non-constant variable <<restaurant>> of type <<Restaurant>>
is declared, without initializing it.
`;

const mcAnswerMd2: string = `
No
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
