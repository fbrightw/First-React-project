FROM node

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY . .

RUN npm install

COPY . ./

ENV PORT 8081

EXPOSE $PORT

CMD ["npm", "start"]