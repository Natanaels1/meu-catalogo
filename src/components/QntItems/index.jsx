import { Box, IconButton, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function QtdItems() {

    let qntd = 1;

    return (
        <Box 
            sx={{
                border: '1px solid #ccc',
                display: 'flex',
                justifyContent: 'space-between',
                borderRadius: 2,
                alignItems: 'center',
            }}
        >
            <IconButton>
                <RemoveIcon sx={{ fontSize: 14 }} />
            </IconButton>
            
            <Typography variant="span" sx={{ color: '#47A9E0' }}>
                {qntd}
            </Typography>

            <IconButton>
                <AddIcon sx={{ fontSize: 14 }} />
            </IconButton>
        </Box>
    )

}