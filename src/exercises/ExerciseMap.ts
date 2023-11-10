
import ExerciseMgrAdapter from "../infra/mgr/ExerciseMgrAbs";

import BptsVarsBasicConstExerciseMgr
    from "./bpts/vars/basics/bpts-vars-basics-const/ExerciseMgr";
import BptsVarsBasicNamingExerciseMgr
    from "./bpts/vars/basics/bpts-vars-basics-naming/ExerciseMgr";
import BptsVarsBasicLetExerciseMgr
    from "./bpts/vars/basics/bpts-vars-basics-let/ExerciseMgr";
import BptsVarsTypesStringExerciseMgr
    from "./bpts/vars/types/bpts-vars-types-string/ExerciseMgr";
import BptsVarsTypesBooleanExerciseMgr
    from "./bpts/vars/types/bpts-vars-types-boolean/ExerciseMgr";
import BptsVarsTypesArrayExerciseMgr
    from "./bpts/vars/types/bpts-vars-types-array/ExerciseMgr";
import BptsVarsTypesConstVsLetExerciseMgr
    from "./bpts/vars/types/bpts-vars-types-const-vs-let/ExerciseMgr";

    import BptsOperatorsArithmeticBasicExerciseMgr
    from "./bpts/operators/arithmetic/bpts-operators-arithmetic-basic/ExerciseMgr";
import BptsOperatorsArithmeticCntExerciseMgr
    from "./bpts/operators/arithmetic/bpts-operators-arithmetic-cnt/ExerciseMgr";
import BptsOperatorsAssignmentBasicExerciseMgr
    from "./bpts/operators/assignment/bpts-operators-assignment-basic/ExerciseMgr";
import BptsOperatorsComparisonBasicExerciseMgr
    from "./bpts/operators/comparison/bpts-operators-comparison-basic/ExerciseMgr";
import BptsOperatorsLogicalBasicExerciseMgr
    from "./bpts/operators/logical/bpts-operators-logical-basic/ExerciseMgr";
import BptsOperatorsStringsConcatExerciseMgr
    from "./bpts/operators/strings/bpts-operators-strings-concat/ExerciseMgr";

    import BptsMethodsBasicsDeclarationExerciseMgr
    from "./bpts/methods/basics/bpts-methods-basics-declaration/ExerciseMgr";
import BptsMethodsBasicsCallingExerciseMgr
    from "./bpts/methods/basics/bpts-methods-basics-calling/ExerciseMgr";
import BptsMethodsScopeOuterExerciseMgr
    from "./bpts/methods/scope/bpts-methods-scope-outer/ExerciseMgr";
import BptsMethodsScopeNestedExerciseMgr
    from "./bpts/methods/scope/bpts-methods-scope-nested/ExerciseMgr";
import BptsMethodsParamsSingleExerciseMgr
    from "./bpts/methods/params/bpts-methods-params-single/ExerciseMgr";
import BptsMethodsParamsMultiExerciseMgr
    from "./bpts/methods/params/bpts-methods-params-multi/ExerciseMgr";
