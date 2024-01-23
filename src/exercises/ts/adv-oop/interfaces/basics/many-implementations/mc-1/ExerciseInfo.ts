
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
Is the following code valid?

>>>>
interface Audible {
  play(): void;
}

class Song implements Audible {
  public play(): void {
    console.log("This is a song playing!");
  }
}

class Podcast implements Audible {
  public play(): void {
    console.log("This is a podcast playing!");
  }
}

class Announcement implements Audible {
  public play(): void {
    console.log("This is an announcement playing!");
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
