
import ExerciseInfoAbs, { EX_TYPE } from '#infra/info/ExerciseInfoAbs';
import ModularSandboxExerciseInfoAbs from '#infra/info/ModularSandboxExerciseInfoAbs';
import SandboxExerciseInfoAbs from '#infra/info/SandboxExerciseInfoAbs';
import ExerciseTask from '#infra/task/ExerciseTask';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import ExerciseMap, { ExerciseItem } from '../../exercises/ExerciseMap';

export default function CodeSandboxIFrame() {
  const params = useParams();
  const progLang: string = params.progLang || "";
  const courseName: string = params.courseName || "";
  const chapterName: string = params.chapterName || "";
  const lessonName: string = params.lessonName || "";
  const exerciseName: string = params.exerciseName || "";
  const taskIdStr: string = params.taskId || "";
  const repo: string = "github/yinonby/cif-sandbox/tree/devel";

  if (!taskIdStr) {
    console.error("missing taskId in path");
    return <div>Missing taskId</div>;
  }
  const taskId: number = Number(taskIdStr);

  const exerciseMap = new ExerciseMap();
  const exerciseItem: ExerciseItem | null =
    exerciseMap.getExerciseItem(courseName, chapterName,
      lessonName, exerciseName);
  if (! exerciseItem) {
    return <Box mx={2}>No exercise found</Box>;
  }

  const exerciseTask: ExerciseTask =
    exerciseItem.exerciseMgr.getTask(taskId);
  const exercieInfo: ExerciseInfoAbs = exerciseTask.getInfo();

  let initialPath: string = "";
  let module: string = "";
  let hidenavigation: string = "";
  if (exercieInfo.getType() === EX_TYPE.EX_TYPE_SANDBOX) {
    if (! (exercieInfo instanceof SandboxExerciseInfoAbs)) {
      return <Box mx={2}>Invalid ExerciseInfo</Box>;
    }
    const sandboxId: string = exercieInfo.getSandboxId();

    hidenavigation = "1";
    initialPath = "o" + "%2F" + "codesandbox" + "%2F" + progLang +
      "%2F" + courseName + "%2F" + chapterName +
      "%2F" + lessonName + "%2F" + exerciseName + "%2F" + sandboxId;
    module = "%2F" + "src" + "%2F" + "exercises" + "%2F" + progLang +
      "%2F" + courseName + "%2F" + chapterName +
      "%2F" + lessonName + "%2F" + exerciseName + "%2F" + sandboxId +
      "%2F" + "Exercise.ts";
  } else if (exercieInfo.getType() === EX_TYPE.EX_TYPE_MODULAR_SANDBOX) {
    if (! (exercieInfo instanceof ModularSandboxExerciseInfoAbs)) {
      return <Box mx={2}>Invalid ExerciseInfo</Box>;
    }
    const initialFilePath: string = exercieInfo.getInitialFilePath();
    
    hidenavigation = "0";
    initialPath = "o" + "%2F" + "codesandbox" + "%2F" + "modular" +
      "%2F" + progLang + "%2F" + exerciseName;
    module = "%2F" + "src" + "%2F" + "exercises" +
      "%2F" + progLang + "%2F" + exerciseName + "%2F" + initialFilePath;
  }

  const src: string = "https://codesandbox.io/embed/" + repo +
    "/?fontsize=14&hidenavigation=1&theme=dark" +
    "&initialpath=" + initialPath +
    "&module=" + module;

  const style = {
    width: "100%",
    height: "100%",
    border: 0,
    borderRadius: "4px",
    overflow: "hidden",
  }

  return (
    <iframe src={src}
      style={style}
      title="codinginfun"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  );
}
