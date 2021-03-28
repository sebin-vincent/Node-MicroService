FROM node:lts-buster-slim
RUN mkdir /home/node/app/
WORKDIR /home/node/app
COPY package.json .
RUN yarn install
COPY tsconfig.json .
COPY ./src ./src

CMD [ "yarn", "start" ]
