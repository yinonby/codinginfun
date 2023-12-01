
import ExerciseMgrAbs from "#infra/mgr/ExerciseMgrAbs";
import ExerciseTask from "#infra/task/ExerciseTask";
import ExerciseInfo from "./coding-1/ExerciseInfo";
import ExerciseTest from "./coding-1/ExerciseTest";
import MC1ExerciseInfo from "./mc-1/ExerciseInfo";
import MC1ExerciseTest from "./mc-1/ExerciseTest";
import MC2ExerciseInfo from "./mc-2/ExerciseInfo";
import MC2ExerciseTest from "./mc-2/ExerciseTest";
import Question1ExerciseInfo from "./question-1/ExerciseInfo";
import Question1ExerciseTest from "./question-1/ExerciseTest";

export default class ExerciseMgr extends ExerciseMgrAbs {
  private exerciseTasks: ExerciseTask[] = [];

  constructor() {
    super();
    this.exerciseTasks.push(new ExerciseTask(
      new ExerciseInfo(),
      new ExerciseTest(),
    ));
    this.exerciseTasks.push(new ExerciseTask(
      new MC1ExerciseInfo(),
      new MC1ExerciseTest(),
    ));
    this.exerciseTasks.push(new ExerciseTask(
      new MC2ExerciseInfo(),
      new MC2ExerciseTest(),
    ));
    this.exerciseTasks.push(new ExerciseTask(
      new Question1ExerciseInfo(),
      new Question1ExerciseTest(),
    ));
  }

  getTitle(): string {
    return "Child class constructor and 'super' keyword";
  }

  getTasks(): ExerciseTask[] {
    return this.exerciseTasks;
  }

}