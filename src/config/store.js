// ==========================================================================
// CONFIGURAÇÃO DA LOJA — PHL COLLECTION
// Altere aqui o link do grupo de WhatsApp, do vendedor, Instagram, frases e
// textos institucionais. Nenhum outro arquivo do projeto deve conter esses
// links diretamente — os botões usam getWhatsAppGroupLink() (grupo) ou
// getSellerWhatsAppLink() (compra direta com o vendedor).
// ==========================================================================

const storeConfig = {
  name: "PHL Collection",
  legalNote: "PHL Collection. Todos os direitos reservados.",
  slogan: "Grandes marcas. Estilo único.",

  // Canal oficial do grupo/comunidade da loja.
  whatsappGroup: "https://chat.whatsapp.com/LKiAvRsq6QWFQIvOD5cIeV",
  // Canal privado do vendedor, usado exclusivamente pelos botões de compra.
  sellerWhatsapp: "https://w.app/jzw9cm",
  instagram: "@phlcollection",
  instagramUrl: "https://instagram.com/phlcollection",

  // Rótulos padrão usados nos botões de compra/contato em todo o site.
  buyButtonLabel: "COMPRAR COM O VENDEDOR",
  soldOutLabel: "ESGOTADO",
  groupCtaLabel: "ENTRAR NO GRUPO",

  // Mensagens sobre o fluxo de compra via grupo — usadas nas seções
  // relevantes para deixar o processo claro sem poluir o design.
  buyMessages: {
    full: "Entre no grupo da PHL Collection e entre em contato com um de nossos administradores para efetuar sua compra.",
    short: "Para comprar, entre no grupo e fale com um administrador.",
    security:
      "Para sua segurança, confirme todos os detalhes do pedido diretamente com um administrador da PHL Collection antes de realizar o pagamento.",
  },

  hero: {
    eyebrow: "PHL COLLECTION · EST. 2026",
    title: "ESTILO QUE FALA POR VOCÊ.",
    subtitle:
      "Moda premium, peças selecionadas e o clássico estilo Old Money em um só lugar.",
    ctaPrimary: "VER COLEÇÃO",
    ctaSecondary: "ENTRAR NO GRUPO",
    note: "Peças selecionadas · Envio para todo o Brasil",
  },

  impactWords: ["SELEÇÃO PREMIUM", "ESTILO ATEMPORAL", "QUALIDADE E EXCLUSIVIDADE"],

  // Passos de "Como Comprar" — ajuste livremente sem tocar nos componentes.
  howToBuy: [
    {
      step: "01",
      title: "ESCOLHA SUA PEÇA",
      description: "Navegue pela coleção e escolha o produto desejado.",
    },
    {
      step: "02",
      title: "ENTRE NO GRUPO",
      description: 'Clique em "COMPRAR PELO GRUPO" e entre no grupo da PHL Collection no WhatsApp.',
    },
    {
      step: "03",
      title: "FALE COM UM ADMINISTRADOR",
      description:
        "Após entrar no grupo, entre em contato com algum administrador para confirmar a disponibilidade e efetuar sua compra.",
    },
    {
      step: "04",
      title: "PAGUE VIA PIX",
      description: "Após confirmar o pedido com um administrador, o pagamento é realizado antecipadamente via PIX.",
    },
  ],

  about: {
    title: "PHL COLLECTION",
    paragraphs: [
      "A PHL Collection nasceu com uma proposta simples: reunir peças selecionadas, grandes marcas e o estilo atemporal da moda premium em um só lugar.",
      "Nossa curadoria busca peças que combinam elegância, qualidade e personalidade, trazendo para nossos clientes uma seleção inspirada no clássico estilo Old Money.",
    ],
  },

  benefits: [
    {
      title: "SELEÇÃO PREMIUM",
      description: "Peças cuidadosamente selecionadas para nossa coleção.",
    },
    {
      title: "ESTILO ATEMPORAL",
      description: "Clássicos que continuam relevantes temporada após temporada.",
    },
    {
      title: "ATENDIMENTO DIRETO",
      description: "Fale com nossos administradores no grupo oficial do WhatsApp.",
    },
    {
      title: "PAGAMENTO VIA PIX",
      description: "Compra simples, rápida e direta.",
    },
  ],

  // Nomes de marcas exibidos como texto — não usar logos de terceiros sem autorização.
  brands: [
    "Ralph Lauren",
    "Tommy Hilfiger",
    "Lacoste",
    "Nike",
    "Adidas",
    "Calvin Klein",
    "Boss",
    "Tommy Jeans",
    "The North Face",
    "New Balance",
  ],

  categories: [
    { id: "todos", label: "TODOS" },
    { id: "camisetas", label: "CAMISETAS" },
    { id: "polos", label: "POLOS" },
    { id: "moletons", label: "MOLETONS" },
    { id: "sueteres", label: "SUÉTERES" },
    { id: "jaquetas", label: "JAQUETAS" },
    { id: "calcas", label: "CALÇAS" },
    { id: "shorts", label: "SHORTS" },
    { id: "calcados", label: "CALÇADOS" },
    { id: "acessorios", label: "ACESSÓRIOS" },
  ],

  finalCta: {
    title: "SEU PRÓXIMO LOOK COMEÇA AQUI.",
    subtitle: "Escolha sua peça e entre no grupo da PHL Collection para realizar sua compra.",
    ctaPrimary: "VER COLEÇÃO",
    ctaSecondary: "ENTRAR NO GRUPO",
  },

  footerGroup: {
    title: "GRUPO PHL COLLECTION",
    description:
      "Entre no nosso grupo do WhatsApp para conhecer as peças disponíveis e falar com um administrador.",
    cta: "ENTRAR NO GRUPO",
  },

  seo: {
    title: "PHL Collection | Moda Premium e Estilo Old Money",
    description:
      "PHL Collection — seleção de roupas importadas, grandes marcas e estilo Old Money. Descubra nossa coleção e entre no grupo do WhatsApp para comprar.",
  },
};

export default storeConfig;
