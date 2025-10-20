FROM node:alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable pnpm
RUN corepack prepare pnpm@latest --activate

WORKDIR /site
COPY ./package.json ./
COPY . ./

RUN pnpm install

EXPOSE 4000
EXPOSE 4001

CMD ["pnpm", "install"]
