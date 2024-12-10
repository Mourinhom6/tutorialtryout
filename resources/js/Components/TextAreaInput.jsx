// import { forwardRef, useEffect, useRef } from "react";

// export default forwardRef(function TextAreaInput(
//   { className = "", isFocused = false, children, ...props },
//   ref
// ) {
//   const input = ref ? ref : useRef();

//   useEffect(() => {
//     if (isFocused) {
//       input.current.focus();
//     }
//   }, []);

//   return (
//     <textarea
//       {...props}
//       className={
//         "border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm " +
//         className
//       }
//       ref={input}
//     >
//       {children}
//     </textarea>
//   );
// });


import * as React from 'react';
import TextField from '@mui/material/TextField';
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";

export default function TextAreaInput({
  sx = {},
  minRows=1,
  maxRows=10,
  label = '',
  helperText = '',
  value,
  autoFocus=false,
  type="text",
  onChange,
  autocpomplete,
  children,
  ...props
}) {
  return (
    <FormControl sx={{ m: 1, minWidth: 120, ...sx }}>
        <TextField
        sx={{ ...sx, width: '100%' }}
        label={label}
        value={value}
        minRows={minRows}
        maxRows={maxRows}
        autocpomplete={autocpomplete}
        type={type}
        onChange={onChange}
        variant="outlined"
        multiline
        {...props}
        >
            {children}
        </TextField>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}
