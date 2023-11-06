
export default function TestResultView(props: any) {
    const testResult: TestResult = props.testResult;
    if (!testResult.run) {
        return null;
    } else if (testResult.passed) {
        return <OK />;
    } else {
        return <MyError errMessage={testResult.errMessage} />;
    }

}

export type TestResult = {
    run: boolean,
    passed: boolean,
    errMessage: string,
}

function OK() {
    const style = {
        color: "green",
    }

    return (
        <div style={style}>
            <h4>Your code is correct!</h4>
        </div>
    );
}

function MyError(props: any) {
    const style = {
        color: "red",
    }

    return (
        <div style={style}>
            <h4>Error: {props.errMessage}</h4>
        </div>
    );
}