
import RunnableCodingExerciseTestAbs from "../../../../../../../infra/test/RunnableCodingExerciseTestAbs";

const initialSolutionText: string = `
`;

const expectedSolutionText: string = `
const APP_NAME_FIFA: string = "FIFA";
const APP_NAME_NBA: string = "NBA";

class App {
  constructor(private appName: string) {
  }

  public getAppName(): string {
    return this.appName;
  }
}

class GamingApp extends App {
  public static GAME_TYPE_VIDEO: string = "Video";

  constructor(appName: string, private gameType: string) {
    super(appName);
  }

  public getGameType(): string {
    return this.gameType;
  }
}

class VideoGamingApp extends GamingApp {
  public static VIDEO_GAME_GENRE_SPORTS: string = "Sports";

  constructor(appName: string, private genre: string) {
    super(appName, GamingApp.GAME_TYPE_VIDEO);
  }

  public getGenre(): string {
    return this.genre;
  }
}

class SportsVideoGamingApp extends VideoGamingApp {
  constructor(appName: string) {
    super(appName, VideoGamingApp.VIDEO_GAME_GENRE_SPORTS);
  }
}

class FifaApp extends SportsVideoGamingApp {
  constructor() {
    super(APP_NAME_FIFA);
  }
}

class NbaApp extends SportsVideoGamingApp {
  constructor() {
    super(APP_NAME_NBA);
  }
}

/* do not remove the following lines */
export {
  APP_NAME_FIFA, APP_NAME_NBA,
  App, FifaApp, GamingApp, NbaApp, SportsVideoGamingApp, VideoGamingApp
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

