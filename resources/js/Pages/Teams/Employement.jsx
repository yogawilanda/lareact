import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Button } from "@nextui-org/react";
import React from 'react';
import { Link } from '@inertiajs/react';

// tabs purpose
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";

// Progress Indicator Page From NextUI
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
            header={<h2 className="text-xl font-semibold leading-tight text-center text-gray-800 dark:text-gray-200">{title ? title : "Untitled"}</h2>}
        >
            <div className="py-0">
                <Head title={title ? title : "Untitled"} />

                {/* Main Content Page */}
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="p-5 overflow-hidden sm:m-5 dark:bg-gray-800 sm:rounded-md will-change-transform">

                        <ProductSection />
                    </div>
                </div>

                {/* Notification That should be pop up if button from Main Content is interacted */}
                <NotificationComponentUI />
            </div>

        </AuthenticatedLayout>
    );


    function EmployeementContent({ header, content, price, userStatus }) {
        return (
            <div className="my-2 space-y-5">
                <Card color="primary">
                    <CardHeader className='text-2xl font-bold'>
                        {header ? header : "Nama Pegawai"}
                    </CardHeader>
                    <CardBody>
                        {/* Primary */}
                        <div className='flex items-center justify-evenly'>
                            <div className="text-gray-900 dark:text-gray-100">{content ? content : "Foto Pegawai"}</div>
                            <div className="flex-col ml-7">
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
                // Simulate an API call or data fetching 3 seconds
                await new Promise(resolve => setTimeout(resolve, 3000));

                // Set loading to false when data is fetched
                setIsLoading(false);
            };

            // Call the fetchData function
            fetchData();
        }, []);

        return (
            <>
                <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                    <h1 className='p-4 text-2xl font-bold'>Data Karyawan</h1>

                    <div className="flex items-center justify-center px-5 space-x-5 align-middle">
                        <CardInsideProductManagement cardTitle="Total Pegawai" cardValue={12} />
                        <CardInsideProductManagement cardTitle="Total Aktif" cardValue={3} />
                        <CardInsideProductManagement cardTitle="Total Inaktif" cardValue={9} />
                    </div>

                    <div className="flex p-5 space-x-5 font-bold">
                        Details
                    </div>

                    <div className="justify-center w-full px-4">
                        {/* Updated this line */}


                        <Tabs aria-label="Dynamic tabs" items={tabs} radius='lg' color='primary' fullWidth>
                            {(item) => (
                                <Tab key={item.id} title={item.label}>
                                    <Card>
                                        <div className="flex p-5 space-x-5 font-bold">
                                            Details
                                        </div>
                                        <div className='px-4'>
                                            <Button variant='solid' color='primary'>
                                                <Link
                                                    className='text-white'
                                                    href={route('teams.create')}
                                                    content='Daftarkan Pegawai'
                                                >
                                                    {'Daftarkan Pegawai'}
                                                </Link>
                                            </Button>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            {/* Just in case things done, use this to implement lazy load */}
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
                    <div className="flex-col px-5 mb-4"></div>
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

    //? buat ini hanya muncul ketika tombol di tekan
    function NotificationComponentUI() {
        return (
            <div className='fixed bottom-0 y-3 text-center flex items-center justify-center h-[60px] w-full bg-red-700 text-white'>
                Notifikasi Disini
            </div>
        );
    }

    //? Card Component Should be Here
    function ButtonComponent({ title }) {
        const [state, setState] = React.useState(0);

        const addButtonController = () => {
            setState(state + 1);
        }

        const minusButtonController = () => {
            if (state > 0) {
                setState(state - 1);
            } else {
                setState(0);
            }
        }

        return (
            <>
                <div className="flex items-center justify-center space-x-5">
                    <Button color="primary" onClick={addButtonController}>{title ? title : "+"}</Button>
                    {/* <Button color="primary" onPress={handleClick}>{title ? title : "+"}</Button> */}

                    <p className='light:text-red-700 dark:text-white px-[12px]'>
                        {state > 0 ? `${state}` : "0"}
                    </p>
                    <Button color="primary" onPressChange={minusButtonController}>{"-" ?? "Undescribed Button"}</Button>
                    {/* <Button color="primary" onPress={handleClickMin} onPressChange={handleClickMin}>{"-" ?? "Undescribed Button"}</Button> */}


                    <Button variant='ghost' onPress={() => setState(0)}>Reset</Button>
                </div>
            </>
        );
    }

    //? Fake Loading to imitate load bunch amount of data
    function MockLoadingIndicator() {
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

