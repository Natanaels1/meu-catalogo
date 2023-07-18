import { create } from 'zustand';
import { produtos } from '../services/dbProdutos';

export const useStoreProdutosDisponiveis = create( (set, get) => ({

    Produtos: [],
    ProdutosSearch: [],

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
            
            set({ ProdutosSearch: resultados });

            return;
        }

        set({ ProdutosSearch: [] });

    }

}));