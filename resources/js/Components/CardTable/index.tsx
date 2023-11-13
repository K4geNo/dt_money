import { convertNumberToPrice } from "@/lib/convert-number-to-price";


interface CardTableProps {
    transaction: {
        id: number;
        description: string;
        amount: number;
        type: string;
        category: string;
    }
}

export function CardTable({ transaction }: CardTableProps) {
    const transactionType = transaction.type;

    const price = convertNumberToPrice(transaction.amount);

    return (
        <div className="flex items-center w-full px-8 py-5 rounded-md bg-shape-secundaria">
            <div className="flex-1 ">
                <span className="text-text-base">
                    {transaction.description}
                </span>
            </div>

            <div className="w-[200px]">
                <span className={transactionType === 'income' ? 'text-green-light' : 'text-red'}>
                    {price}
                </span>
            </div>

            <div className="w-[240px]">
                <span className="text-text-base">
                    {transaction.category}
                </span>
            </div>

            <div className="w-[200px]">
                <span className="text-text-base">
                    10/10/2021
                </span>
            </div>

            <div>
                <button>
                    Editar
                </button>
            </div>
        </div>
    )
}
