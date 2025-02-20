import { MenuItem, FormControl} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select"
import { ColoredInputLabel, StyledSelect } from "./styledComponents";

function UnitSelect({ onChange, value, sx = {} }: {
  onChange: (event: SelectChangeEvent<unknown>) => void;
  value: string;
  sx?:object
}) {
  return (
      <FormControl sx={{ flex: "1 1 30%", minWidth: "50px", padding:'5px' }}>
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

export default UnitSelect