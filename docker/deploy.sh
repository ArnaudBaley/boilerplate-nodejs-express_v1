#!/bin/bash

# chmod +x deploy.sh

# Build image
sudo docker build -t template-nodejs-express -f ../docker/Dockerfile ../

# Run image
sudo docker run -p 3050:3000 -d template-nodejs-express