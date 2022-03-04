FROM node:16-alpine
RUN npm install
RUN npm run docs:build
ENV NODE_ENV production
CMD [ "node", "server.js" ]
