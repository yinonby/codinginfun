import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import ExerciseMap, { ExerciseItem } from '../../exercises/ExerciseMap';
import ExerciseTask from '../../infra/task/ExerciseTask';
import { getExercisesBaseUrl } from '../AppCfg';

const exerciseMap = new ExerciseMap();

interface LinkTabProps {
  label?: string;
  href?: string;
  disabled?: boolean;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      {...props}
    />
  );
}

export default function TaskSelect() {
  const params = useParams();
  const progLang: string = params.progLang || "";
  const courseName: string = params.courseName || "";
  const chapterName: string = params.chapterName || "";
  const lessonName: string = params.lessonName || "";
  const exerciseName: string = params.exerciseName || "";
  const taskIdStr: string = params.taskId || "0";
  const taskId: number = Number(taskIdStr);
  const [value, setValue] = React.useState(taskId);

  const exerciseItem: ExerciseItem | null =
    exerciseMap.getExerciseItem(courseName, chapterName,
      lessonName, exerciseName);
  if (!exerciseItem) {
    return <Box mx={2} className="app">No exercise found</Box>;
  }

  const exerciseTasks: ExerciseTask[] = exerciseItem.exerciseMgr.getTasks();

  if (exerciseTasks.length <= 1) {
    return null;
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const exercisesBaseUrl = getExercisesBaseUrl(progLang);
  const hrefStrPrefix = exercisesBaseUrl + courseName + "/" + chapterName + "/" +
  lessonName + "/" + exerciseName + "/";

  return (
    <Box sx={{ width: '100%' }} mb={2}>
      <Tabs value={value} onChange={handleChange}
        variant="scrollable"
        aria-label="Task navigation">
        {exerciseTasks.map((e, index) =>
          <LinkTab key={index} label={"Task " + (index + 1)}
            disabled={value === index}
            href={hrefStrPrefix + index} />
        )}
      </Tabs>
    </Box>
  );
}
