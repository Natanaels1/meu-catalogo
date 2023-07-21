import { create } from 'zustand';
import { produtos } from '../services/dbProdutos';

export const useStoreProdutosDisponiveis = create( (set, get) => ({

    Produtos: [],
    ProdutosSearch: [],
    ProdutosSearchFiltro: [],

    getProdutos: () => {

        set({ Produtos: produtos });

    },

    searchProdutos: (busca) => {

        if(busca.length > 3) { 

            const resultados = [];

            produtos.find( produto => {
    
                if((produto.nmProduto).includes(busca) || (produto.descricao).includes(busca) || (produto.tipo).includes(busca)) {
                    resultados.push(produto);
                }
                
            });
            
            if(resultados.length > 0) {
                set({ ProdutosSearch: resultados });
            }

            return;
        }

        // set({ ProdutosSearch: [] });

    },

    searchProdutosTelaBusca: (busca) => {

        const resultados = [];

        produtos.find( produto => {

            if((produto.nmProduto).includes(busca) || (produto.descricao).includes(busca) || (produto.tipo).includes(busca)) {
                resultados.push(produto);
            }
            
        });
        
        if(resultados.length > 0) {
            set({ ProdutosSearchFiltro: resultados });
            get().ordernaProdutos('maiorParaMenor');
        }
        
    },

    filtrosProdutos: (pesquisa, params) => {

        const resultadoFiltrado = produtos.filter( produto => {

            if(params.categoria === 'todas' && params.valor === '0' && params.prontaEntrega === false) {
                return produto;
            }

            if(params.categoria === 'todas' && params.valor === '0' && params.prontaEntrega === true) {
                return produto.prontaEntrega === true;
            }

            if(params.categoria === produto.tipo && params.valor === '0' &&  params.prontaEntrega === false) {
                return produto.tipo === params.categoria;
            }

            if(params.categoria === produto.tipo && params.valor === '0' && params.prontaEntrega === true) {
                return produto.prontaEntrega === true;
            }

            // if(params.categoria === produto.tipo && params.valor !== '0' && produto.prontaEntrega === true) {

            //     switch(params.valor) {
            //         case '1':
            //             return produto.vlProduto > 10 && produto.vlProduto < 50;
            //         case '2':
            //             return produto.vlProduto > 50 && produto.vlProduto < 100;
            //         case '3':
            //             return produto.vlProduto > 100;
            //         default:
            //             return produto;
            //     }

            // }

            // if(params.categoria === produto.tipo && params.valor !== '0' && produto.prontaEntrega === false) {

            //     switch(params.valor) {
            //         case '1':
            //             return produto.vlProduto > 10 && produto.vlProduto < 50;
            //         case '2':
            //             return produto.vlProduto > 50 && produto.vlProduto < 100;
            //         case '3':
            //             return produto.vlProduto > 100;
            //         default:
            //             return produto;
            //     }

            // }

        });

        set({ ProdutosSearchFiltro: resultadoFiltrado })

        get().ordernaProdutos('maiorParaMenor');

    },

    ordernaProdutos: (tipoOrdenacao) => {

        if(tipoOrdenacao === 'menorParaMaior') {
            set({ ProdutosSearchFiltro: get().ProdutosSearchFiltro.sort((a, b) => a.vlProduto - b.vlProduto) })
            return;
        }

        if(tipoOrdenacao === 'maiorParaMenor') {
            set({ ProdutosSearchFiltro: get().ProdutosSearchFiltro.sort((a, b) => b.vlProduto - a.vlProduto) })
            return;
        }

    }


}));