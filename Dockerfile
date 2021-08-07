FROM node:12-alpine3.14 as build

WORKDIR /src

COPY . .

RUN npm ci

RUN npm run build

FROM node:12-alpine3.14 as app

WORKDIR /src

COPY --from=build /src/package.json .

RUN npm install --production

COPY --from=build /src/dist/ /src/

CMD npm start