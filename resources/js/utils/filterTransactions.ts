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

/**
 * Filters transactions based on the provided criteria.
 * @param {FilterTransactionsProps} options - The options for filtering transactions.
 * @returns {Transaction[]} - The filtered transactions.
 */
export function filterTransactions({
    transactions,
    categories,
    search,
}: FilterTransactionsProps): Transaction[] {
    const searchLowercase = search.toLowerCase()

    return transactions?.filter((transaction) => {
        const category = categories?.find(
            (category) => category?.id === transaction?.category_id,
        )

        const categoryName = category?.category.toLowerCase() ?? ''
        const transactionDescription = transaction?.description.toLowerCase()

        return (
            transactionDescription.includes(searchLowercase) ||
            categoryName.includes(searchLowercase)
        )
    })
}
