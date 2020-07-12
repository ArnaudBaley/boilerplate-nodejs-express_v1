#!/bin/bash

# chmod +x deploy.sh

# Use current folder to execute next commands.
cd "$(dirname "$0")"

# Build image.
docker build -t template-nodejs-express -f ../docker/Dockerfile ../

# Remove eventual existing container.
docker stop template_nodejs_express ; docker rm template_nodejs_express

# Run image.
docker run -p 3050:3000 -d --name template_nodejs_express template-nodejs-express
