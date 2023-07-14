import Routes from "./Routers";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export default function App() {

    const defaultTheme = createTheme();

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Routes />
        </ThemeProvider>
    )
}
