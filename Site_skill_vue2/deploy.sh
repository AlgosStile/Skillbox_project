# остановить публикацию при ошибках
set -e

# сборка приложения
npm run build

# переход в каталог сборки
cd dist

# инициализация репозитория и загрузка кода в GitHub
git init
git add -A
g t commit -m 'deploy'
git push -f git@github.com/algosstile/vue-app.git master:gh-pages
