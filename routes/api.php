<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ResumeController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Local REST API endpoints for seamless frontend communication.
|
*/

Route::prefix('v1')->group(function () {
    Route::get('/resumes', [ResumeController::class, 'index']);
    Route::post('/resumes', [ResumeController::class, 'store']);
    Route::get('/resumes/{resume}', [ResumeController::class, 'edit']);
    Route::put('/resumes/{resume}', [ResumeController::class, 'update']);
    Route::delete('/resumes/{resume}', [ResumeController::class, 'destroy']);
    Route::post('/resumes/{resume}/clone', [ResumeController::class, 'clone']);
    Route::post('/resumes/{resume}/pdf', [ResumeController::class, 'exportPdf']);
    Route::post('/upload/avatar', [ResumeController::class, 'uploadAvatar']);
});
