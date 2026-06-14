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
  * O login poderá ser realizado através da opção "Entrar" na tela inicial

Exemplo da tela de login:
<img width="1430" height="856" alt="image" src="https://github.com/user-attachments/assets/b738e46b-5897-4c19-99f4-1d6ea9d10151" />

**Requisito atendido**
> **RF-002**: O sistema deve permitir autenticação (login)

### ADICIONAR, EDITAR E EXCLUIR LIVROS (RF-003) / AVALIAR LIVROS (RF-005) / REGISTRAR OPINIÕES (RF-006)

**Responsável**: Gabriel
  * A adição do livro poderá ser realizada através da opção "+ Adicionar livro" na tela inicial

Exemplo da tela de adicionar livro:
<img width="1154" height="434" alt="image" src="https://github.com/user-attachments/assets/7b43abca-9397-48cc-995b-a6aa24b616c2" />
<img width="1139" height="806" alt="image" src="https://github.com/user-attachments/assets/587ece67-645c-4494-bc89-10452c2f8a31" />

  * A edição do livro poderá ser realizada através do ícone <img width="30" height="30" alt="image" src="https://github.com/user-attachments/assets/f53dda7b-e257-4c89-a150-8a7082a134c3" /> ao selecionar um registro na tela inicial

Exemplo da tela de editar livro:
<img width="1135" height="652" alt="image" src="https://github.com/user-attachments/assets/01be9b43-7048-46eb-a66d-00e00a1b5480" />
<img width="1186" height="815" alt="image" src="https://github.com/user-attachments/assets/955624e6-5a80-4305-b9b5-d9bb73f422fc" />

  * A exclusão do livro poderá ser realizada através do ícone <img width="30" height="30" alt="image" src="https://github.com/user-attachments/assets/1bac4dbf-895f-4155-ad73-bbc960e6b4fc" /> ao selecionar um registro na tela inicial

Exemplo de exclusão de um livro:
<img width="1164" height="659" alt="image" src="https://github.com/user-attachments/assets/02ba1ee8-9d96-4792-a77f-6d4fbf70251c" />
<img width="1168" height="661" alt="image" src="https://github.com/user-attachments/assets/2fadb2dc-8764-4bf6-b4fb-83042bc04672" />

**Requisitos atendidos**
> **RF-003**: O sistema deve permitir adicionar, editar e excluir livros
> 
> **RF-005**: O sistema deve permitir avaliar livros
> 
> **RF-006**: O sistema deve permitir registrar opiniões

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

|RF-004| O sistema deve permitir visualizar detalhes de um livro              | Isabela | index.html / index.css / index.js |

|RF-007| O sistema deve exibir lista de livros do usuário                     | Isabela | index.html / index.css / index.js |

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
| Publisher      | Texto             | Editora que publicou o livro                     | "Alta Books"                                   |
| Language       | Texto             | Idioma que o livro foi escrito                   | "Português"                                    |
| Status         | Enum              | Situação de conclusão do livro                   | "Lendo", "Lido", "Quero ler"                   |
| Rating         | Numérico          | Avaliação do livro em estrelas                   | 3 _(estrelas)_                                 |
