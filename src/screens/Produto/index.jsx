import { useEffect, useState } from "react";
import { useStoreCarrinho } from "../../stores/carrinho.store";
import { useParams } from 'react-router-dom';
import './style.css';

import {
    Typography,
    FormControl,
    MenuItem,
    Select,
    InputLabel,
    TextField,
    Button,
    Container,
    Box
} from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

import { Carousel } from 'react-responsive-carousel';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

import Snackbar from '@mui/material/Snackbar';
import { produtos } from "../../services/dbProdutos";

export default function PageProduto() {

    const matches = useMediaQuery('(max-width:600px)');

    const { idProduto } = useParams();

    const {
        Carrinho,
        addProdutoCarrinho
    } = useStoreCarrinho(state => state);

    const [dadosProduto, setDadosProduto] = useState(produtos.find((produto) => produto.id === Number(idProduto)));

    const [qntd, setQntd] = useState(1);
    const [vlAtualProduto, setVlAtualProduto] = useState(dadosProduto.vlProduto);
    const [descricao, setDescricao] = useState("");

    const [notif, setNotif] = useState({
        open: false,
        mensagem: ""
    });

    function addProCarrinho() {

        const produtoFinal = {...dadosProduto};

        const idProduto = produtoFinal.id;

        produtoFinal.qntd = qntd;
        produtoFinal.vlDaUnidade = produtoFinal.vlProduto;
        produtoFinal.vlProduto = vlAtualProduto;
        produtoFinal.personalizacaoCliente = descricao;

        if (produtoJaExisteNoCarrinho(Carrinho, idProduto)) {

            setNotif({
                open: true,
                mensagem: 'Produto já existe no carrinho'
            });

            return;
        }

        addProdutoCarrinho(produtoFinal);

        setNotif({
            open: true,
            mensagem: 'Adicionado ao carrinho'
        });

        resetCamposProduto();

    }

    function produtoJaExisteNoCarrinho(array, idProdutoProcurado) {

        for (const produto of array) {
            if (produto.id === idProdutoProcurado) {
                return true;
            }
        }

        return false;
    }

    function resetCamposProduto() {
        setQntd(1);
        setDescricao("");
        setVlAtualProduto(dadosProduto.vlProduto);
    }

    function atualizaVlProduto() {
        
        const somaValores = dadosProduto.vlProduto * qntd;

        setVlAtualProduto(parseFloat(somaValores.toFixed(2)));

    }

    useEffect(() => {
        atualizaVlProduto();
    }, [qntd]);

    useEffect(() => {
        setDadosProduto(produtos.find((produto) => produto.id === Number(idProduto)));
    }, [idProduto])

    useEffect(() => {
        setQntd(1)
        setVlAtualProduto(dadosProduto.vlProduto);
    }, [dadosProduto])

    return (

        <Box sx={{ mt: 12 }}>

            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
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

            <NavBar />

            {
                dadosProduto ?
                    <main style={{ minHeight: '100vh' }}>

                        <Container
                            sx={{ display: "flex", width: '100%', height: '100%', gap: 2, mb: 2, mt: 15, flexDirection: matches ? 'column' : 'row' }}
                            maxWidth={!matches && "lg"}
                        >

                            <Box sx={{ width: matches ? '100%' : '65%', height: !matches ? 650 : 400, overflow: 'inherit', borderRadius: 2 }}>
                                <Carousel
                                    showThumbs={true}
                                    showIndicators={true}
                                    showStatus={false}
                                    showArrows={true}
                                    transitionTime={500}
                                >
                                    {
                                        dadosProduto.imgsProduto.map(img => (
                                            <Box key={img} sx={{ width: '100%' }} className="image-with-zoom">
                                                <img 
                                                    src={img}
                                                    style={{ width: '60%' }} 
                                                />
                                            </Box>
                                        ))
                                    }
                                </Carousel>
                            </Box>

                            <Box sx={{ width: matches ? '100%' : '35%', minHeight: 450, height: 'auto', backgroundColor: '#f3f3f3', borderRadius: 2, padding: 3 }}>

                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant="h5" component="h2">
                                        {dadosProduto.nmProduto}
                                    </Typography>
                                </Box>

                                <Box sx={{ mt: 2 }}>

                                    <Typography variant="p" component="p" sx={{ mt: 4 }}>
                                        Informe a quantidade
                                    </Typography>

                                    <FormControl fullWidth sx={{ mt: 1 }}>
                                        <InputLabel id="demo-simple-select-label">Quantidade</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Quantidade"
                                            size="medium"
                                            sx={{
                                                alignItems: 'center',
                                            }}
                                            onChange={e => {
                                                setQntd(e.target.value);
                                            }}
                                            value={qntd}
                                        >
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={3}>3</MenuItem>
                                            <MenuItem value={4}>4</MenuItem>
                                            <MenuItem value={5}>5</MenuItem>
                                            <MenuItem value={6}>6</MenuItem>
                                            <MenuItem value={7}>7</MenuItem>
                                            <MenuItem value={8}>8</MenuItem>
                                            <MenuItem value={9}>9</MenuItem>
                                            <MenuItem value={10}>10</MenuItem>
                                        </Select>
                                    </FormControl>

                                    <Typography variant="p" component="p" sx={{ mt: 4 }}>
                                        Gostaria de alguma personalização?
                                    </Typography>

                                    <TextField
                                        id="outlined-multiline-flexible"
                                        label="Descreva"
                                        multiline
                                        maxRows={6}
                                        sx={{ mt: 1, width: '100%', fontSize: '14px' }}
                                        value={descricao}
                                        onChange={e => setDescricao(e.target.value)}
                                    />

                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography variant="p" component="p" sx={{ mt: 4 }}>
                                            Valor
                                        </Typography>
                                        <Typography variant="p" component="p" fontWeight="bold" fontSize="22px" sx={{ mt: 4, color: '#47A9E0' }}>
                                            R$ {vlAtualProduto.toLocaleString('BRL')}
                                        </Typography>
                                    </Box>

                                    <Button
                                        variant="contained"
                                        startIcon={<ShoppingCartCheckoutIcon />}
                                        sx={{
                                            width: '100%', bottom: 0, mt: 2, bgcolor: '#42BB73', '&:hover': {
                                                bgcolor: '#43BB90'
                                            },
                                        }}
                                        onClick={() => addProCarrinho()}
                                    >
                                        Adicionar ao carrinho
                                    </Button>

                                </Box>

                            </Box>

                        </Container>

                        <Container
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                mt: 2,
                                mb: 10,
                            }}
                            maxWidth={!matches && "lg"}
                        >
                            <Box sx={{ width: '100%', minHeight: 300, backgroundColor: '#f3f3f3', borderRadius: 2, padding: 2, flexDirection: 'column' }}>
                                <Typography>
                                    {dadosProduto.descricao}
                                </Typography>
                            </Box>
                        </Container>

                    </main>
                    :
                    <></>
            }

            <Container
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    mt: 4,
                    mb: 4
                }}
                maxWidth={!matches && "lg"}
            >
                {
                    true &&
                    <Box>
                        <Typography variant="h5" component="h2">
                            Produtos similares
                        </Typography>
                    </Box>
                }
            </Container>

            <Container
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    mt: 2,
                    mb: 10,
                }}
                maxWidth={!matches && "lg"}
            >
                {
                    true &&
                    <Box sx={{ width: '100%', height: 200, backgroundColor: '#f3f3f3', borderRadius: 2, padding: 2, flexDirection: 'column', overflow: 'clip' }}>

                    </Box>
                }
            </Container>

            <Footer />

        </Box>
    )
}