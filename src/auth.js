const USERS_KEY = "minha-estante:users"; // CHAVE PARA OS USUÁRIOS
const SESSION_KEY = "minha-estante:session"; // CHAVE PARA A SESSÃO

/* ---------- STORAGE ---------- */
// CARREGA A SESSÃO DO USUÁRIO DO LOCALSTORAGE
export function loadSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY); // OBTEM A SESSÃO

    if (!raw) {
      return null; // SE NÃO HOUVER SESSÃO, RETORNA NULL
    }

    return JSON.parse(raw); // RETORNA A SESSÃO
  } catch {
    return null;
  }
}

// SALVA A SESSÃO DO USUÁRIO NO LOCALSTORAGE
export function saveSession(email) {
  if (email) {
    localStorage.setItem(SESSION_KEY, JSON.stringify({ email })); // SALVA A SESSÃO
  } else {
    localStorage.removeItem(SESSION_KEY); // REMOVE A SESSÃO
  }
}

// CARREGA OS USUÁRIOS DO LOCALSTORAGE
export function loadUsers() {
  try {
    const raw = localStorage.getItem(USERS_KEY); // OBTEM OS USUÁRIOS

    if (!raw) {
      return []; // SE NÃO HOUVER USUÁRIOS, RETORNAR UM ARRAY VAZIO
    }

    const parsed = JSON.parse(raw); // CONVERTE PARA JSON
    return Array.isArray(parsed) ? parsed : []; // VERIFICA SE É UM ARRAY, CASO NÃO SEJA É RETORNADO UM ARRAY VAZIO (EVITAR FALHA)
  } catch {
    return [];
  }
}

// SALVA OS USUÁRIOS NO LOCALSTORAGE
export function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users)); // SALVA OS USUÁRIOS
}
