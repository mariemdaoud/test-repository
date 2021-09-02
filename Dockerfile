FROM node:16

EXPOSE 3001

WORKDIR /src

# Use latest version of npm
RUN npm i npm@latest -g

COPY package.json package-lock*.json ./

# To clear a cache in npm, we need to run the npm cache clean --force 
RUN npm install --no-optional && npm cache clean --force

COPY . .

CMD [ "node", "app/index.js" ]