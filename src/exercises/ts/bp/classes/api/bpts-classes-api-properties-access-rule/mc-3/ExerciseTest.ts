
import MultiChoiceExerciseTestAbs, { MultiChoiceAnswer } from "#infra/test/MultiChoiceExerciseTestAbs";

const mcAnswerMd1: string = `
Read access (getter method only)
`;
const mcExplanationMd1: string = `
Member property <<companyName>> is external and can logically change
(a company's name can be changed). Therefore, both **read** and
**write** access should be granted outside the class.
`;

const mcAnswerMd2: string = `
Write access (setter method only)
`;
const mcExplanationMd2: string = mcExplanationMd1;

const mcAnswerMd3: string = `
Read+write access (getter+setter methods)
`;
const mcExplanationMd3: string = mcExplanationMd1;

const mcAnswerMd4: string = `
No access (neither getter nor setter)
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
