interface Transaction {
    id: number
    description: string
    amount: number
    type: string
    category_id: number
    created_at: string
}

export function sortTransactions(transactions: Transaction[]) {
    return [...transactions].sort((a, b) => {
        const dateA = new Date(a.created_at)
        const dateB = new Date(b.created_at)
        return dateB.getTime() - dateA.getTime()
    })
}
