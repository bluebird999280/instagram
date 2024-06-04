FROM node:18-alpine

WORKDIR .

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 4000

CMD ["node", "./dist/app.js"]