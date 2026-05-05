const booksKeyFor = (id) => `minha-estante:books:${id}`; // CHAVE PARA OS LIVROS

const STATUS_META = {
  // METADADOS DOS STATUS
  lendo: { label: "Lendo" },
  lido: { label: "Lido" },
  quero: { label: "Quero ler" },
};

let currentUser = {
  id: "",
  email: "",
  name: "",
}; // USUÁRIO ATUAL

let books = []; // LIVROS DO USUÁRIO
let filter = "todos"; // FILTRO ATUAL
let query = ""; // BUSCA ATUAL

const $ = (sel) => document.querySelector(sel); // SELECIONAR UM ELEMENTO
const $$ = (sel) => Array.from(document.querySelectorAll(sel)); // SELECIONAR VÁRIOS ELEMENTOS

import { loadSession, saveSession, loadUsers } from "../auth.js";
import { uid } from "../utils.js";

/* ---------- STORAGE ---------- */
// CARREGA OS LIVRO DO USUÁRIO DO LOCALSTORAGE
function loadBooks(id) {
  try {
    const raw = localStorage.getItem(booksKeyFor(id)); // OBTEM OS LIVROS

    if (!raw) {
      return []; // SE NÃO HOUVER LIVROS, RETORNA UM ARRAY VAZIO
    }

    const parsed = JSON.parse(raw); // CONVERTE PARA JSON
    return Array.isArray(parsed) ? parsed : []; // VERIFICA SE É UM ARRAY, CASO NÃO SEJA É RETORNADO UM ARRAY VAZIO (EVITAR FALHA)
  } catch {
    return [];
  }
}

// SALVA OS LIVROS DO USUÁRIO NO LOCALSTORAGE
function saveBooks() {
  if (!currentUser) {
    return; // SE NÃO HOUVER USUÁRIO ATUAL, NÃO SALVA
  }

  localStorage.setItem(booksKeyFor(currentUser.id), JSON.stringify(books)); // SALVA OS LIVROS
}

// LOGOUT
function handleLogout() {
  currentUser = null; // REMOVE O USUÁRIO ATUAL
  books = []; // REMOVE OS LIVROS
  saveSession(null); // REMOVE A SESSÃO
  window.location.href = "/login/login.html"; // REDIRECIONA PARA A PÁGINA DE LOGIN
}

/* ---------- RENDER ---------- */
// RENDERIZA A LISTA DE LIVROS E AS ESTATÍSTICAS
function render() {
  renderStats(); // RENDERIZAR AS ESTATÍSTICAS
  renderList(); // RENDERIZAR A LISTA DE LIVROS
}

// RENDERIZA AS ESTATÍSTICAS QUE SERÃO EXIBIDAS NA TELA
function renderStats() {
  const counts = {
    todos: books.length, // QUANTIDADE DE TODOS OS LIVROS
    lendo: books.filter((b) => b.status === "lendo").length, // QUANTIDADE DE LIVROS QUE ESTÃO SENDO LIDOS
    quero: books.filter((b) => b.status === "quero").length, // QUANTIDADE DE LIVROS QUE QUERO LER
    lido: books.filter((b) => b.status === "lido").length, // QUANTIDADE DE LIVROS QUE JÁ FORAM LIDOS
  };

  const items = [
    // ITENS PARA O FILTRO
    { key: "todos", label: "Todos" }, // TODOS OS LIVROS
    { key: "lendo", label: "Lendo" }, // LIVROS QUE ESTÃO SENDO LIDOS
    { key: "lido", label: "Lidos" }, // LIVROS QUE JÁ FORAM LIDOS
    { key: "quero", label: "Quero ler" }, // LIVROS QUE QUERO LER
  ];

  $("#stats").innerHTML = items // ADICIONA NO HTML AS ESTATÍSTICAS DE MANEIRA DINÂMICA
    .map(
      (it) => `
    <button class="stat ${filter === it.key ? "active" : ""}" data-filter="${it.key}">
      <div class="stat-head">
        <span class="stat-label">${it.label}</span>
      </div>
      <div class="stat-value">${counts[it.key]}</div>
    </button>
  `,
    )
    .join(""); // IT: REPRESENTA CADA ITEM DO ARRAY DE ESTATÍSTICAS, QUANDO UM IT ESTIVER ATIVO ADICIONA A CLASSE ACTIVE E O DATA-FILTER RECEBE O VALOR DO ITEM

  $$("#stats .stat").forEach((el) => {
    // ADICIONA O EVENTO DE CLICK PARA AS ESTATÍSTICAS
    el.addEventListener("click", () => {
      filter = el.dataset.filter; // ATUALIZA O FILTRO
      render(); // RENDERIZA A LISTA DE LIVROS
    });
  });
}

