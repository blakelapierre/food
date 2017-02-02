#!/bin/sh

# first, run `npm install -g relational_modeler`
relational_modeler usda.sr28.model '^' '~' postgresql docker

