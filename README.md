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
	$ npm i types-ddd -g
```

#### Help

```sh
	$ types-ddd --help
```

#### Generate

```sh
	$ types-ddd generate --resource value-object --type string --path ./src/domain
```

OR

```sh
	$ types-ddd g --r value-object --t string --p ./src/domain
```

OR 

```sh
	$ types-ddd g --r value-object
```
