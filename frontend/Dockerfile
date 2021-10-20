FROM node

WORKDIR /app
COPY package.json .
COPY yarn.lock .

RUN yarn

EXPOSE 3000

COPY . .

CMD [ "yarn", "dev" ]
