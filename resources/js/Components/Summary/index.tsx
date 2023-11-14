import { ArrowDownCircle, ArrowUpCircle, DollarSign } from "lucide-react";

export function Summary() {
    return (
        <section className="grid w-full grid-cols-3 gap-x-8 -mt-[120px]">
            <div className="flex flex-col px-8 py-6 rounded-md gap-y-3 bg-shape-terciaria">
                <div className="flex items-center justify-between">
                    <span className="text-text-base">Entradas</span>

                    <ArrowUpCircle size={32} className="text-green-light" />
                </div>

                <span className="text-[32px] font-bold text-white">
                    R$ 17.400,00
                </span>
            </div>

            <div className="flex flex-col px-8 py-6 rounded-md gap-y-3 bg-shape-terciaria">
                <div className="flex items-center justify-between">
                    <span className="text-text-base">Saídas</span>

                    <ArrowDownCircle size={32} className="text-red" />
                </div>

                <span className="text-[32px] font-bold text-white">
                    R$ 17.400,00
                </span>
            </div>

            <div className="flex flex-col px-8 py-6 rounded-md gap-y-3 bg-green-dark">
                <div className="flex items-center justify-between">
                    <span className="text-text-base">Total</span>

                    <DollarSign size={32} className="text-white" />
                </div>

                <span className="text-[32px] font-bold text-white">
                    R$ 17.400,00
                </span>
            </div>
        </section>
    )
}
