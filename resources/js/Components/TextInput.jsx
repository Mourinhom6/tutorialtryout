// import { forwardRef, useEffect, useRef } from 'react';

// export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
//     const input = ref ? ref : useRef();

//     useEffect(() => {
//         if (isFocused) {
//             input.current.focus();
//         }
//     }, []);

//     return (
//         <input
//             {...props}
//             type={type}
//             className={
//                 'border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm ' +
//                 className
//             }
//             ref={input}
//         />
//     );
// });


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// export default function FormPropsTextFields({
//     sx = {},
//     children,
//     label = "",
//     helperText = "",
//     value,
//     defaultValue,
//     onBlur,
//     onKeyPress,
//     ...props
// }) {
//   return (
//     <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }} noValidate autoComplete="off">
//       <div>
//         <TextField id="outlined-search" label="Search field" type="search" />
//       </div>
//     </Box>
//   );
// }


import * as React from 'react';
import TextField from '@mui/material/TextField';
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";

export default function TextInput({
  sx = {},
  label = '',
  helperText = '',
  value,
  defaultValue,
  onBlur,
  autoFocus=false,
  onKeyDown,
  type,
  onChange,
  autocpomplete,
  ...props
}) {
  return (
    <FormControl sx={{ m: 1, minWidth: 120, ...sx }}>
        <TextField
        sx={{ ...sx, width: '100%' }}
        label={label}
        value={value}
        defaultValue={defaultValue}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        autocpomplete={autocpomplete}
        type={type}
        onChange={onChange}
        variant="outlined"
        {...props}
        />
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}
