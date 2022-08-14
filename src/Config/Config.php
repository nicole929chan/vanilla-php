<?php

namespace Foolish\Config;

use Foolish\Config\Parser\IParser;

class Config
{
    protected $parser;

    public function __construct(IParser $parser)
    {
        $this->parser = $parser;
    }

    public function load($path)
    {
        return $this->parser->parse($path);
    }
}
