# Dockerfile for client

# Stage 1: Build react client
#FROM node:current-alpine

# Working directory be app
#WORKDIR /usr/app

#COPY package*.json ./

# Install dependencies
#RUN npm install

# copy local files to app folder
#COPY . .

#EXPOSE 3000

#CMD ["npm","start"]

FROM node:current-alpine
RUN addgroup app && adduser -S -G app app
RUN mkdir /usr/app && chown app:app /usr/app
USER app
WORKDIR /usr/app
COPY --chown=app:app . .
RUN npm install
EXPOSE 8000
CMD ["npm","start"]
