FROM ubuntu

RUN apt-get update 
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get upgrade -y  

RUN apt-get install -y nodejs

WORKDIR /app

# COPY src dest
COPY package.json package.json
COPY package-lock.json package-lock.json

# RUN cd app && npm install 
RUN npm install

COPY . .  

ENTRYPOINT [ "node", "app.js" ]
