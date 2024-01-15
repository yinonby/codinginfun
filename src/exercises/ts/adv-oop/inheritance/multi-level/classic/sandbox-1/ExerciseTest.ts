
import RunnableCodingExerciseTestAbs from "../../../../../../../infra/test/RunnableCodingExerciseTestAbs";

const initialSolutionText: string = `
`;

const expectedSolutionText: string = `
class App {
  constructor(private appName: string) {
  }

  public getAppName(): string {
    return this.appName;
  }
}

class GamingApp extends App {
  constructor(appName: string, private gameType: string) {
    super(appName);
  }

  public getGameType(): string {
    return this.gameType;
  }
}

class VideoGamingApp extends GamingApp {
  constructor(appName: string) {
    super(appName, "Video");
  }
}

/* do not remove the following lines */
export {
  App, GamingApp, VideoGamingApp
};
`;

const explanationMd = `
`;

export default class Test extends RunnableCodingExerciseTestAbs {

  verify() {
    this.verifySolution();
  }

  run() {
    this.runSolution();
  }

  getExpectedSolutionText(): string {
    return expectedSolutionText.replace(/^\s+|\s+$/g, '');;
  }

  verifySolution() {
  }

  runSolution() {
  }

}

