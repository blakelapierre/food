#!/bin/bash

docker run --rm --privileged -it -p 5432:5432 -v $(pwd)/nut_data:/nut_data:z --name postgres-usda postgres:9.5