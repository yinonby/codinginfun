
export default function TestResultView(props: any) {
  const testResult: TestResult = props.testResult;
  if (!testResult.run) {
    return null;
  } else if (testResult.passed) {
    return <OK okMessage={props.okMessage} />;
  } else {
    return <MyError errPrefix={props.errPrefix}
      errMessage={testResult.errMessage} />;
  }

}

export type TestResult = {
  run: boolean,
  passed: boolean,
  errMessage: string,
}

function OK(props: any) {
  const style = {
    color: "green",
  }

  return (
    <div style={style}>
      <h4>{props.okMessage}</h4>
    </div>
  );
}

function MyError(props: any) {
  const style = {
    color: "red",
  }

  return (
    <div style={style}>
      <h4>{props.errPrefix}: {props.errMessage}</h4>
    </div>
  );
}