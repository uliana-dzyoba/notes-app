FROM node:16

WORKDIR /app

ENV PATH="./node_modules/.bin:$PATH"

COPY . .

EXPOSE 3000

RUN npm run build

CMD ["npm", "start"]