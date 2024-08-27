import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react';
import { Head, useForm } from '@inertiajs/react';

export default function Create({ auth }) {
    // // console.log(auth);
    // const { data, setData, processing, post } = useForm({
    //     id: auth.user.id,
    //     name: '',
    //     quantity: '',
    //     price: '',
    //     skucode: '',
    // });

    // const submit = (e) => {
    //     e.preventDefault();
    //     post(route('sales.store'));
    // };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Penambahan Toko</h2>}
        >
            <Head title="Penambahan Produk" />
            Hello

        </AuthenticatedLayout>
    )
}
