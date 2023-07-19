import { create } from 'zustand';

export const useStoreCarrinho = create( (set, get) => ({

    Carrinho: [],

    getProdutosCarrinhoToLocalStorage: () => {

        const CarrinhoLocalStorage = JSON.parse(localStorage.getItem('CarrinhoLocalStorage'));

        if(CarrinhoLocalStorage) {

            set({
                Carrinho: CarrinhoLocalStorage
            });

        }

    },

    addProdutoCarrinho: (produto) => {

        set((state) => ({
            Carrinho: [...state.Carrinho, produto]
        }));
        
        localStorage.setItem('CarrinhoLocalStorage',  JSON.stringify(get().Carrinho));

    },

    altDadosProduto: (alteracoes) => {
        
        set((state) => {

            const updatedCarrinho = state.Carrinho.map((produto) => {
                if (produto.id === alteracoes.id) {
                    produto = alteracoes;
                }
                return produto;
            });
    
            return {
                Carrinho: updatedCarrinho
            };

        });
        
        localStorage.setItem('CarrinhoLocalStorage', JSON.stringify(get().Carrinho));
    },

    removeProduto: (idProduto) => {

        set((state) => ({
            Carrinho: state.Carrinho.filter( produto => produto.id !== idProduto )
        }));

        localStorage.setItem('CarrinhoLocalStorage',  JSON.stringify(get().Carrinho));
        
    },

}));