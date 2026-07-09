/* --- Enum --- */
// Padrão é em indexes igual array, porém podem ser definidos como qualquer valor
enum StatusPedido {
  PENDENTE, // 0
  PROCESSANDO, // 1
  CONCLUIDO, // 2
  ERRO = 999,
}

function processarPedido(statusPedido: StatusPedido): void {
  console.log(
    `Status do Pedido: ${StatusPedido[statusPedido]} - Index: ${statusPedido}`,
  );
}

processarPedido(StatusPedido.PENDENTE);
processarPedido(StatusPedido.PROCESSANDO);
processarPedido(StatusPedido.CONCLUIDO);

console.log("\n---------------\n"); /* ----------- */

enum Cores {
  VERMELHO = "#ADSKASD",
  VERDE = "#APSDO",
  AMARELO = "#ASJODOSAD",
}

let vermelho = Cores.VERMELHO; // let vermelho: Cores
console.log(vermelho);
