
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json tsconfig.json ./
RUN npm install --production=false
COPY . .
RUN npm run build


FROM node:20-alpine AS production
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY --from=build /app/dist ./dist
EXPOSE 3000
CMD ["node", "dist/index.js"]
    