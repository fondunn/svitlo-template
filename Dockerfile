FROM node:18-alpine AS base

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml (if available)
COPY package.json pnpm-lock.yaml* ./

# Development stage
FROM base AS development
RUN pnpm install
COPY . .
EXPOSE 3000
CMD ["pnpm", "run", "dev"]

# Production stage
FROM base AS production
RUN pnpm install --prod
COPY . .
RUN pnpm run build
EXPOSE 3000
CMD ["pnpm", "start"]