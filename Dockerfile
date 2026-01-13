FROM denoland/deno:latest


# Установите рабочий каталог
WORKDIR /app

# 1. Сначала скопируйте файлы конфигурации (они нужны для кэширования)
COPY deno.json deno.lock ./

# 2. Попробуйте скэшировать dev.ts (или другой entry-файл, если это Fresh приложение)
# Для обычных проектов, если у вас есть файл зависимостей (например, deps.ts):
# RUN deno cache deps.ts
# Для Fresh проекта, начните с dev.ts или main.ts, если он уже есть:
RUN deno cache dev.ts 2>/dev/null || deno cache main.ts 2>/dev/null || echo "Entry point not yet available, caching dependencies later"

# 3. Скопируйте весь остальной исходный код
COPY . .

# 4. Соберите приложение (эта команда загрузит все оставшиеся зависимости)
RUN deno task build

# 5. Запустите приложение
EXPOSE 8000
CMD ["run", "--allow-net", "--allow-read", "--allow-env", "_fresh/server.js"]