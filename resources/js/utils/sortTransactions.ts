interface Transaction {
    id: number
    description: string
    amount: number
    type: string
    category_id: number
    created_at: string
}

/**
 * Sorts an array of transactions in descending order based on their creation date.
 * @param transactions - The array of transactions to be sorted.
 * @returns A new array of transactions sorted in descending order based on their creation date.
 */
export function sortTransactions(transactions: Transaction[]) {
    return [...transactions].sort((a, b) => {
        const dateA = new Date(a.created_at)
        const dateB = new Date(b.created_at)
        return dateB.getTime() - dateA.getTime()
    })
}
