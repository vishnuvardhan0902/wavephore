from node:18-alpine 

workdir /app 

copy package*.json ./

run npm install 

copy . .

expose 3001

CMD ['nodemon', 'server.js']

