<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\v1\LoginController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/





Route::group(['namespace' => 'api'], function () { // Api控制器文件放在Api目录下

    Route::group(['prefix' => 'v1', 'namespace' => 'v1'], function () { // v1版本



        Route::group(['prefix' => 'user'], function () { // v2版本

            Route::middleware('auth:sanctum')->get('/', function (Request $request) {
                return $request->user();
            });

            Route::middleware('auth:sanctum')->get('athenticated', function () {
                return true;
            });

            //登入
            Route::post('login', [LoginController::class, 'login']);

            //登出
            Route::post('logout', [LoginController::class, 'logout']);
        });
    });

    Route::group(['prefix' => 'v2', 'namespace' => 'V2'], function () { // v2版本

    });
});
