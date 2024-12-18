import { Link } from "@inertiajs/react";
import NativeSelectInput from "@mui/material/NativeSelect/NativeSelectInput";
import AppAppBar from '@/Components/Client/AppAppBar';
import Footer from '@/Components/Client/Footer';
// import AppTheme from '@/Components/AppTheme';

export default function ClientLayout({ children }) {
    return (
        <>
            <AppAppBar />
                    <main>{children}</main>
            <Footer />
        </>
    );
}
