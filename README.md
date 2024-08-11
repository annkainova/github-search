# Repository Search

Repository Search — это веб-приложение, которое позволяет пользователям искать репозитории на GitHub по различным критериям. Приложение использует GraphQL API GitHub для получения и отображения данных о репозиториях в удобном интерфейсе.

## Используемые технологии

- React
- Redux Toolkit
- Material-UI
- TypeScript
- GraphQL API GitHub

## Начало работы

### Предварительные требования

- Node.js
- npm (Node Package Manager)
- GitHub Personal Access Token (токен доступа)

### Установка

1. Клонируйте репозиторий:
   `git clone git@github.com:annkainova/github-search.git`
2. Перейдите в каталог проекта:
3. Установите зависимости:
   `npm install`
4. Подключение персонального токена доступа

- Получите ваш GitHub Personal Access Token, следуя инструкциям [[здесь](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic)].
  Создайте файл .env:
  REACT_APP_GITHUB_TOKEN=ваш токен доступа

5. Запустите сервер разработки:
   `npm run dev`
6. Откройте браузер и перейдите по адресу:
   http://localhost:5174/

### Использование

Введите ваш поисковый запрос в строку поиска и нажмите кнопку "Поиск".
Просмотрите результаты поиска, отображаемые в таблице.
Нажмите на репозиторий, чтобы увидеть более подробную информацию.
