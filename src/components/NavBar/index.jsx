import { useEffect, useState } from "react";

import { 
    AppBar, 
    Badge, 
    Box, 
    Container, 
    IconButton, 
    InputBase, 
    List, 
    ListItem, 
    Toolbar, 
    Typography 
} from "@mui/material";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import iconLogo from '../../assets/bolsa-de-compras.png';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from 'react-router-dom';
import { useStoreCarrinho } from "../../stores/carrinho.store";
import { useStoreProdutosDisponiveis } from "../../stores/produtosDisponiveis.store";

function NavBar() {

    const matches = useMediaQuery('(max-width:600px)');
    const navigate = useNavigate();

    const {
        Carrinho
	} = useStoreCarrinho(state => state);

    const {
        searchProdutos,
        ProdutosSearch
    } = useStoreProdutosDisponiveis();

    const [ busca, setBusca ] = useState("");

    useEffect(() => {
        setBusca("");
    }, []);

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
                            alignItems: 'center',
                            boxSizing: 'border-box'
                        }} 
                        width={ matches ? '100%' : '50%'}
                    >
                        
                        <Box
                            sx={{ 
                                minWidth: '90%',
                                flexDirection: 'column',
                            }}
                            
                        >
                            <InputBase
                                sx={{ 
                                    flex: 1, 
                                    bgcolor: '#F3F3F3', 
                                    borderRadius: 2, 
                                    padding: 1, 
                                    fontSize: '16px', 
                                    height: '30px', 
                                    width: '100%', 
                                    mr: 1, 
                                    fontWeight: 'regular' 
                                }}
                                placeholder="O que deseja?"
                                value={busca}
                                onChange={(e) => {
                                    searchProdutos(e.target.value);
                                    setBusca(e.target.value);
                                }}
                                onBlur={() => {
                                    const listaSearch = document.getElementById('listBuscaProduto');

                                    setTimeout(() => {
                                        listaSearch.style = 'display: none';
                                    }, 200);
                                }}
                                onFocus={() => {
                                    const listaSearch = document.getElementById('listBuscaProduto');

                                    if(listaSearch) {
                                        listaSearch.style = 'display: ';
                                    }
                                }}
                            />

                            {
                                busca &&
                                <List 
                                    id="listBuscaProduto"
                                    sx={{  
                                        bgcolor: 'background.paper', 
                                        position: 'absolute', 
                                        maxWidth: !matches ? 517 : 308,
                                        width: '100%',
                                        mt: 1
                                    }}
                                >

                                    <ListItem 
                                        onClick={() => navigate('/resultado-busca/' + busca)} 
                                        sx={{ 
                                            cursor: 'pointer', 
                                            '&:hover': { bgcolor: '#f3f3f3' } 
                                        }}
                                    >
                                        <Typography variant="p" color="primary">{busca}</Typography>
                                    </ListItem>
                                    
                                    {
                                        ProdutosSearch.length > 0 &&
                                        ProdutosSearch.map((resultado, index) => {

                                            if(index <= 10) {

                                                return (
                                                    <ListItem 
                                                        key={resultado.id} 
                                                        onClick={() => navigate('/produto/' + resultado.id)} 
                                                        sx={{ 
                                                            cursor: 'pointer', 
                                                            '&:hover': { bgcolor: '#f3f3f3' } 
                                                        }}
                                                    >
                                                        <Typography variant="p" color="primary">{resultado.nmProduto}</Typography>
                                                    </ListItem>
                                                )

                                            }
                                        })
                                    }

                                </List>
                            }
                        </Box>

                        <IconButton 
                            size="large" 
                            color="inherit"
                            title="Carrinho"
                            onClick={() => navigate('/carrinho')}
                        >
                            <Badge badgeContent={Carrinho.length} color="error">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>

                    </Box>

                </Container>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;