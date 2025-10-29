**Objetivo**
Criar uma Aplicação Web para contagem de valores em caixa.

**Contexto**
- A aplicação Web deverá ser integrada a API de contagem e conferência de caixa que está definida no Swagger file localizado em assets\swagger.json dentro do projeto e faça a integração da aplicação Web com a API
- Consulte o arquivo swagger.json para cada chamada à API e siga exatamente o que está documentado, sem exceções.
- A API estará rodando em http://localhost:3000
- Caminho da logo da bomboniere assets\logo_bomboniere.png
- O padrão para obter a imagem das notas é: nota{DENOMINACAO}.jpeg (exemplo: nota200.jpeg)
- O padrão para obter a imagem das moedas é: moeda{DENOMINACAO}.png (exemplo: moeda1.png)
- A aplicação Web será baseada nas seguintes regras de negócio: 
Regras de Negócio 1: Acesso (Login e Cadastro)

RN1.1 O acesso à aplicação deve ser restrito a usuários cadastrados.
RN1.2 O usuário deve fornecer credenciais válidas (login e senha) para acessar o sistema.
RN1.4 Deve haver uma funcionalidade para cadastro de novos usuários, permitindo que eles criem suas credenciais e acessem o sistema.

Funcionalidades da Tela (Login)

Logo da Bomboniere (topo da tela).

Campo para inserir Login.

Campo para inserir Senha.

Botão Entrar.

Espaço para apresentação de mensagem de erro/sucesso.

Link ou botão Cadastrar-se (ou equivalente) para direcionar à tela de cadastro.

Após realização com sucesso de login, a aplicação deve redirecionar para o /menu

Funcionalidades da Tela (Cadastro)

Logo da Bomboniere (topo da tela).

Campo para inserir Login.

Campo para inserir Senha.

Botão Cadastrar.

Espaço para apresentação de mensagem de erro/sucesso.

Link ou botão Login (ou equivalente) para direcionar à tela de login.

Após realização com sucesso de cadastro, a aplicação deve redirecionar para o /login

Funcionalidades da Tela (Menu)

Possuir três botões que direciona para contagem, resultados e logout.

Regras de Negócio 2: Módulo de Contagem de Caixa

RN2.1 A contagem deve ser realizada sequencialmente para todas as denominações de notas e moedas (R$ 200, R$ 100, R$ 50, R$ 20, R$ 10, R$ 5, R$ 2, R$ 1, R$ 0,50, R$ 0,25, R$ 0,10, R$ 0,05).
RN2.2 O usuário deve informar a quantidade de cada nota/moeda.
RN2.3 O sistema deve calcular o valor total (Quantidade x Valor da nota/moeda).
RN2.4 O valor total em dinheiro da contagem é a soma dos valores totais de todas as notas/moedas.
RN2.5 Os dados de contagem (valor da nota/moeda e quantidade) devem ser armazenados temporariamente até a finalização ou revisão.

Funcionalidades da Tela (Contagem)

Logo da Bomboniere (topo da tela).

Título: "Controle de Caixa".
Área de Input Interativa: Imagem da nota/moeda sendo contada.
Frase: "Informe a quantidade:".
Campo de Input Manual para a quantidade.
Botões de Ajuste (+ e - ou similar) para incrementar/decrementar a quantidade.
Botão Confirmar e Próximo para salvar o valor da denominação atual e avançar para a próxima.
Redirecionar para o módulo de resultado da contagem e revisão conforme a regra de negócio 3.

Regras de Negócio 3: Módulo de Resultado da Contagem e Revisão

RN3.1	Ao concluir a contagem de todas as notas/moedas, o sistema deve apresentar um resultado parcial.
RN3.2	A função Revisar Contagem deve permitir a visualização e edição das quantidades inseridas para cada nota/moeda.
RN3.3	Após qualquer edição nas notas/moedas, o sistema deve recalcular o Total em dinheiro e fornecer o resultado final.


Funcionalidades da Tela (Resultado da Contagem)

Logo da Bomboniere.
Mensagem: "Contagem Finalizada".
Valor Exibido: "Total em dinheiro: [Valor Total Calculado]".
Botão Revisar Contagem: Ao clicar, exibe uma Lista com (Denominação | Quantidade | Valor Total da Denominação). Permite a edição da Quantidade de cada item na lista.
Botão Recalcular Total (disponível após a edição).

**Regras**
- Apenas execute o que eu te pedir, não me pergunte nada.
- Todas as regras de negócios e suas funcionalidades deverão ser implementadas. 
- Na tela de login eu quero que o fundo seja branco, o nome controle de caixa seja centralizado, com um tamanho de fonte 30px e cor fúcsia. 
- Tamanho da logo 268px;
- Todos os elementos da página login devem estar centralizados, onde o label vai ficar a esquerda e o input a direita.
- As bordas dos containers login e senha também devem ser de cor fúcsia, bem como os nomes login e senha.
- O botão Entrar dever ter um degradê de rosa com lilás e o nome entrar deve ser branco. 
- "Não tem uma conta?" deve ser fúcsia e cadastrar-se rosa pink 
- Criar as telas de login, cadastro, contagem, resultado/revisão da contagem conforme descrito no contexto.
- Botão de Logout da menu deve remover o token armazenado e retornar para tela de login.
- Crie essa aplicação Web usando o framework express do Javascript
- Utilize HTML e CSS para o frontend, use o framework Bulma para estilização.
- Faça a aplicação web rodar na porta 4000.
- Configure mensagens de erro para quando a API retornar falhas (fora da faixa de status code 200)
- Criar um arquivo README
- Gere automaticamente o arquivo package.json com as dependências necessárias para rodar a aplicação conforme solicitado
- As telas de autenticação devem permitir navegação entre login e registro, e exibir mensagens de feedback claras para todas as ações do usuário.