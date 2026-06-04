# Teste de Software

## Plano de Testes de Software

**Caso de Teste** | **CT01 - Cadastro de Usuário**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço [www.leituradelivros.com.br](https://icei-puc-minas-pmv-si.github.io/pmv-si-2026-1-pe1-t3-leitura-de-livros-4/src/login/login.html) <br> 2) Clique em "criar conta" <br> 3) Preencha todos os campos do formulário <br> 3) Clique no botão "Criar conta" ao final do formulário.
**Requisitos associados** | RF-001
**Resultado esperado** | Usuário cadastrado com sucesso e acesso à página principal.
**Dados de entrada** | Nome: Maria Silva <br> Email: maria@email.com <br> Senha: 123456
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT02 - Login de Usuário**
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço [www.leituradelivros.com.br](https://icei-puc-minas-pmv-si.github.io/pmv-si-2026-1-pe1-t3-leitura-de-livros-4/src/login/login.html) <br> 2) Clique no botão "Entrar" <br> 3) Preencha todos os campos do formulário <br> 4) Clique no botão "Entrar" ao final do formulário.
**Requisitos associados** | RF-002
**Resultado esperado** | Usuário autenticado e acesso à página principal.
**Dados de entrada** | Email e senha cadastrados anteriormente.
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT03 - Adicionar Livro**
 :--------------: | ------------
**Procedimento**  | 1) Clicar em "+Adicionar Livro". <br> 2) Preencher os dados do livro. <br> 3) Clique no botão "Adicionar Livro" ao final do formulário.
**Requisitos associados** | RF-003
**Resultado esperado** | Livro cadastrado e exibido na lista.
**Dados de entrada** | Clean Code, Robert C. Martin, 2008, Lendo.
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT04 - Editar Livro**
 :--------------: | ------------
**Procedimento**  | 1) Selecionar um livro existente. <br> 2) Clicar no ícone de editar (lápis). <br> 3) Alterar informações. 3) Salvar.
**Requisitos associados** | RF-003
**Resultado esperado** | Informações atualizadas corretamente.
**Dados de entrada** | Alteração do status de "Lendo" para "Lido".
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT05 - Excluir Livro**
 :--------------: | ------------
**Procedimento**  | 1) Selecionar um livro existente. <br> 2) Clicar no ícone de excluir (lixeira). <br> 3) Confirmar exclusão.
**Requisitos associados** | RF-003
**Resultado esperado** | Livro removido da lista.
**Dados de entrada** | Livro previamente cadastrado.
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT06 - Visualizar Detalhes**
 :--------------: | ------------
**Procedimento**  | 1) Selecionar um livro da lista.
**Requisitos associados** | RF-004
**Resultado esperado** | Exibição completa das informações do livro.
**Dados de entrada** | Livro previamente cadastrado.
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT07 - Avaliar Livro**
 :--------------: | ------------
**Procedimento**  | 1) Selecionar um livro. 2) Clicar no ícone de editar (lápis). 3) Informar quantidade de estrelas. 4) Salvar.
**Requisitos associados** | RF-006
**Resultado esperado** | Avaliação registrada corretamente.
**Dados de entrada** | Nota 4 estrelas.
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT08 - Registrar Opinião**
 :--------------: | ------------
**Procedimento**  | 1) Selecionar um livro. 2) Clicar no ícone de editar (lápis). 3) Inserir um comentário. 4) Salvar.
**Requisitos associados** | RF-007
**Resultado esperado** | Resenha armazenada e exibida no livro.
**Dados de entrada** | "Excelente leitura para desenvolvedores."
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT09 - Buscar Livro**
 :--------------: | ------------
**Procedimento**  | 1. Informar título ou autor na barra de busca.
**Requisitos associados** | RF-009
**Resultado esperado** | Exibição apenas dos livros compatíveis com a pesquisa.
**Dados de entrada** | "Clean Code"
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT10 - Filtrar por Status**
 :--------------: | ------------
**Procedimento**  | 1. Selecionar filtro "Lidos", "Lendo" ou "Quero Ler".
**Requisitos associados** | RF-010
**Resultado esperado** | Exibição apenas dos livros do status selecionado.
**Dados de entrada** | Status "Lido".
**Resultado obtido** | Sucesso

## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

