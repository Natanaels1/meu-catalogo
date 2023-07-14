import { AppBar, Badge, Box, Container, IconButton, InputBase, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircle from '@mui/icons-material/AccountCircle';
import useMediaQuery from '@mui/material/useMediaQuery';

import iconLogo from '../../assets/bolsa-de-compras.png';
import { useNavigate } from 'react-router-dom';

function NavBar() {

    const matches = useMediaQuery('(max-width:600px)');
    const navigate = useNavigate();

    return (
        <AppBar 
            position="fixed" 
            sx={{ 
                bgcolor: '#47A9E0' 
            }}
        > 
            <Toolbar>
                <Container 
                    maxWidth={!matches && "lg" }
                    sx={{ 
                        display: 'flex', 
                        flexDirection: 'row', 
                        justifyContent: 'space-between', 
                        flexWrap: 'wrap', 
                        alignItems: 'center', 
                        padding: 1
                    }}
                >

                    <Box 
                        sx={{ 
                            display: 'flex', 
                            alignItems: 'center',
                            cursor: 'pointer'
                        }} 
                        width={ matches ? '100%' : 'auto'}
                        onClick={() => navigate('/')}
                    >
                    
                        <img src={iconLogo} style={{ width: 30, marginRight: 10 }} />
                        <Typography variant="h6" color="inherit" noWrap>
                            Meu Catálogo
                        </Typography>

                    </Box>

                    <Box 
                        sx={{ 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            alignItems: 'center'
                        }} 
                        width={ matches ? '100%' : '50%'}
                    >
                        
                        <InputBase
                            sx={{ 
                                flex: 1, 
                                bgcolor: '#F3F3F3', 
                                borderRadius: 2, 
                                padding: 1, 
                                fontSize: '16px', 
                                height: '30px', 
                                width: 'auto', 
                                mr: 1, 
                                fontWeight: 'bold' 
                            }}
                            placeholder="O que deseja?"
                        />

                        <IconButton 
                            size="large" 
                            color="inherit"
                            title="Carrinho"
                            onClick={() => navigate('/carrinho')}
                        >
                            <Badge badgeContent={4} color="error">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>

                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="primary-search-account-menu"
                            aria-haspopup="true"
                            color="inherit"
                            title="Conta admin"
                        >
                            <AccountCircle />
                        </IconButton>

                    </Box>

                </Container>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;