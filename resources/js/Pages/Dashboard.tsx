import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { CardTable } from '@/Components/CardTable';

export default function Dashboard({ auth, transactions }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl">
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-shape-principal sm:rounded-lg">
                        <div className="flex flex-col text-gray-900 dark:text-gray-100 gap-y-2">
                            {transactions.map((transaction) => (
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
