# Especificações do Projeto

## Personas

<table>
<tbody>
<tr>
<th colspan="2">Perfil 1: Leitor </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">
Usuário que deseja registrar os livros que leu, avaliar e organizar seu histórico de leitura.
</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
1. Cadastrar livros lidos, em leitura e desejados;<br>
2. Registrar opiniões e avaliações;<br>
3. Consultar histórico de leitura;<br>
4. Interface simples e intuitiva.
</td>
</tr>
</tbody>
</table>

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Leitor | Cadastrar uma conta                           | Acessar minhas informações de leitura               |
| Leitor | Fazer login no sistema                        | Acessar meus dados salvos                           |
| Leitor | Adicionar um livro                            | Registrar que li, estou lendo ou quero ler          |
| Leitor | Avaliar um livro                              | Expressar minha opinião quantitativa                |
| Leitor | Escrever uma opinião sobre um livro           | Registrar minha experiência de leitura              |
| Leitor | Visualizar minha lista de livros              | Acompanhar meu histórico de leitura                 |
| Leitor | Classificar livros (lido, lendo, quero ler)   | Organizar melhor minhas leituras                    |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----| 
|RF-001| O sistema deve permitir cadastro de usuários                                       | ALTA |  
|RF-002| O sistema deve permitir autenticação (login)                                       | ALTA | 
|RF-003| O sistema deve permitir adicionar, editar e excluir livros                         | ALTA |  
|RF-004| O sistema deve permitir visualizar detalhes de um livro                            | ALTA | 
|RF-005| O sistema deve permitir marcar livros como favoritos                               | BAIXA |  
|RF-006| O sistema deve permitir avaliar livros                                             | ALTA | 
|RF-007| O sistema deve permitir registrar opiniões (comentários/resenhas)                  | MÉDIA |  
|RF-008| O sistema deve exibir lista de livros do usuário                                   | ALTA | 
|RF-009| O sistema deve permitir classificar livros por status (lidos, lendo, quero ler)    | ALTA |  
|RF-010| O sistema deve permitir filtrar livros por título                                  | MÉDIA | 
|RF-011| O sistema deve permitir filtrar livros por categoria/gênero                        | BAIXA |  
|RF-012| O sistema deve permitir editar perfil do usuário                                   | MÉDIA | 

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve possuir interface intuitiva e de fácil utilização    | ALTA | 
|RNF-002| O sistema deve ser responsivo (adaptável a diferentes dispositivos) | ALTA | 
|RNF-003| O sistema deve garantir segurança dos dados dos usuários            | ALTA | 
|RNF-004| O sistema deve permitir escalabilidade para múltiplos usuários      | BAIXA | 
|RNF-005| O sistema deve possuir mensagens de erro claras para o usuário      | ALTA | 
|RNF-006| O sistema deve validar os dados inseridos (ex: campos obrigatórios) | ALTA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
