
import { useParams } from 'react-router-dom';

export default function CodeSandboxIFrame() {
    const params = useParams();
    const courseName: string = params.courseName || "";
    const chapterName: string = params.chapterName || "";
    const lessonName: string = params.lessonName || "";
    const exerciseName: string = params.exerciseName || "";
    const repo: string = "github/yinonby/codinginfun/tree/devel";
    const src: string = "https://codesandbox.io/embed/" + repo +
        "/?fontsize=14&hidenavigation=1&theme=dark" +
        "&initialpath=codesandbox%2F" + courseName + "%2F" + chapterName +
        "%2F" + lessonName + "%2F" + exerciseName +
        "&module=%2Fsrc%2Fexercises%2F" + courseName + "%2F" + chapterName +
        "%2F" + lessonName + "%2F" + exerciseName + "%2FExercise.ts";

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
