<?php

namespace App\Http\Controllers;

use App\Models\Team;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TeamsController extends Controller
{
    public function index()
    {
        return Inertia::render('Teams', []);
    }

    public function teamManagementPage()
    {
        return Inertia::render('Teams',[]);
    }

    // get all
    public function indexapi()
    {
    }

    // add new team through api
    public function storeapi(Request $request)
    {
    }

    // show single team through api
    public function showapi($id)
    {
    }

    // update team through api
    public function updateapi(Request $request, $id)
    {
    }

    // delete team through api
    public function destroyapi($id)
    {
    }

    public function success_response($data)
    {
    }
}
