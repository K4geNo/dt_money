<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TransactionController;
use App\Models\Category;
use App\Models\Transaction;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
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

Route::get('/', function () {
    return Inertia::render('Login', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/dashboard', function () {
    $user = Auth::user();

    return Inertia::render('Dashboard' , [
        'transactions' => $user->transactions,
        'categories' => Category::all()
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/report', function () {
    $user = Auth::user();
    return Inertia::render('Report', [
        'transactions' => $user->transactions
    ]);
})->middleware(['auth', 'verified'])->name('report');

Route::middleware('auth')->group(function () {

    // Define a constant for the "/profile" route path
    define('PROFILE_ROUTE', '/profile');

    Route::get(PROFILE_ROUTE, [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch(PROFILE_ROUTE, [ProfileController::class, 'update'])->name('profile.update');
    Route::delete(PROFILE_ROUTE, [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('transactions', TransactionController::class);
    Route::resource('categories', CategoryController::class);
});

require __DIR__.'/auth.php';
