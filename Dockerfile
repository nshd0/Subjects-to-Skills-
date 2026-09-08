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
COPY nginx.conf /etc/nginx/templates/default.conf.template
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled static assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Cloud Run injects PORT environment variable (default 8080)
ENV PORT=8080
EXPOSE 8080

# Dynamically substitute PORT if Cloud Run injects a custom port and start Nginx in foreground
CMD ["/bin/sh", "-c", "sed -i \"s/8080/${PORT:-8080}/g\" /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"]
