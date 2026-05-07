# Programação de Funcionalidades

Pré-requisitos: 

### Tela de Cadastro (RF-001)

Exemplo da tela de cadastro:
<img width="1431" height="856" alt="image" src="https://github.com/user-attachments/assets/78f13276-aa1f-4db2-a33f-8a9be9a8c41b" />

### Tela de Login (RF-002)

Exemplo da tela de login:
<img width="1430" height="856" alt="image" src="https://github.com/user-attachments/assets/b738e46b-5897-4c19-99f4-1d6ea9d10151" />

### Visualizar detalhes de um livro (RF-004) / Exibir lista de livros do usuário (RF-005)

Exemplo de visualização de detalhes de um livro e da lista de livros do usuário:
<img width="1474" height="863" alt="image" src="https://github.com/user-attachments/assets/342e730f-d681-4218-9a55-b53340202f2b" />

### Buscar livros do usuário (RF-009)

Exemplo de buscar de livros do usuário:
<img width="1476" height="862" alt="image" src="https://github.com/user-attachments/assets/d3483c95-d8fd-470a-a292-77d305906966" />

### Filtrar livros por status (RF-010)

Exemplo de filtragem de livros por status:
<img width="1477" height="860" alt="image" src="https://github.com/user-attachments/assets/5f2ca6de-3137-475e-bfff-275026bad85c" />

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Responsável | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| O sistema deve permitir cadastro de usuários                         | Isabela | login.html / login.css / login.js |
|RF-002| O sistema deve permitir autenticação (login)                         | Isabela | login.html / login.css / login.js |
|RF-003| O sistema deve permitir adicionar, editar e excluir livros           |  |  |
|RF-004| O sistema deve permitir visualizar detalhes de um livro              | Isabela | index.html / index.css / index.js |
|RF-005| O sistema deve permitir avaliar livros com nota                      |  |  |
|RF-006| O sistema deve permitir registrar opiniões (comentários/resenhas)    |  |  |
|RF-007| O sistema deve exibir lista de livros do usuário                     | Isabela | index.html / index.css / index.js |
|RF-008| O sistema deve permitir classificar livros por status                |  |  |
|RF-009| O sistema deve permitir busca de livros                              | Isabela | index.html / index.css / index.js |
|RF-010| O sistema deve permitir filtrar livros por status                    | Isabela | index.html / index.css / index.js |

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
