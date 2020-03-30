#Usage node image version 10
FROM node:10

#Soporte
LABEL maintainer "jorgeluistinocoj@gmail.com"

#Directorio de trabajo
ENV PROJECT_DIR=/usr/src/app

#PORT
ENV APP_PORT=3000

#Create app directory
WORKDIR $PROJECT_DIR

# Install app dependencies
# A wildcard is used to ensure both package.json AND packae-log.json
# where available
COPY package*.json ./

# Download node modules -P = --production
RUN npm install --production

#Bundle app source
COPY . .

EXPOSE $APP_PORT

CMD node index.js --port $APP_PORT