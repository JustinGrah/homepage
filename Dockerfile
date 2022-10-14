FROM node:16.17.1 
WORKDIR /app
COPY . .
RUN npm install --silent
CMD ["npm", "run", "dev", "--silent"]
EXPOSE 3000