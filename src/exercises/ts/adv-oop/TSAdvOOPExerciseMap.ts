
import { CourseItem } from "../../ExerciseMap";

import StaticMethodsAccessExerciseMgr from "./static/methods/access/ExerciseMgr";
import StaticMethodsAccessingInstanceExerciseMgr from "./static/methods/accessing-instance/ExerciseMgr";
import StaticMethodsAccessingStaticExerciseMgr from "./static/methods/accessing-static/ExerciseMgr";
import StaticMethodsDeclarationExerciseMgr from "./static/methods/declaration/ExerciseMgr";
import StaticPropsAccessExerciseMgr from "./static/props/access/ExerciseMgr";
import StaticPropsDeclarationExerciseMgr from "./static/props/declaration/ExerciseMgr";

import ReadOnlyPropsDeclarationExerciseMgr from "./read-only/props/declaration/ExerciseMgr";
import ReadOnlyPropsNoChangesExerciseMgr from "./read-only/props/no-changes/ExerciseMgr";

import InheritanceMultiLevel5LevelExerciseMgr from "./inheritance/multi-level/5-level/ExerciseMgr";
import InheritanceMultiLevelClassicExerciseMgr from "./inheritance/multi-level/classic/ExerciseMgr";

import AbstractionBasicsAbstractMethodsExerciseMgr from "./abstraction/basics/abstract-methods/ExerciseMgr";
import AbstractionBasicsDeclarationExerciseMgr from "./abstraction/basics/declaration/ExerciseMgr";
import AbstractionBasicsNormalMethodsExerciseMgr from "./abstraction/basics/normal-methods/ExerciseMgr";
import AbstractionInheritanceClassicExerciseMgr from "./abstraction/inheritance/classic/ExerciseMgr";
import AbstractionInheritanceMixedExerciseMgr from "./abstraction/inheritance/mixed/ExerciseMgr";

import PolymorphismBasicsAbstractionExerciseMgr from "./polymorphism/basics/abstraction/ExerciseMgr";
import PolymorphismBasicsArraysExerciseMgr from "./polymorphism/basics/arrays/ExerciseMgr";
import PolymorphismBasicsInstanceofExerciseMgr from "./polymorphism/basics/instanceof/ExerciseMgr";
import PolymorphismBasicsParametersExerciseMgr from "./polymorphism/basics/parameters/ExerciseMgr";
import PolymorphismBasicsVariablesExerciseMgr from "./polymorphism/basics/variables/ExerciseMgr";

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
    {
      "name": "read-only",
      "displayName": "Read-only members",
      "lessons": [
        {
          "name": "props",
          "displayName": "Read-only member properties",
          "exercises": [
            {
              "name": "declaration",
              "exerciseMgr": new ReadOnlyPropsDeclarationExerciseMgr(),
            },
            {
              "name": "no-changes",
              "exerciseMgr": new ReadOnlyPropsNoChangesExerciseMgr(),
            },
          ]
        },
      ]
    },
    {
      "name": "inheritance",
      "displayName": "Inheritance",
      "lessons": [
        {
          "name": "multi-level",
          "displayName": "Multi-level inheritance",
          "exercises": [
            {
              "name": "classic",
              "exerciseMgr": new InheritanceMultiLevelClassicExerciseMgr(),
            },
            {
              "name": "5-level",
              "exerciseMgr": new InheritanceMultiLevel5LevelExerciseMgr(),
            },
          ]
        },
      ]
    },
    {
      "name": "abstraction",
      "displayName": "Abstraction",
      "lessons": [
        {
          "name": "basics",
          "displayName": "Basic abstraction",
          "exercises": [
            {
              "name": "declaration",
              "exerciseMgr": new AbstractionBasicsDeclarationExerciseMgr(),
            },
            {
              "name": "abstract-methods",
              "exerciseMgr": new AbstractionBasicsAbstractMethodsExerciseMgr(),
            },
            {
              "name": "normal-methods",
              "exerciseMgr": new AbstractionBasicsNormalMethodsExerciseMgr(),
            },
          ]
        },
        {
          "name": "inheritance",
          "displayName": "Abstract inheritance",
          "exercises": [
            {
              "name": "classic",
              "exerciseMgr": new AbstractionInheritanceClassicExerciseMgr(),
            },
            {
              "name": "mixed",
              "exerciseMgr": new AbstractionInheritanceMixedExerciseMgr(),
            },
          ]
        },
      ]
    },
    {
      "name": "polymorphism",
      "displayName": "Polymorphism",
      "lessons": [
        {
          "name": "basics",
          "displayName": "Basic polymorphism",
          "exercises": [
            {
              "name": "variable",
              "exerciseMgr": new PolymorphismBasicsVariablesExerciseMgr(),
            },
            {
              "name": "instanceof",
              "exerciseMgr": new PolymorphismBasicsInstanceofExerciseMgr(),
            },
            {
              "name": "arrays",
              "exerciseMgr": new PolymorphismBasicsArraysExerciseMgr(),
            },
            {
              "name": "parameters",
              "exerciseMgr": new PolymorphismBasicsParametersExerciseMgr(),
            },
            {
              "name": "abstraction",
              "exerciseMgr": new PolymorphismBasicsAbstractionExerciseMgr(),
            },
          ]
        },
      ]
    }
  ]
}

