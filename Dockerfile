FROM node:10.19
WORKDIR /egg-client
COPY . /egg-client
RUN npm install
CMD npm start