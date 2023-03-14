<?php
namespace App\Restaurants;

class CoffeeStore
{
    public function orderCoffee($type)
    {
        if ($type === 'american') {
            return new AmericanCoffee();
        } elseif ($type === 'latte') {
            return new LatteCoffee();
        } else {
            throw new \Exception('沒有該咖啡種類');
        }
    }
}