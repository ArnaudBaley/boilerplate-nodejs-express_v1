# SOURCE : https://nodejs.org/fr/docs/guides/nodejs-docker-webapp/

FROM node:12

# Create app directory
WORKDIR /usr/src/app

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

CMD [ "node", "app.js" ]

# Don't forget : .dockerignore file with "node_modules" + "npm-debug.log"
# Prevent your local modules and debug logs from being copied onto your Docker image

