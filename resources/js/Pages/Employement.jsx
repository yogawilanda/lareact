import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Button } from "@nextui-org/react";
import React from 'react';
// tabs purpose
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";

import { CircularProgress } from "@nextui-org/react";

// Employee UI
// 1 Data To check as grid to see how much user have been employed
// Container that had 
// a. Input = Cari Karyawan.
// b. Filter.
// c. Chips/cookies to show the filter.
// d. Listile that has user data.
// Floating button to add new Employee.


export default function EmployementPage({ auth }) {
    const title = "Employement";
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight text-center">{title ? title : "Untitled"}</h2>}
        >
            <div className="py-0">
                <Head title={title ? title : "Untitled"} />
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-5 sm:m-5  dark:bg-gray-800 overflow-hidden  sm:rounded-md will-change-transform">
                        {/* 1.  */}
                        {/* <Title /> */}

                        {/* 1. a */}
                        <ProductSection />
                        {/* 1. b */}

                        {/* 1. c */}

                        {/* 1. d */}

                    </div>

                </div>
                <Status />
            </div>

        </AuthenticatedLayout>
    );


    function EmployeementContent({ header, content, price, userStatus }) {
        return (
            <div className="space-y-5 my-2">
                <Card color="primary">
                    <CardHeader className='font-bold text-2xl'>
                        {header ? header : "Nama Pegawai"}
                    </CardHeader>
                    <CardBody>
                        {/* Primary */}
                        <div className='flex justify-evenly items-center'>
                            <div className="text-gray-900 dark:text-gray-100">{content ? content : "Foto Pegawai"}</div>
                            <div className="ml-7 flex-col">
                                <div className="text-sm text-gray-900 dark:text-gray-100">{userStatus ? userStatus : "unknown"}</div>
                                {/* <div className="text-sm text-gray-900 dark:text-gray-100">Status</div> */}
                            </div>
                            <div className="ml-auto" >
                                {/* Add your arrow or any other icon here */}
                                <Button onPress={() => console.log("pressed")}>
                                    {/* <span>&rarr;</span> */}
                                    Informasi
                                </Button>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <ButtonComponent />
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
                id: "On-site",
                label: "On-site",
                content: <>
                    <EmployeementContent userStatus={"online"} />
                    <EmployeementContent userStatus={"online"} />
                    <EmployeementContent userStatus={"online"} />
                    <EmployeementContent userStatus={"online"} />
                </>
            },
            {
                id: "Inaktif",
                label: "Inaktif",
                content: <>
                    <EmployeementContent userStatus={"Offline"} />
                    <EmployeementContent userStatus={"Offline"} />
                    <EmployeementContent userStatus={"Offline"} />
                    <EmployeementContent userStatus={"Offline"} />
                    <EmployeementContent userStatus={"Offline"} />
                </>
            },
            {
                id: "Purna",
                label: "Purna",
                content: <>
                    <EmployeementContent userStatus={"7 Jan 23"} />
                    <EmployeementContent userStatus={"7 Jan 23"} />
                    <EmployeementContent userStatus={"7 Jan 23"} />

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
                    <h1 className='font-bold text-2xl p-4'>Data Karyawan</h1>
                    {/* Product Management */}

                    <div className="flex space-x-5 justify-center align-middle items-center px-5">
                        <CardInsideProductManagement cardTitle="Total Pegawai" cardValue={12} />
                        <CardInsideProductManagement cardTitle="Total Aktif" cardValue={3} />
                        <CardInsideProductManagement cardTitle="Total Inaktif" cardValue={9} />
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
                                            {/* {isLoading ? (
                                                <LoadingIndicator />
                                            ) : (
                                                <CardBody className='flex'>
                                                    {item.content}
                                                </CardBody>
                                            )} */}
                                            <CardBody className='flex'>
                                                {item.content}
                                            </CardBody>
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

    // todo: buat ini hanya muncul ketika tombol di tekan
    function Status() {
        return (
            <div className='fixed bottom-0 y-3 text-center flex items-center justify-center h-[60px] w-full bg-red-700 text-white'>
                Notifikasi Disini
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
                    <Button color="primary" onClick={handleClick}>{title ? title : "+"}</Button>
                    {/* <Button color="primary" onPress={handleClick}>{title ? title : "+"}</Button> */}

                    <p className='light:text-red-700 dark:text-white px-[12px]'>
                        {state > 0 ? `${state}` : "0"}
                    </p>
                    <Button color="primary" onPressChange={handleClickMin}>{"-" ?? "Undescribed Button"}</Button>
                    {/* <Button color="primary" onPress={handleClickMin} onPressChange={handleClickMin}>{"-" ?? "Undescribed Button"}</Button> */}


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


function Title() {
    return <Card>
        <CardHeader className='font-bold text-2xl'>
            Data Karyawan
        </CardHeader>
    </Card>;
}

