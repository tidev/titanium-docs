FROM node:16-alpine

WORKDIR /app
COPY . /app

RUN npm install \
	&& npm run docs:build

ENV NODE_ENV production
CMD [ "node", "server.js" ]
