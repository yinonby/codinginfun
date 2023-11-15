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
      explanation={explainedTestResult.explanation} />;
  }

}

export type ExplainedTestResult = {
  run: boolean,
  passed: boolean,
  explanation: string,
}

function OK(props: any) {
  const style = {
    color: "green",
  }

  return (
    <div>
      <h4 style={style}>{props.okMessage}</h4>
      {props.explanation &&
        <>
          <h4>Explanation:</h4>
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

  return (
    <div>
      <h4 style={style}>{props.errPrefix}</h4>
      {props.explanation &&
        <>
          <h4>Explanation:</h4>
          <Markdown md={props.explanation} />
        </>
      }
    </div>
  );
}