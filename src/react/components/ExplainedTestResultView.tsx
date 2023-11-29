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
    return <MyError
      isBlockquote={props.isBlockquote}
      errPrefix={props.errPrefix}
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
  const expectedSolutionMd = props.isBlockquote ?
    props.expectedSolutionText.replace(/^/gm, '> ') :
    props.expectedSolutionText;
  const expectedSolutionStyle = {
    userSelect: "none",
    whiteSpace: "",
  }
  if (! props.isBlockquote) {
    expectedSolutionStyle.whiteSpace = "break-spaces";
  }

  return (
    <div>
      <Box mb={2} sx={{typography: "subtitle1", color: "red"}}>
        {props.errPrefix}
      </Box>
      {props.expectedSolutionText &&
        <Box mb={2}>
          <Box mb={1} sx={{typography: "subtitle2", fontWeight: "bold"}}>
            Correct solution:
          </Box>
          <Box sx={expectedSolutionStyle}>
            <Markdown md={expectedSolutionMd} />
          </Box>
        </Box>
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