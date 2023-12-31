# Проект: "Movie-explorer" фронтенд.
### Дипломный проект в рамках обучения на Yandex-practicum, профессии "Веб-разработчик"

### Проект создал:
[Андрей Дунаев](https://github.com/Andrey1079)

### Проект состоит из:
- Статичная адаптивная страница с портфолио
- Страница с поиском фильмов по занным параметрам
- Страница сохраненных фильмов

### Функциональность проекта:
- Возможность создания пользователя (регистрации)
- Возможность авторизации пользователя
- Работа с JWT-токеном для возможности не вводить логин и пароль
- Возможность редактировать данные пользователя
   - Имя
   - email
- Возможность фильтрации фильмов по ключевым словам и длительности
- Состояние страницы с результатами поиска сохраняется в localStorage и при перезагрузке страницы данные восстанавдиваются
- Возможность сохранять/удалять фильмы на стороне сервера
- Возможность удалять свои карточки

### Технологии и инструменты использованные в проекте:
- HTML5
  - Кроссбраузерная верстка
- CSS3
  - Flex
  - Grid
  - Адаптивная верстка
  - Резиновая верстка
  - БЭМ
  - Pixel perfect
- JS
- React
  - hooks
  - custom-hooks
- CRA
- Работа с модулями
- Webpack
- Figma
- Git
  
#### ссылка на страницу проекта проект
https://github.com/Andrey1079/movies-explorer-frontend

## Запуск проекта
1. Клонировать репозиторий:
   - В терминале зайти в папку для клонирования и набрать команду:<br>
```git clone git@github.com:Andrey1079/movies-explorer-frontend.git```
2. Установить зависимости:
    - Для этого должен быть установлен менеджер пакетов npm
    - В терминале зайти в папку c проектом и выполнить команду:<br>
```npm i```
3. Запуск сервера:
    - В терминале зайти в папку куда был склонирован репозиторий и набрать команду:<br>
```npm run start``` — запускает сервер  <br>
4. Страница будет доступена по адресу ```http://localhost:3000/```
