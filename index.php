<?php

use Foolish\Connection\Config;
use Foolish\Connection\Database;
use Foolish\Container\Container;

ini_set('display_errors', 'on');
error_reporting(E_ALL);

// use Foolish\Config\Config;
// use Foolish\Config\Parser\ArrayParser;

require_once 'vendor/autoload.php';

// $parser = new ArrayParser();
// $config = new Config($parser);

// $path = 'src/database/dev.php';  // 測試區連線

// $result = $config->load($path);
// var_dump($result);


$container = new Container();
$container->share('config', function() {
    return new Config();
});

$container->share('database', function($instance) {
    return new Database($instance->config);
});

$db = $container->database;
$db2 = $container->database;

var_dump($db);
var_dump($db2);
