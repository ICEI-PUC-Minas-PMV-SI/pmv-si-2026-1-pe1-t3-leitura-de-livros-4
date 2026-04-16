# Projeto de Interface

## User Flow

O fluxograma abaixo mostra o fluxo de interação do usuário pelas telas do sistema. Cada uma das telas deste fluxo é detalhada na seção de Protótipo de baixa fidelidade que se segue. Para visualizar o protótipo interativo, acesse o <a href="https://marvelapp.com/prototype/d2db1e3/screen/98670299?sign_up_origin=player" target="_blank">ambiente MarvelApp do projeto</a>.

## User Flow

O fluxo visual abaixo demonstra a interação do usuário pelas telas do sistema. Cada uma das telas deste fluxo é detalhada na seção de Protótipo de baixa fidelidade que se segue.

<br>

<table align="center" width="100%">
  <tr>
    <td align="center" width="33%">
      <b>Tela Inicial / Login</b><br>
      <img src="https://github.com/user-attachments/assets/7f7a1819-9491-4262-a9e7-b8fdfc70d0b6" width="250" style="border: 1px solid #ddd; border-radius: 4px;"/><br>
      ⬇️ <i>Login com sucesso</i>
    </td>
    <td align="center" width="33%">
      ↔️ <i>Aba "Criar conta"</i>
    </td>
    <td align="center" width="33%">
      <b>Tela de Cadastro</b><br>
      <img src="https://github.com/user-attachments/assets/8ddbce11-3ae6-4a8a-9eef-500cbd98b749" width="250" style="border: 1px solid #ddd; border-radius: 4px;"/>
    </td>
  </tr>
  <tr>
    <td align="center" colspan="3">
      <b>Minha Estante (Listagem Principal)</b><br>
      <img src="https://github.com/user-attachments/assets/19f70e51-faa1-4e1d-bef6-99de7537de9e" width="450" style="border: 1px solid #ddd; border-radius: 4px;"/>
    </td>
  </tr>
  <tr>
    <td align="center">↙️ <i>Clicar em "+ Adicionar"</i></td>
    <td align="center">⬇️ <i>Clicar no Lápis (Editar)</i></td>
    <td align="center">↘️ <i>Clicar na Lixeira (Excluir)</i></td>
  </tr>
  <tr>
    <td align="center">
      <b>Modal: Novo Livro</b><br>
      <img src="https://github.com/user-attachments/assets/5c8dcdd9-b5e6-4825-8782-977667a6c535" width="250" style="border: 1px solid #ddd; border-radius: 4px;"/>
    </td>
    <td align="center">
      <b>Modal: Editar Livro</b><br>
      <img src="https://github.com/user-attachments/assets/1a50cbb7-b042-41b5-a54f-95e0fe01c61b" width="250" style="border: 1px solid #ddd; border-radius: 4px;"/>
    </td>
    <td align="center">
      <b>Modal: Excluir Livro</b><br>
      <img src="https://github.com/user-attachments/assets/b82d8bcd-708e-43a4-8905-f091fd4ca58c" width="250" style="border: 1px solid #ddd; border-radius: 4px;"/>
    </td>
  </tr>
</table>

<figure> 
    <figcaption>Figura 1 - Fluxo de telas do usuário</figcaption>
</figure> 

## Protótipo de baixa fidelidade

As telas do sistema apresentam uma estrutura comum focada na simplicidade e organização, mantendo um cabeçalho padrão nas telas logadas e modais centralizados para ações específicas. 
<hr>

<h3><b>Tela – Login</b></h3>
<p>A tela inicial e de Login apresenta um layout minimalista, destacando a logo "Minha Estante". Possui abas alternáveis para "Entrar" e "Criar conta". O formulário de login exige E-mail e Senha, seguidos do botão principal de ação "Entrar".</p>

