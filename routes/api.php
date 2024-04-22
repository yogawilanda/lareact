<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\SalesController;
use App\Http\Controllers\TransactionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('products')->group(function () {
    Route::get('/', [ProductController::class, 'indexapi']);
    Route::post('/store', [ProductController::class, 'storeapi']);
    Route::get('/{id}', [ProductController::class, 'showapi']);
    Route::put('/update/{id}', [ProductController::class, 'updateapi']);
    Route::delete('/delete/{id}', [ProductController::class, 'destroyapi']);
});

// Route::prefix('sales')->group(function () {
//     Route::get('/', [SalesController::class, 'indexapi']);
//     Route::post('/store', [SalesController::class, 'storeapi']);
//     Route::get('/show/{id}', [SalesController::class, 'showapi']);
//     Route::put('/update/{id}', [SalesController::class, 'updateapi']);
//     Route::delete('/delete/{id}', [SalesController::class, 'destroyapi']);
// });

Route::prefix('transactions')->group(function () {
    Route::get('/', [TransactionController::class, 'index']);
    Route::post('/store', [TransactionController::class, 'store']);
    Route::get('/show/{id}', [TransactionController::class, 'show']);
    Route::put('/update/{id}', [TransactionController::class, 'update']);
    Route::delete('/delete/{id}', [TransactionController::class, 'destroy']);
});