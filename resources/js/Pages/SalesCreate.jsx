import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import Footer from '@/Components/Footer';

// Todo List:
// 1. Implementasi Form Input Produk
// 2. Implementasi Submit Form
// 3. Implementasi Penanganan Error
// 4. Implementasi Penanganan Loading
// 5. Implementasi Penanganan Redirect
// 6. Implementasi Penanganan Notifikasi
// 7. Implementasi Penanganan Autofill

export default function SalesCreate({ auth }) {
    // console.log(auth);
    const { data, setData, processing, post } = useForm({
        id: auth.user.id,
        name: '',
        quantity: '',
        price: '',
        skucode: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('sales.store'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Penambahan Produk</h2>}
        >
            <Head title="Penambahan Produk" />
            <div >
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
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
                    <div className="mb-4"></div>
                </div>
            </div>
            <div className='relative'>
                {/* <Footer /> */}
            </div>
        </AuthenticatedLayout>
    )
}
