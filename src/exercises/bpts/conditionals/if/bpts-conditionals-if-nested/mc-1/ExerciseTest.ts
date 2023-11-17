
import MultiChoiceExerciseTestAbs, { MultiChoiceAnswer }
  from "#infra/test/MultiChoiceExerciseTestAbs";

const mcAnswerMd1: string = `
"Cupcake"
`;
const mcExplanationMd1: string = `
- The outer <<if>> condition is not met, so we go into the
outer <<else>> statement.
- The inner <<if>> condition is met. Therefore, <<"Croissant">>
is returned.
`;

const mcAnswerMd2: string = `
"Chocolate cake"
`;
const mcExplanationMd2: string = mcExplanationMd1;

const mcAnswerMd3: string = `
"Croissant"
`;
const mcExplanationMd3: string = mcExplanationMd1;

const mcAnswerMd4: string = `
"Lemon cake"
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
