ARG NOTION_PAGE_ID
ARG NEXT_PUBLIC_THEME

# 使用阿里云 Node.js 镜像
FROM registry.cn-chengdu.aliyuncs.com/fhcy/node:18 AS base

# 1. 依赖安装阶段
FROM base AS deps
# 配置阿里云 Alpine 仓库
RUN echo "https://mirrors.aliyun.com/alpine/v3.18/main" > /etc/apk/repositories && \
    echo "https://mirrors.aliyun.com/alpine/v3.18/community" >> /etc/apk/repositories && \
    apk update
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# 2. 构建阶段
FROM base AS builder
ARG NOTION_PAGE_ID
ARG NEXT_PUBLIC_THEME
ENV NEXT_BUILD_STANDALONE=true
ENV NEXT_TELEMETRY_DISABLED=1

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

# 3. 生产运行阶段
FROM base AS runner
ENV NODE_ENV=production
ENV PORT=3000

WORKDIR /app
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]
