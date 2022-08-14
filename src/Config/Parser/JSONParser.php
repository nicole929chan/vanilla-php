<?php

namespace Foolish\Config\Parser;


class JSONParser implements IParser
{
    public function parse($path)
    {
        $file = file_get_contents($path);

        return json_decode($file, true);
    }
}
