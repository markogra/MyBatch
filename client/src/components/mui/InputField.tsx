import { Box } from "@mui/material";
import { StyledInput } from "./styledComponents";

function InputField({ value, onChange, label, sx={}  }: {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  sx?:object
}) {
  return (
    <Box
      component="form"
      sx={{ m: 1, minWidth: 0, ...sx }} 
      noValidate
      autoComplete="off"
    >
      <StyledInput
        id="outlined-basic"
        label={label}
        variant="outlined"
        value={value}
        onChange={onChange}
        InputLabelProps={{ className: "textfield__label" }}
        InputProps={{
          style: { color: "white"},
        }}
        sx={{width:"100%"}}
      />
    </Box>
  );
}

export default InputField;