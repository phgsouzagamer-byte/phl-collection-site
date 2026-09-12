import storeConfig from "../config/store";

// Canal do grupo/comunidade oficial da PHL Collection no WhatsApp. Usado
// pelos botões de "Entrar no grupo" — nunca referenciar o link diretamente
// em um componente.
export function getWhatsAppGroupLink() {
  return storeConfig.whatsappGroup;
}

// Canal privado do vendedor no WhatsApp. Usado exclusivamente pelos botões
// de compra ("Comprar com o vendedor") — nunca referenciar o link
// diretamente em um componente.
export function getSellerWhatsAppLink() {
  return storeConfig.sellerWhatsapp;
}
