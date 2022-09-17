<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_user', 'name', 'product_name', 'nett_price', 'id_product'
    ];

    protected $table = 'cart';

    protected $guarded = ['id'];

    public $timestamps = false;
}
