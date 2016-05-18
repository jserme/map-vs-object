# Map vs {}

simaple test compare `Map` and `{}`

on my mac pro(cpu: 2.9 GHz Intel Core i7, memory: 8GB), Node v4.3.0:

```
Map set x 29,608,173 ops/sec ±5.52% (82 runs sampled)
Object set x 69,256,403 ops/sec ±4.44% (81 runs sampled)
fastest is Object set

Map get x 35,521,000 ops/sec ±3.78% (86 runs sampled)
Object get x 69,794,853 ops/sec ±4.50% (85 runs sampled)
fastest is Object get

Map delete x 39,908,918 ops/sec ±4.58% (85 runs sampled)
Object delete x 9,787,601 ops/sec ±4.51% (85 runs sampled)
Object set null x 56,256,522 ops/sec ±5.28% (81 runs sampled)
fastest is Object set null
```


Node v5.6.0 :

```
Map set x 28,717,648 ops/sec ±3.24% (83 runs sampled)
Object set x 70,072,814 ops/sec ±3.38% (81 runs sampled)
fastest is Object set

Map get x 35,030,486 ops/sec ±2.91% (87 runs sampled)
Object get x 70,414,832 ops/sec ±1.79% (85 runs sampled)
fastest is Object get

Map delete x 42,037,391 ops/sec ±2.61% (83 runs sampled)
Object delete x 11,087,117 ops/sec ±2.88% (86 runs sampled)
Object set null x 57,905,432 ops/sec ±2.60% (81 runs sampled)
fastest is Object set null
```

Node v6.2.0 :

```
Map set x 27,483,071 ops/sec ±8.84% (77 runs sampled)
Object set x 67,854,133 ops/sec ±4.29% (81 runs sampled)
fastest is Object set

Map get x 32,129,290 ops/sec ±5.14% (80 runs sampled)
Object get x 79,144,771 ops/sec ±4.63% (79 runs sampled)
fastest is Object get

Map delete x 39,153,675 ops/sec ±3.74% (84 runs sampled)
Object delete x 11,234,590 ops/sec ±4.23% (82 runs sampled)
Object set null x 46,505,110 ops/sec ±10.24% (83 runs sampled)
fastest is Object set null
```

if you are implementing a in-memore cache, these tests show you should use Object get/set and delete key/value by `object[key] = null`
