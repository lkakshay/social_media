import { Container } from "@mui/system";
import { Bio } from "./bio";
import { Route, Routes } from "react-router-dom";

export const RightBar = () => {
  return (
    <Container disableGutters>
      <Routes>
        <Route path="/profile/:username" element={<Bio />} />
      </Routes>
    </Container>
  );
};
