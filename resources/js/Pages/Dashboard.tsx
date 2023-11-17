import { useEffect, useState } from 'react'

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { CardTable } from '@/Components/CardTable'
import { Head } from '@inertiajs/react'
import { PageProps } from '@/types'
import { Search } from '@/Components/Search'
import { Summary } from '@/Components/Summary'
import { filterTransactions } from '@/utils/filterTransactions'
import { sortTransactions } from '@/utils/sortTransactions'
import { useCategories } from '@/hooks/useCategories'

export default function Dashboard({
    auth,
    transactions,
    categories,
}: PageProps) {
    const [search, setSearch] = useState('')

    const { setCategories } = useCategories()

    useEffect(() => {
        setCategories(categories)
    }, [categories, setCategories])

    const filteredTransactions = filterTransactions({
        transactions,
        categories,
        search,
    })

    const sortedFilteredTransactions = sortTransactions(filteredTransactions)

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-[1120px] mx-auto">
                    <Summary transactions={transactions} />

                    <Search setSearch={setSearch} />

                    <div className="mt-6 overflow-hidden bg-white shadow-sm dark:bg-shape-principal sm:rounded-lg">
                        <div className="flex flex-col text-gray-900 dark:text-gray-100 gap-y-2">
                            {sortedFilteredTransactions.map((transaction) => (
                                <CardTable
                                    key={transaction.id}
                                    transaction={transaction}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
