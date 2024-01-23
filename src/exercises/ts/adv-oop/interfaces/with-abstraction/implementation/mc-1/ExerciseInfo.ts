
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
Is the following code valid?

>>>>
interface Audible {
  play(): void;
}

abstract class Podcast implements Audible {
  public abstract replay(): void;
}

class MyPodcast extends Podcast {
  public play(): void {
    console.log("This is my podcast playing!");
  }

  public replay(): void {
    console.log("This is my podcast replaying!");
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
