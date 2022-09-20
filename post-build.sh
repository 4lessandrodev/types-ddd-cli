#!/bin/bash

cp -r ./package.json build/
cp ./yarn.lock ./build
cp ./README.md ./build
cp -r ./docs ./build/docs
cp -r ./downloads ./build/downloads
