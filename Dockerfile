FROM node:lts-alpine as omic
ENV NODE_ENV=production
WORKDIR /app
COPY package.json /app
COPY package-lock.json* /app
COPY npm-shrinkwrap.json* /app
RUN npm install --production --silent && mv node_modules ../
COPY . .
RUN npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=omic app/dist/omic /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

# docker build -t omic .
# docker run -p 8081:80 omic

#EXPOSE 3000
#RUN chown -R node /usr/src/app
#USER node
#CMD ["npm", "start"]
