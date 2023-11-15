import ExerciseTestAbs from "./ExerciseTestAbs";

export type MultiChoiceAnswer = {
  mcAnswerMd: string,
  mcExplanationMd: string,
  isCorrect: boolean,
}

export default abstract class MultiChoiceExerciseTestAbs
  extends ExerciseTestAbs {

  abstract getMcAnswers(): MultiChoiceAnswer[];

  getExpectedSolutionText(): string {
    return "";
  }

  getCorrectAnswerIdx(): number {
    return this.getMcAnswers().findIndex(e => e.isCorrect);
  }

  getMcAnswerExplanationMd(mcAnswerIdx: number): string {
    return this.getMcAnswers()[mcAnswerIdx].mcExplanationMd;
  }

}