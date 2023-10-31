
import ExerciseInfoAdapter
    from "./ExerciseInfoAdapter";
import ExerciseTestAdapter
    from "./ExerciseTestAdapter";
import BptsVarsBasicConstExerciseInfo
    from "./bpts/vars/basics/bpts-vars-basics-const/ExerciseInfo";
import BptsVarsBasicConstExerciseTest
    from "./bpts/vars/basics/bpts-vars-basics-const/ExerciseTest";
import BptsVarsBasicNamingExerciseInfo
    from "./bpts/vars/basics/bpts-vars-basics-naming/ExerciseInfo";
import BptsVarsBasicNamingExerciseTest
    from "./bpts/vars/basics/bpts-vars-basics-naming/ExerciseTest";
import BptsVarsBasicLetExerciseInfo
    from "./bpts/vars/basics/bpts-vars-basics-let/ExerciseInfo";
import BptsVarsBasicLetExerciseTest
    from "./bpts/vars/basics/bpts-vars-basics-let/ExerciseTest";
import BptsVarsTypesStringExerciseInfo
    from "./bpts/vars/types/bpts-vars-types-string/ExerciseInfo";
import BptsVarsTypesStringExerciseTest
    from "./bpts/vars/types/bpts-vars-types-string/ExerciseTest";
import BptsVarsTypesBooleanExerciseInfo
    from "./bpts/vars/types/bpts-vars-types-boolean/ExerciseInfo";
import BptsVarsTypesBooleanExerciseTest
    from "./bpts/vars/types/bpts-vars-types-boolean/ExerciseTest";
import BptsVarsTypesArrayExerciseInfo
    from "./bpts/vars/types/bpts-vars-types-array/ExerciseInfo";
import BptsVarsTypesArrayExerciseTest
    from "./bpts/vars/types/bpts-vars-types-array/ExerciseTest";

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
                                    "name": "bpts-vars-basics-const",
                                    "exerciseInfo": new BptsVarsBasicConstExerciseInfo(),
                                    "exerciseTest": new BptsVarsBasicConstExerciseTest(),
                                },
                                {
                                    "name": "bpts-vars-basics-naming",
                                    "exerciseInfo": new BptsVarsBasicNamingExerciseInfo(),
                                    "exerciseTest": new BptsVarsBasicNamingExerciseTest(),
                                },
                                {
                                    "name": "bpts-vars-basics-let",
                                    "exerciseInfo": new BptsVarsBasicLetExerciseInfo(),
                                    "exerciseTest": new BptsVarsBasicLetExerciseTest(),
                                }
                            ]
                        },
                        {
                            "name": "types",
                            "displayName": "Variables types",
                            "exercises": [
                                {
                                    "name": "bpts-vars-types-string",
                                    "exerciseInfo": new BptsVarsTypesStringExerciseInfo(),
                                    "exerciseTest": new BptsVarsTypesStringExerciseTest(),
                                },
                                {
                                    "name": "bpts-vars-types-boolean",
                                    "exerciseInfo": new BptsVarsTypesBooleanExerciseInfo(),
                                    "exerciseTest": new BptsVarsTypesBooleanExerciseTest(),
                                },
                                {
                                    "name": "bpts-vars-types-array",
                                    "exerciseInfo": new BptsVarsTypesArrayExerciseInfo(),
                                    "exerciseTest": new BptsVarsTypesArrayExerciseTest(),
                                },
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
                displayName: e.exerciseInfo.getTitle(),
            }));
    }

}

