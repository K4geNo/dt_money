import './bootstrap';
import '../css/app.css';

import { TransactionProvider } from './Context/TransactionContext';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <TransactionProvider>
                <App {...props} />
            </TransactionProvider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
