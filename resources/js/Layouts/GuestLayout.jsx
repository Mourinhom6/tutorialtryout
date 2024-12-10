import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from '@inertiajs/react';
import { Box, Container, CssBaseline } from '@mui/material';

export default function Guest({ children }) {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                pt: 6,
                backgroundColor: '#032b42'
                // backgroundColor: (theme) => theme.palette.background.default,
            }}
        >
            <Container maxWidth="xs">
                <Box display="flex" justifyContent="center" mb={3}>
                    <Link href="/">
                        <ApplicationLogo className="w-20 h-20 fill-current" />
                    </Link>
                </Box>

                <Box
                    sx={{
                        mt: 6,
                        p: 4,
                        backgroundColor: 'white',
                        borderRadius: 2,
                        boxShadow: 3,
                    }}
                >
                    {children}
                </Box>
            </Container>
        </Box>
    );
}
