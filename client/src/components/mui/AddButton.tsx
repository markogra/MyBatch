import { ThemeProvider, Button } from "@mui/material";
import theme from "./theme";

function AddButton({ onClick } : { onClick: () => void }) {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" onClick={onClick}>
        ADD
      </Button>
    </ThemeProvider>
  );
}

export default AddButton;

