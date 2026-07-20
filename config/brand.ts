import type { BrandConfig } from "@/types/brand";

/**
 * SINGLE SOURCE OF TRUTH.
 *
 * To rebrand this website for a different jewellery business, edit ONLY this
 * file and the Cloudinary asset URLs. No component code should change.
 */
export const BRAND: BrandConfig = {
  businessName: "Persian Gold Koratty",
  tagline: "Fine Jewellery in Koratty",
  description:
    "Persian Gold Koratty is Koratty's trusted destination for exquisite gold, diamond, and silver jewellery. Serving Koratty and the surrounding areas with timeless craftsmanship and contemporary designs for every celebration.",

  logo: "/icons/logo.svg",
  favicon: "/favicon.ico",

  heroVideo:
    "https://res.cloudinary.com/fylz5e3j/video/upload/v1782936959/VN20260702_013328_tbexfn.mp4",

  storyVideos: [
    {
      quote: "ലാളിത്യത്തിലെ പൂർണ്ണത.",
      description:
        "അണിയാൻ തീരെ ഭാരമില്ലാത്ത, എന്നാൽ കണ്ണഞ്ചിപ്പിക്കുന്ന ഡിസൈനുകൾ. നിങ്ങളുടെ ഓരോ സാധാരണ ദിവസത്തെയും മനോഹരമാക്കാൻ ഇവ മതിയാകും.",
      video:
        "https://res.cloudinary.com/fylz5e3j/video/upload/v1782936959/VN20260702_013328_tbexfn.mp4",
      segments: { startAt: 0, loopEnd: 8 },
    },
    {
      quote: "കൈകളിൽ വിരിയുന്ന വിസ്മയം.",
      description:
        "ഓരോ ആഭരണവും ഓരോ കലാരൂപമാണ്. അതിസൂക്ഷ്മമായി, തികഞ്ഞ പൂർണ്ണതയോടെ രൂപപ്പെടുത്തിയെടുത്തവ. നിങ്ങളുടെ സ്വപ്നങ്ങൾക്ക് സ്വർണ്ണത്തിൽ ജീവൻ വയ്ക്കുമ്പോൾ.",
      video:
        "https://res.cloudinary.com/fylz5e3j/video/upload/v1782936959/VN20260702_013328_tbexfn.mp4",
      segments: { startAt: 32, loopEnd: 40 },
    },
    {
      quote: "കൊരട്ടിയുടെ ഹൃദയത്തിൽ നിന്ന്.",
      description:
        "ഈ നാടിൻ്റെ പൈതൃകവും പുതുമയും ഒത്തുചേരുന്ന ആഭരണങ്ങൾ. തലമുറകളായി നിങ്ങൾ നൽകുന്ന വിശ്വാസത്തിന് സ്വർണ്ണത്തേക്കാൾ തിളക്കമുണ്ട്.",
      video:
        "https://res.cloudinary.com/fylz5e3j/video/upload/v1782936959/VN20260702_013328_tbexfn.mp4",
      segments: { startAt: 16, loopEnd: 24 },
    },
  ],

  storeImages: [
    "/images/store1.webp",
    "/images/store2.webp",
    "/images/store3.webp",
    "/images/store4.webp",
  ],

  address: "Koratty Bazar Rd, Koratty, Kerala 680308",
  city: "Koratty",
  state: "Kerala",
  pincode: "680308",

  phone: "",
  whatsapp: "",
  email: "",

  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Persian%20Gold%20Koratty&query_place_id=ChIJg-mKVsQDCDsRoTocCNCUyJI",

  openingHours: "Mon–Sat: 9:30 AM – 8:00 PM · Sunday: 10:00 AM – 7:00 PM",

  instagram: "",
  facebook: "",

  seo: {
    title: "Persian Gold Koratty | Jewellery in Koratty",
    description:
      "Persian Gold Koratty — your premier jewellery store in Koratty. Gold, diamond and silver jewellery crafted for every occasion. Visit us in Koratty, Kerala.",
    keywords: [
      "Persian Gold Koratty",
      "jewellery Koratty",
      "gold jewellery Koratty",
      "diamond jewellery Koratty",
      "silver jewellery Koratty",
      "jewellery store Koratty",
      "gold shop Koratty",
      "jewellery Kerala",
    ],
    canonical: "https://persian-gold-koratty-koratty.vercel.app",
    ogImage:
      "/images/store1.webp",
  },

  faq: [],

  whatsappMessage:
    "Hello Persian Gold Koratty, I'd like to know more about your jewellery collections.",
};
