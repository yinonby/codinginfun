
import ExerciseInfoAbs, { EX_TYPE } from "../../../../../../../infra/info/ExerciseInfoAbs";

const md: string = `
Constants <<APP_NAME_FIFA>> and <<APP_NAME_NBA>> are given.
Classes <<App>> and <<GamingApp>> are given.

Implement the following hierarchy:

Class <<VideoGamingApp>>:
- Should have a static <<public>> member of type <<string>>,
named <<VIDEO_GAME_GENRE_SPORTS>>, initialized with value "Sports".
- Should have a constructor parameter <<appName>>.
- Should provide a <<public>> getter method <<getGenre()>>.

Class <<SportsVideoGamingApp>>:
- Extends class <<VideoGamingApp>>.
- Should have a constructor parameter <<appName>>.
- Should construct the parent using <<VideoGamingApp.VIDEO_GAME_GENRE_SPORTS>>
for <<genre>>.

Class <<FifaApp>>:
- Extends class <<SportsVideoGamingApp>>.
- Should have a constructor parameter <<appName>>.
- Should construct the parent using <<APP_NAME_FIFA>> for <<appName>>.

Class <<NbaApp>>:
- Extends class <<SportsVideoGamingApp>>.
- Should have a constructor parameter <<appName>>.
- Should construct the parent using <<APP_NAME_NBA>> for <<appName>>.

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
