import GithubApi from "#infra/ext-api/github/GithubApi";
import AdvancedCodingExerciseInfoAbs from "#infra/info/AdvancedCodingExerciseInfoAbs";
import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Markdown from "../Markdown";

const mdInstructions: string = `
In this exercise, we will use <<Github>> with <<VS Code for Web>>.
Please make sure you are **logged in** to <<Github>> before you start.
`;

export function AdvancedCodingTaskView(props: any) {
  /*
  const csbUrl: string = "https://codesandbox.io/p/sandbox/github/";
  const exerciseInfo: AdvancedCodingExerciseInfoAbs = props.exerciseInfo;
  const repo: string = "yinonby/cif-sandbox";
  const path: string = "/src/exercises/ts/";
  const exerciseName = "booking-system";
  const fullUrl = csbUrl + repo +
    "/tree/" + branch + "?" +
    "file=" + path + exerciseName + "/code/" +
      exerciseInfo.getInitialFilePath() +
      "&initialpath=o/codesandbox/modular/ts/" + exerciseName;
  */
  const [userHasRepo, setUserHasRepo] = useState(false);
  const [githubUsernameInput, setGithubUsernameInput] = React.useState("");
  const [githubUsername, setGithubUsername] = React.useState("");
  const [isFetchFinished, setIsFetchFinished] = React.useState(false);
  const exerciseInfo: AdvancedCodingExerciseInfoAbs = props.exerciseInfo;
  const repo: string = "cif-sandbox";

  useEffect(() => {
    async function fetchMyAPI() {
      if (githubUsername) {
        const githubApi: GithubApi = new GithubApi();
        const exists: boolean =
          await githubApi.doesRepoExist(githubUsername, repo);
        setUserHasRepo(exists);
        setIsFetchFinished(true);
      }
    }

    fetchMyAPI()
  }, [githubUsername])

  const handleSubmit = () => {
    setGithubUsername(githubUsernameInput)
    setGithubUsernameInput("");
    setIsFetchFinished(false);
  }

  return (
    <Box>
      <Markdown md={mdInstructions}/>
      <Box mb={2} sx={{display: "flex"}}>
        <Box sx={{ mr: 1 }}>
          <TextField
            sx={{marginRight: 2}}
            size="small"
            id="github-username"
            label="Your Github Username"
            value={githubUsernameInput}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setGithubUsernameInput(event.target.value);
            }}
          />
        </Box>
        <Button sx={{height: "40px"}} variant="contained"
          size="small" color="primary"
          disabled={!githubUsernameInput}
          onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
      <Box mb={8} sx={{display: "flex"}}>
        <Box sx={{ mr: 1 }}>
          Using Github username:
        </Box>
        <Box sx={{ fontWeight: 'bold' }}>
          {githubUsername}
        </Box>
      </Box>
      {githubUsername && isFetchFinished && ! userHasRepo &&
        CloneRepoInstructions()}
      {githubUsername && isFetchFinished && userHasRepo &&
        ExerciseInstructions(exerciseInfo, githubUsername)}
    </Box>
  )
}

function CloneRepoInstructions() {
  return (
    <Box>
      <Box sx={{ typography: "h6" }}>
        We detected that you haven't cloned the exercises repository. If
        this is a mistake, it might be due to a network error, please
        try again in a minute.
      </Box>
      <Box sx={{ typography: "h6" }}>
        Follow the instructions to clone it into your Github:
      </Box>
    </Box>
  )
}

function ExerciseInstructions(exerciseInfo: AdvancedCodingExerciseInfoAbs,
  githubUsername: string) {
  const repo: string = "cif-sandbox";
  const branch: string = "devel";
  const exerciseName = "booking-system";

  const githubDevUrl: string = "https://github.dev/" + githubUsername +
    "/" + repo + "/tree/" + branch +
    "/src/exercises/ts/" + exerciseName + "/code/";


  const githubSolutionUrl = "https://github.com/yinonby/" + repo + "/tree/" +
    branch + "/src/examples/" + exerciseName;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12}>
        <Link to={githubDevUrl} target="_blank">
          <Button variant="contained" size="small" color="primary">
            Click to open exercise
          </Button>
        </Link>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        Then, implement the files in the following order:
        <Markdown md={exerciseInfo.getFullCodesandboxInstructionsMd()}/>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Link to={githubSolutionUrl} target="_blank">
          <Button variant="contained" size="small" color="primary">
            Solution
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}
