
import ExerciseInfoAbs, { EX_TYPE } from "../../../../../../../infra/info/ExerciseInfoAbs";

const md: string = `
Implement the following hierarchy:

Class <<App>>:
- Has a <<private>> parameter property named <<appName>>.
- Provides a <<public>> getter method <<getAppName()>>.

Class <<GamingApp>>:
- Extends class <<App>>.
- Has a static <<public>> member of type <<string>>,
named <<GAME_TYPE_VIDEO>>, initialized with value "Video".
- Has a constructor parameter <<appName>>.
- Has a <<private>> parameter property named <<gameType>>.
- Provides a <<public>> getter method <<getGameType()>>.

Class <<VideoGamingApp>>:
- Extends class <<GamingApp>>.
- Has a static <<public>> member of type <<string>>,
named <<VIDEO_GAME_GENRE_SPORTS>>, initialized with value "Sports".
- Has a constructor parameter <<appName>>.
- Constructs the parent using <<GamingApp.GAME_TYPE_VIDE>> for <<gameType>>.
- Provides a <<public>> getter method <<getGenre()>>.

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
