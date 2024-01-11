
import { useParams } from 'react-router-dom';

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

  const src: string = "https://codesandbox.io/embed/" + repo +
    "/?expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark" +
    "&initialpath=" + "o" + "%2F" + "codesandbox" + "%2F" + progLang +
    "%2F" + courseName + "%2F" + chapterName +
    "%2F" + lessonName + "%2F" + exerciseName + "%2F" + taskIdStr +
    "&module=" + "%2F" + "src" + "%2F" + "exercises" + "%2F" + progLang +
    "%2F" + courseName + "%2F" + chapterName +
    "%2F" + lessonName + "%2F" + exerciseName + "%2F" + "task-" + taskIdStr +
    "%2F" + "Exercise.ts";

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
