FROM denoland/deno:2.2.4

WORKDIR /app

COPY deno.json .
COPY deno.lock .

RUN deno cache main.ts

COPY . .
RUN deno task build

EXPOSE 8000

CMD ["run", "--allow-net", "--allow-read", "--allow-env", "_fresh/server.js"]