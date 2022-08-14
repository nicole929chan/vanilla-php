<?php
ini_set('display_errors', '1');
error_reporting(E_ALL);

use Foolish\Config\Config;
use Foolish\Config\Parser\ArrayParser;

require_once 'vendor/autoload.php';

$parser = new ArrayParser();
$config = new Config($parser);

$path = 'src/database/dev.php';  // 測試區連線

$result = $config->load($path);
var_dump($result);
