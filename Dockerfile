FROM node

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

COPY . .

ENV PORT 4200

EXPOSE $PORT

CMD ["npm", "run", "start"]