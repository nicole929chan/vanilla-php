<?php
namespace Foolish\Connection;

class Database
{
    protected $config;

    public function __construct(Config $config)
    {
        $this->config = $config;
    }

    
}