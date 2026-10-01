FROM node:24-bookworm-slim

WORKDIR /app

RUN npm install --global pnpm@10.26.1

COPY . .

RUN pnpm install --frozen-lockfile

ENV PORT=4173
ENV BASE_PATH=/

RUN pnpm --filter @workspace/gold-landing-page run build

EXPOSE 4173

CMD ["pnpm", "--filter", "@workspace/gold-landing-page", "run", "serve"]