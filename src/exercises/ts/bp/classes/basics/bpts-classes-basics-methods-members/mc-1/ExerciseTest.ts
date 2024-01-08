
import MultiChoiceExerciseTestAbs, { MultiChoiceAnswer }
  from "#infra/test/MultiChoiceExerciseTestAbs";

const mcAnswerMd1: string = `
Yes
`;
const mcExplanationMd1: string = `
- Class member method <<getFoodType()>> is properly accesing
member property <<foodType>> using the keyword <<this>>,
then returning its value as it must return a <<string>>.
- Class member method <<printFoodType()>> is properly accessing
member method <<getFoodType()>> using the keyword <<this>>.
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
