export function formatBoolean(value) {

    if (value) {
        return (
            <span
                style={{
                    color: "#FFF",
                    backgroundColor: '#42BB73',
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingTop: 4,
                    paddingBottom: 4,
                    borderRadius: 10,
                    fontWeight: 'bold'
                }}
            >
                Sim
            </span>
        );
    }

    return (
        <span
            style={{
                color: "#FFF",
                backgroundColor: '#C35656',
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 4,
                paddingBottom: 4,
                borderRadius: 10,
                fontWeight: 'bold'
            }}
        >
            Não
        </span>
    );

}

export function formatDataTela(data) {
    const dt = new Date(data);
    const dia = dt.getDate().toString().padStart(2, '0');
    const mes = (dt.getMonth() + 1).toString().padStart(2, '0');
    const ano = dt.getFullYear().toString();

    return `${dia}/${mes}/${ano}`;
}

export function formatMoeda(value) {
    return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
}
