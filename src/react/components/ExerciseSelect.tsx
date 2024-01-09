
import Box from '@mui/material/Box';
import { useNavigate, useParams } from 'react-router-dom';
import ExerciseMap from "../../exercises/ExerciseMap";
import { getExercisesBaseUrl } from '../AppCfg';
import BaseSelect, { SelectItem } from "./BaseSelect";

const exerciseMap = new ExerciseMap();

export default function ExerciseSelect() {
  const params = useParams();
  const progLang: string = params.progLang || "";
  const courseName: string = params.courseName || "";
  const chapterName: string = params.chapterName || "";
  const lessonName: string = params.lessonName || "";
  const exerciseName: string = params.exerciseName || "";
  const navigate = useNavigate();

  function handleChange(courseName: string, chapterName: string,
    lessonName: string, exerciseName: string) {
    const exercisesBaseUrl = getExercisesBaseUrl(progLang);

    if (exerciseName) {
      navigate(exercisesBaseUrl + courseName + "/" + chapterName + "/" +
        lessonName + "/" + exerciseName);
    } else if (lessonName) {
      navigate(exercisesBaseUrl + courseName + "/" + chapterName + "/" +
        lessonName);
    } else if (chapterName) {
      navigate(exercisesBaseUrl + courseName + "/" + chapterName);
    } else if (courseName) {
      navigate(exercisesBaseUrl + courseName);
    } else {
      navigate(exercisesBaseUrl);
    }
  }

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }} m={-1}>
      <Box sx={{ flex: 1 }} m={1}>
        <CourseSelector courseName={courseName}
          onChange={handleChange} />
      </Box>
      <Box sx={{ flex: 1 }} m={1}>
        <ChapterSelector courseName={courseName}
          chapterName={chapterName}
          onChange={handleChange} />
      </Box>
      <Box sx={{ flex: 1 }} m={1}>
        <LessonSelector courseName={courseName}
          chapterName={chapterName} lessonName={lessonName}
          onChange={handleChange} />
      </Box>
      <Box sx={{ flex: 1 }} m={1}>
        <ExerciseSelector courseName={courseName}
          chapterName={chapterName} lessonName={lessonName}
          exerciseName={exerciseName}
          onChange={handleChange} />
      </Box>
    </Box>
  );
}

function CourseSelector(props: any) {
  const courseName = props.courseName;
  const onChange: Function = props.onChange;
  const courseNames: SelectItem[] = exerciseMap.getCourses().map(e => ({
    name: e.name,
    displayName: e.displayName,
  }));

  const handleChange = (value: string) => {
    onChange(value, "", "", "");
  };

  return <BaseSelect
    selectItems={courseNames}
    label="Course"
    onChange={handleChange}
    curValue={courseName} />;
}

function ChapterSelector(props: any) {
  const courseName: string = props.courseName;
  const chapterName: string = props.chapterName;
  const onChange: Function = props.onChange;
  let chapterNames: SelectItem[] = [];

  if (courseName) {
    chapterNames = exerciseMap.getChapterNames(courseName).map(e => ({
      name: e.name,
      displayName: e.displayName,
    }));
  }

  const handleChange = (value: string) => {
    onChange(courseName, value, "", "");
  };

  return <BaseSelect
    selectItems={chapterNames}
    label="Chapter"
    onChange={handleChange}
    curValue={chapterName}
    innerProps={{ disabled: !courseName }} />;
}

function LessonSelector(props: any) {
  const courseName: string = props.courseName;
  const chapterName: string = props.chapterName;
  const lessonName: string = props.lessonName;
  const onChange: Function = props.onChange;
  let lessonNames: SelectItem[] = [];

  if (courseName && chapterName) {
    lessonNames =
      exerciseMap.getLessonNames(courseName, chapterName).map(e => ({
        name: e.name,
        displayName: e.displayName,
      }));
  }

  const handleChange = (value: string) => {
    onChange(courseName, chapterName, value, "");
  };

  return <BaseSelect
    selectItems={lessonNames}
    label="Lesson"
    onChange={handleChange}
    curValue={lessonName}
    innerProps={{ disabled: !chapterName }} />;
}

function ExerciseSelector(props: any) {
  const courseName: string = props.courseName;
  const chapterName: string = props.chapterName;
  const lessonName: string = props.lessonName;
  const exerciseName: string = props.exerciseName;
  const onChange: Function = props.onChange;
  let exerciseNames: SelectItem[] = [];

  if (courseName && chapterName && lessonName) {
    exerciseNames = exerciseMap.getExerciseNames(courseName, chapterName, lessonName).map(e => ({
      name: e.name,
      displayName: e.displayName,
    }));
  }

  const handleChange = (value: string) => {
    onChange(courseName, chapterName, lessonName, value);
  };

  return <BaseSelect
    selectItems={exerciseNames}
    label="Exercise"
    onChange={handleChange}
    curValue={exerciseName}
    innerProps={{ disabled: !lessonName }} />;
}
