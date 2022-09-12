<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seller extends Model
{
    use HasFactory;

    protected $fillable = [
      'name', 'product_name', 'product_file', 'category', 'description', 'nett_price'
    ];

    protected $table = 'seller';

    protected $primaryKey = 'id_seller';

    protected $guarded = ['id_seller'];

    public $timestamps = false;
}
