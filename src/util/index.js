
/* TODO BUG
  Caso tenha '-' no titulo, ex.: 'ex-namorada', corta errado
*/
export const trataTitulos = (i) => {
    return i.substring(0, i.indexOf('-'))
}

export const trataDatas = (i) => {
    return new Date(i).toLocaleDateString("pt-BR")
}
