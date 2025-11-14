# Use official Node.js LTS version
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

ENV PORT=3001

# Install dependencies
RUN npm install

# Copy application files
COPY . .

# Expose the port
EXPOSE 3001

# Start the server
CMD ["node", "server.js"]
