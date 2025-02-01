import GuestLayout from "@/Layouts/GuestLayout";
import { useEffect } from "react";
import {
    Checkbox,
    TextField,
    Button,
    Typography,
    Box,
    FormControlLabel,
    Link as MuiLink,
} from "@mui/material";
import { Head, Link, useForm } from "@inertiajs/react";

export default function LoginJSX({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const applyDemoCredentials = () => {
        setData({
            ...data,
            email: 'jonhdoejonhdoe@gmail.com',
            password: 'FreePassword123'
        });
    };

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route("login"));
    };

    return (
      <GuestLayout>
        <Head title="Log In" />

          {status && (<Typography variant="body2" color="success.main" marginBottom={2} fontWeight="medium">{status}</Typography>)}


          <Box
                sx={{
                    backgroundColor: 'action.hover',
                    borderRadius: 1,
                    p: 2,
                    mb: 3,
                    textAlign: 'center'
                }}
            >
                <Typography variant="body2" gutterBottom>
                    Demo Account Credentials:
                </Typography>
                <Typography variant="caption" component="div">
                    Email: <strong>demo@example.com</strong>
                </Typography>
                <Typography variant="caption" component="div">
                    Password: <strong>demo-password</strong>
                </Typography>
                <Button
                    variant="contained"
                    size="small"
                    onClick={applyDemoCredentials}
                    sx={{ mt: 1 }}
                >
                    Apply Demo Credentials
                </Button>
            </Box>

            <form onSubmit={submit}>
                <TextField label="Email" variant="outlined" fullWidth margin="normal" id="email" type="email" name="email" value={data.email} autoComplete="username" autoFocus onChange={(e) => setData("email", e.target.value)} error={!!errors.email} helperText={errors.email}/>

                <TextField label="Password" variant="outlined" fullWidth margin="normal" id="password" type="password" name="password" value={data.password} autoComplete="current-password" onChange={(e) => setData("password", e.target.value)} error={!!errors.password} helperText={errors.password}/>

                <FormControlLabel
                    control={
                        <Checkbox name="remember" checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                    }
                    label="Remember me"
                />

                <Box display="flex" justifyContent="space-between" alignItems="center" marginTop={2}>
                    {canResetPassword && (
                        <MuiLink component={Link} href={route("password.request")} underline="hover" variant="body2">
                            Forgot your password?
                        </MuiLink>
                    )}

                    <Button type="submit" variant="contained" color="primary" disabled={processing}>
                        Log in
                    </Button>
                </Box>
            </form>
      </GuestLayout>
    );
}





//     return (
//       <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" padding={3}
//         sx={{
//           height: "100vh", // optional, makes the Box cover the entire viewport height
//           backgroundImage: `url("/storage/background.png")`, // set the image URL
//           backgroundSize: "cover", // ensures the image covers the entire Box
//           backgroundPosition: "center", // centers the image
//           backgroundRepeat: "no-repeat", // prevents the image from repeating
//         }}
//       >
//           <Head title="Log in" />

//           {status && (<Typography variant="body2" color="success.main" marginBottom={2} fontWeight="medium">{status}</Typography>)}

//           <Box
//             sx={{
//                 bgcolor: 'background.paper', // change color as needed
//                 borderRadius: 2, // adjusts corner rounding, e.g., '8px' or use numbers (1=4px, 2=8px)
//                 padding: 4, // inner padding for spacing around the form
//                 width: "100%", // set width to cover available space
//                 maxWidth: 400, // limits the box size for smaller screens
//                 boxShadow: 3, // optional, adds a shadow for depth
//             }}
//           >
//             <form onSubmit={submit}>
//                 <TextField label="Email" variant="outlined" fullWidth margin="normal" id="email" type="email" name="email" value={data.email} autoComplete="username" autoFocus onChange={(e) => setData("email", e.target.value)} error={!!errors.email} helperText={errors.email}/>

//                 <TextField label="Password" variant="outlined" fullWidth margin="normal" id="password" type="password" name="password" value={data.password} autoComplete="current-password" onChange={(e) => setData("password", e.target.value)} error={!!errors.password} helperText={errors.password}/>

//                 <FormControlLabel
//                     control={
//                         <Checkbox name="remember" checked={data.remember}
//                             onChange={(e) =>
//                                 setData("remember", e.target.checked)
//                             }
//                         />
//                     }
//                     label="Remember me"
//                 />

//                 <Box display="flex" justifyContent="space-between" alignItems="center" marginTop={2}>
//                     {canResetPassword && (
//                         <MuiLink component={Link} href={route("password.request")} underline="hover" variant="body2">
//                             Forgot your password?
//                         </MuiLink>
//                     )}

//                     <Button type="submit" variant="contained" color="primary" disabled={processing}>
//                         Log in
//                     </Button>
//                 </Box>
//             </form>
//           </Box>
//       </Box>
//     );
// }
