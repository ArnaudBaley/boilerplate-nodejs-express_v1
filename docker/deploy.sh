#!/bin/bash

# chmod +x deploy.sh

# Use current folder to execute next commands.
cd "$(dirname "$0")"

# Remove eventual existing container.
docker stop template_nodejs_express ; docker rm template_nodejs_express

# Run image.
docker-compose up -d --build