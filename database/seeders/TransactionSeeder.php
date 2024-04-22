<?php

namespace Database\Seeders;

use App\Models\Transaction;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TransactionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Transaction::create(
            [
                'product_id' => 1,
                'user_id' => 1,
                'quantity' => 1,
                'total' => 10000,
                'status' => 'success',
            ]
        );
    }
}
