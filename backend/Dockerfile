FROM node

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN npm install

EXPOSE 3001

ENV PORT=3001
ENV PGUSER=postgres
ENV PGHOST=postgres
ENV PGDATABASE=postgres
ENV PGPASSWORD=password
ENV PGPORT=5432

COPY . .

CMD [ "npm", "start" ]
