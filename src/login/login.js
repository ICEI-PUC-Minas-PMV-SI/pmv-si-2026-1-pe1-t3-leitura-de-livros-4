const USERS_KEY = "minha-estante:users"; // CHAVE PARA OS USUÁRIOS
const SESSION_KEY = "minha-estante:session"; // CHAVE PARA A SESSÃO
const booksKeyFor = (id) => `minha-estante:books:${id}`;

const $ = (sel) => document.querySelector(sel); // SELECIONA UM ELEMENTO
const $$ = (sel) => Array.from(document.querySelectorAll(sel)); // SELECIONA VÁRIOS ELEMENTOS

import { loadSession, saveSession, loadUsers, saveUsers } from "../auth.js";
import { uid } from "../utils.js";

/* ---------- HASH DA SENHA ---------- */
// CRIA O HASH DA SENHA
async function hashPassword(password) {
  const data = new TextEncoder().encode(password); // CONVERTE A SENHA PARA BYTES
  const buf = await crypto.subtle.digest("SHA-256", data); // CRIA O HASH
  return Array.from(new Uint8Array(buf)) // CONVERTE O HASH PARA HEXADECIMAL
    .map((b) => b.toString(16).padStart(2, "0")) // PREENCHE COM ZEROS À ESQUERDA SE NECESSÁRIO
    .join(""); // JUNTA OS BYTES
}

/* ---------- AUTENTICAÇÃO ---------- */
// MUDAR PARA O TAB DESEJADO (ENTRAR/CRIAR CONTA)
function switchAuthTab(tab) {
  $$(".auth-tab").forEach((b) => {
    b.classList.toggle("active", b.dataset.authTab === tab); // ATIVA O TAB DESEJADO (ENTRAR/CRIAR CONTA)
  });

  $("#login-form").classList.toggle("hidden", tab !== "login"); // MOSTRA O FORMULÁRIO DE LOGIN
  $("#signup-form").classList.toggle("hidden", tab !== "signup"); // MOSTRA O FORMULÁRIO DE CRIAÇÃO DE CONTA
  $("#login-error").classList.add("hidden"); // OCULTA O ERRO DE LOGIN
  $("#signup-error").classList.add("hidden"); // OCULTA O ERRO DE CRIAÇÃO DE CONTA
}

// MOSTRA O ERRO DE AUTENTICAÇÃO
function showAuthError(id, message) {
  const el = $(id); // OBTEM O ELEMENTO DE ERRO
  el.textContent = message; // DEFINI A MENSAGEM DE ERRO
  el.classList.remove("hidden"); // MOSTRA O ELEMENTO DE ERRO
}

// LOGIN
async function handleLogin(e) {
  e.preventDefault(); // PREVENIR O COMPORTAMENTO PADRÃO DO FORMULÁRIO (EVITAR QUE A PÁGINA SEJA RECARREGADA)
  const form = e.target; // OBTEM OS DADOS DO FORMULÁRIO
  const email = form.elements.email.value.trim().toLowerCase(); // OBTEM O E-MAIL PREENCHIDO NO FORMULÁRIO
  const password = form.elements.password.value; // OBTEM A SENHA PREENCHIDA NO FORMULÁRIO

  const users = loadUsers(); // CARREGA OS USUÁRIOS DO LOCALSTORAGE
  const user = users.find((u) => u.email === email); // VERIFICA SE O USUÁRIO EXISTE

  if (!user) {
    // SE O USUÁRIO NÃO FOR ENCONTRADO
    showAuthError("#login-error", "E-mail ou senha incorretos."); // EXIBE O ERRO DE AUTENTICAÇÃO
    return;
  }

  const hash = await hashPassword(password); // CRIA O HASH DA SENHA

  if (hash !== user.passwordHash) {
    showAuthError("#login-error", "E-mail ou senha incorretos."); // VERIFICA SE A SENHA ESTÁ CORRETA
    return;
  }

  saveSession(user.email); // SALVA A SESSÃO

  window.location.href = "/index/index.html"; // REDIRECIONA PARA A PÁGINA PRINCIPAL
}

// CRIA A CONTA
async function handleSignup(e) {
  e.preventDefault(); // PREVENIR O COMPORTAMENTO PADRÃO DO FORMULÁRIO
  const form = e.target; // OBTEM OS DADOS DO FORMULÁRIO
  const name = form.elements.name.value.trim(); // OBTEM O NOME DO USUÁRIO PREENCHIDO NO FORMULÁRIO
  const email = form.elements.email.value.trim().toLowerCase(); // OBTEM O E-MAIL DO USUÁRIO PREENCHIDO NO FORMULÁRIO
  const password = form.elements.password.value; // OBTEM A SENHA DO USUÁRIO PREENCHIDA NO FORMULÁRIO
  const confirm = form.elements.confirm.value; // OBTEM A CONFIRMAÇÃO DA SENHA DO USUÁRIO PREENCHIDA NO FORMULÁRIO

  if (!name || !email || !password) {
    // VERIFICAR SE TODOS OS CAMPOS ESTÃO PREENCHIDOS
    showAuthError("#signup-error", "Preencha todos os campos."); // EXIBE O ERRO DE AUTENTICAÇÃO CASO ALGUM CAMPO NÃO ESTEJA PREENCHIDO
    return;
  }

  if (password.length < 6) {
    // VERIFICA O TAMANHO DA SENHA
    showAuthError(
      "#signup-error",
      "A senha precisa ter no mínimo 6 caracteres.",
    ); // EXIBE O ERRO DE AUTENTICAÇÃO CASO A SENHA NÃO TENHA O TAMANHO MÍNIMO (6 CARACTERES)
    return;
  }

  if (password !== confirm) {
    // VERIFICA SE AS SENHAS COINCIDEM
    showAuthError("#signup-error", "As senhas não coincidem."); // EXIBE O ERRO DE AUTENTICAÇÃO CASO AS SENHAS NÃO COINCIDAM
    return;
  }

  const users = loadUsers();

  if (users.some((u) => u.email === email)) {
    // VERIFICA SE O E-MAIL JÁ EXISTE
    showAuthError("#signup-error", "Já existe uma conta com esse e-mail."); // EXIBE O ERRO DE AUTENTICAÇÃO CASO O E-MAIL JÁ EXISTA
    return;
  }

  const passwordHash = await hashPassword(password); // CRIA O HASH DA SENHA
  users.push({ id: uid(), email, name, passwordHash, createdAt: Date.now() }); // ADICIONA O NOVO USUÁRIO AO ARRAY DE USUÁRIOS
  saveUsers(users); // SALVA OS USUÁRIOS NO LOCALSTORAGE
  saveSession(email); // SALVA A SESSÃO DO USUÁRIO

  window.location.href = "/index/index.html"; // REDIRECIONA PARA A PÁGINA PRINCIPAL
}

