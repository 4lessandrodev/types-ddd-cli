#! /bin/bash

# node ./node_modules/plop/bin/plop.js --plopfile ./plopfile.js

current_path=$(pwd);
operation=$1;
resources="value-objects, entity, aggregate or mapper";
available_types="[string OR number]";
lib_name=types-ddd-cli;
lib_command=types-ddd;

validateArgs()
{
	if [ ${#resource} -eq 0 ]; then
		echo "ERROR: resource required: $resources";
		exit 1;
	elif [ ${#name} -eq 0 ]; then
		echo "ERROR: resource name required: $lib_command -g $resource -n example";
		exit 1
	elif [ ${#type} -ge 1 ]; then
		if [ "$type" != "string" ] && [ "$type" != "number" ]; then
			echo "ERROR: you must provide a valid type, example: $lib_command -g $resource -n $name -t $available_types";
			exit 1;
		fi
	else
		if [ "$resource" != "value-object" ] && [ "$resource" != "entity" ] && [ "$resource" != "aggregate" ] && [ "$resource" != "mapper" ]; then
			echo "ERROR: invalid resource. choose: $resources";
			exit 1;
		fi
	fi
}

callPlop()
{
	echo option=$resource;
	echo name=$name;
	echo type=$type;
	echo path=$path;
}

helpFn()
{
	echo ""
	echo "HELP CENTER"
	echo "	Generate domain files as $resources"
	echo ""
	echo "USAGE"
	echo "	types-ddd [-args]"
	echo "	types-ddd -generate [resource-name] -name [file-name] -type [attribute-type] -path [destination]"
	echo ""
	echo "ARGS"
	echo "	REQUIRED"
	echo "	-generate OR -g"
	echo "	define a resource to be generated. Options: $resources"
	echo ""
	echo "	REQUIRED"
	echo "	-name OR -n"
	echo "	define file and class name"
	echo ""
	echo "	OPTIONAL"
	echo "	-type OR -t"
	echo "	define attribute type to be included on value object as example on generate it. Options: $available_types"
	echo ""
	echo "	OPTIONAL"
	echo "	-path OR -p"
	echo "	define destination where files will be saved based your terminal current location. default is current path"
	echo ""
	echo "EXAMPLE"
	echo "	types-ddd -g value-object -n example -t string -p src/user/domain"
	echo "	the command will generate a example.value-object.ts file on src/user/domain folder and a test file on domain/tests"
	echo ""
}

# check if first argument is ask for help
if [[ "$operation" == "--help" ]] || [[ "$operation" == "-h" ]]
then
	helpFn;
	exit 0;
fi

# check if first arg is g or generate
if [[ "$operation" == "-g" ]] || [[ "$operation" == "-generate" ]]
then
	# get args
	while getopts "g:t:p:n:" opt
	do
		case "$opt" in
			g ) resource="$OPTARG" ;;
			n ) name="$OPTARG" ;;
			t ) type="$OPTARG" ;;
			p ) path="$OPTARG" ;;
		esac
	done

	# check resource type: value object, entity, aggregate, mapper etc
	echo "";
	validateArgs;

	# generate value object
	if [[ "$resource" == "value-object" ]]
	then
		echo "";
		callPlop;
		echo "";
		echo "generate resource: value-object";
	fi
	exit 0;
fi

# show help center on invalid command
helpFn;
