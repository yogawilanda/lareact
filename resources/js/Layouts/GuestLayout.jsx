import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';


export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center pt-6 sm:pt-0 px-8 bg-gray-100 dark:bg-gray-900">
            <div className="flex flex-col items-center">
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>
            </div>

            <div className="w-full px-4 mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-md sm:rounded-lg flex flex-col items-center">
                <div className="w-full sm:max-w-md py-4">
                    {children}
                </div>
            </div>
        </div>
    );
}


