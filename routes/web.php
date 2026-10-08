<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ResumeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Local single session / zero-config routing served via Inertia.js or React.
|
*/

Route::get('/', [ResumeController::class, 'index'])->name('home');
Route::get('/resumes/{resume}/edit', [ResumeController::class, 'edit'])->name('resumes.edit');
Route::get('/resumes/{resume}/pdf', [ResumeController::class, 'exportPdf'])->name('resumes.pdf');
