
import ExerciseMgrAbs from "#infra/mgr/ExerciseMgrAbs";
import ExerciseTask from "#infra/task/ExerciseTask";
import Coding1ExerciseInfo from "./coding-1/ExerciseInfo";
import Coding1ExerciseTest from "./coding-1/ExerciseTest";
import Coding2ExerciseInfo from "./coding-2/ExerciseInfo";
import Coding2ExerciseTest from "./coding-2/ExerciseTest";

export default class ExerciseMgr extends ExerciseMgrAbs {
  private exerciseTasks: ExerciseTask[] = [];

  constructor() {
    super();
    this.exerciseTasks.push(new ExerciseTask(
      new Coding1ExerciseInfo(),
      new Coding1ExerciseTest(),
    ));
    this.exerciseTasks.push(new ExerciseTask(
      new Coding2ExerciseInfo(),
      new Coding2ExerciseTest(),
    ));
  }

  getTitle(): string {
    return "Retrieving the value of an array item";
  }

  getTasks(): ExerciseTask[] {
    return this.exerciseTasks;
  }

}