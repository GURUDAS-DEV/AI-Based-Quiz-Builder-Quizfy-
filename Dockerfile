FROM node:18-alpine AS build

WORKDIR /app

# 1️⃣ Copy only dependency files for caching
COPY package.json package-lock.json ./

# 2️⃣ Install dependencies
RUN npm ci

# 3️⃣ Copy the rest of your project
COPY . .

# 4️⃣ Build React app
RUN npm run build

EXPOSE 80
    
# 5️⃣ Use nginx to serve
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
