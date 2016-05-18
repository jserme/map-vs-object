var Benchmark = require('benchmark')
var suiteGet = new Benchmark.Suite()
var suiteSet = new Benchmark.Suite()
var suiteDelete = new Benchmark.Suite()

var map = new Map()
var object = {}
var key = 'a'
var value = 'a'

function complete () {
  console.log('fastest is ' + this.filter('fastest').map('name') + '\n')
}

function cycle (event) {
  console.log(String(event.target))
}

suiteGet
  .add('Map set', function () {
    map.set(key, value)
  })
  .add('Object set', function () {
    object[key] = value
  })
  .on('cycle', cycle.bind(suiteGet))
  .on('complete', complete.bind(suiteGet))
  .run()

suiteSet
  .add('Map get', function () {
    map.get(key)
  })
  .add('Object get', function () {
    object[key]
  })
  .on('cycle', cycle.bind(suiteSet))
  .on('complete', complete.bind(suiteSet))
  .run()

suiteDelete
  .add('Map delete', function () {
    map.delete(key)
  })
  .add('Object delete', function () {
    delete object[key]
  })
  .add('Object set null', function () {
    object[key] = null
  })
  .on('cycle', cycle.bind(suiteDelete))
  .on('complete', complete.bind(suiteDelete))
  .run()
