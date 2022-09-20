import { Bright, FgBlue, FgGreen, Reset } from "./colors";

export const MainHelp = `
	${FgGreen}${Bright}
	--------- HELP CENTER ---------
	${Reset}

	${FgBlue}types-ddd [action] [options]${Reset}

	${Bright}Actions:${Reset}
	${FgBlue}create${Reset}: generate a new resource${Reset}
	${FgBlue}help | --help${Reset}: show help options${Reset}
	${FgBlue}version | --version${Reset}: show cli version${Reset}

	${Bright}Options:${Reset}
	${FgBlue}rest-api${Reset}: generate a new app based on rest api template${Reset}
	${FgBlue}microservice | mcs${Reset}: generate a new app based on microservice template${Reset}
	${FgBlue}ms-client | msc${Reset}: generate a new app based on microservice client template${Reset}
	${FgBlue}web-app | wap${Reset}: generate a new web app based on next template${Reset}
	${FgBlue}web-component | wbc${Reset}: generate a new react component${Reset}
	${FgBlue}lambda${Reset}: generate a new app based on lambda serverless${Reset}
	${FgBlue}command | cmd${Reset}: generate a new class implementing command pattern${Reset}
	${FgBlue}ddd-adapter | dad${Reset}: generate an adapter from infra to domain${Reset}
	${FgBlue}ddd-aggregate | dag${Reset}: generate an aggregate to a module${Reset}
	${FgBlue}ddd-entity | den${Reset}: generate an entity to a module${Reset}
	${FgBlue}ddd-event | evt${Reset}: generate a domain event handler${Reset}
	${FgBlue}ddd-model | dmd${Reset}: generate a model to a module${Reset}
	${FgBlue}ddd-module | dmo${Reset}: generate a new domain module${Reset}
	${FgBlue}ddd-repository | dre${Reset}: generate a new base repository${Reset}
	${FgBlue}ddd-value-object | dvo${Reset}: generate a new value object${Reset}
	${FgBlue}use-case | usc${Reset}: generate a new use case${Reset}

	${Bright}Example:${Reset}
	${FgBlue}types-ddd create rest-api --name example --path ./my-folder
	${Reset}${FgGreen}
	${FgBlue}types-ddd create dad --name my-adapter --path ./src/modules/payment/adapters
	${Reset}${FgGreen}
	${FgBlue}types-ddd create lambda --help
	${Reset}${FgGreen}
	-------------------------------
	${Reset}
`;

export const ValueObjectHelp = `
	${FgGreen}${Bright}
	--------- HELP CENTER ---------
	${Reset}

	${Bright}Value Object:${Reset}
	- Are only identified by their values, not by their ids (for example money is a value object
	as long as we are not tracking individual banknotes, if we need to track individual 
	banknotes then it should be a banknote entity)
	- Can be used to measure or describe things (name, description, amount, height, date, time, 
	range, address, etc.)
	- You can combine other value types that usually go together into a new value object type, 
	like address (city, street, country, postal code) or ...range, or ...type
	- Prefer to put the behavior on value objects rather than on entities because value objects are
	immutable and do not have side effects (like changing their state or changing the state of any entity)
	- Can be part of an entity
	- Should be immutable, behaviors should not change the state of a value object, 
	but can rather create a new value object (should act similar to C# strings, structs, ints, 
	and other value types)
	- Can be persisted but only as part of an entity, not individually

	${Bright}Example:${Reset}
	${FgBlue}types-ddd create ddd-value-object --name example --path ./my-folder
	${Reset}${FgGreen}
	${FgBlue}types-ddd create dvo --name example --path ./src/domain
	${Reset}${FgGreen}
	${FgBlue}types-ddd create dvo --name example
	${Reset}${FgGreen}
	-------------------------------
	${Reset}	
`;


export const EntityHelp = `
	${FgGreen}${Bright}
	--------- HELP CENTER ---------
	${Reset}

	${Bright}Entity:${Reset}
	- Live longer than the application, should endure restarts, and are persisted and read 
	from data sources (DB, file system, network, etc.)
	- Have an id (preferably a GUID rather than a DB generated int because business 
	transactions do not rely on persistence, can be persisted after other operations 
	carried out in model's behavior)
	- Have entity semantics (equality and GetHashCode() defined by class name + id)
	- Behavior in an entity mostly orchestrates value objects for a use case
	- Entity class should not have public property setters, setting a property 
	should be a behavior method
	- Entities should not have bidirectional relations (depending on the bounded context, 
	either an egg can have a chicken or a chicken can have eggs, but not both)
	- Entity relations should not reflect the complete set of DB foreign key relationships, 
	should be bare down to the minimum for performing the behavior inside the bounded context
	- Entity relations should not hold a reference to another entity class, it can only keep 
	the id of another entity
	- If a business transaction needs a reference to other entities in relation, 
	aggregates should be used instead (aggregates can hold a reference to other aggregate roots, 
	which are entity classes by definition)

	${Bright}Example:${Reset}
	${FgBlue}types-ddd create ddd-entity --name example --path ./my-folder
	${Reset}${FgGreen}
	${FgBlue}types-ddd create den --name example --path ./src/domain
	${Reset}${FgGreen}
	${FgBlue}types-ddd create den --name example
	${Reset}${FgGreen}
	-------------------------------
	${Reset}	
`;

export const AggregateHelp = `
	${FgGreen}${Bright}
	--------- HELP CENTER ---------
	${Reset}

	${Bright}Aggregate:${Reset}
	- Encapsulate and are composed of entity classes and value objects that change together
	in a business transaction
	- Aggregates are a transactional graph of model objects
	- Aggregate root should be an entity, an aggregate can even be a single entity
	- Aggregate can keep a reference to other aggregate roots, but not to other entity 
	classes which are not aggregate roots themselves
	- Aggregate should not keep a reference to other aggregate root entity classes 
	if those other entities do not change together with this aggregate root entity
	- Aggregate can also keep the id of another entity, but keeping too many foreign key
	ids is a code smell (why?)
	- If deleting an entity has a cascade effect on the other entities referenced 
	by class in the object graph, these entities are part of the same aggregate, 
	if not, they should not be inside this aggregate


	${Bright}Example:${Reset}
	${FgBlue}types-ddd create ddd-aggregate --name example --path ./my-folder
	${Reset}${FgGreen}
	${FgBlue}types-ddd create dag --name example --path ./src/domain
	${Reset}${FgGreen}
	${FgBlue}types-ddd create dag --name example
	${Reset}${FgGreen}
	-------------------------------
	${Reset}	
`;