// RENDERIZA A LISTA DE LIVROS QUE SERÃO EXIBIDOS NA TELA
function renderList() {
  const q = query.trim().toLowerCase(); // BUSCA ATUAL (O QUE ESTÁ PREENCHIDO NO CAMPO DE BUSCA)
  const filtered = books
    .filter((b) => (filter === "todos" ? true : b.status === filter)) // FILTRA OS LIVROS
    .filter(
      (b) =>
        !q || // SE NÃO HOUVER BUSCA, RETORNA TODOS OS LIVROS
        b.title.toLowerCase().includes(q) || // FILTRA OS LIVROS PELO TÍTULO
        b.author.toLowerCase().includes(q), // FILTRA OS LIVROS PELO AUTOR
    )
    .sort((a, b) => b.createdAt - a.createdAt); // ORDENA OS LIVROS PELA DATA DE CRIAÇÃO

  const list = $("#list"); // SELECIONA O ELEMENTO HTML DA LISTA DE LIVROS
  const empty = $("#empty"); // SELECIONA O ELEMENTO HTML DA MENSAGEM DE LISTA VAZIA

  if (filtered.length === 0) {
    // SE NÃO HOUVER LIVROS NA LISTA APÓS FILTRAR (SE A LISTA ESTIVER VAZIA)
    list.classList.add("hidden"); // ADICIONA A CLASSE HIDDEN PARA A LISTA DE LIVROS (ESCONDER A LISTA)
    empty.classList.remove("hidden"); // REMOVE A CLASSE HIDDEN PARA A MENSAGEM DE LISTA VAZIA (EXIBIR A MENSAGEM DE LISTA VAZIA)
    const hasBooks = books.length > 0; // VERIFICA SE HÁ LIVROS
    empty.innerHTML = `
      <h3>${hasBooks ? "Nenhum livro nesta categoria" : "Sua biblioteca está vazia"}</h3>
    `; // ADICIONA A MENSAGEM DE LISTA VAZIA CASO NÃO HOUVER LIVROS
    return;
  }

  empty.classList.add("hidden"); // REMOVE A CLASSE HIDDEN DA MENSAGEM DE LISTA VAZIA
  list.classList.remove("hidden"); // ADICIONA A CLASSE HIDDEN DA LISTA DE LIVROS
  list.innerHTML = filtered.map((b) => bookCardHTML(b)).join(""); // RENDERIZA OS LIVROS NA LISTA
}

// RENDERIZA O CARD DO LIVRO QUE SERÁ EXIBIDO NA TELA
function bookCardHTML(b) {
  const meta = STATUS_META[b.status]; // METADADOS DO STATUS
  const stars = renderStarsHTML(b.rating, true); // RENDERIZA AS ESTRELAS
  const metaParts = []; // SERÁ USADA PARA ADICIONAR O ANO E O NÚMERO DE PÁGINAS DO LIVRO

  if (b.year != null) {
    metaParts.push(`${b.year}`); // ADICIONAR O ANO
  }

  if (b.pages != null) {
    metaParts.push(`${b.pages} páginas`); // ADICIONAR O NÚMERO DE PÁGINAS
  }

  return `
    <article class="card" data-id="${b.id}">
      <div class="card-head">
        <span class="badge">${meta.label}</span>
        <div class="card-stars">${stars}</div>
      </div>
      <h3 class="card-title">${b.title}</h3>
      <p class="card-author">${b.author}</p>
      <div class="card-meta">${metaParts.map((m) => `<span>${m}</span>`).join("")}</div>
      <p class="card-review">${b.review}</p>
    </article>
  `; // RENDERIZA O CARD DO LIVRO COM OS DETALHES DO LIVRO
}

// RENDERIZA AS ESTRELAS QUE SERÃO EXIBIDAS NA TELA
function renderStarsHTML(value, readonly = false) {
  let html = `<div class="stars ${readonly ? "readonly" : ""}">`; // DEFINE O ELEMENTO HTML QUE SERÃO ADICIONADAS AS ESTRELAS
  for (let n = 1; n <= 5; n++) {
    // CONSIDERADO A AVALIAÇÃO DE 1 A 5 ESTRELAS
    // ADICIONA O RATING DO LIVRO NO ELEMENTO HTML DAS ESTRELAS (SE O LIVRO TIVER 3 ESTRELAS, AS 3 PRIMEIRAS ESTRELAS SERÃO PREENCHIDAS)
    html += `<button type="button" data-star="${n}" class="${value >= n ? "filled" : ""}">★</button>`;
  }
  html += `</div>`;
  return html;
}

/* ---------- INICIALIZAÇÃO ---------- */
// INICIALIZA A APLICAÇÃO
function init() {
  const session = loadSession(); // CARREGA A SESSÃO DO LOCALSTORAGE

  if (session && session.email) {
    // SE HOUVER SESSÃO
    const users = loadUsers(); // CARREGA OS USUÁRIOS
    const user = users.find((u) => u.email === session.email); // ENCONTRA O USUÁRIO ATUAL

    if (user) {
      // SE O USUÁRIO EXISTIR
      currentUser = { id: user.id, email: user.email, name: user.name }; // ATUALIZA O USUÁRIO ATUAL
    } else {
      // SE O USUÁRIO NÃO EXISTIR
      window.location.href = "/login/login.html"; // REDIRECIONA PARA A PÁGINA DE LOGIN
      return;
    }
  } else {
    // SE NÃO HOUVER SESSÃO
    window.location.href = "/login/login.html"; // REDIRECIONA PARA A PÁGINA DE LOGIN
    return;
  }

  $("#btn-logout").addEventListener("click", handleLogout); // ADICIONA O EVENTO DE CLICK PARA O BOTÃO DE LOGOUT
  $("#btn-novo").addEventListener("click", () => openForm()); // ADICIONA O EVENTO DE CLICK PARA O BOTÃO DE ADICIONAR LIVRO
  $("#search").addEventListener("input", (e) => {
    // ADICIONA O EVENTO DE INPUT PARA O CAMPO DE BUSCA
    query = e.target.value;
    renderList();
  });

  books = loadBooks(currentUser.id); // CARREGA OS LIVROS DO USUÁRIO
  filter = "todos"; // ATUALIZA O FILTRO
  query = ""; // ATUALIZA A BUSCA
  $("#search").value = ""; // LIMPA O CAMPO DE BUSCA
  render(); // RENDERIZA A LISTA DE LIVROS
}

init(); // INICIALIZA A APLICAÇÃO
