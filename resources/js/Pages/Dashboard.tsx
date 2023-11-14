import { useContext, useState } from 'react';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { CardTable } from '@/Components/CardTable';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Search } from '@/Components/Search';
import { Summary } from '@/Components/Summary';

export default function Dashboard({ auth, transactions }: PageProps) {
    const [search, setSearch] = useState('')

    const filteredTransactions = transactions.filter(e => e.description.includes(search))

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-[1120px] mx-auto">
                    <Summary />

                    <Search setSearch={setSearch} />

                    <div className="mt-6 overflow-hidden bg-white shadow-sm dark:bg-shape-principal sm:rounded-lg">
                        <div className="flex flex-col text-gray-900 dark:text-gray-100 gap-y-2">
                            {filteredTransactions.map((transaction) => (
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
    );
}
