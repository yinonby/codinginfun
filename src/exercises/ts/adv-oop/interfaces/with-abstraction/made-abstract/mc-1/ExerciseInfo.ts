
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
Is the following code valid?

>>>>
interface Audible {
  play(): void;
}

abstract class Podcast implements Audible {
  public abstract play(): void;
}

class MyPodcast extends Podcast {
  public play(): void {
    console.log("This is a my podcast playing!");
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
