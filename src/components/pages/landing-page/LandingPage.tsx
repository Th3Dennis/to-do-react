import {
  Container,
} from "@mui/material";
import AddTask from "../../organisms/AddTask";

export default function LandingPage() {

  return (
    <>
      <Container maxWidth="md">
        <h1>Landing Page</h1>
        <AddTask addFunction={() => {}}></AddTask>
      </Container>
    </>
  );
}
