// import React from "react";
// import {
//   IconButton,
//   createTheme,
//   ThemeProvider,
//   Button,
//   TextField,
//   Box,
//   InputLabel,
//   MenuItem,
//   FormControl,
//   Select,
//   styled,
// } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import TextareaAutosize from "@mui/material/TextareaAutosize";

// const theme = createTheme({
//   palette: {
//     primary: {
//       light: "#fad2a4",
//       main: "#f28e1c",
//       dark: "#61390b",
//       contrastText: "#fff",
//     },
//   },
// });

// const StyledInput = styled(TextField)`
//   width: 100%;
//   & .MuiOutlinedInput-notchedOutline {
//     border-color: #fad2a4;
//   }
//   &:hover {
//     & .MuiOutlinedInput-notchedOutline {
//       border-color: #fad2a4 !important;
//     }
//   }

//   & .Mui-focused .MuiOutlinedInput-notchedOutline {
//     border-color: #f28e1c !important;
//   }
// `;

// const StyledSelect = styled(Select)`
//   & .MuiOutlinedInput-notchedOutline {
//     border-color: #fad2a4;
//   }

//   &:hover .MuiOutlinedInput-notchedOutline {
//     border-color: #fad2a4 !important;
//   }

//   &.Mui-focused .MuiOutlinedInput-notchedOutline {
//     border-color: #f28e1c !important;
//   }
// `;

// const ColoredInputLabel = styled(InputLabel)`
//   color: white !important;
// `;

// export function AddButton({ onClick }) {
//   return (
//     <ThemeProvider theme={theme}>
//       <Button variant="contained" onClick={onClick}>
//         ADD
//       </Button>
//     </ThemeProvider>
//   );
// }
// export function InputField({ value, onChange, label, width }) {
//   return (
//     <Box
//       component="form"
//       sx={{
//         "& > :not(style)": { m: 1, width: { width } },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <StyledInput
//         id="outlined-basic"
//         label={label}
//         variant="outlined"
//         value={value}
//         onChange={onChange}
//         InputLabelProps={{ className: "textfield__label" }}
//         InputProps={{
//           style: {
//             color: "white",
//           },
//         }}
//       />
//     </Box>
//   );
// }

// export function SelectAutoWidth({
//   value,
//   onChange,
//   type,
//   allMalts,
//   allHops,
//   allYeast,
// }) {
//   const ingName = type[0].toUpperCase() + type.slice(1);
//   return (
//     <div>
//       <FormControl sx={{ m: 1, minWidth: 80 }}>
//         <ColoredInputLabel id="demo-simple-select-autowidth-label">
//           {ingName}
//         </ColoredInputLabel>
//         <StyledSelect
//           labelId="demo-simple-select-autowidth-label"
//           id="demo-simple-select-autowidth"
//           value={value}
//           onChange={onChange}
//           autoWidth
//           label={type}
//         >
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
//           {type === "malt"
//             ? allMalts?.map((option) => (
//                 <MenuItem key={option} value={option}>
//                   {option}
//                 </MenuItem>
//               ))
//             : type === "hops"
//             ? allHops?.map((option) => (
//                 <MenuItem key={option} value={option}>
//                   {option}
//                 </MenuItem>
//               ))
//             : type === "yeast"
//             ? allYeast?.map((option) => (
//                 <MenuItem key={option} value={option}>
//                   {option}
//                 </MenuItem>
//               ))
//             : // Handle other cases if needed
//               null}
//         </StyledSelect>
//       </FormControl>
//     </div>
//   );
// }

// export function DeleteButton({ onClick }) {
//   return (
//     <IconButton aria-label="delete" color="primary" onClick={onClick}>
//       <DeleteIcon />
//     </IconButton>
//   );
// }

// export function UnitSelect({ onChange, value }) {
//   return (
//     <Box sx={{ width: 140 }}>
//       <FormControl fullWidth>
//         <ColoredInputLabel id="demo-simple-select-label">
//           Unit
//         </ColoredInputLabel>
//         <StyledSelect
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={value}
//           label="Unit"
//           onChange={onChange}
//           MenuProps={{
//             PaperProps: {
//               style: {
//                 maxHeight: 200,
//               },
//             },
//           }}
//         >
//           <MenuItem value="">None</MenuItem>
//           <MenuItem value="grams">Grams (g)</MenuItem>
//           <MenuItem value="kilograms">Kilograms (kg)</MenuItem>
//         </StyledSelect>
//       </FormControl>
//     </Box>
//   );
// }

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
