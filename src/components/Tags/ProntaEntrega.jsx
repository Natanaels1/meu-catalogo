import { Box, Typography } from "@mui/material";
import LocalMallIcon from '@mui/icons-material/LocalMall';

export function ProntaEntrega() {
    return (
        <Box 
            sx={{ 
                display: 'flex', 
                backgroundColor: '#F2E572', 
                width: 110, 
                px: 0.5, 
                py: 0.5, 
                borderRadius: 2 
            }}
            title="Produto disponivel em estoque"
        >   
            <LocalMallIcon fontSize="10" sx={{ mr: 0.5 }} />
            <Typography fontSize={12}>
                Pronta entrega
            </Typography>
        </Box>
    )
}