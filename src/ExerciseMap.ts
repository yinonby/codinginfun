
import BptsVarsBasic1ExerciseInfo from "./exercises/bpts/vars-basic-1/ExerciseInfo";
import BptsVarsBasic1ExerciseTest from "./exercises/bpts/vars-basic-1/ExerciseTest";
import ExerciseInfoAdapter from "./ExerciseInfoAdapter";
import ExerciseTestAdapter from "./ExerciseTestAdapter";

export type ExerciseItem = {
    exerciseInfo: ExerciseInfoAdapter,
    exerciseTest: ExerciseTestAdapter,
}

export default class ExerciseMap {
    private map: {
        [key: string]: {
            [key: string]: ExerciseItem;
          };
      } = {
        "bpts": {
            "vars-basic-1": {
                "exerciseInfo": new BptsVarsBasic1ExerciseInfo(),
                "exerciseTest": new BptsVarsBasic1ExerciseTest(),
            }
        }
    }

    getExerciseItem(courseName: string, exerciseName: string): ExerciseItem | null {
        if (this.map[courseName] && this.map[courseName][exerciseName]) {
            return this.map[courseName][exerciseName];
        }
        return null;
    }
}

