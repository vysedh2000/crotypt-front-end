
FROM node:18.20.3-alpine AS base

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first for caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the Next.js project
RUN npm run build

# Expose the Next.js default port
EXPOSE 3000

# Start Next.js and bind to 0.0.0.0 so it's reachable from Kubernetes
CMD ["npm", "run", "start", "--", "-H", "0.0.0.0", "-p", "3000"]
