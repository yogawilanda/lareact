export function DefaultLaravelCard() {
    return <div className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500">
        <div>
            <div className="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    className="w-7 h-7 stroke-red-500"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" />
                </svg>
            </div>

            <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                Vibrant Ecosystem
            </h2>

            <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Laravel's robust library of first-party tools and libraries, such as{' '}
                <a
                    href="https://forge.laravel.com"
                    className="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >
                    Forge
                </a>
                ,{' '}
                <a
                    href="https://vapor.laravel.com"
                    className="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >
                    Vapor
                </a>
                ,{' '}
                <a
                    href="https://nova.laravel.com"
                    className="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >
                    Nova
                </a>
                , and{' '}
                <a
                    href="https://envoyer.io"
                    className="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >
                    Envoyer
                </a>{' '}
                help you take your projects to the next level. Pair them with powerful open
                source libraries like{' '}
                <a
                    href="https://laravel.com/docs/billing"
                    className="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >
                    Cashier
                </a>
                ,{' '}
                <a
                    href="https://laravel.com/docs/dusk"
                    className="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >
                    Dusk
                </a>
                ,{' '}
                <a
                    href="https://laravel.com/docs/broadcasting"
                    className="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >
                    Echo
                </a>
                ,{' '}
                <a
                    href="https://laravel.com/docs/horizon"
                    className="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >
                    Horizon
                </a>
                ,{' '}
                <a
                    href="https://laravel.com/docs/sanctum"
                    className="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >
                    Sanctum
                </a>
                ,{' '}
                <a
                    href="https://laravel.com/docs/telescope"
                    className="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >
                    Telescope
                </a>
                , and more.
            </p>
        </div>
    </div>;
}