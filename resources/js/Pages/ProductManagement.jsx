import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Button, Link } from "@nextui-org/react";
import React from 'react';
// tabs purpose
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";

import { CircularProgress } from "@nextui-org/react";


export default function Dashboard({ auth, data }) {

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
                        <div className='space-x-2 mx-2 space-y-2 flex justify-start items-end flex-wrap'>
                            <Button
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
                        </div>

                        {/* <ProductSection /> */}
                        <div className='py-4 px-4 space-y-4'>
                            {
                                data.map(product => (
                                    <div key={product.id} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-md overflow-hidden">
                                        <div className=''>
                                            <img src={product.product_image} alt={product.product_name} className="w-full h-56 object-cover " />
                                            <div className="p-4">
                                                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{product.product_name}</h3>
                                                <p className="text-gray-600 dark:text-gray-400">${product.product_price}</p>
                                                <p className="text-gray-700 dark:text-gray-300 mt-2">{product.product_description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

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


