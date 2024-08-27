import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Button, Link } from "@nextui-org/react";
import React from 'react';
import { CircularProgress } from "@nextui-org/react";


// data akan load jika ada dari server, namun jika tidak ada, maka data akan diisi dengan array kosong
export default function ProductManagement({ auth, data = data ? data : [] }) {
    const title = "Product Management";
    // console.log(data);
    // console.log(data[1]);


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-center text-gray-800 dark:text-gray-200">{title ? title : "Untitled"}</h2>}
        >
            <div className="py-0">
                <Head title={title ? title : "Untitled"} />
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                        {GalleryView(data)}
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}

// Jika data ada, maka tampilkan data
// Jika data tidak ada, maka tampilkan pesan "Masih belum ada produk"
function GalleryView(data) {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [filteredData, setFilteredData] = React.useState(data);

    const directSearch = (e) => {
        setSearchTerm(e.target.value);
        const filtered = data.filter(product =>
            product.product_name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilteredData(filtered);
    }

    const handleFilter = () => {
        // Add filter logic here
        // You can filter data based on some criteria
    };

    return (
        <div className='px-4 my-4 space-y-4 text-center text-black dark:text-white'>
            <div className="flex justify-center space-x-4">
                <input
                    className="px-3 py-2 text-black border border-gray-300 rounded-md dark:text-black dark:border-gray-700 focus:outline-none focus:border-blue-500"
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={e => {
                        directSearch(e);
                    }}

                />
                <button
                    onClick={handleFilter}
                    className="px-4 py-2 text-white bg-gray-500 rounded-md focus:outline-none hover:bg-gray-600"
                >
                    Filter
                </button>
            </div>
            <ProductButtonList />
            {filteredData.length > 0 ?
                filteredData.map(product => (
                    <div className="flex flex-col border mx-4 space-x-2 justify-center items-center bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <Link key={product.id} href={`/product/${product.id}`}>
                            <div id="card" className="px-4 py-4 border-b border-gray-200 dark:border-gray-700 inline-flex items-center justify-center text-center bg-white rounded-lg">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{product.product_name}</h3>
                                <p className="text-gray-600 dark:text-gray-400">IDR {product.product_price}</p>
                                <p className="mt-2 text-gray-700 dark:text-gray-300">{product.product_description}</p>
                                <div className="flex-col flex justify-center items-center">
                                    <Link key={product.id} href={`/product/${product.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Edit
                                    </Link>
                                    <Link key={product.id} href={`/product/${product.id}`} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                        +
                                    </Link>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
                :
                <div className='text-2xl font-bold'>Product List
                    <p className='font-normal text-md'>
                        Oops, Produk anda masih belum ada.
                        Daftarkan Produk?
                        <Button variant='bordered'>
                            <Link
                                className='text-blue-500 hover:underline'
                                href={route('sales.create')}
                                content='Daftarkan Produk'
                            > {'Daftarkan Produk'}
                            </Link>
                        </Button>
                    </p>
                </div>
            }
        </div>
    );
}


function ProductButtonList() {
    return <div className='flex flex-wrap items-end justify-start mx-2 space-x-2 space-y-2'>
        <Button
            variant='bordered'
        >
            <Link
                href={route('sales.create')}
            >
                Daftarkan Produk
            </Link>
        </Button>

        <Button>
            <Link
                href='/product-management/edit'
            >
                Edit Produk
            </Link>
        </Button>

        <Button>
            <Link
                href={route('sales.create')}
            >
                Hapus Produk
            </Link>
        </Button>
    </div>;
}

