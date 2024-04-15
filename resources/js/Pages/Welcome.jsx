import { Link, Head } from '@inertiajs/react';
import { H1Template as H1 } from '@/Components/H1Template';
import ShadowButtonPrimary from '@/Components/ShadowButtonPrimary';
import HeaderLogo from '@/Components/HeaderLogo';
import { CardWithLink } from '@/Components/CardWithLink';
import { DefaultLaravelCard } from '@/Components/DefaultLaravelCard';
import Footer from '@/Components/Footer';
import VideoIcon from '@/Components/svg/VideoIcon';

export default function IndexPage({ auth, laravelVersion, phpVersion }) {
    let author = "Yoga Wilanda";
    return (
        <>
            <Head title="Index" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <Navbar />
                <div className="max-w-7xl mx-auto p-6 lg:p-8">
                    <HeaderLogo />

                    <HeroContent />

                    <CardComponent />

                    <Footer
                        author={author}
                        laravelVersion={laravelVersion}
                        phpVersion={phpVersion}
                    />
                </div>
            </div>
        </>
    );

    function Navbar() {
        return (
            <>
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </>
        );
    }

    function HeroContent() {
        return (
            <>
                <div className="mt-8 text-center sm:mt-12 space-y-7">
                    <H1 content={"Occupio"} />

                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Aplikasi Manajemen Toko yang memudahkan Anda dalam mengelola toko Anda
                    </p>
                    
                    <ShadowButtonPrimary
                        href={route('login')}
                    >
                        Get Started
                    </ShadowButtonPrimary>
                </div>
            </>
        )
    }

    function CardComponent() {
        return (
            <>
                <div className="mt-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {/* First Card */}
                        <CardWithLink 
                        icon={<VideoIcon />}
                        link={route('dashboard')}
                        title={"Manajemen Inventori"}
                        content={"Kelola Inventaris Toko Anda dimana saja dan kapan saja"}
                        />

                        {/* Second Card */}
                        <CardWithLink
                            link={route('dashboard')}
                            title={"POS APPLICATION"}
                            content={"Buat Akuntansi Anda Lebih Mudah"}
                        />

                        {/* Third card */}
                        <CardWithLink
                            title={"Manage Product"}
                            content={"Hello"}
                            link={route('productmanagement')}
                        />

                        <DefaultLaravelCard />
                    </div>
                </div>
            </>
        );
    }
}







