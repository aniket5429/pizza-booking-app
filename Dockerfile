FROM node:17
ENV NODE_OPTIONS=--max_old_space_size=1536 
WORKDIR /home/node/app
COPY package.json .
RUN npm install --quiet

COPY . .

RUN npx prisma generate && npm run build


# # Use a Node.js image as a base
# FROM node:14-alpine

# # Set the working directory
# WORKDIR /app

# # Copy over the package files separately for frontend and backend
# COPY client/package*.json ./client/
# COPY package*.json ./server/

# # Change client directory for installing dependencies
# WORKDIR /app/client

# # Install frontend dependencies using npm
# RUN npm install --quiet

# # Change server directory for installing dependencies
# WORKDIR /app/server

# # Install backend dependencies using npm
# RUN npm install

# # Copy all files over to the container
# COPY . .

# # Set environment variables for the database
# ENV POSTGRES_USER=postgres
# ENV POSTGRES_PASSWORD=password

# # Expose the frontend and backend ports
# EXPOSE 3000
# EXPOSE 5000

# # Start both the frontend and backend servers
# CMD ["npm", "run", "start"]