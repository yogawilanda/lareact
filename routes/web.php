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
    return Inertia::render('DashboardNew');
})->middleware(['auth', 'verified'])->name('dashboard');


/*
| ------ Product Management Route ------- |
*/

// buatkan prefix saja, terlalu banyak nama yang sama
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/productmanagement', function () {
        $data = Product::all();
        return Inertia::render('ProductManagement', [
            "data" => $data
        ]);
    })->name('productmanagement');

    //jika tidak berhasil ganti ProductManagement/Create menjadi ProductManagement.Create (aturan penamaan file)
    Route::get('/productmanagement/create', function () {
        return Inertia::render('ProductManagement/Create');
    })->name('productmanagement.create');

    Route::post('/productmanagement', function () {
        $data = request()->validate([
            'name' => 'required',
            'price' => 'required',
            'stock' => 'required',
        ]);

        Product::create($data);

        return redirect()->route('productmanagement');
    })->name('productmanagement.store');

    Route::get('/productmanagement/{id}/edit', function ($id) {
        $data = Product::find($id);
        return Inertia::render('ProductManagement/Edit', [
            "data" => $data
        ]);
    })->name('productmanagement.edit');

    Route::patch('/productmanagement/{id}', function ($id) {
        $data = request()->validate([
            'name' => 'required',
            'price' => 'required',
            'stock' => 'required',
        ]);

        Product::find($id)->update($data);

        return redirect()->route('productmanagement');
    })->name('productmanagement.update');

    Route::delete('/productmanagement/{id}', function ($id) {
        Product::destroy($id);
        return redirect()->route('productmanagement');
    })->name('productmanagement.destroy');
});

// todo: pindahkan seluruh productmanagement kedalama group ini

Route::prefix('productmanagement')->group(
    // List of route dibuat disini
    function () {
    }
)->middleware(['auth', 'verified']);
/*
| ------ Team Route ------- |
| Rute untuk mengatur tim yang ada di perusahaan.
| Menambahkan, menghapus, mengedit tim.
| Jika user tidak memiliki authorship maka tidak dapat mengakses fitur modifikasi tim.
*/
Route::prefix("/teams")->middleware(['auth', 'verified'])->group(function () {
    Route::get('/', function () {
        return Inertia::render('Teams/Employement');
    })->name('teams');

    Route::get('/create', function () {
        return Inertia::render('Teams/Create');
    })->name('teams.create');
});


/*
| ------ Sales Route With Controller ------- |
*/
Route::group(['middleware' => ['auth', 'verified']], function () {
    //! Laporan penjualan (Penamaan jangan ambigu)
    Route::get('/sales', [SalesController::class, 'index'])->name('sales');

    // ? Penjualan view dibuatkan seperti kebutuhan, jangan terlalu membingungkan
    Route::get('/sales/order', [SalesController::class, 'penjualan'])->name('perniagaan');

    Route::get('/sales/create', [SalesController::class, 'create'])->name('sales.create');
    Route::post('/sales', [SalesController::class, 'store'])->name('sales.store');
    Route::get('/sales/{id}/edit', [SalesController::class, 'edit'])->name('sales.edit');
    Route::patch('/sales/{id}', [SalesController::class, 'update'])->name('sales.update');
    Route::delete('/sales/{id}', [SalesController::class, 'destroy'])->name('sales.destroy');
});

Route::prefix('sales')->group(
    // List of route dibuat disini.
    // todo: pindahkan seluruh rute dari sales ke dalam group ini
    function () {
    }
)->middleware(['auth', 'verified']);

/*
| ------ Auth Route ------- |
*/
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
