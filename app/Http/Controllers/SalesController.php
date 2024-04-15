<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SalesController extends Controller
{
    public function index()
    {
        return Inertia::render('Transaction/Sales');
    }

    public function create()
    {
        return Inertia::render('SalesCreate');
    }

    public function penjualan()
    {

        $data = Product::all();
        return Inertia::render(
            'Transaction/Transaction',

            [
                "data" => $data
            ]
        );
    }
}
