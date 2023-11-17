<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Get all transactions to inertia
        $transactions = Transaction::all();

        return Inertia::render('Dashboard', [
            'transactions' => $transactions,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // Return the inertia view
        return Inertia::render('Dashboard');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $category = Category::find($request->category_id);

        $transaction = new Transaction([
            'description' => $request->description,
            'amount' => $request->amount,
            'type' => $request->type,
            'category_id' => $category->id,
        ]);

        $transaction->save();

        return redirect('dashboard');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // Get the transaction
        $transaction = Transaction::findOrFail($id);

        // Return the inertia view
        return Inertia::render('Transactions/Show', [
            'transaction' => $transaction,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        // Get the transaction
        $transaction = Transaction::findOrFail($id);

        // Return the inertia view
        return Inertia::render('Dashboard', [
            'transaction' => $transaction,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // Validate the request
        $request->validate([
            'description' => 'required|string',
            'amount' => 'required|numeric',
            'type' => 'required|in:income,expense',
        ]);

        // Get the transaction
        $transaction = Transaction::findOrFail($id);

        // Update the transaction
        $transaction->update($request->all());

        // Redirect to the index page
        return redirect('dashboard');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // Get the transaction
        $transaction = Transaction::findOrFail($id);

        // Delete the transaction
        $transaction->delete();

        // Redirect to the index page
        return redirect('dashboard');
    }
}
