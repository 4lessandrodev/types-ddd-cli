#! /bin/bash

PATH_TO_LIB=$(npm list -g | awk 'NR==1')

# GET APPLICATION NAME FROM package.json
# cat package.json | awk "/name/{print}" | awk -F '"' '{print $4}'
LIB_NAME=types-ddd

# Copy value object template files from root path to current path
cp -r $PATH_TO_LIB/node_modules/$LIB_NAME/templates/value-object/*.ts .
