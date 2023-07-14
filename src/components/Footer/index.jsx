import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import iconInsta from '../../assets/instagram.png';
import iconFace from '../../assets/facebook.png';
import iconWpp from '../../assets/whatsapp.png';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Njs © '}
            <b>{new Date().getFullYear()}</b>
            {'.'}
        </Typography>
    );
}

export default function Footer() {
    return (
        <Box sx={{ bgcolor: '#F3F3F3', p: 6 }} component="footer">

                <Typography variant="h6" align="center" gutterBottom>
                    Contatos
                </Typography>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 2
                }}>
                    <Link>
                        <img src={iconInsta} style={{ width: 30 }} />
                    </Link>
                    <Link>
                        <img src={iconFace}  style={{ width: 30 }} />
                    </Link>
                    <Link>
                        <img src={iconWpp}  style={{ width: 30 }} />
                    </Link>
                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 2
                }}>
                    <Link>
                        <Typography
                            variant="subtitle1"
                            align="center"
                            color="text.secondary"
                            component="p"
                        >
                            Termos de uso
                        </Typography>
                    </Link>
                    <Link>
                        <Typography
                            variant="subtitle1"
                            align="center"
                            color="text.secondary"
                            component="p"
                        >
                            Política de Privacidade
                        </Typography>
                    </Link>
                </Box>


                <Copyright />
        </Box>
    )
}