FROM node:20-alpine AS base

FROM base AS deps

RUN apk add -U --no-cache ca-certificates
RUN apk add -U --no-cache libc6-compat

WORKDIR /app

COPY ./package.json ./yarn.lock* ./package-lock.json* ./pnpm-lock.yaml* .npmrc* ./

RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

FROM base AS builder

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN \
  if [ -f yarn.lock ]; then yarn run build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else echo "Lockfile not found." && exit 1; \
  fi

FROM base AS final
WORKDIR /app

# TODO change to secretes.NODE_ENV
ENV NODE_ENV="production" 
# TODO change to secretes.NPM_CONFIG_LOGLEVEL
ENV NPM_CONFIG_LOGLEVEL="warn"
ENV NEXT_PRIVATE_STANDALONE=true

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone .
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3200

ENV PORT=3200
ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]
