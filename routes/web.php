<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SalesController;
use App\Models\Product;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/* 
| ------ Index/Home Route ------- | 
| Rute ini akan menampilkan halaman utama dari aplikasi, terlepas dari user yang sudah login atau tidak.
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


/* 
| ------ Dashboard Route ------- | 
| Rute ini akan menampilkan halaman dashboard dari aplikasi.
| ---------------------------------
| User harus login terlebih dahulu untuk dapat mengakses halaman ini.
*/
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


/* 
| ------ Product Management Route ------- | 
*/
Route::get('/productmanagement', function () {
    $data = Product::all();
    return Inertia::render('ProductManagement', [
        "data" => $data
    ]);
})->middleware(['auth', 'verified'])->name('productmanagement');

/* 
| ------ Team Route ------- | 
| Rute untuk mengatur tim yang ada di perusahaan.
| Menambahkan, menghapus, mengedit tim.
| Jika user tidak memiliki authorship maka tidak dapat mengakses fitur modifikasi tim.
*/
Route::get('/teams', function () {
    return Inertia::render('Employement');
})->middleware(['auth', 'verified'])->name('teams');

/* 
| ------ Sales Route With Controller ------- | 
*/
Route::get(
    '/sales',
    [SalesController::class, 'index']
)->middleware(['auth', 'verified'])->name('sales');


/* 
| ------ Auth Route ------- | 
*/
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
