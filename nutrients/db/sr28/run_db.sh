#!/bin/bash

docker run --rm -it --privileged -p 5432:5432 -v $(pwd)/jsondata/food_des:/jsondata/food_des:z -v $(pwd)/jsondata/nut_data:/jsondata/nut_data -v $(pwd)/jsondata/fd_group:/jsondata/fd_group --name postgres-usda postgres:alpine