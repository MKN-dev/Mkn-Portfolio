# ================================
# Étape 1 : Build
# ================================
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
ENV NEXT_DISABLE_ESLINT=true
RUN npm run build

# ================================
# Étape 2 : Runtime sécurisé
# ================================
FROM node:20-alpine AS runner

WORKDIR /app

RUN addgroup -S app && adduser -S app -G app

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

RUN chown -R app:app /app
USER app

EXPOSE 3000
CMD ["node", "server.js"]