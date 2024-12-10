import { Link } from "@inertiajs/react";
import NativeSelectInput from "@mui/material/NativeSelect/NativeSelectInput";

export default function Layout({ children }) {
    return (
        <>
            <header>
                <nav>
                    <Link className="nav-link" href="/">Home</Link>
                    <Link className="nav-link" href="/posts/create">Create</Link>
                </nav>
            </header>

            <main>{children}</main>
        </>
    );
}
