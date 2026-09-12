// Formata um número para o padrão monetário brasileiro (R$ 189,90).
export function formatPrice(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}
