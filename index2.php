<?php

use App\Restaurants\CoffeeStore;

ini_set('display_errors', 'on');
error_reporting(E_ALL);

require_once 'vendor/autoload.php';

$store = new CoffeeStore();
$coffee = $store->orderCoffee('american');
$coffee->getName();

