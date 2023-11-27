/**
 * Formata um valor de preço em uma sequência de moeda.
 *
 * @param price - O valor do preço a ser formatado.
 * @returns O preço formatado como uma string de moeda.
 */
export const formattedPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(price)
}
