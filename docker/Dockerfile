# PARTIAL SOURCE : https://nodejs.org/fr/docs/guides/nodejs-docker-webapp/

FROM node:12

# Create app directory
WORKDIR /usr/app

# Copy app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# Allows us to take advantage of cached Docker layer
COPY package*.json ./

# Install app dependencies
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]

# Don't forget : .dockerignore file with "node_modules" + "npm-debug.log"
# Prevent your local modules and debug logs from being copied onto your Docker image

# DOCKER IDE PLUGINS PRIVILEGE ISSUES -> https://docs.docker.com/engine/install/linux-postinstall/
# sudo groupadd docker
# sudo usermod -aG docker $USER
# reboot to apply changes

# Stop and delete all containers = 
# docker stop $(docker ps -aq) ; docker rm $(docker ps -aq)

# Stop + delete all containers & all images =
# docker stop $(docker ps -aq) ; docker rm $(docker ps -aq) ; docker rmi $(docker images -q)