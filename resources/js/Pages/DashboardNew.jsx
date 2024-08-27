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
            header={<h2 className="text-xl font-semibold leading-tight text-center text-gray-800 dark:text-gray-200">Dashboard</h2>}
        >
            {/* <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Dashboard</h2>}
        > */}
            <Head title="Dashboard" />
            <div className="overflow-auto">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                        {/* <div className="px-6 text-gray-900 dark:text-gray-100">
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
                        </div> */}
                        <div id="card" className='flex flex-col justify-start gap-4 px-12 py-8 mx-5 rounded-lg bg-zinc-900 neutral sm:block lg:hidden md:hidden'>
                            {/* User Name */}
                            <div className='text-2xl font-semibold text-white'>
                                {auth.user.name.charAt(0).toUpperCase() + auth.user.name.slice(1) ?? "Undefined"}
                                <div className='text-sm font-light white'>
                                    {"Super Admin" ?? "Undefined"}
                                </div>
                            </div>

                            <div className='flex-col mt-14'>
                                <div className='font-normal text-white'>Saldo anda</div>
                                <div className='text-2xl font-semibold text-white '>Rp. 8.200.000</div>
                            </div>
                        </div>

                        <div id="onNonAuthorizedDevice" className='hidden h-24 py-4 text-center sm:hidden md:hidden lg:flex'>
                            Harap Akses menggunakan mobile saja
                        </div>

                        {/* Menu Ringkas dalam bentuk grid */}
                        <div className='flex flex-col justify-center gap-4 px-4 py-8 mx-2 rounded-lg item-center neutral sm:block lg:hidden md:hidden'>
                            <div className='font-semibold leading-6 dark:text-white'>
                                Menu ringkas
                            </div>

                            <div className='grid grid-cols-3 grid-rows-2 gap-4 ml-6'>
                                <div id="card" className='inline-flex items-center justify-center text-white border rounded bg-zinc-900 size-24'>
                                    Menu 1
                                </div>
                                <div id="card" className='inline-flex items-center justify-center text-white border rounded bg-zinc-900 size-24'>
                                    Menu 1
                                </div>
                                <div id="card" className='inline-flex items-center justify-center text-white border rounded bg-zinc-900 size-24'>
                                    Menu 1
                                </div>
                                <div id="card" className='inline-flex items-center justify-center text-white border rounded bg-zinc-900 size-24'>
                                    Menu 1
                                </div>
                                <div id="card" className='inline-flex items-center justify-center text-white border rounded bg-zinc-900 size-24'>
                                    Menu 1
                                </div>
                                <div id="card" className='inline-flex items-center justify-center text-white border rounded bg-zinc-900 size-24'>
                                    Menu 1
                                </div>
                            </div>
                        </div>
                        {/* <ProductSection /> */}
                    </div>
                </div>
                <div className='mb-10'>
                </div>
            </div>
        </AuthenticatedLayout>
    );


    function CardsContent({ header, content, price }) {
        return (
            <div className="my-2 space-y-5">
                <Card>
                    <CardHeader className='text-2xl font-bold'>
                        {header ? header : "Undefined"}
                    </CardHeader>
                    <CardBody>
                        {/* Primary */}
                        <div className='flex items-center justify-evenly'>
                            <div className="text-gray-900 dark:text-gray-100">{content ? content : "undefined"}</div>
                            <div className="flex-col ml-7">
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
                <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                    {/* Product Management */}
                    <div className="flex items-center justify-center p-5 space-x-4 align-middle">
                        <CardInsideProductManagement cardTitle="Product Owned" cardValue={120} />
                        <CardInsideProductManagement cardTitle="Product Owned" cardValue={20} />
                        <CardInsideProductManagement cardTitle="Product Owned" cardValue={120} />
                    </div>

                    <div className="flex p-5 space-x-5 font-semibold dark:text-white">
                        Details
                    </div>

                    <div className="justify-center w-full px-4"> {/* Updated this line */}
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
                                            <div className="flex items-center justify-center">


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
            <div className="justify-center p-6 text-gray-900 border border-red-700 rounded-lg dark:text-gray-100 align-center item-center">
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


