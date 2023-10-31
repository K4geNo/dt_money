import { ArrowDownCircle, ArrowUpCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../Dialog";
import { RadioGroup, RadioGroupItem } from "../RadioGroup";

import { Input } from "../Input";
import { cn } from "@/lib/class-merge";
import { useForm } from "@inertiajs/react";
import { useState } from "react";

export function TransactionModal() {
    const [isSelectedOne, setIsSelectedOne] = useState(false);
    const [isSelectedTwo, setIsSelectedTwo] = useState(false);

    const { data, setData, post, errors, reset } = useForm({
        description: '',
        price: '',
        category: '',
        type: '',
    })
    console.log(data)

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // post(route('transactions.store'));
    }

    return (
        <Dialog>
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
                        <Input placeholder="Descrição" type="text"
                            onChange={(e) => setData('description', e.target.value)}
                            value={data.description}
                        />
                    </div>

                    <div className="flex flex-col pt-4">
                        <Input
                            placeholder="Preço"
                            type="number"
                            onChange={(e) => setData('price', e.target.value)}
                            value={data.price}
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

                    <RadioGroup defaultValue="income" className="flex gap-x-4 w-full pt-6"
                        onValueChange={(value) => setData('type', value)}
                        // onValueChange={(value) => console.log(value)}
                    >
                        <div className="flex items-center w-full">
                            <RadioGroupItem
                                value="income"
                                id="income"
                                className="hidden"
                            />
                            <label
                                htmlFor="income"
                                className={cn(
                                    "w-full py-4 px-6 bg-shape-secundaria border border-transparent rounded-md text-center cursor-pointer",
                                    isSelectedOne && "border-green-light"
                                )}
                                onClick={() => setIsSelectedOne(!isSelectedOne)}
                            >
                                <ArrowUpCircle className="h-6 w-6 mx-auto inline text-green mr-2" />
                                <span className="text-text-base">Entrada</span>
                            </label>
                        </div>
                        <div className="flex items-center w-full">
                            <RadioGroupItem
                                value="expense"
                                id="expense"
                                className="hidden"
                            />
                            <label
                                htmlFor="expense"
                                className={cn(
                                    "w-full py-4 px-6 bg-shape-secundaria border border-transparent rounded-md text-center cursor-pointer",
                                    isSelectedTwo && "border-green-light"
                                )}
                                onClick={() => setIsSelectedTwo(!isSelectedTwo)}
                            >
                                <ArrowDownCircle className="h-6 w-6 mx-auto inline text-red mr-2" />
                                <span className="text-text-base">Saída</span>
                            </label>
                        </div>
                    </RadioGroup>

                    <button
                        type="submit"
                        className="w-full bg-[#00875F] py-4 rounded-md text-white font-bold mt-10"
                    >
                        Cadastrar
                    </button>
                </form>
            </DialogContent>
        </Dialog>
    )
}
