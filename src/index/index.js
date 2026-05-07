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
let editingId = null; // ID DO LIVRO SENDO EDITADO (null = novo)
let deleteId = null; // ID DO LIVRO A EXCLUIR
let formRating = 0; // AVALIAÇÃO SELECIONADA NO FORMULÁRIO

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
  window.location.href = "../login/login.html"; // REDIRECIONA PARA A PÁGINA DE LOGIN
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
        <div class="card-actions">
          <button class="icon-btn" data-action="edit" data-id="${b.id}" title="Editar">
            <img src="edit.png" alt="Editar" class="icon" />
          </button>
          <button class="icon-btn" data-action="delete" data-id="${b.id}" title="Excluir">
            <img src="delete.png" alt="Excluir" class="icon" />
          </button>
        </div>
      </div>
      <h3 class="card-title">${b.title}</h3>
      <p class="card-author">${b.author}</p>
      <div class="card-meta">${metaParts.map((m) => `<span>${m}</span>`).join("")}</div>
      <p class="card-review">${b.review ?? ""}</p>
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

/* ---------- MODAL FORMULÁRIO ---------- */
// ABRE O MODAL DE ADICIONAR / EDITAR LIVRO
function openForm(book = null) {
  editingId = book ? book.id : null;
  formRating = book ? (book.rating ?? 0) : 0;

  const modal = $("#modal-form");
  const form = $("#book-form");
  const title = $("#modal-form-title");
  const submitBtn = $("#btn-form-submit");

  title.textContent = book ? "Editar livro" : "Novo livro";
  submitBtn.textContent = book ? "Salvar alterações" : "Adicionar livro";

  form.elements["title"].value = book?.title ?? "";
  form.elements["author"].value = book?.author ?? "";
  form.elements["publisher"].value = book?.publisher ?? "";
  form.elements["language"].value = book?.language ?? "";
  form.elements["year"].value = book?.year ?? "";
  form.elements["pages"].value = book?.pages ?? "";
  form.elements["review"].value = book?.review ?? "";

  // STATUS
  const statusPick = $("#status-pick");
  const selectedStatus = book?.status ?? "quero";
  statusPick.querySelectorAll("button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.status === selectedStatus);
  });

  // ESTRELAS
  renderFormRating(formRating);

  $("#form-error").classList.add("hidden");
  modal.classList.remove("hidden");
  form.elements["title"].focus();
}

// FECHA O MODAL DE FORMULÁRIO
function closeForm() {
  $("#modal-form").classList.add("hidden");
  editingId = null;
}

// RENDERIZA AS ESTRELAS INTERATIVAS NO FORMULÁRIO
function renderFormRating(value) {
  const container = $("#rating-pick");
  container.innerHTML = "";
  for (let n = 1; n <= 5; n++) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.dataset.star = n;
    btn.textContent = "★";
    btn.className = value >= n ? "filled" : "";
    btn.addEventListener("click", () => {
      formRating = n;
      renderFormRating(n);
    });
    container.appendChild(btn);
  }
}

// SUBMETE O FORMULÁRIO DE ADICIONAR / EDITAR LIVRO
function handleFormSubmit(e) {
  e.preventDefault();
  const form = $("#book-form");
  const title = form.elements["title"].value.trim();
  const author = form.elements["author"].value.trim();

  if (!title || !author) {
    const err = $("#form-error");
    err.textContent = "Título e Autor são obrigatórios.";
    err.classList.remove("hidden");
    return;
  }

  const activeStatus = $("#status-pick .active");
  const status = activeStatus ? activeStatus.dataset.status : "quero";

  const yearVal = parseInt(form.elements["year"].value, 10);
  const pagesVal = parseInt(form.elements["pages"].value, 10);

  const data = {
    title,
    author,
    publisher: form.elements["publisher"].value.trim(),
    language: form.elements["language"].value.trim(),
    year: isNaN(yearVal) ? null : yearVal,
    pages: isNaN(pagesVal) ? null : pagesVal,
    status,
    rating: formRating,
    review: form.elements["review"].value.trim(),
  };

  if (editingId) {
    const idx = books.findIndex((b) => b.id === editingId);
    if (idx !== -1) {
      books[idx] = { ...books[idx], ...data };
    }
  } else {
    books.unshift({ id: uid(), createdAt: Date.now(), ...data });
  }

  saveBooks();
  closeForm();
  render();
}

/* ---------- MODAL EXCLUSÃO ---------- */
// ABRE O MODAL DE CONFIRMAÇÃO DE EXCLUSÃO
function openDelete(id) {
  deleteId = id;
  const book = books.find((b) => b.id === id);
  const msg = $("#delete-msg");
  msg.textContent = book
    ? `Tem certeza que deseja excluir "${book.title}"?`
    : "Tem certeza que deseja excluir este livro?";
  $("#modal-delete").classList.remove("hidden");
}

// FECHA O MODAL DE EXCLUSÃO
function closeDelete() {
  $("#modal-delete").classList.add("hidden");
  deleteId = null;
}

// CONFIRMA A EXCLUSÃO DO LIVRO
function confirmDelete() {
  if (!deleteId) return;
  books = books.filter((b) => b.id !== deleteId);
  saveBooks();
  closeDelete();
  render();
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
      window.location.href = "../login/login.html"; // REDIRECIONA PARA A PÁGINA DE LOGIN
      return;
    }
  } else {
    // SE NÃO HOUVER SESSÃO
    window.location.href = "../login/login.html"; // REDIRECIONA PARA A PÁGINA DE LOGIN
    return;
  }

  $("#btn-logout").addEventListener("click", handleLogout);
  $("#btn-novo").addEventListener("click", () => openForm());
  $("#search").addEventListener("input", (e) => {
    query = e.target.value;
    renderList();
  });

  // EVENTOS DO MODAL DE FORMULÁRIO
  $("#btn-form-close").addEventListener("click", closeForm);
  $("#btn-form-cancel").addEventListener("click", closeForm);
  $("#modal-form-backdrop").addEventListener("click", closeForm);
  $("#book-form").addEventListener("submit", handleFormSubmit);

  // EVENTO DOS BOTÕES DE STATUS NO FORMULÁRIO
  $("#status-pick").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-status]");
    if (!btn) return;
    $("#status-pick").querySelectorAll("button").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });

  // EVENTOS DO MODAL DE EXCLUSÃO
  $("#btn-delete-close").addEventListener("click", closeDelete);
  $("#btn-delete-cancel").addEventListener("click", closeDelete);
  $("#modal-delete-backdrop").addEventListener("click", closeDelete);
  $("#btn-delete-confirm").addEventListener("click", confirmDelete);

  // DELEGAÇÃO DE EVENTOS PARA EDITAR E EXCLUIR NOS CARDS
  $("#list").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;
    const { action, id } = btn.dataset;
    if (action === "edit") {
      const book = books.find((b) => b.id === id);
      if (book) openForm(book);
    } else if (action === "delete") {
      openDelete(id);
    }
  });

  books = loadBooks(currentUser.id); // CARREGA OS LIVROS DO USUÁRIO
  filter = "todos"; // ATUALIZA O FILTRO
  query = ""; // ATUALIZA A BUSCA
  $("#search").value = ""; // LIMPA O CAMPO DE BUSCA
  render(); // RENDERIZA A LISTA DE LIVROS
}

init(); // INICIALIZA A APLICAÇÃO
