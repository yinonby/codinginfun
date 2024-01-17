import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import CodeSandboxIFrame from "../CodeSandboxIFrame";
import SolutionButton from "../SolutionButton";

export function CodesandboxTaskView(props: any) {
  const codesandboxContainerStyle = {
    borderRight: "1px solid black",
    borderRadius: "4px",
    flex: 1,
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12}>
        <Box sx={{ display: "flex", flexDirection: "column", height: "60vh" }}>
          <Box sx={codesandboxContainerStyle} mb={2}>
            <CodeSandboxIFrame />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <SolutionButton />
      </Grid>
    </Grid>
  );

}
