# this is a multi-stage Docker file that is intended to speed up
# the build time but also keep the image size reasonable
#    alpine 3.13
#    Node.js 14
FROM node:14-alpine3.13 AS baseline
ENV NODE_ENV=production

RUN mkdir /upward
WORKDIR /upward
COPY package*.json /upward/
RUN npm i --only=dev && npm i --only=prod

FROM baseline AS app
ENV NODE_ENV=production

ADD source.tar.gz /upward
WORKDIR /upward
RUN npm run build && npm prune

CMD [ "npm", "start", "--", "-p", "$PORT" ]