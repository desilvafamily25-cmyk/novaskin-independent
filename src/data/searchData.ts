// Comprehensive search data for global site search
export interface SearchItem {
  name: string;
  path: string;
  category: string;
  keywords: string[];
}

export const searchData: SearchItem[] = [
  // Main Pages
  { name: "Home", path: "/", category: "Pages", keywords: ["home", "welcome", "main", "novaskin"] },
  { name: "Skin Cancer Checks", path: "/skin-checks", category: "Pages", keywords: ["skin cancer", "screening", "check", "mole check"] },
  { name: "Dermatology Services", path: "/dermatology", category: "Pages", keywords: ["dermatology", "skin conditions", "treatment"] },
  { name: "Skin Care Guide", path: "/skin-care", category: "Pages", keywords: ["skincare", "ingredients", "guide", "education"] },
  { name: "About Dr Premila", path: "/about", category: "Pages", keywords: ["about", "doctor", "dermatologist", "dr premila", "hewage"] },
  { name: "Contact & Booking", path: "/contact", category: "Pages", keywords: ["contact", "book", "appointment", "phone", "email", "location"] },

  // Skin Cancer & Screening
  { name: "Comprehensive Skin Check", path: "/skin-checks", category: "Services", keywords: ["comprehensive", "full body", "total body photography", "tbp", "screening"] },
  { name: "Express Skin Check", path: "/skin-checks", category: "Services", keywords: ["express", "quick", "spot check", "follow up"] },
  { name: "Dermoscopy", path: "/skin-checks", category: "Services", keywords: ["dermoscopy", "mole", "examination", "magnification"] },
  { name: "Total Body Photography", path: "/skin-checks", category: "Services", keywords: ["photography", "baseline", "documentation", "mapping"] },
  { name: "Melanoma", path: "/skin-checks", category: "Conditions", keywords: ["melanoma", "skin cancer", "mole", "pigmented lesion"] },
  { name: "Mole Check", path: "/skin-checks", category: "Services", keywords: ["mole", "naevus", "nevus", "birthmark", "spot"] },

  // Dermatology Conditions
  { name: "Acne", path: "/dermatology", category: "Conditions", keywords: ["acne", "pimple", "breakout", "zit", "comedone", "whitehead", "blackhead", "cyst"] },
  { name: "Rosacea", path: "/dermatology", category: "Conditions", keywords: ["rosacea", "facial redness", "flushing", "telangiectasia", "red face"] },
  { name: "Eczema", path: "/dermatology", category: "Conditions", keywords: ["eczema", "atopic dermatitis", "dry skin", "itchy", "dermatitis"] },
  { name: "Contact Dermatitis", path: "/dermatology", category: "Conditions", keywords: ["contact dermatitis", "allergic reaction", "irritant", "rash"] },
  { name: "Psoriasis", path: "/dermatology", category: "Conditions", keywords: ["psoriasis", "plaque", "scaly", "silvery scale", "autoimmune"] },
  { name: "Seborrhoeic Dermatitis", path: "/dermatology", category: "Conditions", keywords: ["seborrhoeic", "seborrheic", "dandruff", "flaky scalp", "scalp"] },
  { name: "Fungal Infections", path: "/dermatology", category: "Conditions", keywords: ["fungal", "tinea", "ringworm", "athlete's foot", "jock itch", "nail fungus"] },
  { name: "Urticaria (Hives)", path: "/dermatology", category: "Conditions", keywords: ["urticaria", "hives", "wheals", "itchy", "allergic", "angioedema"] },
  { name: "Warts", path: "/dermatology", category: "Conditions", keywords: ["wart", "verruca", "plantar wart", "hpv", "viral"] },
  { name: "Actinic Keratoses", path: "/dermatology", category: "Conditions", keywords: ["actinic keratosis", "solar keratosis", "sun damage", "precancer", "rough patch"] },
  { name: "Seborrhoeic Keratoses", path: "/dermatology", category: "Conditions", keywords: ["seborrhoeic keratosis", "seborrheic", "age spot", "barnacle", "benign growth"] },
  { name: "Benign Moles", path: "/dermatology", category: "Conditions", keywords: ["mole", "naevus", "nevus", "benign", "pigmented lesion"] },
  { name: "Skin Infections", path: "/dermatology", category: "Conditions", keywords: ["infection", "bacterial", "impetigo", "cellulitis", "folliculitis", "boil"] },
  { name: "Perioral Dermatitis", path: "/dermatology", category: "Conditions", keywords: ["perioral", "mouth rash", "facial rash", "papulopustular"] },

  // Prescription Retinoids
  { name: "Tretinoin", path: "/skin-care", category: "Prescription Retinoids", keywords: ["tretinoin", "retin-a", "retinoid", "vitamin a", "anti-aging", "acne treatment"] },
  { name: "Adapalene", path: "/skin-care", category: "Prescription Retinoids", keywords: ["adapalene", "differin", "retinoid", "acne", "comedone"] },
  { name: "Tazarotene", path: "/skin-care", category: "Prescription Retinoids", keywords: ["tazarotene", "tazorac", "retinoid", "psoriasis", "acne"] },

  // Exfoliating Acids
  { name: "Glycolic Acid", path: "/skin-care", category: "Exfoliating Acids", keywords: ["glycolic acid", "aha", "alpha hydroxy", "exfoliant", "chemical peel"] },
  { name: "Lactic Acid", path: "/skin-care", category: "Exfoliating Acids", keywords: ["lactic acid", "aha", "alpha hydroxy", "gentle exfoliant", "sensitive skin"] },
  { name: "Salicylic Acid", path: "/skin-care", category: "Exfoliating Acids", keywords: ["salicylic acid", "bha", "beta hydroxy", "acne", "blackhead", "pore"] },

  // Barrier-Supporting Ingredients
  { name: "Ceramides", path: "/skin-care", category: "Barrier Support", keywords: ["ceramide", "barrier repair", "moisturizer", "dry skin", "eczema"] },
  { name: "Cholesterol", path: "/skin-care", category: "Barrier Support", keywords: ["cholesterol", "lipid", "barrier", "skin repair"] },
  { name: "Fatty Acids", path: "/skin-care", category: "Barrier Support", keywords: ["fatty acid", "linoleic", "oleic", "barrier", "moisturize"] },

  // Anti-Inflammatory Ingredients
  { name: "Niacinamide", path: "/skin-care", category: "Anti-Inflammatory", keywords: ["niacinamide", "vitamin b3", "nicotinamide", "redness", "pores", "oil control"] },
  { name: "Panthenol", path: "/skin-care", category: "Anti-Inflammatory", keywords: ["panthenol", "vitamin b5", "pro-vitamin", "soothing", "healing"] },
  { name: "Allantoin", path: "/skin-care", category: "Anti-Inflammatory", keywords: ["allantoin", "soothing", "healing", "sensitive skin"] },
  { name: "Centella Asiatica", path: "/skin-care", category: "Anti-Inflammatory", keywords: ["centella", "cica", "tiger grass", "madecassoside", "soothing", "healing"] },

  // Pigment-Modulating Ingredients
  { name: "Azelaic Acid", path: "/skin-care", category: "Pigment Treatment", keywords: ["azelaic acid", "hyperpigmentation", "dark spots", "melasma", "rosacea"] },
  { name: "Vitamin C", path: "/skin-care", category: "Pigment Treatment", keywords: ["vitamin c", "ascorbic acid", "brightening", "antioxidant", "collagen"] },
  { name: "Tranexamic Acid", path: "/skin-care", category: "Pigment Treatment", keywords: ["tranexamic acid", "melasma", "dark spots", "pigmentation"] },
  { name: "Kojic Acid", path: "/skin-care", category: "Pigment Treatment", keywords: ["kojic acid", "skin lightening", "dark spots", "hyperpigmentation"] },

  // Acne-Focused Ingredients
  { name: "Benzoyl Peroxide", path: "/skin-care", category: "Acne Treatment", keywords: ["benzoyl peroxide", "acne", "antibacterial", "pimple", "spot treatment"] },
  { name: "Sulfur", path: "/skin-care", category: "Acne Treatment", keywords: ["sulfur", "acne", "oily skin", "keratolytic"] },

  // Sun Protection
  { name: "Sunscreen", path: "/skin-care", category: "Sun Protection", keywords: ["sunscreen", "spf", "uv protection", "sun protection", "mineral", "chemical filter"] },
  { name: "Physical Sunscreen", path: "/skin-care", category: "Sun Protection", keywords: ["physical", "mineral", "zinc oxide", "titanium dioxide", "sunblock"] },
  { name: "Chemical Sunscreen", path: "/skin-care", category: "Sun Protection", keywords: ["chemical", "organic filter", "avobenzone", "oxybenzone"] },

  // Treatments mentioned in Dermatology
  { name: "Doxycycline", path: "/dermatology", category: "Treatments", keywords: ["doxycycline", "antibiotic", "acne", "rosacea"] },
  { name: "Isotretinoin", path: "/dermatology", category: "Treatments", keywords: ["isotretinoin", "accutane", "roaccutane", "oratane", "severe acne"] },
  { name: "Topical Steroids", path: "/dermatology", category: "Treatments", keywords: ["steroid", "corticosteroid", "hydrocortisone", "betamethasone", "mometasone"] },
  { name: "Calcineurin Inhibitors", path: "/dermatology", category: "Treatments", keywords: ["tacrolimus", "protopic", "pimecrolimus", "elidel", "steroid-sparing"] },
  { name: "Antihistamines", path: "/dermatology", category: "Treatments", keywords: ["antihistamine", "cetirizine", "loratadine", "fexofenadine", "hives", "itch"] },
  { name: "Phototherapy", path: "/dermatology", category: "Treatments", keywords: ["phototherapy", "light therapy", "uvb", "narrowband", "psoriasis"] },
  { name: "Cryotherapy", path: "/dermatology", category: "Treatments", keywords: ["cryotherapy", "freezing", "liquid nitrogen", "wart", "keratosis"] },
  { name: "Chemical Peels", path: "/dermatology", category: "Treatments", keywords: ["chemical peel", "glycolic peel", "salicylic peel", "resurfacing"] },
];
