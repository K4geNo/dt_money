import { ArrowDownCircle, ArrowUpCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../Dialog";
import { RadioGroup, RadioGroupItem } from "../RadioGroup";

import { Input } from "../Input";
import { cn } from "@/lib/class-merge";
import { useForm } from "@inertiajs/react";
import { useState } from "react";

export function TransactionModal() {
    const [open, setOpen] = useState(false);

    const { data, setData, post, errors, reset, processing } = useForm({
        description: '',
        amount: '',
        category: '',
        type: 'income',
    })

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route('transactions.store'));

        reset();

        setOpen(false);
    }

    return (
        <Dialog
            open={open}
            onOpenChange={setOpen}
        >
            <DialogTrigger asChild>
                <button className="bg-[#00875F] px-5 py-3 rounded-md text-white">
                    Nova transação
                </button>
            </DialogTrigger>

            <DialogContent className="bg-shape-principal p-[48px] min-w-[535px] rounded-md border-none shadow-[0px 4px 32px 0px rgba(0, 0, 0, 0.80)]">
                <DialogHeader>
                    <DialogTitle className="text-white">
                        Nova transação
                    </DialogTitle>
                </DialogHeader>

                <form className="pt-8" onSubmit={onSubmit}>
                    <div className="flex flex-col">
                        <Input
                            placeholder="Descrição"
                            type="text"
                            onChange={(e) => setData('description', e.target.value)}
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

                    <div className="flex flex-col pt-4">
                        <Input
                            placeholder="Categoria"
                            type="text"
                            onChange={(e) => setData('category', e.target.value)}
                            value={data.category}
                        />
                    </div>

                    <RadioGroup
                        defaultValue="income"
                        className="flex w-full pt-6 gap-x-4"
                        onValueChange={(value: string) => setData('type', value)}
                    >
                        <div className="flex items-center w-full">
                            <RadioGroupItem
                                value="income"
                                id="income"
                                className={cn(
                                    "w-full text-center border border-transparent rounded-md cursor-pointer h-14",
                                    "bg-shape-secundaria radix-state-checked:bg-green-dark"
                                )}
                            >
                                <ArrowUpCircle className="inline w-6 h-6 mx-auto mr-2 text-white" />
                                <span className="text-text-base">Entrada</span>
                            </RadioGroupItem>
                        </div>
                        <div className="flex items-center w-full">
                            <RadioGroupItem
                                value="expense"
                                id="expense"
                                className={cn(
                                    "w-full text-center border border-transparent rounded-md cursor-pointer h-14",
                                    "bg-shape-secundaria radix-state-checked:bg-red-dark"
                                )}
                            >
                                <ArrowDownCircle className="inline w-6 h-6 mx-auto mr-2 text-white" />
                                <span className="text-text-base">Saída</span>
                            </RadioGroupItem>
                        </div>
                    </RadioGroup>

                    <button
                        type="submit"
                        className="w-full bg-[#00875F] py-4 rounded-md text-white font-bold mt-10"
                        disabled={processing}
                    >
                        Cadastrar
                    </button>
                </form>
            </DialogContent>
        </Dialog>
    )
}
