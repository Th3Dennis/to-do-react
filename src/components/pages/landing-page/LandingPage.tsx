import {
  Container,
} from "@mui/material";
import TaskService from "../../../request/TaskService";

export default function LandingPage() {

  return (
    <>
      <Container maxWidth="md">
        <TaskService></TaskService>
      </Container>
    </>
  );
}
