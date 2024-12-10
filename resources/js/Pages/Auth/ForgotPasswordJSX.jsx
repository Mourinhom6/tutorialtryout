import GuestLayout from "@/Layouts/GuestLayout";
import { TextField, Typography, Button, Alert, Box } from "@mui/material";
import { Head, useForm } from "@inertiajs/react";
import { palette } from "@mui/system";

export default function ForgotPasswordJSX({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            <Typography variant="body2" color="text.primary" sx={{ mb: 4 }}>
                Clique no Botão abaixo para proceder ao reiniciar da sua senha
            </Typography>

            {status && (
                <Alert severity="success" sx={{ mb: 4 }}>
                    {status}
                </Alert>
            )}

            <Box component="form" onSubmit={submit} noValidate sx={{ mt: 1 }}>
                <TextField
                    id="email"
                    type="email"
                    name="email"
                    label="Email Address"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    fullWidth
                    margin="normal"
                    autoFocus
                    error={!!errors.email}
                    helperText={errors.email}
                />

                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={processing}
                    >
                        Email Password Reset Link
                    </Button>
                </Box>
            </Box>
        </GuestLayout>
    );
}
