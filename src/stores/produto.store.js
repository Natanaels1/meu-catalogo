import { create } from 'zustand';

export const useStoreVisualizaProduto = create( set => ({

    dadosProduto: null,

    addProduto: (produto) => {
        set({ dadosProduto: produto });
    },

}));