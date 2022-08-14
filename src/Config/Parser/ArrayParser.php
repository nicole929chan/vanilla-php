<?php

namespace Foolish\Config\Parser;


class ArrayParser implements IParser
{
    public function parse($path)
    {
        return require $path;
    }
}
