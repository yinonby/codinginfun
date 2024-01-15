
import ExerciseInfoAbs, { EX_TYPE } from "../../../../../../../infra/info/ExerciseInfoAbs";

const md: string = `
Implement the following hierarchy:

Class <<App>>:
- Should have a <<private>> parameter property named <<appName>>.
- Should provide a <<public>> getter method <<getAppName()>>.

Class <<GamingApp>>:
- Should extend class <<App>>.
- Should have a static <<public>> member of type <<string>>,
named <<GAME_TYPE_VIDEO>>, initialized with value "Video".
- Should have a constructor parameter <<appName>>.
- Should have a <<private>> parameter property named <<gameType>>.
- Should provide a <<public>> getter method <<getGameType()>>.

Class <<VideoGamingApp>>:
- Should extend class <<GamingApp>>.
- Should have a constructor parameter <<appName>>.
- Should constructs the parent using <<GamingApp.GAME_TYPE_VIDE>> for <<gameType>>.

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
