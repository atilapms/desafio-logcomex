# Use a imagem oficial do Node.js como base
FROM node:18-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

RUN npm install knex -g

# Copia o restante do código-fonte para o diretório de trabalho
COPY . .

# Expõe a porta 3001 do contêiner
EXPOSE 3001

# Comando para iniciar o servidor quando o contêiner for iniciado
CMD ["npm", "start"]
