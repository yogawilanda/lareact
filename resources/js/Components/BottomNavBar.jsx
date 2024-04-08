import { Button, Link } from "@nextui-org/react";

export default function BottomNavBar() {
    return (
        <footer className='fixed bottom-0 w-full bg-neutral-100 dark:bg-slate-900 text-white z-50'>
            <div className='container mx-4 py-4 flex justify-center'>
                <Button className='mr-2' color='' variant="ghost">
                    <Link href={route('dashboard')}>
                        Dashboard
                    </Link>
                </Button>
                <Button className='mr-2' color='' variant="ghost">
                    <Link href={route('productmanagement')}>
                        Manage
                    </Link>
                </Button>

                {/* Sales */}
                <Button className='mr-2' color='' variant="ghost">
                    <Link href={route('sales')}>
                        Transaction
                    </Link>
                </Button>
                <Button className='mr-2' color='' variant="ghost">
                    {
                        //! todo: ganti menjadi laporan penjualan 
                    }
                    <Link href={route('dashboard')}>
                        Reports
                    </Link>
                </Button>
            </div>
        </footer>
    );
}
