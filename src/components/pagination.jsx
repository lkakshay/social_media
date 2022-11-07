import { Button, Stack } from "@mui/material";
import { Container } from "@mui/system";

export const Pagination = ({load}) => {
  return (
    <Container disableGutters maxWidth="md">
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Button size="medium" color="success" variant="contained"
        onClick={load}>
          load more
        </Button>
      </Stack>
    </Container>
  );
};
