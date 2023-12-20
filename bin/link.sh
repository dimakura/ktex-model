#!/bin/bash

rm -rf dist/

bun run build

cp package.json dist/
cp README.md dist/

cd dist/
bun link
