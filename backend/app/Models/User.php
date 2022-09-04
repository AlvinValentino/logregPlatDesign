<?php

namespace App\Models;

use Illuminate\Auth\Notifications\ResetPassword;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Notifications\ResetPasswordNotification;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'logreg';

    protected $fillable = [
        'username',
        'name',
        'email',
        'password',
        'isAdmin',
    ];

    public $timestamps = false;

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

    protected $guarded = ['id'];

    public function sendPasswordResetNotification($token)
    {
        $url = 'http://localhost:3000/forget?' .$token;
        return $this->notify(new ResetPasswordNotification($url));
    }
}
