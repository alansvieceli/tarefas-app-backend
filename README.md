
npm i --save -E body-parser@1.19.0 express@4.17.1 mongoose@5.5.12 node-restful@0.2.5 pm2@3.5.1

npm -i --save-dev -E nodemon@1.19.1


npm run dev

npm run production

GET - http://localhost:3003/api/tarefas
POST - http://localhost:3003/api/tarefas
PUT - http://localhost:3003/api/tarefas/{id}
DELETE - http://localhost:3003/api/tarefas/{id}

node-restful
https://github.com/baugarten/node-restful

pm2
http://pm2.keymetrics.io/
(npm i pm2 -g  ou   ./node_modules/.bin/pm2)

pm2 monit 
pm2 status