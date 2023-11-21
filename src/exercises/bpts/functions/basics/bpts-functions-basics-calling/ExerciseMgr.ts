
import ExerciseMgrAbs from "#infra/mgr/ExerciseMgrAbs";
import ExerciseTask from "#infra/task/ExerciseTask";
import ExerciseInfo from "./coding-1/ExerciseInfo";
import ExerciseTest from "./coding-1/ExerciseTest";
import Question1ExerciseInfo from "./question-1/ExerciseInfo";
import Question1ExerciseTest from "./question-1/ExerciseTest";
import Question2ExerciseInfo from "./question-2/ExerciseInfo";
import Question2ExerciseTest from "./question-2/ExerciseTest";

export default class ExerciseMgr extends ExerciseMgrAbs {
  private exerciseTasks: ExerciseTask[] = [];

  constructor() {
    super();
    this.exerciseTasks.push(new ExerciseTask(
      new ExerciseInfo(),
      new ExerciseTest(),
    ));
    this.exerciseTasks.push(new ExerciseTask(
      new Question1ExerciseInfo(),
      new Question1ExerciseTest(),
    ));
    this.exerciseTasks.push(new ExerciseTask(
      new Question2ExerciseInfo(),
      new Question2ExerciseTest(),
    ));
  }

  getTitle(): string {
    return "Calling functions";
  }

  getTasks(): ExerciseTask[] {
    return this.exerciseTasks;
  }

}