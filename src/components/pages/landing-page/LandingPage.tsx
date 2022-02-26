import {
  Container,
  Fab,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TaskService from "../../../request/TaskService";

export default function LandingPage() {

TaskService.getAllTasks().then((data) => {console.log(data)})
  return (
    <>
      <Container maxWidth="md">
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <Grid container spacing={1} alignItems="center" justifyContent="center" marginY={2}>
            <Grid item xs={"auto"}>
              <TextField
                id="standard-basic"
                label="Standard"
                variant="standard"
              />
              <Fab color="primary" size="medium" aria-label="add">
                <AddIcon />
              </Fab>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}
