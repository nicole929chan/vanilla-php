<?php
namespace Foolish\Connection;

class Config
{
    protected $config = [
        'app' => [
            'name' => 'playground'
        ],
        'db' => [
            'host' => '127.0.0.1',
            'database' => 'autowiring',
            'username' => 'root',
            'password' => 'root',
        ]
    ];
}