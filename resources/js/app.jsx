import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { NextUIProvider } from "@nextui-org/react";

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);
    
        // random theme which is dark or light
        let randomTheme = Math.random(0, 1) < 0.5 ? "dark" : "light";
        // todo: change the theme based on the user preference
        let buttonSwitchTheme = Boolean ?  "dark" : "light";
        root.render(
            // Ganti Tema disini dark/light
            // <NextUIProvider className="dark ">
            <NextUIProvider className={randomTheme}>
                <App {...props} />
            </NextUIProvider>
        );
    },
    progress: {
        // color: '#AA4A44',
        // color: '#4B5563',
        showSpinner: true,
        delay: 1000,
        includeCSS: true,
    },
    
});
