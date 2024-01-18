
import ExerciseMgrAbs from "#infra/mgr/ExerciseMgrAbs";
import ExerciseTask from "#infra/task/ExerciseTask";
import Question1ExerciseInfo from "./question-1/ExerciseInfo";
import Question1ExerciseTest from "./question-1/ExerciseTest";
import ExerciseInfo from "./sandbox-1/ExerciseInfo";
import ExerciseTest from "./sandbox-1/ExerciseTest";

export default class ExerciseMgr extends ExerciseMgrAbs {
  private exerciseTasks: ExerciseTask[] = [];

  constructor() {
    super();
    this.exerciseTasks.push(new ExerciseTask(
      new Question1ExerciseInfo(),
      new Question1ExerciseTest(),
    ));
    this.exerciseTasks.push(new ExerciseTask(
      new ExerciseInfo(),
      new ExerciseTest(),
    ));
  }

  getTitle(): string {
    return "Polymorphism with data abstraction";
  }

  getTasks(): ExerciseTask[] {
    return this.exerciseTasks;
  }

}