|*Caso de Teste*                                 |*CT01 - Cadastro de Usuário*                                         |
|---|---|
|Requisito Associado | RF-001: O sistema deve permitir cadastro de usuários|
|Link do vídeo do teste realizado: | [CT01 - Cadastro de Usuário](https://drive.google.com/file/d/1KVVVZ3KN1XLbM1oCZW1TKNPYSiQHr82F/view?usp=sharing)| 

|*Caso de Teste*                                 |*CT02 - Login de Usuário*                                        |
|---|---|
|Requisito Associado | RF-002: O sistema deve permitir autenticação (login)|
|Link do vídeo do teste realizado: | [CT02 - Login de Usuário](https://drive.google.com/file/d/1sikhJJxbnJB3kJPyrMQ5r2isclYnQDPp/view?usp=sharing) | 

|*Caso de Teste*                                 |*CT03 - Adicionar Livro*                                        |
|---|---|
|Requisito Associado | RF-003: O sistema deve permitir adicionar, editar e excluir livros|
|Link do vídeo do teste realizado: | [CT03 - Adicionar Livro](https://drive.google.com/file/d/1xi5sOo61YKCyI1Qc2MxEX9c-hAt_fZvt/view?usp=sharing) | 

|*Caso de Teste*                                 |*CT04 - Editar Livro*                                        |
|---|---|
|Requisito Associado | RF-003: O sistema deve permitir adicionar, editar e excluir livros|
|Link do vídeo do teste realizado: | [CT04 - Editar Livro](https://drive.google.com/file/d/15oF4RRZgWPo8pYzSqL4rig45WYS2CAiL/view?usp=sharing) | 

|*Caso de Teste*                                 |*CT05 - Excluir Livro*                                        |
|---|---|
|Requisito Associado | RF-003: O sistema deve permitir adicionar, editar e excluir livros|
|Link do vídeo do teste realizado: | [CT05 - Excluir Livro](https://drive.google.com/file/d/1v7WqABYyH-OfDpp72UvcbJ9pWM4EwgtU/view?usp=sharing) | 

|*Caso de Teste*                                 |*CT06 - Visualizar Detalhes*                                        |
|---|---|
|Requisito Associado | RF-001 - A aplicação deve permitir que os usuários criem uma conta e gerenciem seu cadastro|
|Link do vídeo do teste realizado: | [CT06 - Visualizar Detalhes](https://drive.google.com/file/d/1kto9-lgz0apuVEFSgwHjVFr3Wg2MNMvi/view?usp=sharing) | 

|*Caso de Teste*                                 |*CT07 - Avaliar Livro*                                        |
|---|---|
|Requisito Associado | RF-004: O sistema deve permitir visualizar detalhes de um livro|
|Link do vídeo do teste realizado: | [CT07 - Avaliar Livro](https://drive.google.com/file/d/1GoS0pjhbGBK5mCH_35BO5unoS5_xgKqT/view?usp=sharing) | 

|*Caso de Teste*                                 |*CT08 - Registrar Opinião*                                        |
|---|---|
|Requisito Associado | RF-006 - O sistema deve permitir registrar opiniões (comentários/resenhas|
|Link do vídeo do teste realizado: | [CT08 - Registrar Opinião](https://drive.google.com/file/d/1A4XRYuSgGXAAd5MaPPnROQNFZU2N3SKn/view?usp=sharing) | 

|*Caso de Teste*                                 |*CT09 - Buscar Livro*                                        |
|---|---|
|Requisito Associado | RF-009: O sistema deve permitir busca de livros|
|Link do vídeo do teste realizado: | [CT09 - Buscar Livro](https://drive.google.com/file/d/1SmGmWadb4f4kn-u0CcKsTy_yalxgoBw6/view?usp=sharing) | 

|*Caso de Teste*                                 |*CT10 - Filtrar por Status*                                        |
|---|---|
|Requisito Associado | RF-010: O sistema deve permitir filtrar livros por status|
|Link do vídeo do teste realizado: | [CT10 - Filtrar por Status](https://drive.google.com/file/d/1jAuNNG51kN4RI1dJ5sjrJ0dK1CkNJo0v/view?usp=sharing) | 

## Avaliação dos Testes de Software

Os testes de software realizados permitiram verificar o correto funcionamento das principais funcionalidades da aplicação. Todos os casos de teste executados apresentaram resultados satisfatórios, demonstrando conformidade com os requisitos funcionais definidos durante a etapa de especificação.

Entre os pontos fortes identificados destacam-se a simplicidade da interface, a facilidade de navegação entre as funcionalidades e o correto armazenamento das informações dos usuários e dos livros cadastrados. As funcionalidades de cadastro, autenticação, gerenciamento de livros, avaliações e filtros apresentaram comportamento consistente durante os testes realizados.

Como pontos de melhoria, observou-se a necessidade de aprimorar algumas validações de entrada de dados, bem como melhorar as mensagens de feedback apresentadas ao usuário em determinadas situações. Também foram identificadas oportunidades de aprimoramento na organização visual de algumas telas para facilitar ainda mais a experiência de navegação.

De forma geral, os resultados obtidos indicam que a aplicação atende aos requisitos propostos para o projeto, estando apta para utilização pelos usuários previstos no escopo da solução.

# Testes de Usabilidade

## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você acabou de criar uma conta. Faça login e adicione um livro à sua biblioteca pessoal. |
| 2             | Localize um livro específico utilizando a funcionalidade de busca por título ou autor. |
| 3             | Altere o status de um livro para "Lido", registre uma avaliação e escreva uma opinião sobre ele. |
| 4             | Filtre sua biblioteca para visualizar apenas os livros marcados como "Quero Ler". |

## Registro de Testes de Usabilidade

Cenário 1: Você acabou de criar uma conta. Faça login e adicione um livro à sua biblioteca pessoal.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 35 segundos                     |
| 2       | SIM             | 5                    | 42 segundos                     |
| 3       | SIM             | 4                    | 39 segundos                     |
| 4       | SIM             | 5                    | 37 segundos                     |
|  |  |  |  |
| **Média** | 100%          | 4,75                 | 38,25 segundos                  |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 15 segundos |

    Comentários dos usuários: Interface simples e fácil de entender.
    Não tive dificuldades e acho que ficou bem intuitivo.

Cenário 2: Localize um livro específico utilizando a funcionalidade de busca por título ou autor.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 12 segundos                          |
| 2       | SIM             | 4                    | 18 segundos                          |
| 3       | SIM             | 5                    | 15 segundos                          |
| 4       | SIM             | 5                    | 14 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 4,75                | 14,75 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 6 segundos |

    Comentários dos usuários: A busca foi considerada intuitiva.

Cenário 3: Altere o status de um livro para "Lido", registre uma avaliação e escreva uma opinião sobre ele.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 28 segundos                          |
| 2       | SIM             | 4                    | 33 segundos                          |
| 3       | SIM             | 5                    | 29 segundos                          |
| 4       | SIM             | 5                    | 31 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 4,75                | 30,25 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 10 segundos |

    Comentários dos usuários: Alguns usuários demoraram para localizar o campo de avaliação.

Cenário 4: Filtre sua biblioteca para visualizar apenas os livros marcados como "Quero Ler".

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 10 segundos                          |
| 2       | SIM             | 5                    | 12 segundos                          |
| 3       | SIM             | 4                    | 15 segundos                          |
| 4       | SIM             | 5                    | 11 segundos                          |
|  |  |  |  |
| **Média**     | 100%           | 4,75                | 12 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 5 segundos |

    Comentários dos usuários: Funcionalidade facilmente encontrada pelos usuários.

## Avaliação dos Testes de Usabilidade

Os testes de usabilidade demonstraram que os participantes conseguiram concluir todos os cenários propostos com sucesso, resultando em uma taxa de sucesso de 100% em todas as atividades avaliadas.

A satisfação dos usuários apresentou média superior a 4,5 em todos os cenários, indicando uma percepção positiva em relação à facilidade de uso da aplicação. Os participantes destacaram a organização da interface, a simplicidade das funcionalidades e a facilidade para cadastrar e consultar livros.

Observou-se uma diferença entre o tempo de execução dos usuários e o tempo obtido pelo especialista, o que era esperado devido ao conhecimento prévio do sistema por parte da equipe de desenvolvimento. Apesar disso, os tempos registrados indicam que os usuários conseguiram compreender rapidamente o funcionamento da aplicação.

Como oportunidades de melhoria, foram identificados ajustes relacionados à visibilidade de algumas funcionalidades, especialmente os campos de avaliação e edição dos livros. Essas melhorias poderão ser consideradas em futuras evoluções do sistema para tornar a navegação ainda mais intuitiva.
