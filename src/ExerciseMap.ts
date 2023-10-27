
import BptsVarsBasic1ExerciseInfo from "./exercises/bpts/vars-basic-1/ExerciseInfo";
import BptsVarsBasic1ExerciseTest from "./exercises/bpts/vars-basic-1/ExerciseTest";
import BptsVarsBasic2ExerciseInfo from "./exercises/bpts/vars-basic-2/ExerciseInfo";
import BptsVarsBasic2ExerciseTest from "./exercises/bpts/vars-basic-2/ExerciseTest";
import BptsVarsBasic3ExerciseInfo from "./exercises/bpts/vars-basic-3/ExerciseInfo";
import BptsVarsBasic3ExerciseTest from "./exercises/bpts/vars-basic-3/ExerciseTest";
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
            },
            "vars-basic-2": {
                "exerciseInfo": new BptsVarsBasic2ExerciseInfo(),
                "exerciseTest": new BptsVarsBasic2ExerciseTest(),
            },
            "vars-basic-3": {
                "exerciseInfo": new BptsVarsBasic3ExerciseInfo(),
                "exerciseTest": new BptsVarsBasic3ExerciseTest(),
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

