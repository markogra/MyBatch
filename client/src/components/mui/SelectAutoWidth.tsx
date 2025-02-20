import {
  MenuItem,
  FormControl,
} from "@mui/material";

import { SelectChangeEvent } from "@mui/material/Select"
import {StyledSelect, ColoredInputLabel} from './styledComponents'

function SelectAutoWidth({
  value,
  onChange,
  children
}: {
  value: string;
  onChange: (event: SelectChangeEvent<unknown>) => void
  children:React.ReactNode
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
          {children}
        </StyledSelect>
      </FormControl>
  );
}

export default SelectAutoWidth