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

const forkInstructionsMd: string = `
- Then, on the top right, click on <<Fork>>.
- Keep the repository name as <<cif-sandbox>>. Description is optional.
- Make sure you uncheck the box saying <<"Copy the main branch only">>!!
- Finally, click on <<Create Fork>> at the bottom.
`;

const syncForkInstructionsMd: string = `
Then, under the green <<Code>> button, click on <<Sync Fork>>, if available.
`;

const exerciseInstructionsMd: string = `
Then, implement the files in the order below. To navigate to a file,
click on the <<Explorer>> button on the right part of <<VS Code for Web>>
(the button with 2 rectangles), and click on the file you wish to edit.

Make sure you commit and push your changes from time to time,
so they are not lost. To commit and push, click on the <<Source Control>>
button on the right part of <<VS Code for Web>> (the one that
has 3 small circles and 2 lines) - if you have uncommitted changes, this button
will have a a blue circle badge indicator with a number indicating
the number of files with changes.
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
      <Box pb={2} mb={2} sx={{borderBottom: 1}}>
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
        <Box sx={{display: "flex"}}>
          <Box sx={{ mr: 1 }}>
            Using Github username:
          </Box>
          <Box sx={{ fontWeight: 'bold' }}>
            {githubUsername}
          </Box>
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
  const repo: string = "cif-sandbox";
  const branch: string = "devel";
  const githubExerciseRepoUrl: string = "https://github.com/yinonby" +
    "/" + repo + "/tree/" + branch;

  return (
    <Box>
      <Box sx={{ typography: "h6" }}>
        We detected that you haven't forked the exercise repository. If
        this is a mistake, it might be due to a network error, please
        try again in a minute.
      </Box>
      <Box sx={{ typography: "h6" }} mb={2}>
        Follow the instructions to fork it into your Github:
      </Box>
      <Box>
        <Link to={githubExerciseRepoUrl} target="_blank">
          <Button variant="contained" size="small" color="primary">
            First, click to open the source repository
          </Button>
        </Link>
        <Markdown md={forkInstructionsMd} />
      </Box>
    </Box>
  )
}

function ExerciseInstructions(exerciseInfo: AdvancedCodingExerciseInfoAbs,
  githubUsername: string) {
  const repo: string = "cif-sandbox";
  const branch: string = "devel";
  const exerciseName = "booking-system";
  const githubUserRepoUrl: string = "https://github.com/" + githubUsername +
    "/" + repo + "/tree/" + branch;
  const githubDevUrl: string = "https://github.dev/" + githubUsername +
    "/" + repo + "/tree/" + branch +
    "/src/exercises/ts/" + exerciseName + "/code/";


  const githubSolutionUrl = "https://github.com/yinonby/" + repo + "/tree/" +
    branch + "/src/examples/" + exerciseName;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12}>
        <Box pb={2} mb={2} sx={{borderBottom: 1}}>
          <Box mb={1} sx={{typography: "h6"}}>
            Sync your forked repository if necessary
          </Box>
          <Box mb={1}>
            Before you begin, make sure you pull the latest version of the
            exercise repository.
          </Box>
          <Box mb={1}>
            <Link to={githubUserRepoUrl} target="_blank">
              <Button variant="contained" size="small" color="primary">
                Click to open your forked repository
              </Button>
            </Link>
          </Box>
          <Box>
            <Markdown md={syncForkInstructionsMd} />
          </Box>
        </Box>

        <Box mb={4}>
          <Box mb={1} sx={{typography: "h6"}}>
            Exercise
          </Box>
          <Box mb={1}>
            <Link to={githubDevUrl} target="_blank">
              <Button variant="contained" size="small" color="primary">
                Click to open exercise
              </Button>
            </Link>
          </Box>
          <Markdown md={exerciseInstructionsMd} />
          <Markdown md={exerciseInfo.getFullCodesandboxInstructionsMd()}/>

          <Link to={githubSolutionUrl} target="_blank">
            <Button variant="contained" size="small" color="primary">
              Solution
            </Button>
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
}
