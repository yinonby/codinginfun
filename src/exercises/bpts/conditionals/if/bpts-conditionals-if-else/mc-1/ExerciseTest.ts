
import MultiChoiceExerciseTestAbs, { MultiChoiceAnswer }
  from "#infra/test/MultiChoiceExerciseTestAbs";

const mcAnswerMd1: string = `
false
`;
const mcExplanationMd1: string = `
- The method <<isOddNumber>> is called with the parameter <<x>> equal
to <<0>>. The <<if>> condition is met (since the remainder of <<0>>
  divided by <<2>> is <<0>>), and <<false>> is returned.
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
