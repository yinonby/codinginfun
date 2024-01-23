
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

  public mute(): void {
    console.log("This is a song muted!");
  }
}

class Spotify {
  public playAudible(audible: Audible) {
    audible.play();
  }

  public muteAudible(audible: Audible) {
    audible.mute();
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
