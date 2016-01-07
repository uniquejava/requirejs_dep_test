## How
bower init
bower install --save requirejs

## setup
git clone url/to/this/repo
bower install

## version 1

scenario
```
b, c => (depends on) a
```

output
```
define a
enhance a with methodB
enhance a with methodC
app init.
method b is called.
method c is called.
```


## version 2

scenario
```
b, c => a
c => b
```