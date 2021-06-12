#    alpine 3.13
#    Node.js 14
FROM node:14-alpine3.13

RUN mkdir /upward 
COPY ../**/* /upward
WORKDIR /upward

RUN npm i && npm run build
