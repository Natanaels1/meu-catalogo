import { 
    Avatar, 
    Box, 
    IconButton, 
    Typography, 
    // useMediaQuery
} from "@mui/material";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useAuthStore } from "../../stores/auth.store";

export default function DadosAdmin() {

    const { logout } = useAuthStore();
    const nmAdmin = localStorage.getItem('NM_ADMIN_EMPRESA');

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    width: 'auto',
                    gap: 1,
                    alignItems: 'center'
                }}
            >
                <Avatar 
                    variant="rounded"
                    sx={{
                        width: 30,
                        height: 30
                    }}
                />

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography>
                        {nmAdmin}
                    </Typography>

                    <IconButton onClick={() => logout()}>
                        <ExitToAppIcon sx={{ color: "#fff", fontSize: 24 }} />
                    </IconButton>
                    
                </Box>

            </Box>
        </Box>
    )

}