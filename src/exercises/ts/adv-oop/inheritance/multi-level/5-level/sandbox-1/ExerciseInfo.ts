
import ExerciseInfoAbs, { EX_TYPE } from "../../../../../../../infra/info/ExerciseInfoAbs";

const md: string = `
Classes <<App>>, <<GamingApp>>, and <<VideoGamingApp>> are given.

Implement the following hierarchy:

Class <<SportsVideoGamingApp>>:
- Extends class <<VideoGamingApp>>.
- Has a constructor parameter <<appName>>.
- Constructs the parent using <<VideoGamingApp.VIDEO_GAME_GENRE_SPORTS>>
for <<genre>>.

Class <<FifaApp>>:
- Extends class <<SportsVideoGamingApp>>.
- Has a constructor parameter <<appName>>.
- Constructs the parent using <<"FIFA">> for <<appName>>.

Class <<NbaApp>>:
- Extends class <<SportsVideoGamingApp>>.
- Has a constructor parameter <<appName>>.
- Constructs the parent using <<"NBA">> for <<appName>>.

Don't forget to follow code conventions.
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_SANDBOX;
  }

  getMdInstructions(): string {
    return md;
  }

}
