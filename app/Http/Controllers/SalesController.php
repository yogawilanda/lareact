<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SalesController extends Controller
{
    public function index()
    {
        return Inertia::render('Sales');
    }

    public function create()
    {
        return Inertia::render('SalesCreate');
    }
}
