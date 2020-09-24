
FROM node:alpine


WORKDIR /usr/app


COPY ./package.json ./
RUN npm install
COPY ./ ./

RUN npm run build
RUN npm install -g serve


ENTRYPOINT ["serve", "-s" ,"build"]
