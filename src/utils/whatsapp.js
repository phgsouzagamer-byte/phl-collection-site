import storeConfig from "../config/store";

// Único canal de contato/compra da loja: o grupo oficial da PHL Collection
// no WhatsApp. Todo botão de compra ou contato deve usar esta função —
// nunca referenciar o link diretamente em um componente.
export function getWhatsAppGroupLink() {
  return storeConfig.whatsappGroup;
}
