
import ExerciseMgrAdapter from "#infra/mgr/ExerciseMgrAbs";
import { TSBPExerciseMap } from "./ts/bp/TSBPExerciseMap";

type ExerciseMapItem = {
  [key: string]: CourseItem,
}

export type CourseItem = {
  name: string,
  displayName: string,
  chapters: ChapterItem[],
}

type ChapterItem = {
  name: string,
  displayName: string,
  lessons: LessonItem[],
}

type LessonItem = {
  name: string,
  displayName: string,
  exercises: ExerciseItem[],
}

export type ExerciseItem = {
  name: string,
  exerciseMgr: ExerciseMgrAdapter,
}

export type NameItem = {
  name: string,
  displayName: string,
}

export default class ExerciseMap {
  private map: ExerciseMapItem = {
    "bp": TSBPExerciseMap,
  }

  getExerciseItem(courseName: string, chapterName: string,
    lessonName: string,
    exerciseName: string): ExerciseItem | null {

    if (!this.map[courseName]) {
      console.log("no course found", courseName);
      return null;
    }
    const chapter = this.map[courseName].chapters.find(e => e.name == chapterName);
    if (!chapter) {
      console.log("no chapter found", courseName, chapterName);
      return null;
    }
    const lesson = chapter.lessons.find(e => e.name == lessonName);
    if (!lesson) {
      console.log("not lesson found", courseName, chapterName, lessonName);
      return null;
    }
    const exercise = lesson.exercises.find(e => e.name == exerciseName);
    if (!exercise) {
      console.log("not exercise found", courseName, chapterName, lessonName, exerciseName);
      return null;
    }
    return exercise;
  }

  getCourses(): NameItem[] {
    return Object.keys(this.map).map(e => ({
      name: e,
      displayName: this.map[e].displayName,
    }));
  }

  getChapterNames(courseName: string): NameItem[] {
    return this.map[courseName].chapters.map(e => ({
      name: e.name,
      displayName: e.displayName,
    }));
  }

  getLessonNames(courseName: string, chapterName: string): NameItem[] {
    return this.map[courseName].chapters
      .find(e => e.name === chapterName)!.lessons
      .map(e => ({
        name: e.name,
        displayName: e.displayName,
      }));
  }

  getExerciseNames(courseName: string, chapterName: string,
    lessonName: string): NameItem[] {
    return this.map[courseName].chapters
      .find(e => e.name === chapterName)!.lessons
      .find(e => e.name === lessonName)!.exercises
      .map(e => ({
        name: e.name,
        displayName: e.exerciseMgr.getTitle(),
      }));
  }

}

