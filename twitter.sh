#!/usr/bin/env bash

steps=( "date" "index" "list" "months" "tweet" "years" )

for item in "${steps[@]}"
do
  echo "Building Twitter/$item…"
  node_modules/.bin/eleventy --input content/twitter/$item.11ty.js --output dist/twitter --quiet
done
