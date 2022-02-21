#! /bin/bash

current_path=$(pwd);
npm_path=$(npm list -g | awk 'NR==1')
operation=$1;
resources="value-object, entity, aggregate or mapper";
available_types="[string OR number]";
lib_name=types-ddd-cli;
lib_command=types-ddd;
lib_path=$npm_path/node_modules/$lib_name
binaries_path=$npm_path/node_modules/$lib_name/node_modules

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
	node $binaries_path/plop/bin/plop.js --plopfile $lib_path/plopfile.js $name $resource $type $path "$lib_path/"
}

applyEmptyAttribures()
{
	if [ ${#type} -eq 0 ]; then
		type="string";
	fi
	if [ ${#path} -eq 0 ]; then
		path=$current_path/
	fi
}

helpFn()
{
	echo ""
	echo "HELP CENTER"
	echo "	Generate domain files as $resources"
	echo ""
	echo "USAGE"
	echo "	types-ddd [-args]"
	echo "	types-ddd -g [resource-name] -n [file-name] -t [attribute-type] -p [destination]"
	echo ""
	echo "ARGS"
	echo "	REQUIRED"
	echo "	-g: generate"
	echo "	define a resource to be generated. Options: $resources"
	echo ""
	echo "	REQUIRED"
	echo "	-n: name"
	echo "	define file and class name"
	echo ""
	echo "	OPTIONAL"
	echo "	-t: type"
	echo "	define attribute type to be included on value object as example on generate it. Options: $available_types"
	echo ""
	echo "	OPTIONAL"
	echo "	-p: path"
	echo "	define destination where files will be saved based your terminal current location. default is current path"
	echo ""
	echo "EXAMPLE"
	echo "	types-ddd -g value-object -n example -t string -p src/user/domain/"
	echo "	the command will generate an example.value-object.ts file on src/user/domain/ folder and a test file on domain/tests"
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
			t ) type="$OPTARG" ;;
			p ) path=$current_path/"$OPTARG" ;;
			n ) name="$OPTARG" ;;
		esac
	done
	# check resource type: value object, entity, aggregate, mapper etc
	validateArgs;
	# apply default values
	applyEmptyAttribures;
	# call generate files
	callPlop;
	exit 0;
fi

echo "";
echo "ERROR: invalid operation";
echo "";
# show help center on invalid command
helpFn;
