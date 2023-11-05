
import ExerciseTask from "./ExerciseTask";

export default abstract class ExerciseMgrAbs {
    abstract getTitle(): string;
    abstract getTasks(): ExerciseTask[];
    
    getTask(taskId: number): ExerciseTask {
        return this.getTasks()[taskId];
    }
}