import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Button } from "@nextui-org/react";
import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

export default function SalesCreate({ auth }) {
    const { data, setData, processing, post } = useForm({
        name: '',
        quantity: '',
        price: '',
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
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">

                        <form onSubmit={submit}>
                            <div className='space-y-4 mx-4'>
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

                                <InputLabel title="Kuantitas Produk" htmlFor="quantity">
                                    Kuantitas Produk
                                </InputLabel>
                                <TextInput className="mt-1 block w-full"
                                    id="quantity"
                                    type="text"
                                    name="quantity"
                                    value={data.quantity}
                                    onChange={(e) => setData("quantity", e.target.value)}
                                />

                                <InputLabel title="Harga Produk" htmlFor="price">
                                    Harga Produk
                                </InputLabel>
                                <TextInput className="mt-1 block w-full"
                                    id="price"
                                    type="text"
                                    name="price"
                                    value={data.price}
                                    onChange={(e) => setData("price", e.target.value)}
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
            </div>
        </AuthenticatedLayout>
    )
}
