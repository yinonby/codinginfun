
import MultiChoiceExerciseTestAbs, { MultiChoiceAnswer }
  from "#infra/test/MultiChoiceExerciseTestAbs";

const mcAnswerMd1: string = `
"chocolate"
`;
const mcExplanationMd1: string = `
- The parameter passed as <<firstChoice>> starts with a lowercase <<'c'>>,
and therefore is not present in the array <<availableMilkshakes>>.
- The parameter passed as <<secondChoice>> is present in the array,
and therefore it is returned.
`;

const mcAnswerMd2: string = `
"Chocolate"
`;
const mcExplanationMd2: string = mcExplanationMd1;

const mcAnswerMd3: string = `
"Vanilla"
`;
const mcExplanationMd3: string = mcExplanationMd1;

const mcAnswerMd4: string = `
"Strawberry-Chocolate"
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
