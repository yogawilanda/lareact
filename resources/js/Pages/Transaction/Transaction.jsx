// Seluruh Proses Transaksi Dilakukan Disini

// Penjualan

// Controller Jumlah Penjualan

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Button } from "@nextui-org/react";
import React from 'react';
// tabs purpose
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";

import { CircularProgress } from "@nextui-org/react";

function ControllerPenjualan({ title }) {
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

// Form Input Data Pemesanan
// Bentuk pemesanan dalam bentuk card yang diberikan controller jumlah pemesanan
// Display data berupa nama produk, harga, stok tersedia, jumlah stok yang dipesan, Pembeli
// Pembeli secara default di set menjadi guest.
function formPenjualan() {
    <form onSubmit={submit}>
        <div className='space-y-4 mx-8'>
            <InputLabel title="Nama Produk" htmlFor="name">
                Nama Produk
            </InputLabel>
            <TextInput className="mt-1 block w-full"
                id="name"
                type="text"
                name="name"
                value={data.name}
                onChange={(e) => setData("name", e.target.value)}
            />

            {/* Informasi Autofill statis : Nama Pemilik, ID Pemilik, dan ID Toko */}
            <div className='flex gap-4'>
                <div>
                    <InputLabel title="Pemilik Toko" htmlFor="userowner">
                        Pemilik Toko
                    </InputLabel>
                    <TextInput className="mt-1 block w-full bg-neutral-300 text-neutral-500"
                        id="userowner"
                        type="text"
                        // disabled
                        disabled
                        name="userowner"
                        value={auth.user.name}
                        onChange={(e) => setData("userowner", e.target.value)}
                    />
                </div>

                <div>
                    <InputLabel title="Nama Produk" htmlFor="name">
                        ID Pemilik
                    </InputLabel>
                    <TextInput className="mt-1 block w-full bg-neutral-300 text-neutral-500"
                        id="name"
                        type="text"
                        // disabled
                        disabled
                        name="name"
                        value={auth.user.id}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                </div>

                <div>
                    <InputLabel title="idtoko" htmlFor="idtoko">
                        ID Toko
                    </InputLabel>
                    <TextInput className="mt-1 block w-full bg-neutral-300 text-neutral-500"
                        id="idtoko"
                        type="text"
                        // disabled
                        disabled
                        name="idtoko"
                        value={"001"} // ! Hardcoded
                        onChange={(e) => setData("idtoko", e.target.value)}
                    />
                </div>
            </div>


            <InputLabel title="Kuantitas Produk" htmlFor="quantity">
                Kuantitas Produk
            </InputLabel>
            <TextInput className="mt-1 block w-full"
                id="quantity"
                type="number"
                name="quantity"
                value={data.quantity}
                onChange={(e) => setData("quantity", e.target.value)}
            />

            <InputLabel title="Harga Produk" htmlFor="price">
                Harga Produk (Dalam Rupiah)
            </InputLabel>
            <TextInput className="mt-1 block w-full"
                id="price"
                type="text"
                name="price"
                value={data.price}
                onChange={(e) => setData("price", e.target.value)}
            >

            </TextInput>

            {/* SKU / Kode Produk Universal */}
            <InputLabel title="skucode" htmlFor="skucode">
                Kode Produk Universal (SKU)
            </InputLabel>
            <TextInput className="mt-1 block w-full"
                id="skucode"
                type="text"
                name="skucode"
                value={data.sku}
                onChange={(e) => setData("skucode", e.target.value)}
            />
        </div>

        <div className="flex items-center justify-end mt-4 mx-4">
            <PrimaryButton type="submit" className="ms-4" disabled={processing}>
                Tambahkan Produk
            </PrimaryButton>
        </div>
    </form>
}

function PopUpKonfirmasiPenjualan({ user = "Budi", transaction = 1 }) {

    return (
        <div className='h-40 w-40 justify-center items-center align-middle dark:text-white z-10'>
            Konfirmasi penjualan

            <div className='font-semibold'>Ringkasan order</div>

            <div>Pemesan</div>
            <div>Nama Pemesan: {user ? user : "Anonim"}</div>

            <div>Jumlah Pemesanan</div>
            {/* <div>{user.order.product ? user.order.product : 0}</div> */}

            <div>Total harga: </div>
            <div>
                {
                    (transaction.order ? transaction.order : 2)
                    // *
                    // (transaction.price ? transaction.price : 19)
                }
            </div>
            <div className='flex'>
                <Button>Konfirmasi penjualan</Button>
                <Button>Batalkan</Button>
            </div>
        </div>

    );
}


export default function tampilanTransaksi({ auth, data }) {
    let title = "Perniagaan";

    console.log(data);
    return (

        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className='font-semibold text-large dark:text-white'>{title}</h2>}
        >
            <Head title={title} />
            {/* <PopUpKonfirmasiPenjualan /> */}
            {/* <ControllerPenjualan title={"tambahkan"} /> */}
            <div>
                <ProductSection />
            </div>

        </AuthenticatedLayout>

    );

    function CardsContent({ header, content, price, data, max_qty, max_value = 10 }) {
        console.log(data);

        max_qty = max_value ? max_value : 10;

        const [quantities, setQuantities] = React.useState(data.map(() => 1));

        const incrementQuantity = (index) => {
            const newQuantities = [...quantities];
            newQuantities[index] += 1;
            setQuantities(newQuantities);

            if (newQuantities[index] > max_qty) {
                newQuantities[index] = max_qty;
            }
        };

        const decrementQuantity = (index) => {

            // if the quantity is already 0, do nothing
            const newQuantities = [...quantities];
            newQuantities[index] -= 1;

            setQuantities(newQuantities);
            if (newQuantities[index] < 1) {
                newQuantities[index] = 1;
            }
        }

        return (
            <div className="space-y-5 my-2">
                {data.map((item, index) => (
                    <div key={index} className='w-full'>
                        <Card className='px-4'>
                            <CardHeader className='font-bold text-2xl'>{item.product_name ? item.product_name : "Nama Produk"}</CardHeader>
                            <CardBody>
                                {/* Primary */}
                                <div className='flex justify-between items-center'>
                                    <div className="mr-7 flex-col">
                                        <div className="text-gray-900 dark:text-gray-100">{"Price: " + item.product_price}</div>
                                        {/* Show the quantity for each product */}
                                        <div className="text-gray-900 dark:text-gray-100">{"Quantity: " + quantities[index]}</div>
                                        <div className="text-gray-900 dark:text-gray-100">{"Total: " + quantities[index] * item.product_price}</div>
                                    </div>
                                    <div className="ml-auto space-x-5">
                                        {/* Button for incrementing quantity */}
                                        <Button onPress={() => incrementQuantity(index)}>
                                            <span>+</span> {/* Plus sign */}
                                        </Button>
                                        <Button
                                            onPress={() => decrementQuantity(index)}>
                                            <span>-</span> {/* Plus sign */}
                                        </Button>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                ))}
            </div>
        );
    }

    function ProductSection() {
        const [isLoading, setIsLoading] = React.useState(true);

        let tabs = [
            {
                id: "Aktif",
                label: "Aktif",
                content: <>
                    <CardsContent data={data} />
                </>
            },
            {
                id: "Inaktif",
                label: "Inaktif",
                content: <>
                    <CardsContent data={data} />
                    <CardsContent data={data} />
                    <CardsContent data={data} />
                    <CardsContent data={data} />
                    <CardsContent data={data} />
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
                await new Promise(resolve => setTimeout(resolve, 500));

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
                    <div className="flex space-x-4 justify-start align-middle items-center p-5">
                        <CardInsideProductManagement cardTitle="Terjual" cardValue={120} />
                        <CardInsideProductManagement cardTitle="Total" cardValue={20} />

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
            <div className="flex-col p-4 text-gray-900 dark:text-gray-100 align-center justify-between items-start border border-red-700 rounded-lg h-200">
                {cardTitle ? cardTitle : "Product Owned"}
                <div className='text-4xl font-bold w-[100px] h-[40px]'>
                    {cardValue ? cardValue : 0}
                </div>
            </div>
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