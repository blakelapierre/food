#!/bin/bash


POSTGRES_HOST=postgres-usda
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_DATABASE=usda

docker run --rm -it \
          --link postgres-usda \
          -v $(pwd)/jsondata:/jsondata:z \
         postgres:9.5 /bin/bash -c "psql -h $POSTGRES_HOST -p $POSTGRES_PORT -U $POSTGRES_USER -d $POSTGRES_DATABASE"
