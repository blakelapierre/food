#!/bin/bash

docker run --rm -it \
           --link postgres-usda \
           -v $(pwd):/model:z \
           postgres:9.5 /bin/bash -c 'cat /model/usda.sr28.sql /model/extract_nut_data.plpgsql /model/extract_food_des.plpgsql /model/extract_fd_group.plpgsql | psql -h postgres-usda -p 5432 -U postgres -v ON_ERROR_STOP=1 -f -'
           # postgres:9.5 /bin/bash -c 'psql -h postgres-usda -p 5432 -U postgres -v ON_ERROR_STOP=1 -f /model/usda.sr28.sql'