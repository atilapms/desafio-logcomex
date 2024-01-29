# Desafio LogComex
Desafio para posição de Engenheiro de Software Front-End da LogComex
## Estudo de caso
Implementar um frontend em NuxtJs com uma página que liste os funcionários de uma empresa. A página deve mostrar uma lista de funcionários com filtros e quando clicar em detalhes aparecer uma nova página com a foto, descrição do mesmo e cargo.  

-   Todos os dados do backend podem ser mockados
-   Deve possuir um readme explicado como subir o projeto
-   Deve ser feito com Docker
-   Mínimo mock de 5 funcionários
## Tecnologias utilizadas
Para a execução do projeto, além dos requisitos solicitados, também optei por implementar um backend completo em **NodeJS**, com **Express** e banco de dados **Postgres**. Também utilizei o **Knex** como ORM para facilitar a comunicação com o Postgres, além de criar uma **migration** e um **seed** para, já no start da aplicação, um banco ser criado e um mock com 10 registros também. No frontend, utilizei o **Vuetify** como biblioteca de componentes e o **Pinia** para gerenciar o estado da aplicação.
## Instruções
1. Clone o projeto
```sh
git clone git@github.com:atilapms/desafio-logcomex.git
```
2. Acesse a pasta do projeto clonado
```sh
cd desafio-logcomex
```

3. Suba os Docker Containers
```sh
docker-compose up --build
```
4. Acesse o browser no endereço localhost na porta 3000
```sh
localhost:3000
```
