import React from "react";
import {
  IconButton,
  createTheme,
  ThemeProvider,
  Button,
  TextField,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  styled, 
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import DeleteIcon from "@mui/icons-material/Delete";
// import TextareaAutosize from "@mui/material/TextareaAutosize";

const theme = createTheme({
  palette: {
    primary: {
      light: "#fad2a4",
      main: "#f28e1c",
      dark: "#61390b",
      contrastText: "#fff",
    },
  },
});

const StyledInput = styled(TextField)`
  font-size:0.8rem;
  flex-grow:1;
  min-width:0;
  & .MuiOutlinedInput-notchedOutline {
    border-color: #fad2a4;
  }
  &:hover {
    & .MuiOutlinedInput-notchedOutline {
      border-color: #fad2a4 !important;
    }
  }

  & .Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #f28e1c !important;
  }
`;

const StyledSelect = styled(Select)`
  & .MuiOutlinedInput-notchedOutline {
    border-color: #fad2a4;
  }

  &:hover .MuiOutlinedInput-notchedOutline {
    border-color: #fad2a4 !important;
  }

  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #f28e1c !important;
  }
`;

const ColoredInputLabel = styled(InputLabel)`
  color: white !important;
`;

export function AddButton({ onClick } : { onClick: () => void }) {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" onClick={onClick}>
        ADD
      </Button>
    </ThemeProvider>
  );
}
export function InputField({ value, onChange, label, sx={}  }: {
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

export function SelectAutoWidth({
  value,
  onChange,
}: {
  value: string;
  onChange: (event: SelectChangeEvent<unknown>) => void
}) {
  return (
      <FormControl sx={{ m: 1, width:'97%'}}>
        <ColoredInputLabel id="demo-simple-select-autowidth-label">
          Ingredient name ...
        </ColoredInputLabel>
        <StyledSelect
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={value}
          onChange={(event) => onChange(event)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
        </StyledSelect>
      </FormControl>
  );
}

export function DeleteButton({ onClick }: { onClick: () => void }) {
  return (
    <IconButton aria-label="delete" color="primary" onClick={onClick} sx={{ p: 0, ml: "8px", mt:"5px" }}>
      <DeleteIcon />
    </IconButton>
  );
}

export function UnitSelect({ onChange, value, sx = {} }: {
  onChange: (event: SelectChangeEvent<unknown>) => void;
  value: string;
  sx?:object
}) {
  return (
      <FormControl sx={{ flex: "1 1 30%", minWidth: "50px" }}>
        <ColoredInputLabel id="demo-simple-select-label">
          Unit
        </ColoredInputLabel>
        <StyledSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Unit"
          onChange={(event) => onChange(event)}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 200,
              },
            },
          }}
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value="grams">Grams (g)</MenuItem>
          <MenuItem value="kilograms">Kilograms (kg)</MenuItem>
        </StyledSelect>
      </FormControl>
  );
}

// export function TextArea({ placeholder, value, onChange, className }) {
//   return (
//     <TextareaAutosize
//       className={className}
//       placeholder={placeholder}
//       aria-label={placeholder}
//       value={value}
//       onChange={onChange}
//       minRows={8}
//       maxRows={8}
//       style={{
//         overflowY: "auto",
//         background: "inherit",
//         color: "##fff",
//         border: "1px solid #fad2a4",
//         fontSize: "1.2rem",
//         width: "40ch",
//       }}
//     />
//   );
// }
