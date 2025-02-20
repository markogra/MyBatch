import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function DeleteButton({ onClick }: { onClick: () => void }) {
  return (
    <IconButton aria-label="delete" color="primary" onClick={onClick} sx={{ p: 0, ml: "8px", mt:"5px" }}>
      <DeleteIcon />
    </IconButton>
  );
}

export default DeleteButton