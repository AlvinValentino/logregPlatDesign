<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seller extends Model
{
    use HasFactory;

    protected $fillable = [
      'id_seller', 'username', 'product_name', 'product_file', 'category', 'description', 'nett_price'
    ];

    protected $table = 'product';

    protected $guarded = ['id'];
}