![Login](https://github.com/user-attachments/assets/7f7a1819-9491-4262-a9e7-b8fdfc70d0b6)

<figure> 
    <figcaption>Figura 2 - Tela de acesso à conta do usuário (Login)</figcaption>
</figure>
<hr>

<h3><b>Tela – Cadastro</b></h3>
<p>Acessada pela aba "Criar conta" na tela inicial, apresenta os campos necessários para o registro de um novo usuário: Nome, E-mail, Senha e Confirmar senha, finalizando com o botão de ação para efetivar o cadastro.</p>

![Cadastro](https://github.com/user-attachments/assets/8ddbce11-3ae6-4a8a-9eef-500cbd98b749)

<figure> 
    <figcaption>Figura 3 - Tela de cadastro de novos usuários</figcaption>
</figure>
<hr> 
  
<h3><b>Tela – Minha Estante (Vazia)</b></h3>
<p>Após o login, se o usuário não possuir livros cadastrados, ele é direcionado à sua estante vazia. O cabeçalho apresenta a logo e o botão de logout. Abaixo, há uma barra de busca, o botão "+ Adicionar livro" e filtros de status de leitura (Todos, Lendo, Lidos, Quero ler). Uma mensagem central convida o usuário a adicionar seu primeiro livro.</p>

![Estante Vazia](https://github.com/user-attachments/assets/db5a3fde-5277-4ef7-9639-6b6b6a79bd74)

<figure> 
    <figcaption>Figura 4 - Tela principal com a estante vazia</figcaption>
</figure>
<hr>

<h3><b>Tela – Minha Estante (Com Livros)</b></h3>
<p>Quando o usuário possui livros cadastrados, eles são exibidos em formato de lista (cards horizontais) abaixo dos filtros. Cada card mostra o status de leitura (ex: "Lido"), avaliação em estrelas, Título, Autor, Ano, número de páginas, um breve resumo e os ícones de ação para editar (lápis) e excluir (lixeira).</p>

![Estante com Livros](https://github.com/user-attachments/assets/19f70e51-faa1-4e1d-bef6-99de7537de9e)

<figure> 
    <figcaption>Figura 5 - Tela principal com a listagem de livros cadastrados</figcaption>
</figure>
<hr>

<h3><b>Tela – Modal: Novo Livro</b></h3>
<p>Ao clicar em "+ Adicionar livro", um modal sobreposto (overlay) é aberto. Ele contém um formulário completo para o cadastro da obra: Título, Autor(a), Editora, Ano, Páginas, Idioma, Status de leitura (dropdown), Avaliação (estrelas clicáveis) e uma área de texto para o Resumo. O botão de ação é "Adicionar livro".</p>

![Novo Livro](https://github.com/user-attachments/assets/5c8dcdd9-b5e6-4825-8782-977667a6c535)

<figure> 
    <figcaption>Figura 6 - Tela modal para adição de um novo livro</figcaption>
</figure>
<hr>

<h3><b>Tela – Modal: Editar Livro</b></h3>
<p>Acionado pelo ícone de lápis em um livro listado, abre-se um modal idêntico ao de "Novo Livro", porém com os campos previamente preenchidos com os dados da obra selecionada. O botão de ação é alterado para "Salvar alterações".</p>

![Editar Livro](https://github.com/user-attachments/assets/1a50cbb7-b042-41b5-a54f-95e0fe01c61b)

<figure> 
    <figcaption>Figura 7 - Tela modal para edição das informações do livro</figcaption>
</figure>
<hr>

<h3><b>Tela – Modal: Excluir Livro</b></h3>
<p>Acionado pelo ícone de lixeira, um modal de confirmação menor é exibido, questionando o usuário se ele deseja realmente excluir o livro selecionado (exibindo o título). Possui botões para "Ok" (confirmar) e "Cancelar".</p>

![Excluir Livro](https://github.com/user-attachments/assets/b82d8bcd-708e-43a4-8905-f091fd4ca58c)

<figure> 
    <figcaption>Figura 8 - Tela modal de confirmação para exclusão de livro</figcaption>
</figure>
<hr>
