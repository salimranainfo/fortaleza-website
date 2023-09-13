FROM node:16.20

# Create app directory

WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./

RUN yarn install

# Bundle app source
COPY . .

RUN yarn build

ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

EXPOSE 3000

CMD [ "node", ".output/server/index.mjs" ]