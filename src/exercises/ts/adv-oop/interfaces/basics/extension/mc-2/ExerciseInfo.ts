
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
Is the following code valid?

>>>>
interface Audible {
  play(): void;
}

interface VolumeControlledAudible extends Audible {
  increaseVolume(): void;
  decreaseVolume(): void;
}

class Song implements VolumeControlledAudible {
  public increaseVolume(): void {
    console.log("This song volume is being increased!");
  }

  public decreaseVolume(): void {
    console.log("This song volume is being decreased!");
  }
}
<<<<
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_MULTICHOICE;
  }

  getMdInstructions(): string {
    return md;
  }

}
