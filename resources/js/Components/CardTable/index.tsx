import { TransactionEditModal } from '../TransactionEditModal'
import { Trash } from 'lucide-react'
import { convertNumberToPrice } from '@/lib/convert-number-to-price'
import { toast } from 'react-toastify'
import { useCategories } from '@/hooks/useCategories'
import { useForm } from '@inertiajs/react'
import { useMemo } from 'react'

interface CardTableProps {
    transaction: {
        id: number
        description: string
        amount: number
        type: string
        category_id: number
        created_at: string
    }
}

export function CardTable({ transaction }: CardTableProps) {
    const { delete: deleteTransaction } = useForm()

    const { categories } = useCategories()

    const categorieById = useMemo(
        () =>
            categories.find(
                (categorie) => categorie.id === transaction.category_id,
            ),
        [categories, transaction.category_id],
    )

    const transactionType = transaction.type

    const price = convertNumberToPrice(transaction.amount)

    const priceMethod = transactionType === 'income' ? '+ ' : '- '

    const formattedDate = new Date(transaction.created_at).toLocaleDateString(
        'pt-BR',
    )

    const handleRemove = () => {
        deleteTransaction(route('transactions.destroy', transaction.id))

        toast.success('Transação excluída!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
        })
    }

    return (
        <div className="flex items-center w-full px-8 py-5 rounded-md bg-shape-secundaria">
            <div className="flex-1 ">
                <span className="text-text-base">
                    {transaction.description}
                </span>
            </div>

            <div className="w-[200px]">
                <span
                    className={
                        transactionType === 'income'
                            ? 'text-green-light'
                            : 'text-red'
                    }
                >
                    {price && priceMethod + price}
                </span>
            </div>

            <div className="w-[240px]">
                <span className="text-text-base">
                    {categorieById?.category}
                </span>
            </div>

            <div className="w-[200px]">
                <span className="text-text-base">{formattedDate}</span>
            </div>

            <div className="flex items-center gap-x-4">
                <TransactionEditModal transaction={transaction} />

                <button onClick={handleRemove}>
                    <Trash size={16} className="text-red" />
                </button>
            </div>
        </div>
    )
}
