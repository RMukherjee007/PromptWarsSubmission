# Use Node.js LTS
FROM node:20-slim

# Set working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy source code
COPY . .

# Expose port
EXPOSE 8080

# Environment variables (Port should be 8080 for Cloud Run)
ENV PORT=8080

# Start server
CMD [ "node", "server.js" ]
