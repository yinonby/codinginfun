
import MultiChoiceExerciseTestAbs, { MultiChoiceAnswer } from "#infra/test/MultiChoiceExerciseTestAbs";

const mcAnswerMd1: string = `
Yes
`;
const mcExplanationMd1: string = `
Implementation of an abstract method must have the same signature, but
accessibility modifier is not part of a method's signature. Therefore,
as long as we follow the rules of method override, it is ok to implement
an abstract method using a different accessibility modifier.

As a reminder, when overriding a method, the child class must have the
same accessibility modifier, or more permitive.
In addition, it is never allowed to override a <<private>> method,
due to its nature of not being accessed in the child.
Therefore, a <<public>> method can override a <<protected>> method.
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