/* ---------- DADOS MOCKADOS ---------- */
// CRIA DADOS MOCKADOS PARA TESTE (SEMPRE QUE O LOCALSTORAGE ESTIVER VAZIO)
async function mockData() {
  const users = [
    {
      id: uid(),
      name: "Admin",
      email: "admin@gmail.com",
      passwordHash: await hashPassword("123456"),
      createdAt: Date.now(),
    },
    {
      id: uid(),
      name: "User",
      email: "user@gmail.com",
      passwordHash: await hashPassword("123456"),
      createdAt: Date.now(),
    },
  ]; // CRIA OS USUÁRIOS MOCKADOS

  localStorage.setItem(USERS_KEY, JSON.stringify(users)); // SALVA OS USUÁRIOS NO LOCALSTORAGE
  localStorage.setItem(booksKeyFor(users[0].id), JSON.stringify([])); // SALVA OS LIVROS DO USUÁRIO 1 NO LOCALSTORAGE

  const booksUser2 = [
    {
      id: uid(),
      title: "Clean Code",
      author: "Robert C. Martin",
      status: "lendo",
      rating: 4,
      year: 2008,
      pages: 464,
      review: "Leitura atual sobre boas práticas.",
      createdAt: Date.now(),
    },
    {
      id: uid(),
      title: "1984",
      author: "George Orwell",
      status: "lido",
      rating: 5,
      year: 1949,
      pages: 328,
      review: "Já finalizado.",
      createdAt: Date.now() - 1000,
    },
    {
      id: uid(),
      title: "Refactoring",
      author: "Martin Fowler",
      status: "quero",
      rating: 0,
      year: 1999,
      pages: 448,
      review: "Próxima leitura.",
      createdAt: Date.now() - 2000,
    },
  ]; // CRIA OS LIVROS MOCKADOS

  localStorage.setItem(booksKeyFor(users[1].id), JSON.stringify(booksUser2)); // SALVA OS LIVROS DO USUÁRIO 2 NO LOCALSTORAGE
}

/* ---------- INICIALIZAÇÃO ---------- */
// INICIALIZA A APLICAÇÃO
async function init() {
  let useMockData = false; // DEFINE SE OS DADOS MOCKADOS SERÃO USADOS

  if (!localStorage.getItem(USERS_KEY)) {
    // VERIFICA SE NÃO HÁ USUÁRIOS NO LOCALSTORAGE
    await mockData(); // SE NÃO HOUVER USUÁRIOS, CRIA OS DADOS MOCKADOS
    useMockData = true; // DEFINE QUE OS DADOS MOCKADOS SERÃO USADOS
  }

  $$(".auth-tab").forEach((btn) => {
    btn.addEventListener("click", () => switchAuthTab(btn.dataset.authTab)); // MUDA PARA O TAB DESEJADO (ENTRAR/CRIAR CONTA)
  });

  $("#login-form").addEventListener("submit", handleLogin); // MANIPULA O SUBMIT DO FORMULÁRIO DE LOGIN
  $("#signup-form").addEventListener("submit", handleSignup); // MANIPULA O SUBMIT DO FORMULÁRIO DE CRIAÇÃO DE CONTA

  const session = loadSession(); // VERIFICA SE HÁ UMA SESSÃO ATIVA

  if (session && session.email) {
    // SE HOUVER UMA SESSÃO ATIVA
    const users = loadUsers(); // CARREGA OS USUÁRIOS
    const user = users.find((u) => u.email === session.email); // OBTEM O USUÁRIO ATUAL PELO E-MAIL DA SESSÃO ATIVA (SE HOUVER)

    if (user) {
      // SE O USUÁRIO EXISTIR
      if (useMockData) {
        // SE OS DADOS MOCKADOS FORAM USADOS
        localStorage.setItem(
          SESSION_KEY,
          JSON.stringify({ email: user.email }),
        ); // SALVA A SESSÃO DO USUÁRIO MOCKADO USADO PARA TESTE
      }

      window.location.href = "/index/index.html"; // REDIRECIONA PARA A PÁGINA PRINCIPAL
      return;
    }
  }
}

init(); // INICIALIZA A APLICAÇÃO
