const logica = (base, limite, visualizar) => {
    let resultado = '';

    for (let i = 1; i <= limite; i++) {
        resultado += `${base} * ${i} = ${base * i}\n`

    };


    return resultado
};

module.exports = {
    logica,
}