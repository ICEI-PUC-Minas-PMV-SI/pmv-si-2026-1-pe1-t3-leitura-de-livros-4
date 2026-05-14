# Programação de Funcionalidades

Link de acesso: https://icei-puc-minas-pmv-si.github.io/pmv-si-2026-1-pe1-t3-leitura-de-livros-4/src/login/login.html

### TELA DE CADASTRO (RF-001)

**Responsável**: Isabela
  * O cadastro do usuário poderá ser feito através da opção "Criar conta" na tela inicial

Exemplo da tela de cadastro:
<img width="1431" height="856" alt="image" src="https://github.com/user-attachments/assets/78f13276-aa1f-4db2-a33f-8a9be9a8c41b" />

**Requisito atendido**
> **RF-001**: O sistema deve permitir cadastro de usuários

### TELA DE LOGIN (RF-002)

**Responsável**: Isabela
  * O login poderá ser realizado atrás da opção "Entrar" na tela inicial

Exemplo da tela de login:
<img width="1430" height="856" alt="image" src="https://github.com/user-attachments/assets/b738e46b-5897-4c19-99f4-1d6ea9d10151" />

**Requisito atendido**
> **RF-002**: O sistema deve permitir autenticação (login)

### Adicionar, editar e excluir livros (RF-003)

Implementação do CRUD completo de livros via modais na tela principal. O modal de formulário permite criar e editar livros com os campos: título, autor, editora, idioma, ano, número de páginas, status de leitura, avaliação por estrelas e resumo. Um segundo modal de confirmação é exibido antes de excluir um livro, evitando remoções acidentais.

### Criação
<img width="1515" height="396" alt="image" src="https://github.com/user-attachments/assets/51f72095-b928-453c-a035-66253d4caf82" />

<img width="648" height="785" alt="image" src="https://github.com/user-attachments/assets/4939198d-916c-4b77-a2c4-4ce61fb80726" />

### Edição
<img width="1454" height="227" alt="image" src="https://github.com/user-attachments/assets/6763141c-a90e-4682-83df-1868382f06dc" />

<img width="633" height="772" alt="image" src="https://github.com/user-attachments/assets/9444ef29-c23e-4dcf-976a-beae7aa300d1" />

### Exclusão
<img width="1392" height="210" alt="image" src="https://github.com/user-attachments/assets/1dc0a4e2-89ce-47b7-a392-70f8d396fa05" />
<img width="527" height="232" alt="image" src="https://github.com/user-attachments/assets/daa9f5e7-60ac-45e6-909d-1913f9cd21a4" />

### VISUALIZAR DETALHES DO LIVRO (RF-004) / EXIBIR LISTA DE LIVROS (RF-007)

**Responsável**: Isabela
  * Será possível visualizar a lista de livros e os detalhes na tela principal logo após realizar o login na plataforma.

Exemplo de visualização de detalhes de um livro e da lista de livros do usuário:
<img width="1474" height="863" alt="image" src="https://github.com/user-attachments/assets/342e730f-d681-4218-9a55-b53340202f2b" />

**Requisitos atendidos**
> **RF-004**: O sistema deve permitir visualizar detalhes de um livro
> 
> **RF-007**: O sistema deve exibir lista de livros do usuário

### BUSCAR LIVROS POR TÍTULO/AUTOR (RF-009)

**Responsável**: Isabela
  * Será possível buscar os livros pelo título e autor logo após realizar o login na plataforma na opção "Buscar por título/autor"

Exemplo de buscar de livros do usuário:
<img width="1476" height="862" alt="image" src="https://github.com/user-attachments/assets/d3483c95-d8fd-470a-a292-77d305906966" />

**Requisito atendido**
> **RF-009**: O sistema deve permitir busca de livros

### FILTRAR LIVROS POR STATUS (RF-010)

**Responsável**: Isabela
  * Será possível filtrar os livros por status nas opções "Lendo", "Lidos" e "Quero Ler" na tela principal.

Exemplo de filtragem de livros por status:
<img width="1477" height="860" alt="image" src="https://github.com/user-attachments/assets/5f2ca6de-3137-475e-bfff-275026bad85c" />

**Requisito atendido**
> **RF-010**: O sistema deve permitir filtrar livros por status

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Responsável | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| O sistema deve permitir cadastro de usuários                         | Isabela | login.html / login.css / login.js |
|RF-002| O sistema deve permitir autenticação (login)                         | Isabela | login.html / login.css / login.js |
|RF-003| O sistema deve permitir adicionar, editar e excluir livros           | Gabriel | index.html / index.css / index.js |
|RF-004| O sistema deve permitir visualizar detalhes de um livro              | Isabela | index.html / index.css / index.js |
|RF-005| O sistema deve permitir marcar livros como favoritos                 |  |  |
|RF-006| O sistema deve permitir avaliar livros                               |  |  |
|RF-007| O sistema deve permitir registrar opiniões (comentários/resenhas)    |  |  |
|RF-008| O sistema deve exibir lista de livros do usuário                     | Isabela | index.html / index.css / index.js |
|RF-009| O sistema deve permitir classificar livros por status                |  |  |
|RF-010| O sistema deve permitir busca de livros                              | Isabela | index.html / index.css / index.js |
|RF-011| O sistema deve permitir filtrar livros por status                    | Isabela | index.html / index.css / index.js |

## Descrição das estruturas

## Profiles
|  **Nome**      | **Tipo**          | **Descrição**                                    | **Exemplo**                                    |
|:--------------:|-------------------|--------------------------------------------------|------------------------------------------------|
| Name           | Texto             | Nome do usuário                                  | "Admin" / "User"                               |
| Email          | Texto             | Email do usuário                                 | "admin@gmail.com" / "user@gmail.com"           |
| Password       | Texto             | Senha do usuário                                 | "123456" / "123456"                            |
| Title          | Texto             | Título do livro                                  | "Clean Code"                                   |
| Author         | Texto             | Autor do livro                                   | "Robert C. Martin"                             |
| Year           | Numérico          | Ano em que o livro foi publicado pela editora    | 2008                                           |
| Pages          | Numérico          | Número de páginas do livro                       | 464                                            |
| Review         | Texto             | Resenha/opinião sobre o livro                    | "Ótimo livro"                                  |
| Publisher      | Texto             | Editora que publicou o livro                     | "Alta Books"                                   |
| Language       | Texto             | Idioma que o livro foi escrito                   | "Português"                                    |
| Status         | Enum              | Situação de conclusão do livro                   | Lendo, Lido, Quero ler                         |
| Rating         | Numérico          | Avaliação do livro em estrelas                   | 3 estrelas                                     |
