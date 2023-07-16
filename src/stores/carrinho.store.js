import { create } from 'zustand';

export const useStoreCarrinho = create( set => ({

    Carrinho: [],

    addProdutoCarrinho: (produto) => {

        set((state) => ({
            Carrinho: [...state.Carrinho, produto]
        }));

    },

    removeProduto: (idProduto) => {

        set((state) => ({
            Carrinho: state.Carrinho.filter( produto => produto.id !== idProduto )
        }));
        
    }

}));