import BptsMethodsPrincipalsReuseExerciseMgr
    from "./bpts/methods/principals/bpts-methods-principals-reuse/ExerciseMgr";

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
    exerciseMgr: ExerciseMgrAdapter,
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
                                    "exerciseMgr": new BptsVarsBasicConstExerciseMgr(),
                                },
                                {
                                    "name": "bpts-vars-basics-naming",
                                    "exerciseMgr": new BptsVarsBasicNamingExerciseMgr(),
                                },
                                {
                                    "name": "bpts-vars-basics-let",
                                    "exerciseMgr": new BptsVarsBasicLetExerciseMgr(),
                                }
                            ]
                        },
                        {
                            "name": "types",
                            "displayName": "Variables types",
                            "exercises": [
                                {
                                    "name": "bpts-vars-types-string",
                                    "exerciseMgr": new BptsVarsTypesStringExerciseMgr(),
                                },
                                {
                                    "name": "bpts-vars-types-boolean",
                                    "exerciseMgr": new BptsVarsTypesBooleanExerciseMgr(),
                                },
                                {
                                    "name": "bpts-vars-types-array",
                                    "exerciseMgr": new BptsVarsTypesArrayExerciseMgr(),
                                },
                                {
                                    "name": "bpts-vars-types-const-vs-let",
                                    "exerciseMgr": new BptsVarsTypesConstVsLetExerciseMgr(),
                                },
                            ]
                        }
                    ]
                },
                {
                    "name": "operators",
                    "displayName": "Operators",
                    "lessons": [
                        {
                            "name": "arithmetic",
                            "displayName": "Arithmetic operators",
                            "exercises": [
                                {
                                    "name": "bpts-operators-arithmetic-basic",
                                    "exerciseMgr": new BptsOperatorsArithmeticBasicExerciseMgr(),
                                },
                                {
                                    "name": "bpts-operators-arithmetic-cnt",
                                    "exerciseMgr": new BptsOperatorsArithmeticCntExerciseMgr(),
                                },
                            ]
                        },
                        {
                            "name": "assignment",
                            "displayName": "Assignment operators",
                            "exercises": [
                                {
                                    "name": "bpts-operators-assignment-basic",
                                    "exerciseMgr": new BptsOperatorsAssignmentBasicExerciseMgr(),
                                },
                            ]
                        },
                        {
                            "name": "comparison",
                            "displayName": "Comparison operators",
                            "exercises": [
                                {
                                    "name": "bpts-operators-comparison-basic",
                                    "exerciseMgr": new BptsOperatorsComparisonBasicExerciseMgr(),
                                },
                            ]
                        },
                        {
                            "name": "logical",
                            "displayName": "Logical operators",
                            "exercises": [
                                {
                                    "name": "bpts-operators-logical-basic",
                                    "exerciseMgr": new BptsOperatorsLogicalBasicExerciseMgr(),
                                },
                            ]
                        },
                        {
                            "name": "strings",
                            "displayName": "Strings operators",
                            "exercises": [
                                {
                                    "name": "bpts-operators-strings-conact",
                                    "exerciseMgr": new BptsOperatorsStringsConcatExerciseMgr(),
                                },
                            ]
                        },
                    ]
                },
                {
                    "name": "methods",
                    "displayName": "Methods",
                    "lessons": [
                        {
                            "name": "basics",
                            "displayName": "Methods basics",
                            "exercises": [
                                {
                                    "name": "bpts-methods-basics-declaration",
                                    "exerciseMgr": new BptsMethodsBasicsDeclarationExerciseMgr(),
                                },
                                {
                                    "name": "bpts-methods-basics-calling",
                                    "exerciseMgr": new BptsMethodsBasicsCallingExerciseMgr(),
                                },
                            ]
                        },
                        {
                            "name": "scope",
                            "displayName": "Methods scope",
                            "exercises": [
                                {
                                    "name": "bpts-methods-scope-outer",
                                    "exerciseMgr": new BptsMethodsScopeOuterExerciseMgr(),
                                },
                                {
                                    "name": "bpts-methods-scope-nested",
                                    "exerciseMgr": new BptsMethodsScopeNestedExerciseMgr(),
                                },
                            ]
                        },
                        {
                            "name": "params",
                            "displayName": "Methods parameters",
                            "exercises": [
                                {
                                    "name": "bpts-methods-params-single",
                                    "exerciseMgr": new BptsMethodsParamsSingleExerciseMgr(),
                                },
                                {
                                    "name": "bpts-methods-params-multi",
                                    "exerciseMgr": new BptsMethodsParamsMultiExerciseMgr(),
                                },
                            ]
                        },
                        {
                            "name": "principals",
                            "displayName": "Methods coding principals",
                            "exercises": [
                                {
                                    "name": "bpts-methods-basics-reuse",
                                    "exerciseMgr": new BptsMethodsPrincipalsReuseExerciseMgr(),
                                },
                            ]
                        },
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
                displayName: e.exerciseMgr.getTitle(),
            }));
    }

}

