import 'react-toastify/dist/ReactToastify.css'

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../Dialog'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../Select'

import { FileEdit } from 'lucide-react'
import { Input } from '../Input'
import { toast } from 'react-toastify'
import { useCategories } from '@/hooks/useCategories'
import { useForm } from '@inertiajs/react'
import { useState } from 'react'

interface TransactionProps {
    id: number
    description: string
    amount: number
    type: string
    category_id: number
    created_at: string
}

interface TransactionEditModalProps {
    transaction: TransactionProps
}

export function TransactionEditModal({
    transaction,
}: TransactionEditModalProps) {
    const [open, setOpen] = useState(false)

    const { categories } = useCategories()

    const { data, setData, put, processing } = useForm({
        description: transaction.description,
        amount: String(transaction.amount),
        category_id: transaction.category_id,
        type: transaction.type,
    })

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        put(route('transactions.update', transaction.id))

        toast.success('Transação editada!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
        })

        setOpen(false)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button>
                    <FileEdit size={16} className="text-green-light" />
                </button>
            </DialogTrigger>

            <DialogContent className="bg-shape-principal p-[48px] min-w-[535px] rounded-md border-none shadow-[0px 4px 32px 0px rgba(0, 0, 0, 0.80)]">
                <DialogHeader>
                    <DialogTitle className="text-2xl text-white">
                        Editar transação
                    </DialogTitle>
                </DialogHeader>

                <form className="pt-8" onSubmit={onSubmit}>
                    <div className="flex flex-col">
                        <Input
                            placeholder="Descrição"
                            type="text"
                            onChange={(e) =>
                                setData('description', e.target.value)
                            }
                            value={data.description}
                        />
                    </div>

                    <div className="flex flex-col pt-4">
                        <Input
                            placeholder="Preço (R$)"
                            type="number"
                            onChange={(e) => setData('amount', e.target.value)}
                            value={data.amount}
                        />
                    </div>

                    <div className="flex flex-col w-full pt-4">
                        <Select
                            onValueChange={(value: string) => {
                                setData('category_id', Number(value))
                            }}
                            defaultValue={String(transaction.category_id)}
                        >
                            <SelectTrigger className="w-full h-[56px] border-none rounded-md bg-background text-text-base placeholder:text-placeholder focus:ring focus:ring-green-light">
                                <SelectValue placeholder="Categorias" />
                            </SelectTrigger>
                            <SelectContent className="bg-background text-text-base">
                                {categories.map((category) => (
                                    <SelectItem
                                        key={category.id}
                                        value={String(category.id)}
                                        className="py-2 cursor-pointer hover:bg-shape-secundaria"
                                    >
                                        {category.category}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#00875F] py-4 rounded-md text-white font-bold mt-10"
                        disabled={processing}
                    >
                        Editar
                    </button>
                </form>
            </DialogContent>
        </Dialog>
    )
}
