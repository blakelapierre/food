#!/bin/bash

docker run --rm -it -p 5432:5432 -v $(pwd)/jsondata:/jsondata:z --name postgres-usda postgres:9.5