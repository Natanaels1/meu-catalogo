import { Box, IconButton, Typography } from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from "react-router-dom";

import QtdItems from "../QntItems";
import { useEffect, useState } from "react";
import { useStoreCarrinho } from "../../stores/carrinho.store";

export default function ItemCarrinho({ produto, removeProduto }) {

    const matches = useMediaQuery('(max-width:600px)');
    const navigate = useNavigate();

    const {
        altDadosProduto
    } = useStoreCarrinho();

    const [qntdItems, setQntdItems] = useState(produto.qntd);
    const [vlAtualProduto, setVlAtualProduto] = useState(produto.vlProduto);

    const acaoMudaQntdProduto = (operador) => {

        const novaQntdItems = operador === '+' ? produto.qntd += 1 : produto.qntd -= 1;

        if(novaQntdItems > 0 && novaQntdItems !== qntdItems) {
            setQntdItems(novaQntdItems);
        }
    
    };

    useEffect(() => {

        const somaValores = produto.vlDaUnidade * qntdItems;

        setVlAtualProduto(parseFloat(somaValores.toFixed(2)));

    }, [qntdItems])

    useEffect(() => {
        atualizaProdutoCarrinho();
    }, [vlAtualProduto])

    function atualizaProdutoCarrinho() {

        altDadosProduto({
            ...produto,
            vlProduto: vlAtualProduto,
            qntd: qntdItems
        });

    }

    return (
        <Box
            key={produto.nmProduto}
            sx={{
                width: '100%',
                padding: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid #ccc',
                flexDirection: matches ? 'column' : 'row'
            }}
        >

            <Box
                sx={{
                    width: '100%',
                    padding: 1,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2
                }}
            >
                <img 
                    src={produto.imgsProduto[0]} 
                    width={50} 
                    style={{ cursor: 'pointer' }} 
                    onClick={() => {
                        navigate('/produto/' + produto.id);
                    }} 
                />

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Typography variant="p" fontWeight="semibold" fontSize={18}>
                        {produto.nmProduto}
                    </Typography>

                    <Typography variant="p" fontWeight="bold" fontSize={18} sx={{ color: '#47A9E0' }}>
                        R$ {vlAtualProduto}
                    </Typography>
                </Box>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 2,
                    alignItems: 'center',
                    width: matches ? '100%' : 'auto',
                    justifyContent: matches && 'flex-end'
                }}
            >

                <QtdItems 
                    idProduto={produto.id}
                    altQntdItens={acaoMudaQntdProduto}
                    qntdItems={qntdItems}
                />

                <IconButton onClick={() => removeProduto(produto.id)}>
                    <HighlightOffIcon color="error" />
                </IconButton>
            </Box>
        </Box>
    )

}