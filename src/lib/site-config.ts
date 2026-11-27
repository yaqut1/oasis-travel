export const SITE = {
  agencyName: "Oasis Travel",
  siteUrl: "https://www.example.com/",
  whatsapp: "000000000000",
  phoneDisplay: "+000 000 000",
  phoneDial: "+000000000000",
  email: "hello@example.com",
  license: "[LICENSE #]",
  address: "[Office Street Address], [City], [Country]",
  addressShort: "[Office Address], [City]",
  replyTime: "~[X] min",
  travelers: "[2,500]+",
  years: "[10]+",
  groups: "[120]+",
} as const;

export const IMAGES = {
  hero: "https://image.qwenlm.ai/public_source/1f564c71-a8d5-41de-9ab6-a7540b64b4ee/08ad3e169-de6c-48ad-a5b0-e9b0d4864a0f6420.png",
  flights:
    "https://image.qwenlm.ai/public_source/1f564c71-a8d5-41de-9ab6-a7540b64b4ee/68ad3e169-de6c-48ad-a5b0-e9b0d4864a0f3184.png",
  visa: "https://image.qwenlm.ai/public_source/1f564c71-a8d5-41de-9ab6-a7540b64b4ee/38ad3e169-de6c-48ad-a5b0-e9b0d4864a0f7448.png",
  umrah:
    "https://image.qwenlm.ai/public_source/1f564c71-a8d5-41de-9ab6-a7540b64b4ee/48ad3e169-de6c-48ad-a5b0-e9b0d4864a0f3031.png",
  group:
    "https://image.qwenlm.ai/public_source/1f564c71-a8d5-41de-9ab6-a7540b64b4ee/38ad3e169-de6c-48ad-a5b0-e9b0d4864a0f8722.png",
  dubai:
    "https://image.qwenlm.ai/public_source/1f564c71-a8d5-41de-9ab6-a7540b64b4ee/58ad3e169-de6c-48ad-a5b0-e9b0d4864a0f8069.png",
  madinah:
    "https://image.qwenlm.ai/public_source/1f564c71-a8d5-41de-9ab6-a7540b64b4ee/58ad3e169-de6c-48ad-a5b0-e9b0d4864a0f7663.png",
  g1: "https://image.qwenlm.ai/public_source/1f564c71-a8d5-41de-9ab6-a7540b64b4ee/48ad3e169-de6c-48ad-a5b0-e9b0d4864a0f6097.png",
  g2: "https://image.qwenlm.ai/public_source/1f564c71-a8d5-41de-9ab6-a7540b64b4ee/48ad3e169-de6c-48ad-a5b0-e9b0d4864a0f8542.png",
  g3: "https://image.qwenlm.ai/public_source/1f564c71-a8d5-41de-9ab6-a7540b64b4ee/08ad3e169-de6c-48ad-a5b0-e9b0d4864a0f7561.png",
  g4: "https://image.qwenlm.ai/public_source/1f564c71-a8d5-41de-9ab6-a7540b64b4ee/38ad3e169-de6c-48ad-a5b0-e9b0d4864a0f2626.png",
  g5: "https://image.qwenlm.ai/public_source/1f564c71-a8d5-41de-9ab6-a7540b64b4ee/28ad3e169-de6c-48ad-a5b0-e9b0d4864a0f4504.png",
  g6: "https://image.qwenlm.ai/public_source/1f564c71-a8d5-41de-9ab6-a7540b64b4ee/18ad3e169-de6c-48ad-a5b0-e9b0d4864a0f4040.png",
  cta: "https://image.qwenlm.ai/public_source/1f564c71-a8d5-41de-9ab6-a7540b64b4ee/48ad3e169-de6c-48ad-a5b0-e9b0d4864a0f6097.png",
} as const;

export const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#dubai", label: "Dubai" },
  { href: "#umrah", label: "Umrah" },
  { href: "#how", label: "How We Work" },
  { href: "#faq", label: "FAQ" },
] as const;

export const NAV_LINKS_MOBILE = [
  ...NAV_LINKS,
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
] as const;

export function whatsAppUrl(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}