#!/bin/bash

POSTGRES_HOST=postgres-usda
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_DATABASE=usda

# if nc -h; then
#      until nc -z "$POSTGRES_HOST" "$POSTGRES_PORT"; do
#           echo "$(date) - waiting on postgre..."
#           sleep 1
#      done
# fi

run() {
     echo "running $1"

     docker run --rm -it \
                --link postgres-usda \
               -v $(pwd)/data:/data:z \
               postgres:9.5 /bin/bash -c "psql -h postgres-usda -p 5432 -U postgres -d usda -v ON_ERROR_STOP=1 -c \"${1}\" < \"/data/${2}\""


               # "cat "/data/$2" | psql -h $POSTGRES_HOST -p $POSTGRES_PORT -U $POSTGRES_USER -d $POSTGRES_DATABASE -v ON_ERROR_STOP=1 -c "$1""

     # psql -h "$POSTGRES_HOST" \
     # -p "$POSTGRES_PORT" \
     # -d "$POSGRES_DATABASE" \
     # -v ON_ERROR_STOP=1 \
     # -U "$POSTGRES_USER" \
     # -x \
     # -c "$1" < $2
}

run "BEGIN; COPY sr28.Sources_of_Data FROM STDIN WITH CSV DELIMITER '^' QUOTE '~'; COMMIT;" "DATA_SRC.txt"