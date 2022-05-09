FROM node:alpine
WORKDIR /app

# first copy only the package json and install the packages from yarn.lock
COPY package.json yarn.lock ./
RUN yarn install --pure-lockfile

# next copy the project files
# note that node_modules will be copied as well. That's why we ignore it in the .dockerignore file
COPY . .

EXPOSE ${PORT} 

CMD ["npm", "start"]
