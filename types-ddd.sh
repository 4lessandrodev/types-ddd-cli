#! /bin/bash

# node ./node_modules/plop/bin/plop.js --plopfile ./plopfile.js

CURRENT_PATH=$(pwd)
operation=$1

helpFn()
{
	echo ""
	echo "HELP CENTER"
	echo "	Generate domain files as value-object, entity, aggregate and mapper"
	echo ""
	echo "USAGE"
	echo "	types-ddd [-args]"
	echo "	types-ddd -generate [resource-name] -name [file-name] -type [attribute-type] -path [destination]"
	echo ""
	echo "ARGS"
	echo "	REQUIRED"
	echo "	-generate OR -g"
	echo "	define a resource to be generated. Options: value-object, entity, aggregate and mapper"
	echo ""
	echo "	REQUIRED"
	echo "	-name OR -n"
	echo "	define file and class name"
	echo ""
	echo "	OPTIONAL"
	echo "	-type OR -t"
	echo "	define attribute type to be included on value object as example on generate it. Options: number or string"
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
	helpFn
	exit 0
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
	# generate value object
	if [[ "$resource" == "value-object" ]]
	then
		echo "generate resource: value-object";
	fi
	exit 0
fi

helpFn
