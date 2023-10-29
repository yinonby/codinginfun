
import BptsVarsBasic1ExerciseInfo from "./exercises/bpts/vars-basic-1/ExerciseInfo";
import BptsVarsBasic1ExerciseTest from "./exercises/bpts/vars-basic-1/ExerciseTest";
import BptsVarsBasic2ExerciseInfo from "./exercises/bpts/vars-basic-2/ExerciseInfo";
import BptsVarsBasic2ExerciseTest from "./exercises/bpts/vars-basic-2/ExerciseTest";
import BptsVarsBasic3ExerciseInfo from "./exercises/bpts/vars-basic-3/ExerciseInfo";
import BptsVarsBasic3ExerciseTest from "./exercises/bpts/vars-basic-3/ExerciseTest";
import ExerciseInfoAdapter from "./ExerciseInfoAdapter";
import ExerciseTestAdapter from "./ExerciseTestAdapter";

type ExerciseMapItem = {
    [key: string]: CourseItem,
}

type CourseItem = {
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
    displayName: string,
    exerciseInfo: ExerciseInfoAdapter,
    exerciseTest: ExerciseTestAdapter,
}

export type NameItem = {
    name: string,
    displayName: string,
}

export default class ExerciseMap {
    private map: ExerciseMapItem = {
        "test": {
            "name": "test",
            "displayName": "Test",
            "chapters": [],
        },
        "bpts": {
            "name": "bpts",
            "displayName": "Basic Programming with TypeScript",
            "chapters": [
                {
                    "name": "vars",
                    "displayName": "Variables",
                    "lessons": [
                        {
                            "name": "basics",
                            "displayName": "Variables basics",
                            "exercises": [
                                {
                                    "name": "bpts-vars-basics-1",
                                    "displayName": "Variables basics - declaration",
                                    "exerciseInfo": new BptsVarsBasic1ExerciseInfo(),
                                    "exerciseTest": new BptsVarsBasic1ExerciseTest(),
                                },
                                {
                                    "name": "bpts-vars-basics-2",
                                    "displayName": "Variables basics - giving meaningful names",
                                    "exerciseInfo": new BptsVarsBasic2ExerciseInfo(),
                                    "exerciseTest": new BptsVarsBasic2ExerciseTest(),
                                },
                                {
                                    "name": "bpts-vars-basics-3",
                                    "displayName": "Variables basics - changing a variable's value",
                                    "exerciseInfo": new BptsVarsBasic3ExerciseInfo(),
                                    "exerciseTest": new BptsVarsBasic3ExerciseTest(),
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }

    getExerciseItem(courseName: string, chapterName: string,
        lessonName: string,
        exerciseName: string): ExerciseItem | null {

        if (! this.map[courseName]) {
            console.log("no course found", courseName);
            return null;
        }
        const chapter = this.map[courseName].chapters.find(e => e.name == chapterName);
        if (! chapter) {
            console.log("no chapter found", courseName, chapterName);
            return null;
        }
        const lesson = chapter.lessons.find(e => e.name == lessonName);
        if (! lesson) {
            console.log("not lesson found", courseName, chapterName, lessonName);
            return null;
        }
        const exercise = lesson.exercises.find(e => e.name == exerciseName);
        if (! exercise) {
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
                displayName: e.displayName,
            }));
    }

}

