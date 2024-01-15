
import ExerciseInfoAbs, { EX_TYPE } from "../../../../../../../infra/info/ExerciseInfoAbs";

const md: string = `
Implement the following hierarchy:

Class <<App>>:
- Has a <<private>> parameter property named <<appName>>.
- Provides a <<public>> getter method <<getAppName()>>.

Class <<GamingApp>>:
- Extends class <<App>>.
- Has a constructor parameter <<appName>>.
- Has a <<private>> parameter property named <<gameType>>.
- Provides a <<public>> getter method <<getGameType()>>.

Class <<VideoGamingApp>>:
- Extends class <<GamingApp>>.
- Has a constructor parameter <<appName>>.
- Construct the parent with <<gameType>> = <<"Video">>.

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
