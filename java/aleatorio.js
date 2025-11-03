const nomes = ["Maria", "Larissa", "Léo", "Gabriel", "Lisi", "Vitor"];
export function aleatorio (lista){
    const posicao = Math.floor(Math.random()*lista.length);
    return lista [posicao];
}
export const nome = aleatorio(nomes)