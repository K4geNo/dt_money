import { ArrowDownCircle, ArrowUpCircle, DollarSign } from 'lucide-react'

import { formattedPrice } from '@/utils/fomartPrice'

interface TransactionProps {
    id: number
    description: string
    amount: number
    type: string
}

interface SummaryProps {
    transactions: TransactionProps[]
}

export function Summary({ transactions }: SummaryProps) {
    const totals = transactions.reduce(
        (acc, transaction) => {
            if (transaction.type === 'income') {
                acc.totalIncome += Number(transaction.amount)
            } else if (transaction.type === 'expense') {
                acc.totalOutcome += Number(transaction.amount)
            }
            return acc
        },
        { totalIncome: 0, totalOutcome: 0 },
    )

    const total = totals.totalIncome - totals.totalOutcome

    return (
        <section className="grid w-full grid-cols-3 gap-x-8 -mt-[120px]">
            <div className="flex flex-col px-8 py-6 rounded-md gap-y-3 bg-shape-terciaria">
                <div className="flex items-center justify-between">
                    <span className="text-text-base">Entradas</span>

                    <ArrowUpCircle size={32} className="text-green-light" />
                </div>

                <span className="text-[32px] font-bold text-white">
                    {formattedPrice(totals.totalIncome)}
                </span>
            </div>

            <div className="flex flex-col px-8 py-6 rounded-md gap-y-3 bg-shape-terciaria">
                <div className="flex items-center justify-between">
                    <span className="text-text-base">Saídas</span>

                    <ArrowDownCircle size={32} className="text-red" />
                </div>

                <span className="text-[32px] font-bold text-white">
                    {formattedPrice(totals.totalOutcome)}
                </span>
            </div>

            <div className="flex flex-col px-8 py-6 rounded-md gap-y-3 bg-green-dark">
                <div className="flex items-center justify-between">
                    <span className="text-text-base">Total</span>

                    <DollarSign size={32} className="text-white" />
                </div>

                <span className="text-[32px] font-bold text-white">
                    {formattedPrice(total)}
                </span>
            </div>
        </section>
    )
}
