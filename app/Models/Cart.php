<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{


     protected $fiilable = ['name', 'size', 'quantity', 'price', 'filename'];
}
