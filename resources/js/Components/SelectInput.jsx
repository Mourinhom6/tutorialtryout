// import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
// import { forwardRef, useRef } from "react";

// export default forwardRef(function SelectInput({ className = "", children, ...props },ref) {
//   const input = ref ? ref : useRef();
//   return (
//     <select
//       {...props}
//       className={
//         "border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm " +
//         className
//       }
//       ref={input}
//     >
//       {children}
//     </select>
//   );
// });





// import * as React from 'react';
// import { forwardRef, useRef } from "react";
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';

// export default function SelectLabels({ sx = "", children, ...props },ref) {
//   const [age, setAge] = React.useState('');
//   const input = ref ? ref : useRef();

//   return (
//     <div>
//         <FormControl sx={{ m: 1, minWidth: 120 }}>
//             <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
//             <Select
//                 {...props}
//                 sx={{
//                 width: "100%",
//                 ...sx,
//                 }}
//                 ref={input}
//             >
//             {children}

//             </Select>
//             <FormHelperText>With label + helper text</FormHelperText>
//         </FormControl>
//     </div>
//   );
// }

// import * as React from "react";
// import { useRef, forwardRef } from "react";
// import InputLabel from "@mui/material/InputLabel";
// import FormHelperText from "@mui/material/FormHelperText";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";

// export default function SelectInput({ sx = {}, children, label, helperText = "", ...props },) {  // ref
// //   const input = ref || useRef();

//   return (
//     <FormControl sx={{ m: 1, minWidth: 120, ...sx }}>
//       <InputLabel>{label}</InputLabel>
//       <Select {...props} ref={input}>
//         {children}
//       </Select>
//       {helperText && <FormHelperText>{helperText}</FormHelperText>}
//     </FormControl>
//   );
// }

import React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectInput({
  sx = {},
  children,
  label = "",
  helperText = "",
  value,
  onChange,
  ...props
}) {
  return (
    <FormControl sx={{ m: 1, minWidth: 120, ...sx }}>
      {label && <InputLabel>{label}</InputLabel>}
      <Select
        {...props}
        value={value}
        onChange={onChange}
        displayEmpty={!label} // Show placeholder when no label is provided
      >
        {children}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}

