# node-docker-template
basic setup for starting node apps to be deployed with docker  
<strong><i>remember to create .env file after cloning, follow .env.example</i></strong>

## run commands
- `docker-compose up` to run with docker
- `npm run start_local` to run on local env

## run commands
- `docker-compose up` to run with docker
- `npm run start_local` to run on local env

# notes

## this project is to
1. understand environment variables and best practices
2. dockerize node + express app 

### why?
- practice as a part of the 12factor methodology for building software as a service applications
- https://12factor.net/config

### interesting steps
- remove reading of env vars in app on runtime by 
    - moving dotenv package to dev dependancy in package.json
        - `npm install dotenv --save-dev`
    - preloading env vars, via custom npm script
        - `node -require dotenv/config server.js`

- importing env vars from .env file to docker-compose
    - using `env_file:` instead of `environment:`
    - other parts of docker-compose that require env var use variable substitution `${ENV_VAR}` 

### useful resources, libraries and extentions
dotenv - https://www.npmjs.com/package/dotenv   
VScode npm ext -  https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script&wt.mc_id=node-nodecollection-jopapa  
docker compose env vars - https://docs.docker.com/compose/environment-variables/
