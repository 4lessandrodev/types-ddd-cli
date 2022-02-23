#! /bin/bash

path="$(pwd)";
plataform_os="linux";
chek_plataform()
{
	plataform_os="$OSTYPE"
}

chek_plataform

if [[ "$plataform_os" =~ ^msys ]]; then
	echo "windows";
else
	echo "linux";
fi
path=$path/

path=${path//\//\\\\}
echo $path;
echo $plataform_os;
