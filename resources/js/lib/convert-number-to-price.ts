/**
 * Converts a number to a price format.
 * @param number - The number to be converted.
 * @returns The number formatted as a price.
 */
export const convertNumberToPrice = (number: number) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(number)
}
