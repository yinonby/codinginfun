
import { CourseItem } from "../../ExerciseMap";

import StaticMethodsAccessExerciseMgr from "./static/methods/access/ExerciseMgr";
import StaticMethodsAccessingInstanceExerciseMgr from "./static/methods/accessing-instance/ExerciseMgr";
import StaticMethodsAccessingStaticExerciseMgr from "./static/methods/accessing-static/ExerciseMgr";
import StaticMethodsDeclarationExerciseMgr from "./static/methods/declaration/ExerciseMgr";
import StaticPropsAccessExerciseMgr from "./static/props/access/ExerciseMgr";
import StaticPropsDeclarationExerciseMgr from "./static/props/declaration/ExerciseMgr";

export const TSAdvOOPExerciseMap: CourseItem = {
  "name": "adv-oop",
  "displayName": "Advanced Object-Oriented Programming with TypeScript",
  "chapters": [
    {
      "name": "static",
      "displayName": "Static members",
      "lessons": [
        {
          "name": "props",
          "displayName": "Static member properties",
          "exercises": [
            {
              "name": "declaration",
              "exerciseMgr": new StaticPropsDeclarationExerciseMgr(),
            },
            {
              "name": "access",
              "exerciseMgr": new StaticPropsAccessExerciseMgr(),
            },
          ]
        },
        {
          "name": "methods",
          "displayName": "Static member methods",
          "exercises": [
            {
              "name": "declaration",
              "exerciseMgr": new StaticMethodsDeclarationExerciseMgr(),
            },
            {
              "name": "access",
              "exerciseMgr": new StaticMethodsAccessExerciseMgr(),
            },
            {
              "name": "accessing-static",
              "exerciseMgr": new StaticMethodsAccessingStaticExerciseMgr(),
            },
            {
              "name": "access-instance",
              "exerciseMgr": new StaticMethodsAccessingInstanceExerciseMgr(),
            },
          ]
        },
      ]
    },
  ]
}

