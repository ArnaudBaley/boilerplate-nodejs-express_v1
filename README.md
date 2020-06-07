# template-nodejs-express
[GitHub repository link](https://github.com/ArnaudBaley/template-nodejs-express).


## Project setup with docker

### Build image
```
docker build -t template-nodejs-express -f docker/Dockerfile .
```

### Launch container in detached mode
```
docker run -p 3050:3000 -d template-nodejs-express
```


## Project setup without docker

### Install dependencies
```
npm install
```

### Launch
```
node app.js
```