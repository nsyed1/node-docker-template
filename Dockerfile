# set up node env,
# alpine version to get small as possible
FROM node:8-alpine

# Set working dir in the container to /app. 
# We shall use this directory to store files, 
# run npm, and launch our application:
WORKDIR /app

# copy files over to app dir
# avoiding docker cache from 
# installing package.json twice
COPY package.json /app
RUN npm install
COPY . /app

# what should be executed when docker image is launching
CMD npm start

# moved functionality to docker-compose.yaml
# expose port 8081 to the outside when container is launched
# EXPOSE 8081
