<?php

namespace App\Http\Controllers;
//! jika gagal, mungkin karena tidak menggunakan Request ke dalam parameter
use Illuminate\Http\Request; 

class BaseController extends Controller
{   
    // jika sukses, tunjukan data dalam bentuk seperti ini
    public function success_response($data, $message = 'Success', $code = 200)
    {
        return response()->json([
            'status' => 'success',
            'message' => $message,
            'data' => $data
        ], $code);
    }

    // jika gagal, tunjukan pesan error
    public function error_response($message = 'Error', $code = 400)
    {
        return response()->json([
            'status' => 'error',
            'message' => $message
        ], $code);
    }

    // jika kode error 404
    public function not_found_response($message = 'Not Found')
    {
        return $this->error_response($message, 404);
    }

    // jika kode error 401
    public function unauthorized_response($message = 'Unauthorized')
    {
        return $this->error_response($message, 401);
    }

    // jika kode error 403
    public function forbidden_response($message = 'Forbidden')
    {
        return $this->error_response($message, 403);
    }

    // jika kode error 422
    public function unprocessable_entity_response($message = 'Unprocessable Entity')
    {
        return $this->error_response($message, 422);
    }

    // jika kode error 500
    // Internal Server Error = server mengalami kesalahan/ Server mati?
    public function internal_server_error_response($message = 'Internal Server Error')
    {
        return $this->error_response($message, 500);
    }

    // jika kode error 503
    // Service Unavailable = server tidak dapat menangani permintaan
    public function service_unavailable_response($message = 'Service Unavailable')
    {
        return $this->error_response($message, 503);
    }

    // jika kode error 504
    // Gateway Timeout = server tidak merespon dalam waktu yang ditentukan
    public function gateway_timeout_response($message = 'Gateway Timeout')
    {
        return $this->error_response($message, 504);
    }

    // jika kode error 429
    // Too Many Requests = terlalu banyak permintaan
    public function too_many_requests_response($message = 'Too Many Requests')
    {
        return $this->error_response($message, 429);
    }
}
