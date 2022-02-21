# Types-ddd cli

## Build a cli to auto generate domain files

Requires: Linux or WSL, npm and nodejs

### Example how it works

A cli to works with [types-ddd](https://www.npmjs.com/package/types-ddd) lib. A domain driven design library.

#### Initial resources

- [x] value-object
- [x] entity
- [x] aggregate
- [x] mapper
- [ ] domain-event


### Summary

- ``` -g: generate ```
- ``` -n: name ```
- ``` -t: type ```
- ``` -p: path (destination)```

#### Installation 

```sh
	$ npm i types-ddd-cli -g
```

#### Help

```sh
	$ types-ddd --help
```

OR

```sh
	$ types-ddd -h
```

#### Generate

```sh
	$ types-ddd -g value-object -n example -t string -p src/domain/
```

OR 

```sh
	$ types-ddd -g value-object -n example
```
