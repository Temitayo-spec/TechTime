FROM node:17-alpine

# Create app directory

WORKDIR /app

# Install app dependencies

COPY package*.json ./

RUN npm install
RUN npm run build

# Bundle app source

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]

