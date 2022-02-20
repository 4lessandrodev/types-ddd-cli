# Types-ddd cli

## Build a cli to auto generate domain files

### Example how it will works

A cli to works with [types-ddd](https://www.npmjs.com/package/types-ddd) lib. A domain driven design library.

#### Initial resources

- [ ] value-object
- [ ] entity
- [ ] aggregate
- [ ] mapper
- [ ] domain-event

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
	$ types-ddd -generate value-object -name example -type string -path src/domain
```

OR

```sh
	$ types-ddd -g value-object -n example -t string -p src/domain
```

OR 

```sh
	$ types-ddd -g value-object -n example
```
