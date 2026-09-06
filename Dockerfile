# Multi-stage Dockerfile for production deployment to Google Cloud Run
# Stage 1: Build static assets with Node.js
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency manifests
COPY package*.json ./

# Install clean dependencies
RUN npm ci

# Copy project source files
COPY . .

# Run production build (outputs to /app/dist)
RUN npm run build

# Stage 2: Serve static bundle via high-performance Nginx Alpine
FROM nginx:alpine

# Copy custom Nginx configuration with SPA routing fallback
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled static assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Cloud Run injects PORT environment variable (default 8080)
ENV PORT=8080
EXPOSE 8080

# Substitute PORT if needed and start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
