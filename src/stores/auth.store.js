import { create } from 'zustand';

export const useAuthStore = create( (set, get) => ({
    
    logged: localStorage.getItem('TOKEN_MEU_CATALOGO'),
    loading: false,
    erro: null,
    TOKEN: localStorage.getItem('TOKEN_MEU_CATALOGO'),
    dadosEmpresa: {},
    
    getDadosEmpresa: async () => {

        const idEmpresa = localStorage.getItem('ID_EMPRESA');
        const url = 'http://127.0.0.1:3200/empresas/dadosEmpresa/' + idEmpresa;

        const config = {
            method: 'GET',
            headers: {"Authorization": `Bearer ${get().TOKEN}`}
        }

        await fetch(url, config)
        .then( res => res.json())
        .then( json => {
            set({ dadosEmpresa: json.result[0] });
        })
        .catch( err => {
            set({ erro: err });
            set({ loading: false });
        });

    },
    login: async (email, password) => {

        set({ loading: true });

        const json = JSON.stringify({
            "email": email,
            "password": password
        });

        const config = {
            method: 'POST',
            body: json,
            headers: {"Content-type": "application/json; charset=UTF-8"}
        };

        await fetch('http://127.0.0.1:3200/auth/login', config)
        .then( res => res.json())
        .then( json => {

            get().setLocalStorage(json[0]);
            set({ loading: false });

        })
        .catch( err => {
            set({ erro: err });
            set({ loading: false });
        });

    },
    setLocalStorage: async ({ token, idEmpresa, nmAdmin }) => {
        localStorage.setItem('TOKEN_MEU_CATALOGO', token);
        localStorage.setItem('ID_EMPRESA', idEmpresa);
        localStorage.setItem('NM_ADMIN_EMPRESA', nmAdmin);

        window.location.assign('/gestao-produtos');
    },
    logout: () => {
        localStorage.clear('TOKEN_MEU_CATALOGO');
        window.location.assign('/login');
    }

}));