import { useState } from "react";

import { Box, Button,  Container, Grid, Snackbar, TextField, Typography, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

import iconLogo from '../../assets/bolsa-de-compras.png';
import { useAuthStore } from "../../stores/auth.store";

export default function Login() {

    const { 
        login,
        loading
    } = useAuthStore();

    const matches = useMediaQuery('(max-width:600px)');
    const navigate = useNavigate();

    const [notif, setNotif] = useState({
        open: false,
        mensagem: ""
    });

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    function handleLogin() {

        if(!email) {
            setNotif({
                open: true,
                mensagem: 'Preencha o e-mail'
            });
            return;
        }

        if(!password) {
            setNotif({
                open: true,
                mensagem: 'Preencha a senha'
            });
            return;
        }

        login(email, password);

    }

    return (
        <Container 
            component="main" 
            maxWidth="xs"
        >

            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
                open={notif.open}
                onClose={() => setNotif({
                    open: false,
                    mensagem: ''
                })}
                message={notif.mensagem}
                key={notif.mensagem + '1'}
                autoHideDuration={2000}
            />  

            <Box
                sx={{
                    marginTop: 16,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box 
                    sx={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        cursor: 'pointer',
                        bgcolor: '#fff',
                        padding: 2,
                        borderRadius: 2,
                        justifyContent: 'center',
                        mb: 4
                    }} 
                    width={ matches ? '100%' : 'auto'}
                    onClick={() => navigate('/')}
                >
                
                    <img src={iconLogo} style={{ width: 40, marginRight: 10 }} />
                    <Typography variant={ matches ? 'h5' : 'h4' } color="inherit" noWrap fontWeight="bold">
                        Meu Catálogo
                    </Typography>

                </Box>
                <Typography component="h1" variant="h5">
                    Área do administrador
                </Typography>
                <Box component="form" onSubmit={null} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="E-mail"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={ e => setEmail(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Senha"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={ e => setPassword(e.target.value)}
                    />

                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, bgcolor: '#47A9E0' }}
                        disabled={loading}
                        onClick={() => handleLogin()}
                    >
                        Entrar
                    </Button>
                    <Grid container>
                        {/* <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid> */}
                    </Grid>
                </Box>
            </Box>

        </Container>
    )

}