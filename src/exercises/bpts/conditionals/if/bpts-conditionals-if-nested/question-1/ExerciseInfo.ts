
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
What is the output of the following code?

>>>>
function printSongFromSpotify(genre: string, language: string): void {
  if (genre === "Salsa") {
    if (language === "Spanish") {
      console.log("Despacito");
    }
  }
}

printSongFromSpotify("Salsa", "French");
<<<<
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_QUESTION;
  }

  getMdInstructions(): string {
    return md;
  }

}
