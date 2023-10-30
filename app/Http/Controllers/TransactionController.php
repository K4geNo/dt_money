<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    protected readonly Transaction $transaction;

    public function __construct()
    {
        $this->transaction = new Transaction();
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Get all transactions to inertia
        $transactions = $this->transaction->all();

        return inertia('Transactions/Index', [
            'transactions' => $transactions,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // Return the inertia view
        return inertia('Transactions/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate the request
        $request->validate([
            'description' => 'required|string',
            'amount' => 'required|numeric',
            'type' => 'required|in:income,expense',
        ]);

        // Create the transaction
        $this->transaction->create($request->all());

        // Redirect to the index page
        return redirect()->route('Dashboard');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // Get the transaction
        $transaction = $this->transaction->findOrFail($id);

        // Return the inertia view
        return inertia('Transactions/Show', [
            'transaction' => $transaction,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        // Get the transaction
        $transaction = $this->transaction->findOrFail($id);

        // Return the inertia view
        return inertia('Transactions/Edit', [
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
        $transaction = $this->transaction->findOrFail($id);

        // Update the transaction
        $transaction->update($request->all());

        // Redirect to the index page
        return redirect()->route('Dashboard');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // Get the transaction
        $transaction = $this->transaction->findOrFail($id);

        // Delete the transaction
        $transaction->delete();

        // Redirect to the index page
        return redirect()->route('Dashboard');
    }
}
