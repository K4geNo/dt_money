import { Categories } from '@/types'

export interface Transaction {
    id: number
    description: string
    amount: number
    type: string
    category_id: number
    created_at: string
}

interface FilterTransactionsProps {
    transactions: Transaction[]
    categories: Categories[]
    search: string
}

export function filterTransactions({
    transactions,
    categories,
    search,
}: FilterTransactionsProps) {
    const searchLowercase = search.toLowerCase()

    return transactions.filter((transaction) => {
        const category = categories.find(
            (category) => category.id === transaction.category_id,
        )

        const categoryName = category?.category.toLowerCase() ?? ''
        const transactionDescription = transaction.description.toLowerCase()

        return (
            transactionDescription.includes(searchLowercase) ||
            categoryName.includes(searchLowercase)
        )
    })
}
