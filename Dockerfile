# Use an official Node runtime as the base image
FROM node:20-alpine as base

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code to the working directory
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Development stage
FROM base as development
ENV NODE_ENV=development
CMD ["sh", "-c", "npx prisma db push && npm run seed && npm run dev"]

# Production stage
FROM base as production
ENV NODE_ENV=production
RUN npm run build
CMD ["sh", "-c", "npx prisma db push && npm run seed && npm start"]