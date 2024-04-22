<?php

namespace App\Http\Controllers;

use App\Models\Product;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends BaseController
{
    /* ------ Web Controller Section ------- |
    | 
    */

    public function index()
    {
        $data = Product::all();
        return Inertia::render('ProductManagement', [
            "data" => $data
        ]);
    }

    public function productManagementPage()
    {
        $allData = Product::all();

        return Inertia::render(
            'ProductManagement',
            [
                'data' => $allData
            ]
        );
    }


    /* ------ API Controller Section ------- | 
    | 
    */

    // get all
    public function indexapi()
    {
        $data = Product::all();
        return $this->success_response($data);
    }

    // add new product through api
    public function storeapi(Request $request)
    {
        $data = new Product();
        $data->name = $request->name;
        $data->price = $request->price;
        $data->stock = $request->stock;
        $data->save();

        return $this->success_response($data);
    }

    // show single product through api
    public function showapi($id)
    {
        $data = Product::find($id);
        if ($data) {
            return $this->success_response($data);
        } else {
            return $this->not_found_response();
        }
    }

    // update product through api
    public function updateapi(Request $request, $id)
    {
        $data = Product::find($id);
        if ($data) {
            $data->product_name = $request->product_name;
            $data->product_price = $request->product_price ? $request->product_price : 0;
            $data->product_description = $request->product_description ? $request->product_description : '';
            $data->save();

            return $this->success_response($data);
        } else {
            return $this->not_found_response();
        }
    }
}
