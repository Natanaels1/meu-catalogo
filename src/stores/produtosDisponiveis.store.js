import { create } from 'zustand';
import { produtos } from '../services/dbProdutos';
import Filtros from '../components/Filtros';

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
        }
        
    },

    filtrosProdutos: (pesquisa, params) => {

        const resultados = [];

        const resultadoFiltrado = produtos.filter( produto => {
    
            const categoriaValida = params.categoria === 'todas' || params.categoria === produto.categoria;
            const prontaEntregaValida = !params.prontaEntrega || params.prontaEntrega === produto.prontaEntrega;
            const valorValido = params.valor === '0' || params.valor === produto.valor;

            
            return categoriaValida && prontaEntregaValida && valorValido;
        });

        console.log(resultadoFiltrado);
    }

}));