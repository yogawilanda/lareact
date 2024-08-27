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

    //! ini harusnya di product controller
    public function store(Request $request) {
        $data = $request->validate([
            'name' => 'required',
            'quantity' => 'required',
            'price' => 'required',
            'skucode' => 'required',
        ]);

        $data['user_id'] = auth()->user()->id;

        //? 'table_names' => 'user inputs'
        $productData = [
            'product_name' => $data['name'],
            'quantity' => $data['quantity'],
            'product_price' => $data['price'],
            'product_category' => "drink",
            'product_sku' => $data['skucode'],
            'user_id' => $data['user_id'],
        ];

        $product = Product::create($productData);

        // todo: redirect back to product list
        // return redirect()->route('transaction.index');
    }
}
