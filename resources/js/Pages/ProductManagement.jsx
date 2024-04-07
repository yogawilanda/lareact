import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Button, Link } from "@nextui-org/react";
import React from 'react';
// tabs purpose
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";

import { CircularProgress } from "@nextui-org/react";


// data akan load jika ada dari server, namun jika tidak ada, maka data akan diisi dengan array kosong
export default function ProductManagement({ auth, data = data ? data : [] }) {
    const title = "Product Management";
    console.log(data);
    console.log(data[1]);


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight text-center">{title ? title : "Untitled"}</h2>}
        >
            <div className="py-0">
                <Head title={title ? title : "Untitled"} />
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        {/* Button Control */}

                        {/* <ProductSection /> */}
                        {GalleryView(data)}
                        {/* {TableView(data)} */}
                        {/* <TableView data={data} /> */}

                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );


    function CardsContent({ header, content, price }) {
        return (
            <div className="space-y-5 my-2">
                <Card color="primary">
                    <CardHeader className='font-bold text-2xl'>
                        {header ? header : "Undefined"}
                    </CardHeader>
                    <CardBody>
                        {/* Primary */}
                        <div className='flex justify-evenly items-center'>
                            <div className="text-gray-900 dark:text-gray-100">{content ? content : "undefined"}</div>
                            <div className="ml-7 flex-col">
                                <div className="text-gray-900 dark:text-gray-100">Product Price</div>
                                <div className="text-gray-900 dark:text-gray-100">Product Stock</div>
                            </div>
                            <div className="ml-auto" >
                                {/* Add your arrow or any other icon here */}
                                <Button onPress={() => console.log("pressed")}>
                                    <span>&rarr;</span>
                                </Button>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }

    function ProductSection() {
        const [isLoading, setIsLoading] = React.useState(true);


        let tabs = [
            {
                id: "Aktif",
                label: "Aktif",
                content: <>
                    <CardsContent />
                    <CardsContent />
                    <CardsContent />
                    <CardsContent />
                    <CardsContent />
                </>
            },
            {
                id: "Inaktif",
                label: "Inaktif",
                content: <>
                    <CardsContent />
                    <CardsContent />
                    <CardsContent />
                    <CardsContent />
                    <CardsContent />
                </>
            },
            {
                id: "Lunas",
                label: "Lunas",
                content: <>
                    <CardsContent />
                    <CardsContent />
                    <CardsContent />

                </>
            }
        ];

        React.useEffect(() => {
            const fetchData = async () => {
                // Simulate an API call or data fetching
                // 3 seconds
                await new Promise(resolve => setTimeout(resolve, 3000));

                // Set loading to false when data is fetched
                setIsLoading(false);
            };

            // Call the fetchData function
            fetchData();
        }, []);

        return (
            <>
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    {/* Product Management */}
                    <div className="flex space-x-5 justify-center align-middle items-center px-5">
                        <CardInsideProductManagement cardTitle="Product Owned" cardValue={120} />
                        <CardInsideProductManagement cardTitle="Product Owned" cardValue={20} />
                        <CardInsideProductManagement cardTitle="Product Owned" cardValue={120} />
                    </div>

                    <div className="flex space-x-5 p-5 font-bold">
                        Details
                    </div>

                    <div className="px-4 w-full justify-center"> {/* Updated this line */}

                        <Tabs aria-label="Dynamic tabs" items={tabs} radius='lg' color='primary' fullWidth>
                            {(item) => (
                                <Tab key={item.id} title={item.label}>
                                    <Card>
                                        <div className="flex space-x-5 p-5 font-bold">
                                            Details
                                        </div>
                                        <div className="flex justify-center items-center">
                                            {isLoading ? (
                                                <LoadingIndicator />
                                            ) : (
                                                <CardBody className='flex'>
                                                    {item.content}
                                                </CardBody>
                                            )}
                                        </div>
                                    </Card>
                                </Tab>
                            )}
                        </Tabs>
                    </div>

                    <div className="flex-col">
                        <div className="px-5 ">

                        </div>
                    </div>

                    <div className="mb-4"></div>
                </div>
            </>
        );


    }

    function CardInsideProductManagement({ cardTitle, cardValue }) {
        return (
            <div className="p-6 text-gray-900 dark:text-gray-100 align-center justify-center item-center border border-red-700 rounded-lg">
                {cardTitle ? cardTitle : "Product Owned"}
                <div className='text-4xl font-bold'>
                    {cardValue ? cardValue : 0}
                </div>
            </div>
        );
    }

    // Card Component Should be Here
    function ButtonComponent({ title }) {
        const [state, setState] = React.useState(0);

        const handleClick = () => {
            setState(state + 1);
        }

        const handleClickMin = () => {
            if (state > 0) {
                setState(state - 1);
            } else {
                setState(0);
            }
        }

        return (
            <>
                <div className="flex space-x-5 justify-center items-center">
                    <Button color="primary" onPress={handleClick}>{title ? title : "Undescribed Button"}</Button>

                    <p className='light:text-red-700 dark:text-white'>
                        {state > 0 ? `You clicked ${state} times` : "0"}
                    </p>

                    <Button color="primary" onPress={handleClickMin}>{"-" ?? "Undescribed Button"}</Button>

                    <Button variant='ghost' onPress={() => setState(0)}>Reset</Button>
                </div>
            </>
        );
    }

    function LoadingIndicator() {
        const [value, setValue] = React.useState(0);

        React.useEffect(() => {
            const interval = setInterval(() => {
                setValue((v) => (v >= 100 ? 0 : v + 10));
            }, 500);

            return () => clearInterval(interval);
        }, []);
        return (
            <div className="p-5">
                <CircularProgress
                    aria-label="Loading..."
                    size="lg"
                    value={value}
                    color="danger"
                    showValueLabel={true}
                />
            </div>
        )
    }
}


function TableView({ data }) {
    return (
        <div className='my-4 px-4'>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Product Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Price</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Description</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
                    {data.map(product => (
                        <tr key={product.id} className="hover:bg-gray-100 dark:hover:bg-gray-800">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900 dark:text-gray-200">{product.product_name}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900 dark:text-gray-200">IDR {product.product_price}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-pre-wrap">
                                <div className="text-sm text-gray-900 dark:text-gray-200">{product.product_description}</div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
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
        <div className='dark:text-white text-center my-4 px-4 space-y-4'>
            <div className="flex justify-center space-x-4">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={e => {
                        directSearch(e);
                    }}
                    className="border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                />
                <button
                    onClick={handleFilter}
                    className="bg-gray-500 text-white rounded-md px-4 py-2 focus:outline-none hover:bg-gray-600"
                >
                    Filter
                </button>
            </div>
            <ProductButtonList />
            {filteredData.length > 0 ?
                filteredData.map(product => (
                    <Link key={product.id} href={`/product/${product.id}`}>
                        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-md overflow-hidden">
                            <div className=''>
                                <div className="p-4 w-auto">
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{product.product_name}</h3>
                                    <p className="text-gray-600 dark:text-gray-400">IDR {product.product_price}</p>
                                    <p className="text-gray-700 dark:text-gray-300 mt-2 whitespace-pre-wrap">{product.product_description}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
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
    return <div className='space-x-2 mx-2 space-y-2 flex justify-start items-end flex-wrap'>
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

