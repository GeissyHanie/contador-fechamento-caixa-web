# Contador Fechamento Caixa Web

Aplicação Web para contagem de valores em caixa, integrada à API conforme especificação Swagger.

## Funcionalidades
- Login e cadastro de usuários
- Contagem sequencial de notas e moedas
- Exibição e revisão dos resultados da contagem
- Integração total com API (http://localhost:3000) conforme `assets/swagger.json`
- Layout estilizado com Bulma e CSS customizado

## Regras de Negócio
- Acesso restrito a usuários cadastrados
- Navegação entre login, cadastro, menu, contagem e resultado
- Mensagens de erro claras para falhas de API
- Logout remove token e retorna à tela de login

## Como rodar
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor:
   ```bash
   npm start
   ```
3. Acesse em [http://localhost:4000](http://localhost:4000)

## Estrutura
- `assets/` - Swagger, logo, imagens de notas/moedas
- `public/` - CSS, Bulma, JS
- `views/` - Templates EJS
- `routes/` - Rotas Express
- `controllers/` - Lógica das telas

## Observações
- Certifique-se que a API está rodando em http://localhost:3000
- Consulte o Swagger para detalhes das rotas da API
