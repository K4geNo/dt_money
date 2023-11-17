import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Rectangle,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts'

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { PageProps } from '@/types'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export default function Report({ transactions, auth }: PageProps) {
    const incomeAndExpensesByDay = transactions.reduce(
        (acc, transaction) => {
            const date = format(
                new Date(transaction.created_at),
                'dd MMMM yyyy',
                { locale: ptBR },
            )
            if (!acc[date]) {
                acc[date] = { Entradas: 0, Despesas: 0 }
            }
            if (transaction.type === 'income') {
                acc[date].Entradas += Number(transaction.amount)
            } else if (transaction.type === 'expense') {
                acc[date].Despesas += Number(transaction.amount)
            }
            return acc
        },
        {} as { [key: string]: { Entradas: number; Despesas: number } },
    )

    const data = Object.keys(incomeAndExpensesByDay).map((date) => ({
        name: date,
        Entradas: incomeAndExpensesByDay[date].Entradas,
        Despesas: incomeAndExpensesByDay[date].Despesas,
    }))

    return (
        <AuthenticatedLayout user={auth.user}>
            <section className="py-12">
                <div className="max-w-[1120px] mx-auto">
                    <h2 className="text-2xl font-bold text-center text-text-base">
                        Entradas e Despesas do Mês
                    </h2>

                    <BarChart
                        width={1120}
                        height={500}
                        data={data}
                        className="mt-4"
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar
                            dataKey="Entradas"
                            fill="#8884d8"
                            activeBar={<Rectangle fill="pink" stroke="blue" />}
                            barSize={50}
                        />
                        <Bar
                            dataKey="Despesas"
                            fill="#82ca9d"
                            activeBar={
                                <Rectangle fill="gold" stroke="purple" />
                            }
                            barSize={50}
                        />
                    </BarChart>
                </div>
            </section>
        </AuthenticatedLayout>
    )
}
