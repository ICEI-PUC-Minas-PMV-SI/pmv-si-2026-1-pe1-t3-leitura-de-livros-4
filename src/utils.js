/* ---------- UTILS ---------- */
// GERA UM ID ÚNICO PARA OS LIVROS
export function uid() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36); // GERA UM ID ÚNICO PARA OS LIVROS (USADO PARA IDENTIFICAR OS LIVROS)
}
