# nodejs_restapi
Запуск демо-проекта

Проверить, что инстанс MongoDB запущен

Установить зависимости npm install

Запустить сервер npm start

Через Postman сделать GET запрос к базе localhost:1428/api/user

Реализация CRUD для пользователя, аналогично для message

GET localhost:1428/history/:id

Чтобы получить id пользователей, которые получали сообщения от этого пользователя.

GET localhost:1428/api/user/:id

GET localhost:1428/api/message/:id

Получить данные пользователя или сообщение.

PUT localhost:1428/api/user/:id

PUT localhost:1428/api/message/:id

Изменить данные пользователя или сообщения.

POST localhost:1428/api/user/

Добавить пользователя.
Указать поля: name,email.

POST localhost:1428/api/message/

Добавить сообщение.
Для message поля receiverId, senderId, text. 

DELETE localhost:1428/api/user/:id

DELETE localhost:1428/api/message/:id

Удалить пользователя или сообщение.


