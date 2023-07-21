// import { memo } from "react";

import { Box, Container, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, Switch, TextField, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useStoreProdutosDisponiveis } from "../../stores/produtosDisponiveis.store";
import { useParams } from "react-router-dom";

function Filtros() {

    const matches = useMediaQuery('(max-width:600px)');
    const { pesquisa } = useParams();

    const {
        filtrosProdutos,
        ordernaProdutos
    } = useStoreProdutosDisponiveis();

    const [filtros, setFiltros] = useState({
        categoria: 'todas',
        prontaEntrega: false,
        valor: '0',
    });

    const [ordenacao, setordenacao] = useState('maiorParaMenor');

    function handleChangeCategoria(e) {
        setFiltros({
            ...filtros,
            categoria: e.target.value
        });
    }

    function handleFiltroProntaEntrega(e) {
        setFiltros({
            ...filtros,
            prontaEntrega: e.target.checked
        });
    }
    
    function handleChangeValor(e) {
        setFiltros({
            ...filtros,
            valor: e.target.value
        });
    }

    function handleOrdenacaoValor(e) {
        ordernaProdutos(e.target.value);
        setordenacao(e.target.value);
    }

    useEffect(() => {
        filtrosProdutos(pesquisa, filtros);
        ordernaProdutos(ordenacao);
    }, [filtros]);

    return (
        <Container
            sx={{
                minHeight: 100,
                display: 'flex',
                // alignItems: 'center',
                flexDirection: matches ? 'column' : 'row',
                gap: 2,
                width: '100%',
                padding: 1,
                flexWrap: 'wrap',
                pl: 3,
            }}
            maxWidth={!matches && "lg"}
        >
            <Box
                sx={{
                    width: 'auto',
                    height: 'auto',
                }}
            > 
                <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group" sx={{ mb: 1 }}>Categoria</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={filtros.categoria}
                        onChange={handleChangeCategoria}
                    >   
                        <FormControlLabel value="todas" control={<Radio size="small" />} label="Todas" />
                        <FormControlLabel value="Camiseta" control={<Radio size="small" />} label="Camisetas" />
                        <FormControlLabel value="Caneca" control={<Radio size="small" />} label="Canecas" />
                    </RadioGroup>
                </FormControl>
            </Box>

            {/* <Box
                sx={{
                    width: 'auto',
                    height: 'auto',
                }}
            >
                <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group" sx={{ mb: 1 }}>Valor</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={filtros.valor}
                        onChange={handleChangeValor}
                    >   
                        <FormControlLabel value="0" control={<Radio size="small" />} label="Todos" />
                        <FormControlLabel value="1" control={<Radio size="small" />} label="10 até 50" />
                        <FormControlLabel value="2" control={<Radio size="small" />} label="50 até 100" />
                        <FormControlLabel value="3" control={<Radio size="small" />} label="Acima de 100" />
                    </RadioGroup>
                </FormControl>
            </Box> */}

            <Box
                sx={{
                    width: 'auto',
                    height: 'auto',
                }}
            >
                <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group" sx={{ mb: 1 }}>Ordenar</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={ordenacao}
                        onChange={handleOrdenacaoValor}
                    >   
                        <FormControlLabel value="menorParaMaior" control={<Radio size="small" />} label="Menor valor para o maior" />
                        <FormControlLabel value="maiorParaMenor" control={<Radio size="small" />} label="Maior para o menor valor" />
                    </RadioGroup>
                </FormControl>
            </Box>

            <Box
                sx={{
                    width: 'auto',
                    height: 'auto',
                }}
            >
                <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group" sx={{ mb: 1 }}>Pronta entrega</FormLabel>
                    <Switch 
                        // checked={filtros.prontaEntrega}
                        onChange={handleFiltroProntaEntrega} 
                        size="medium" 
                        sx={{ ml: -1.5 }} 
                    />
                </FormControl>
            </Box>

       

        </Container>
    )

}

export default Filtros;