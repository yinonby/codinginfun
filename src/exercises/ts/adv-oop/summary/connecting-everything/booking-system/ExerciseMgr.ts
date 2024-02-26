
import ExerciseMgrAbs from "#infra/mgr/ExerciseMgrAbs";
import ExerciseTask from "#infra/task/ExerciseTask";
import SB1ExerciseInfo from "./sandbox-1/ExerciseInfo";
import SB1ExerciseTest from "./sandbox-1/ExerciseTest";

export default class ExerciseMgr extends ExerciseMgrAbs {
  private exerciseTasks: ExerciseTask[] = [];

  constructor() {
    super();
    this.exerciseTasks.push(new ExerciseTask(
      new SB1ExerciseInfo(),
      new SB1ExerciseTest(),
    ));
  }

  getTitle(): string {
    return "Travel Booking System";
  }

  getTasks(): ExerciseTask[] {
    return this.exerciseTasks;
  }

}