import { Box } from "@mui/material";
import Markdown from "./Markdown";

export default function ExplainedTestResultView(props: any) {
  const explainedTestResult: ExplainedTestResult = props.explainedTestResult;
  if (!explainedTestResult.run) {
    return null;
  } else if (explainedTestResult.passed) {
    return <OK okMessage={props.okMessage}
      explanation={explainedTestResult.explanation} />;
    } else {
    return <MyError errPrefix={props.errPrefix}
      expectedSolutionText={explainedTestResult.expectedSolutionText}
      explanation={explainedTestResult.explanation}
    />;
  }

}

export type ExplainedTestResult = {
  run: boolean,
  passed: boolean,
  expectedSolutionText: string,
  explanation: string,
}

function OK(props: any) {
  return (
    <div>
      <Box mb={2} sx={{typography: "subtitle1", color: "green"}}>
        {props.okMessage}
      </Box>
      {props.explanation &&
        <>
          <Box sx={{typography: "subtitle2", fontWeight: "bold"}}>
            Explanation:
          </Box>
          <Markdown md={props.explanation} />
        </>
      }
    </div>
  );
}

function MyError(props: any) {
  const style = {
    color: "red",
  }
  console.log(props.explanation)

  return (
    <div>
      <Box mb={2} sx={{typography: "subtitle1", color: "red"}}>
        {props.errPrefix}
      </Box>
      {props.expectedSolutionText &&
        <>
          <Box sx={{typography: "subtitle2", fontWeight: "bold"}}>
            Correct solution:
          </Box>
          <Box sx={{whiteSpace: "break-spaces", userSelect: "none"}}>
            <Markdown md={props.expectedSolutionText} />
          </Box>
        </>
      }
      {props.explanation &&
        <>
          <Box sx={{typography: "subtitle2", fontWeight: "bold"}}>
            Explanation:
          </Box>
          <Markdown md={props.explanation} />
        </>
      }
    </div>
  );
}