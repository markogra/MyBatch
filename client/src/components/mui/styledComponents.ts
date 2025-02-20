import { TextField, Select, InputLabel, styled } from "@mui/material";

export const StyledInput = styled(TextField)`
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

export const StyledSelect = styled(Select)`
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

export const ColoredInputLabel = styled(InputLabel)`
  color: white !important;
`;