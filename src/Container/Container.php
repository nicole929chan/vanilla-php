<?php
namespace Foolish\Container;

class Container
{
    protected $items = [];

    public function has($key)
    {
        return isset($this->items[$key]);
    }

    public function get($key)
    {
        return $this->items[$key]($this);
    }

    public function set($key, callable $closure)
    {
        $this->items[$key] = $closure;
    }

    public function share($key, callable $closure)
    {
        $this->items[$key] = function() use ($closure) {
            static $resolved;
            if (!$resolved) {
                $resolved = $closure($this);  // 客戶端的匿名函數
            }
            return $resolved;
        };
    }

    public function __get($key)
    {
        return $this->get($key);
    }
}