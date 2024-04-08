import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Button, link } from "@nextui-org/react";
import React from 'react';
// tabs purpose
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import { Link } from '@nextui-org/react';
import { ButtonGroup } from '@nextui-org/react';

import { CircularProgress } from "@nextui-org/react";
import QuantityButton from '@/Components/QuantityButton';

import BottomNavBar from '@/Components/BottomNavBar';


export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <div className="">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="px-6 text-gray-900 dark:text-gray-100">
                            Halo, apa yang ingin anda lakukan hari ini?
                            <div className="text-4xl font-semibold color-red-700">
                                {auth.user.name}
                            </div>

                            <div className='flex py-4 space-x-3'>

                                <Button
                                    variant='bordered'
                                >
                                    <Link
                                        href={route('sales')}
                                    >
                                        Perniagaan
                                    </Link>
                                </Button>

                                <Button
                                    onPress={""}
                                    className=''
                                    color="primary"
                                >
                                    Stok Barang
                                </Button>

                                <Button
                                    onPress={() => console.log("pressed")}
                                    color="primary"
                                >
                                    Lihat Transaksi
                                </Button>


                            </div>
                        </div>
                        <ProductSection />
                    </div>
                </div>
                <div className='mb-10'>
                </div>
            </div>
        </AuthenticatedLayout>
    );


    function CardsContent({ header, content, price }) {
        return (
            <div className="space-y-5 my-2">
                <Card>
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
                await new Promise(resolve => setTimeout(resolve, 1000));

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
                    <div className="flex space-x-4 justify-center align-middle items-center p-5">
                        <CardInsideProductManagement cardTitle="Product Owned" cardValue={120} />
                        <CardInsideProductManagement cardTitle="Product Owned" cardValue={20} />
                        <CardInsideProductManagement cardTitle="Product Owned" cardValue={120} />
                    </div>

                    <div className="flex space-x-5 p-5 font-semibold dark:text-white">
                        Details
                    </div>

                    <div className="px-4 w-full justify-center"> {/* Updated this line */}
                        <Tabs
                            aria-label="Dynamic tabs"
                            items={tabs}
                            radius='lg'
                            color='default'
                            fullWidth
                            variant='solid'
                        >
                            {

                                (item) => (
                                    <Tab key={item.id} title={item.label}>
                                        <Card>
                                            <div className="flex justify-center items-center">


                                                {isLoading ? (
                                                    <LoadingIndicator />
                                                ) : (
                                                    // Render your content when not loading
                                                    <>
                                                        <CardBody className='flex'>
                                                            {item.content}
                                                        </CardBody>
                                                    </>
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


