<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    protected $table = 'transactions';

    protected $fillable = [
        'description',
        'amount',
        'category_id',
        'type',
        'user_id'
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    // Adicione este método
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
