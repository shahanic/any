<?php

use Illuminate\Support\Facades\Route;
use App\Models\Student;
use App\Http\Controllers\StudentController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route:: get('/app', function (){
    return view("app");
});

 
Route::post('/save-student',[StudentController::class, 'saveStudent']);
Route::post('/get-students',[StudentController::class, 'getStudents']);
Route::post('/delete-students',[StudentController::class, 'deleteStudents']);