/* =====================================================
   FRAGRANCE DATABASE
   Valentino + Jean Paul Gaultier

   The scores are recommendation weights created for
   this website. They are not official brand ratings.
===================================================== */

const fragrances = [

    /* =================================================
       VALENTINO - MEN
    ================================================= */

    {
        name: "Born in Roma Uomo",
        brand: "Valentino",
        gender: "men",
        description: "A modern aromatic fragrance with a fresh, woody character.",
        notes: "Violet Leaf • Sage • Vetiver",

        scores: {
            city: 9, beach: 7, outdoors: 8, restaurant: 8, school: 9, home: 7,
            hot: 8, warm: 9, cool: 8, cold: 5, rain: 7, snow: 4,
            spring: 9, summer: 9, fall: 8, winter: 5,
            party: 8, date: 8, concert: 9, casual: 9, formal: 7, nightout: 9
        }
    },

    {
        name: "Born in Roma Uomo Intense",
        brand: "Valentino",
        gender: "men",
        description: "A deeper, warmer fragrance suited to cooler weather and nights.",
        notes: "Vanilla • Lavandin • Vetiver",

        scores: {
            city: 9, beach: 4, outdoors: 7, restaurant: 9, school: 4, home: 8,
            hot: 4, warm: 6, cool: 9, cold: 10, rain: 8, snow: 10,
            spring: 6, summer: 4, fall: 10, winter: 10,
            party: 9, date: 10, concert: 8, casual: 6, formal: 9, nightout: 10
        }
    },

    {
        name: "Born in Roma Uomo Coral Fantasy",
        brand: "Valentino",
        gender: "men",
        description: "A colorful and energetic fragrance with a fruity, aromatic character.",
        notes: "Red Apple • Sage • Tobacco",

        scores: {
            city: 10, beach: 7, outdoors: 6, restaurant: 8, school: 7, home: 6,
            hot: 7, warm: 9, cool: 8, cold: 5, rain: 6, snow: 3,
            spring: 8, summer: 9, fall: 9, winter: 5,
            party: 10, date: 9, concert: 10, casual: 8, formal: 7, nightout: 10
        }
    },

    {
        name: "Born in Roma Uomo Green Stravaganza",
        brand: "Valentino",
        gender: "men",
        description: "A fresh aromatic fragrance with a bright green character.",
        notes: "Calabrian Bergamot • Coffee • Vetiver",

        scores: {
            city: 9, beach: 9, outdoors: 10, restaurant: 7, school: 8, home: 7,
            hot: 10, warm: 10, cool: 8, cold: 4, rain: 7, snow: 3,
            spring: 10, summer: 10, fall: 7, winter: 3,
            party: 9, date: 8, concert: 9, casual: 10, formal: 5, nightout: 8
        }
    },

    {
        name: "Born in Roma Uomo Yellow Dream",
        brand: "Valentino",
        gender: "men",
        description: "A bright, clean and versatile fragrance for daytime and warmer weather.",
        notes: "Bergamot • Ginger • Cedar",

        scores: {
            city: 9, beach: 8, outdoors: 8, restaurant: 7, school: 10, home: 8,
            hot: 9, warm: 10, cool: 8, cold: 5, rain: 7, snow: 4,
            spring: 10, summer: 10, fall: 7, winter: 5,
            party: 8, date: 8, concert: 8, casual: 10, formal: 6, nightout: 7
        }
    },


    /* =================================================
       VALENTINO - WOMEN
    ================================================= */

    {
        name: "Born in Roma Donna",
        brand: "Valentino",
        gender: "women",
        description: "A modern floral fragrance with a sweet, elegant character.",
        notes: "Jasmine • Cashmeran • Vanilla",

        scores: {
            city: 9, beach: 7, outdoors: 6, restaurant: 9, school: 8, home: 8,
            hot: 7, warm: 9, cool: 8, cold: 6, rain: 7, snow: 5,
            spring: 10, summer: 8, fall: 8, winter: 6,
            party: 9, date: 10, concert: 8, casual: 8, formal: 9, nightout: 9
        }
    },

    {
        name: "Born in Roma Donna Intense",
        brand: "Valentino",
        gender: "women",
        description: "A richer and warmer fragrance designed for evenings and cooler conditions.",
        notes: "Vanilla • Jasmine • Benzoin",

        scores: {
            city: 9, beach: 3, outdoors: 6, restaurant: 10, school: 4, home: 8,
            hot: 3, warm: 6, cool: 9, cold: 10, rain: 8, snow: 10,
            spring: 6, summer: 3, fall: 10, winter: 10,
            party: 9, date: 10, concert: 8, casual: 5, formal: 10, nightout: 10
        }
    },

    {
        name: "Born in Roma Donna Coral Fantasy",
        brand: "Valentino",
        gender: "women",
        description: "A bright floral fragrance suited to warm weather and social occasions.",
        notes: "Orange • Rose • Jasmine",

        scores: {
            city: 9, beach: 9, outdoors: 8, restaurant: 8, school: 8, home: 7,
            hot: 9, warm: 10, cool: 8, cold: 5, rain: 6, snow: 3,
            spring: 10, summer: 10, fall: 7, winter: 4,
            party: 10, date: 9, concert: 10, casual: 9, formal: 7, nightout: 9
        }
    },

    {
        name: "Born in Roma Donna Green Stravaganza",
        brand: "Valentino",
        gender: "women",
        description: "A fresh floral fragrance with a green, airy character.",
        notes: "Tea • Jasmine • Vanilla",

        scores: {
            city: 8, beach: 8, outdoors: 10, restaurant: 8, school: 8, home: 7,
            hot: 9, warm: 10, cool: 8, cold: 5, rain: 8, snow: 3,
            spring: 10, summer: 10, fall: 7, winter: 4,
            party: 8, date: 8, concert: 8, casual: 10, formal: 6, nightout: 8
        }
    },

    {
        name: "Born in Roma Donna Yellow Dream",
        brand: "Valentino",
        gender: "women",
        description: "A bright and fresh fragrance that works well in daytime and warm seasons.",
        notes: "Lemon • Rose • Musk",

        scores: {
            city: 9, beach: 9, outdoors: 8, restaurant: 7, school: 9, home: 8,
            hot: 10, warm: 10, cool: 8, cold: 5, rain: 7, snow: 3,
            spring: 10, summer: 10, fall: 7, winter: 4,
            party: 8, date: 8, concert: 8, casual: 10, formal: 6, nightout: 7
        }
    },


    /* =================================================
       JPG - MEN
    ================================================= */

    {
        name: "Le Male",
        brand: "Jean Paul Gaultier",
        gender: "men",
        description: "The classic fresh and warm masculine scent from the Le Male family.",
        notes: "Lavender • Mint • Vanilla",

        scores: {
            city: 9, beach: 6, outdoors: 7, restaurant: 8, school: 8, home: 7,
            hot: 7, warm: 8, cool: 9, cold: 8, rain: 7, snow: 6,
            spring: 8, summer: 7, fall: 9, winter: 8,
            party: 9, date: 9, concert: 8, casual: 9, formal: 7, nightout: 9
        }
    },

    {
        name: "Le Male Le Parfum",
        brand: "Jean Paul Gaultier",
        gender: "men",
        description: "A deeper and smoother interpretation of Le Male for evenings and cooler weather.",
        notes: "Cardamom • Lavender • Vanilla",

        scores: {
            city: 9, beach: 3, outdoors: 6, restaurant: 10, school: 3, home: 8,
            hot: 3, warm: 5, cool: 9, cold: 10, rain: 8, snow: 10,
            spring: 5, summer: 3, fall: 10, winter: 10,
            party: 10, date: 10, concert: 9, casual: 5, formal: 10, nightout: 10
        }
    },

    {
        name: "Le Male Elixir",
        brand: "Jean Paul Gaultier",
        gender: "men",
        description: "A sweet, powerful and warm fragrance made for strong projection and nights out.",
        notes: "Lavender • Tonka Bean • Honey",

        scores: {
            city: 9, beach: 2, outdoors: 5, restaurant: 9, school: 2, home: 8,
            hot: 2, warm: 4, cool: 9, cold: 10, rain: 8, snow: 10,
            spring: 4, summer: 2, fall: 10, winter: 10,
            party: 10, date: 10, concert: 10, casual: 4, formal: 9, nightout: 10
        }
    },

    {
        name: "Le Male Elixir Absolu",
        brand: "Jean Paul Gaultier",
        gender: "men",
        description: "An even richer take on the Elixir style with a powerful nighttime personality.",
        notes: "Spices • Lavender • Woods",

        scores: {
            city: 9, beach: 2, outdoors: 5, restaurant: 10, school: 2, home: 8,
            hot: 2, warm: 4, cool: 10, cold: 10, rain: 8, snow: 10,
            spring: 4, summer: 2, fall: 10, winter: 10,
            party: 10, date: 10, concert: 10, casual: 4, formal: 9, nightout: 10
        }
    },

    {
        name: "Le Male In Blue",
        brand: "Jean Paul Gaultier",
        gender: "men",
        description: "A newer marine-inspired Le Male release designed around a fresh blue identity.",
        notes: "Marine Notes • Aromatic Notes • Woody Notes",

        scores: {
            city: 9, beach: 10, outdoors: 9, restaurant: 7, school: 9, home: 7,
            hot: 10, warm: 10, cool: 8, cold: 4, rain: 7, snow: 2,
            spring: 10, summer: 10, fall: 6, winter: 3,
            party: 9, date: 8, concert: 9, casual: 10, formal: 5, nightout: 8
        }
    },

    {
        name: "Ultra Male",
        brand: "Jean Paul Gaultier",
        gender: "men",
        description: "A sweet, energetic and highly attention-grabbing fragrance.",
        notes: "Pear • Cinnamon • Vanilla",

        scores: {
            city: 10, beach: 4, outdoors: 6, restaurant: 8, school: 3, home: 7,
            hot: 4, warm: 6, cool: 9, cold: 9, rain: 7, snow: 8,
            spring: 6, summer: 4, fall: 10, winter: 9,
            party: 10, date: 10, concert: 10, casual: 6, formal: 6, nightout: 10
        }
    },

    {
        name: "Le Beau",
        brand: "Jean Paul Gaultier",
        gender: "men",
        description: "A bright, tropical and easygoing fragrance built around a fresh exotic character.",
        notes: "Coconut Wood • Bergamot • Tonka Bean",

        scores: {
            city: 8, beach: 10, outdoors: 9, restaurant: 7, school: 8, home: 8,
            hot: 10, warm: 10, cool: 7, cold: 3, rain: 7, snow: 2,
            spring: 10, summer: 10, fall: 6, winter: 2,
            party: 9, date: 9, concert: 9, casual: 10, formal: 5, nightout: 8
        }
    },

    {
        name: "Le Beau Le Parfum",
        brand: "Jean Paul Gaultier",
        gender: "men",
        description: "A darker, sweeter and more intense version of the tropical Le Beau style.",
        notes: "Pineapple • Coconut • Tonka Bean",

        scores: {
            city: 9, beach: 8, outdoors: 8, restaurant: 9, school: 4, home: 8,
            hot: 5, warm: 8, cool: 9, cold: 8, rain: 7, snow: 5,
            spring: 8, summer: 7, fall: 9, winter: 7,
            party: 10, date: 10, concert: 10, casual: 7, formal: 7, nightout: 10
        }
    },

    {
        name: "Le Beau Paradise Garden",
        brand: "Jean Paul Gaultier",
        gender: "men",
        description: "A lush tropical fragrance that fits warm outdoor environments extremely well.",
        notes: "Coconut Water • Green Fig • Tonka Bean",

        scores: {
            city: 8, beach: 10, outdoors: 10, restaurant: 7, school: 7, home: 7,
            hot: 10, warm: 10, cool: 8, cold: 3, rain: 8, snow: 2,
            spring: 10, summer: 10, fall: 6, winter: 2,
            party: 9, date: 9, concert: 9, casual: 10, formal: 5, nightout: 8
        }
    },

    {
        name: "Le Beau Narcisse",
        brand: "Jean Paul Gaultier",
        gender: "men",
        description: "A new chapter in the Le Beau family with a more floral and seductive direction.",
        notes: "Floral Notes • Green Notes • Woody Notes",

        scores: {
            city: 9, beach: 7, outdoors: 9, restaurant: 8, school: 7, home: 8,
            hot: 8, warm: 9, cool: 8, cold: 5, rain: 7, snow: 3,
            spring: 10, summer: 9, fall: 7, winter: 4,
            party: 9, date: 10, concert: 9, casual: 9, formal: 7, nightout: 9
        }
    },

    {
        name: "Le Beau Flower Edition",
        brand: "Jean Paul Gaultier",
        gender: "men",
        description: "A floral twist on the Le Beau concept with a lighter seasonal feel.",
        notes: "Floral Notes • Coconut • Woods",

        scores: {
            city: 8, beach: 9, outdoors: 9, restaurant: 7, school: 8, home: 8,
            hot: 9, warm: 10, cool: 8, cold: 4, rain: 7, snow: 2,
            spring: 10, summer: 10, fall: 6, winter: 3,
            party: 9, date: 9, concert: 9, casual: 10, formal: 5, nightout: 8
        }
    },

    {
        name: "Scandal Pour Homme",
        brand: "Jean Paul Gaultier",
        gender: "men",
        description: "A confident woody fragrance with a strong nightlife personality.",
        notes: "Clary Sage • Caramel • Vetiver",

        scores: {
            city: 10, beach: 4, outdoors: 6, restaurant: 9, school: 3, home: 8,
            hot: 4, warm: 6, cool: 9, cold: 9, rain: 8, snow: 7,
            spring: 6, summer: 4, fall: 10, winter: 9,
            party: 10, date: 10, concert: 10, casual: 6, formal: 8, nightout: 10
        }
    },

    {
        name: "Scandal Pour Homme Le Parfum",
        brand: "Jean Paul Gaultier",
        gender: "men",
        description: "A richer and more intense Scandal interpretation for nights and formal occasions.",
        notes: "Geranium • Tonka Bean • Sandalwood",

        scores: {
            city: 10, beach: 3, outdoors: 5, restaurant: 10, school: 2, home: 8,
            hot: 2, warm: 4, cool: 10, cold: 10, rain: 8, snow: 10,
            spring: 4, summer: 2, fall: 10, winter: 10,
            party: 10, date: 10, concert: 10, casual: 4, formal: 10, nightout: 10
        }
    },

    {
        name: "Scandal Pour Homme Absolu",
        brand: "Jean Paul Gaultier",
        gender: "men",
        description: "A dense, rich and dramatic version of Scandal designed for impact.",
        notes: "Rum • Plum • Chestnut",

        scores: {
            city: 10, beach: 2, outdoors: 4, restaurant: 10, school: 2, home: 8,
            hot: 1, warm: 3, cool: 10, cold: 10, rain: 9, snow: 10,
            spring: 3, summer: 1, fall: 10, winter: 10,
            party: 10, date: 10, concert: 10, casual: 3, formal: 9, nightout: 10
        }
    },


    /* =================================================
       JPG - WOMEN
    ================================================= */

    {
        name: "Classique",
        brand: "Jean Paul Gaultier",
        gender: "women",
        description: "The iconic Classique fragrance with a warm, feminine and sensual character.",
        notes: "Rose • Vanilla • Ginger",

        scores: {
            city: 9, beach: 6, outdoors: 7, restaurant: 9, school: 7, home: 8,
            hot: 6, warm: 8, cool: 9, cold: 8, rain: 7, snow: 6,
            spring: 8, summer: 7, fall: 9, winter: 8,
            party: 9, date: 10, concert: 8, casual: 7, formal: 10, nightout: 10
        }
    },

    {
        name: "La Belle",
        brand: "Jean Paul Gaultier",
        gender: "women",
        description: "A sweet, elegant and addictive fragrance built around a pear-and-vanilla style.",
        notes: "Pear • Vanilla • Vetiver",

        scores: {
            city: 9, beach: 7, outdoors: 6, restaurant: 10, school: 5, home: 8,
            hot: 5, warm: 7, cool: 9, cold: 9, rain: 7, snow: 6,
            spring: 7, summer: 6, fall: 10, winter: 9,
            party: 9, date: 10, concert: 9, casual: 6, formal: 9, nightout: 10
        }
    },

    {
        name: "La Belle Le Parfum",
        brand: "Jean Paul Gaultier",
        gender: "women",
        description: "A deeper and more indulgent interpretation of La Belle.",
        notes: "Pear • Tonka Bean • Vanilla",

        scores: {
            city: 9, beach: 3, outdoors: 5, restaurant: 10, school: 3, home: 8,
            hot: 3, warm: 5, cool: 10, cold: 10, rain: 8, snow: 10,
            spring: 5, summer: 2, fall: 10, winter: 10,
            party: 10, date: 10, concert: 9, casual: 4, formal: 10, nightout: 10
        }
    },

    {
        name: "La Belle Paradise Garden",
        brand: "Jean Paul Gaultier",
        gender: "women",
        description: "A lush floral and tropical interpretation of the La Belle line.",
        notes: "Water Lily • Fig • Vanilla",

        scores: {
            city: 8, beach: 10, outdoors: 10, restaurant: 8, school: 7, home: 8,
            hot: 10, warm: 10, cool: 8, cold: 4, rain: 8, snow: 2,
            spring: 10, summer: 10, fall: 6, winter: 3,
            party: 9, date: 10, concert: 9, casual: 10, formal: 6, nightout: 9
        }
    },

    {
        name: "La Belle Rosea",
        brand: "Jean Paul Gaultier",
        gender: "women",
        description: "A newer floral chapter in the La Belle collection with a fresh, romantic personality.",
        notes: "Rose • Fruity Notes • Vanilla",

        scores: {
            city: 9, beach: 8, outdoors: 8, restaurant: 9, school: 8, home: 8,
            hot: 8, warm: 10, cool: 8, cold: 5, rain: 7, snow: 3,
            spring: 10, summer: 10, fall: 7, winter: 4,
            party: 9, date: 10, concert: 9, casual: 9, formal: 8, nightout: 9
        }
    },

    {
        name: "La Belle Flower Edition",
        brand: "Jean Paul Gaultier",
        gender: "women",
        description: "A floral seasonal variation on the La Belle fragrance family.",
        notes: "Floral Notes • Pear • Vanilla",

        scores: {
            city: 8, beach: 9, outdoors: 9, restaurant: 8, school: 8, home: 8,
            hot: 9, warm: 10, cool: 8, cold: 4, rain: 7, snow: 2,
            spring: 10, summer: 10, fall: 7, winter: 3,
            party: 9, date: 9, concert: 9, casual: 10, formal: 7, nightout: 9
        }
    },

    {
        name: "Gaultier Divine",
        brand: "Jean Paul Gaultier",
        gender: "women",
        description: "A radiant solar fragrance with a bright, sensual personality.",
        notes: "Meringue • White Flowers • Marine Notes",

        scores: {
            city: 9, beach: 10, outdoors: 8, restaurant: 9, school: 7, home: 8,
            hot: 10, warm: 10, cool: 8, cold: 5, rain: 7, snow: 3,
            spring: 10, summer: 10, fall: 7, winter: 4,
            party: 9, date: 10, concert: 9, casual: 8, formal: 9, nightout: 10
        }
    },

    {
        name: "Gaultier Divine Le Parfum",
        brand: "Jean Paul Gaultier",
        gender: "women",
        description: "A richer, more intense Divine fragrance with a powerful amber-floral character.",
        notes: "Amber • Floral Notes • Vanilla",

        scores: {
            city: 9, beach: 5, outdoors: 5, restaurant: 10, school: 3, home: 8,
            hot: 4, warm: 6, cool: 9, cold: 10, rain: 8, snow: 10,
            spring: 6, summer: 4, fall: 10, winter: 10,
            party: 10, date: 10, concert: 9, casual: 5, formal: 10, nightout: 10
        }
    },

    {
        name: "Gaultier Divine Elixir",
        brand: "Jean Paul Gaultier",
        gender: "women",
        description: "A powerful and intense Divine variation with a sweet, sensual character.",
        notes: "Salt • Tuberose • Vanilla",

        scores: {
            city: 9, beach: 7, outdoors: 5, restaurant: 10, school: 3, home: 8,
            hot: 5, warm: 7, cool: 9, cold: 10, rain: 8, snow: 9,
            spring: 6, summer: 5, fall: 10, winter: 10,
            party: 10, date: 10, concert: 10, casual: 5, formal: 10, nightout: 10
        }
    },

    {
        name: "Gaultier Divine Couture",
        brand: "Jean Paul Gaultier",
        gender: "women",
        description: "A new 2026 couture chapter in the Divine collection with a richer amber-fruity identity.",
        notes: "Amber • Fruity Notes • Floral Notes",

        scores: {
            city: 10, beach: 7, outdoors: 6, restaurant: 10, school: 4, home: 8,
            hot: 6, warm: 8, cool: 9, cold: 9, rain: 7, snow: 6,
            spring: 8, summer: 7, fall: 9, winter: 9,
            party: 10, date: 10, concert: 10, casual: 6, formal: 10, nightout: 10
        }
    },

    {
        name: "Scandal",
        brand: "Jean Paul Gaultier",
        gender: "women",
        description: "A sweet honeyed chypre fragrance made for bold, glamorous moments.",
        notes: "Gardenia • Honey • Patchouli",

        scores: {
            city: 10, beach: 5, outdoors: 5, restaurant: 10, school: 3, home: 8,
            hot: 4, warm: 7, cool: 9, cold: 9, rain: 7, snow: 7,
            spring: 6, summer: 5, fall: 10, winter: 9,
            party: 10, date: 10, concert: 10, casual: 4, formal: 10, nightout: 10
        }
    },

    {
        name: "Scandal Le Parfum",
        brand: "Jean Paul Gaultier",
        gender: "women",
        description: "A darker and more intense Scandal interpretation.",
        notes: "Salted Caramel • Jasmine • Vanilla",

        scores: {
            city: 10, beach: 3, outdoors: 4, restaurant: 10, school: 2, home: 8,
            hot: 2, warm: 4, cool: 10, cold: 10, rain: 8, snow: 10,
            spring: 4, summer: 2, fall: 10, winter: 10,
            party: 10, date: 10, concert: 10, casual: 3, formal: 10, nightout: 10
        }
    },

    {
        name: "Scandal Absolu",
        brand: "Jean Paul Gaultier",
        gender: "women",
        description: "A rich and dramatic Scandal fragrance designed for maximum nighttime impact.",
        notes: "Rich Gourmand Notes • Floral Notes • Vanilla",

        scores: {
            city: 10, beach: 2, outdoors: 3, restaurant: 10, school: 1, home: 8,
            hot: 1, warm: 3, cool: 10, cold: 10, rain: 9, snow: 10,
            spring: 3, summer: 1, fall: 10, winter: 10,
            party: 10, date: 10, concert: 10, casual: 2, formal: 10, nightout: 10
        }
    },

    {
        name: "Ma Dame",
        brand: "Jean Paul Gaultier",
        gender: "women",
        description: "A rebellious, feminine and rock-inspired fragrance from the Gaultier archives.",
        notes: "Orange • Rose • Grenadine",

        scores: {
            city: 10, beach: 7, outdoors: 7, restaurant: 8, school: 6, home: 7,
            hot: 8, warm: 9, cool: 8, cold: 5, rain: 7, snow: 3,
            spring: 9, summer: 9, fall: 8, winter: 4,
            party: 10, date: 9, concert: 10, casual: 9, formal: 5, nightout: 10
        }
    },
    /* =================================================
       XERJOFF
    ================================================= */

    {
        name: "Naxos",
        brand: "Xerjoff",
        gender: "unisex",
        image: null,
        description: "A rich Mediterranean fragrance blending citrus, lavender, honey and tobacco.",
        notes: "Lavender • Honey • Tobacco • Vanilla",
        scores: {
            city: 9, beach: 6, outdoors: 7, restaurant: 10, school: 3, home: 8,
            hot: 4, warm: 7, cool: 10, cold: 10, rain: 8, snow: 9,
            spring: 7, summer: 4, fall: 10, winter: 10,
            party: 10, date: 10, concert: 9, casual: 6, formal: 9, nightout: 10
        }
    },

    {
        name: "Erba Pura",
        brand: "Xerjoff",
        gender: "unisex",
        image: null,
        description: "A bright fruity-musky fragrance with a powerful, colorful character.",
        notes: "Citrus • Fruity Notes • Amber • Musk",
        scores: {
            city: 10, beach: 9, outdoors: 8, restaurant: 8, school: 6, home: 7,
            hot: 8, warm: 10, cool: 8, cold: 5, rain: 7, snow: 3,
            spring: 10, summer: 10, fall: 7, winter: 4,
            party: 10, date: 9, concert: 10, casual: 9, formal: 7, nightout: 9
        }
    },

    {
        name: "Torino21",
        brand: "Xerjoff",
        gender: "unisex",
        image: null,
        description: "A fresh green aromatic fragrance that is especially suited to warm weather.",
        notes: "Mint • Lemon • Basil • Verbena",
        scores: {
            city: 9, beach: 10, outdoors: 10, restaurant: 7, school: 9, home: 8,
            hot: 10, warm: 10, cool: 7, cold: 3, rain: 8, snow: 2,
            spring: 10, summer: 10, fall: 6, winter: 2,
            party: 8, date: 8, concert: 8, casual: 10, formal: 6, nightout: 7
        }
    },

    {
        name: "Torino22",
        brand: "Xerjoff",
        gender: "unisex",
        image: null,
        description: "A crisp aromatic fragrance with a clean, energetic personality.",
        notes: "Bergamot • Lavender • Saffron • Eucalyptus",
        scores: {
            city: 9, beach: 9, outdoors: 10, restaurant: 8, school: 9, home: 8,
            hot: 9, warm: 10, cool: 8, cold: 4, rain: 8, snow: 3,
            spring: 10, summer: 10, fall: 7, winter: 3,
            party: 9, date: 8, concert: 9, casual: 10, formal: 7, nightout: 8
        }
    },

    {
        name: "40 Knots",
        brand: "Xerjoff",
        gender: "unisex",
        image: null,
        description: "A marine-inspired woody fragrance with a salty, sophisticated character.",
        notes: "Woody Notes • Marine Notes • Honey • Green Notes",
        scores: {
            city: 9, beach: 10, outdoors: 10, restaurant: 8, school: 7, home: 8,
            hot: 9, warm: 10, cool: 8, cold: 5, rain: 9, snow: 3,
            spring: 10, summer: 10, fall: 7, winter: 4,
            party: 8, date: 9, concert: 8, casual: 9, formal: 8, nightout: 8
        }
    },

    {
        name: "Alexandria II",
        brand: "Xerjoff",
        gender: "unisex",
        image: null,
        description: "A luxurious woody fragrance with a rich, elegant and powerful character.",
        notes: "Lavender • Rosewood • Sandalwood • Oud",
        scores: {
            city: 9, beach: 3, outdoors: 5, restaurant: 10, school: 2, home: 9,
            hot: 2, warm: 5, cool: 10, cold: 10, rain: 8, snow: 10,
            spring: 4, summer: 2, fall: 10, winter: 10,
            party: 9, date: 10, concert: 8, casual: 4, formal: 10, nightout: 10
        }
    },

    {
        name: "Renaissance",
        brand: "Xerjoff",
        gender: "unisex",
        image: null,
        description: "A sparkling citrus fragrance with a fresh and energetic Mediterranean feel.",
        notes: "Lemon • Bergamot • Mint • Musk",
        scores: {
            city: 9, beach: 10, outdoors: 10, restaurant: 7, school: 9, home: 8,
            hot: 10, warm: 10, cool: 8, cold: 3, rain: 8, snow: 2,
            spring: 10, summer: 10, fall: 6, winter: 2,
            party: 8, date: 8, concert: 8, casual: 10, formal: 5, nightout: 7
        }
    },

    {
        name: "Lira",
        brand: "Xerjoff",
        gender: "women",
        image: null,
        description: "A sweet gourmand fragrance with a warm citrus, caramel and vanilla character.",
        notes: "Blood Orange • Cinnamon • Caramel • Vanilla",
        scores: {
            city: 9, beach: 5, outdoors: 5, restaurant: 10, school: 5, home: 9,
            hot: 4, warm: 7, cool: 10, cold: 10, rain: 8, snow: 9,
            spring: 7, summer: 4, fall: 10, winter: 10,
            party: 9, date: 10, concert: 8, casual: 6, formal: 9, nightout: 10
        }
    },

    {
        name: "Dama Bianca",
        brand: "Xerjoff",
        gender: "women",
        image: null,
        description: "A soft floral and powdery fragrance with a clean, elegant personality.",
        notes: "Lime • Iris • Jasmine • Vanilla • White Musk",
        scores: {
            city: 9, beach: 7, outdoors: 7, restaurant: 9, school: 8, home: 9,
            hot: 7, warm: 9, cool: 9, cold: 7, rain: 8, snow: 5,
            spring: 10, summer: 8, fall: 8, winter: 6,
            party: 8, date: 10, concert: 7, casual: 9, formal: 10, nightout: 8
        }
    },

    {
        name: "Accento",
        brand: "Xerjoff",
        gender: "unisex",
        image: null,
        description: "A sophisticated fruity-floral fragrance with a smooth, elegant character.",
        notes: "Pineapple • Hyacinth • Jasmine • Vanilla",
        scores: {
            city: 9, beach: 7, outdoors: 7, restaurant: 9, school: 6, home: 8,
            hot: 6, warm: 9, cool: 9, cold: 7, rain: 8, snow: 5,
            spring: 10, summer: 7, fall: 9, winter: 6,
            party: 9, date: 10, concert: 8, casual: 7, formal: 9, nightout: 9
        }
    },

    {
        name: "Mefisto",
        brand: "Xerjoff",
        gender: "men",
        image: null,
        description: "A bright citrus and aromatic fragrance with a clean masculine character.",
        notes: "Grapefruit • Bergamot • Lavender • Musk",
        scores: {
            city: 9, beach: 10, outdoors: 10, restaurant: 7, school: 9, home: 8,
            hot: 10, warm: 10, cool: 8, cold: 4, rain: 8, snow: 2,
            spring: 10, summer: 10, fall: 6, winter: 3,
            party: 8, date: 8, concert: 8, casual: 10, formal: 6, nightout: 7
        }
    },

    {
        name: "Uden",
        brand: "Xerjoff",
        gender: "men",
        image: null,
        description: "A refined citrus-woody fragrance with a fresh yet elegant personality.",
        notes: "Lemon • Grapefruit • Rum • Coffee • Sandalwood",
        scores: {
            city: 9, beach: 8, outdoors: 9, restaurant: 9, school: 8, home: 8,
            hot: 8, warm: 9, cool: 9, cold: 7, rain: 8, snow: 5,
            spring: 10, summer: 9, fall: 8, winter: 6,
            party: 8, date: 9, concert: 8, casual: 9, formal: 9, nightout: 8
        }
    },

    {
        name: "More Than Words",
        brand: "Xerjoff",
        gender: "unisex",
        image: null,
        description: "A rich, dark and artistic fragrance built around fruity and woody accords.",
        notes: "Fruity Notes • Oud • Amber • Woods",
        scores: {
            city: 9, beach: 2, outdoors: 4, restaurant: 10, school: 1, home: 9,
            hot: 1, warm: 3, cool: 10, cold: 10, rain: 9, snow: 10,
            spring: 2, summer: 1, fall: 10, winter: 10,
            party: 10, date: 10, concert: 9, casual: 2, formal: 10, nightout: 10
        }
    },


    /* =================================================
       ARMANI
    ================================================= */

    {
        name: "Acqua di Giò Eau de Toilette",
        brand: "Armani",
        gender: "men",
        image: null,
        description: "A classic fresh aquatic fragrance with a Mediterranean character.",
        notes: "Marine Notes • Bergamot • Rosemary • Patchouli",
        scores: {
            city: 9, beach: 10, outdoors: 10, restaurant: 7, school: 10, home: 8,
            hot: 10, warm: 10, cool: 8, cold: 4, rain: 8, snow: 2,
            spring: 10, summer: 10, fall: 6, winter: 2,
            party: 8, date: 8, concert: 8, casual: 10, formal: 6, nightout: 7
        }
    },

    {
        name: "Acqua di Giò Profondo",
        brand: "Armani",
        gender: "men",
        image: null,
        description: "A deeper marine fragrance with an aromatic and mineral character.",
        notes: "Marine Notes • Cypress • Rosemary • Patchouli",
        scores: {
            city: 9, beach: 10, outdoors: 10, restaurant: 8, school: 9, home: 8,
            hot: 10, warm: 10, cool: 8, cold: 5, rain: 9, snow: 3,
            spring: 10, summer: 10, fall: 7, winter: 3,
            party: 9, date: 8, concert: 9, casual: 10, formal: 7, nightout: 8
        }
    },

    {
        name: "Acqua di Giò Parfum",
        brand: "Armani",
        gender: "men",
        image: null,
        description: "A refined woody aquatic fragrance with a darker and more elegant character.",
        notes: "Marine Notes • Bergamot • Rosemary • Woods",
        scores: {
            city: 9, beach: 9, outdoors: 9, restaurant: 9, school: 7, home: 8,
            hot: 8, warm: 9, cool: 9, cold: 7, rain: 9, snow: 4,
            spring: 9, summer: 9, fall: 9, winter: 6,
            party: 9, date: 9, concert: 8, casual: 8, formal: 9, nightout: 9
        }
    },

    {
        name: "Acqua di Giò Elixir",
        brand: "Armani",
        gender: "men",
        image: null,
        description: "A concentrated and powerful interpretation of the Acqua di Giò style.",
        notes: "Marine Notes • Citrus • Woody Notes • Patchouli",
        scores: {
            city: 9, beach: 8, outdoors: 8, restaurant: 9, school: 5, home: 8,
            hot: 6, warm: 8, cool: 10, cold: 9, rain: 9, snow: 7,
            spring: 8, summer: 6, fall: 10, winter: 9,
            party: 10, date: 9, concert: 9, casual: 6, formal: 9, nightout: 10
        }
    },

    {
        name: "Armani Code Eau de Toilette",
        brand: "Armani",
        gender: "men",
        image: null,
        description: "A smooth aromatic fragrance with a warm and sophisticated personality.",
        notes: "Lemon • Olive Blossom • Tonka Bean • Guaiac Wood",
        scores: {
            city: 9, beach: 5, outdoors: 6, restaurant: 10, school: 5, home: 8,
            hot: 5, warm: 7, cool: 10, cold: 9, rain: 8, snow: 7,
            spring: 7, summer: 5, fall: 10, winter: 9,
            party: 10, date: 10, concert: 9, casual: 6, formal: 9, nightout: 10
        }
    },

    {
        name: "Armani Code Parfum",
        brand: "Armani",
        gender: "men",
        image: null,
        description: "A modern aromatic woody fragrance with a clean, elegant character.",
        notes: "Bergamot • Iris • Clary Sage • Tonka Bean",
        scores: {
            city: 10, beach: 6, outdoors: 7, restaurant: 10, school: 7, home: 8,
            hot: 6, warm: 8, cool: 10, cold: 9, rain: 8, snow: 6,
            spring: 8, summer: 6, fall: 10, winter: 9,
            party: 9, date: 10, concert: 8, casual: 8, formal: 10, nightout: 10
        }
    },

    {
        name: "Stronger With You",
        brand: "Armani",
        gender: "men",
        image: null,
        description: "A warm sweet fragrance with an inviting chestnut and vanilla character.",
        notes: "Chestnut • Sage • Vanilla",
        scores: {
            city: 9, beach: 3, outdoors: 5, restaurant: 10, school: 3, home: 9,
            hot: 2, warm: 5, cool: 10, cold: 10, rain: 8, snow: 10,
            spring: 5, summer: 2, fall: 10, winter: 10,
            party: 10, date: 10, concert: 9, casual: 5, formal: 8, nightout: 10
        }
    },

    {
        name: "Stronger With You Intensely",
        brand: "Armani",
        gender: "men",
        image: null,
        description: "A sweeter, richer and more intense version of Stronger With You.",
        notes: "Pink Pepper • Toffee • Cinnamon • Vanilla",
        scores: {
            city: 9, beach: 2, outdoors: 4, restaurant: 10, school: 2, home: 9,
            hot: 1, warm: 4, cool: 10, cold: 10, rain: 8, snow: 10,
            spring: 3, summer: 1, fall: 10, winter: 10,
            party: 10, date: 10, concert: 10, casual: 4, formal: 8, nightout: 10
        }
    },

    {
        name: "Stronger With You Absolutely",
        brand: "Armani",
        gender: "men",
        image: null,
        description: "A rich warm fragrance with rum, vanilla and chestnut facets.",
        notes: "Rum • Chestnut • Vanilla • Cedar",
        scores: {
            city: 9, beach: 2, outdoors: 4, restaurant: 10, school: 2, home: 9,
            hot: 1, warm: 3, cool: 10, cold: 10, rain: 9, snow: 10,
            spring: 3, summer: 1, fall: 10, winter: 10,
            party: 10, date: 10, concert: 9, casual: 3, formal: 9, nightout: 10
        }
    },

    {
        name: "My Way Eau de Parfum",
        brand: "Armani",
        gender: "women",
        image: null,
        description: "A bright floral fragrance with a modern feminine character.",
        notes: "Orange Blossom • Tuberose • Vanilla • Cedar",
        scores: {
            city: 9, beach: 7, outdoors: 8, restaurant: 9, school: 8, home: 8,
            hot: 7, warm: 9, cool: 8, cold: 6, rain: 7, snow: 4,
            spring: 10, summer: 8, fall: 8, winter: 6,
            party: 9, date: 10, concert: 8, casual: 9, formal: 9, nightout: 9
        }
    },

    {
        name: "My Way Intense",
        brand: "Armani",
        gender: "women",
        image: null,
        description: "A richer floral fragrance with stronger depth and projection.",
        notes: "Orange Blossom • Tuberose • Sandalwood • Vanilla",
        scores: {
            city: 9, beach: 4, outdoors: 6, restaurant: 10, school: 5, home: 8,
            hot: 4, warm: 7, cool: 10, cold: 9, rain: 8, snow: 7,
            spring: 7, summer: 4, fall: 10, winter: 9,
            party: 10, date: 10, concert: 9, casual: 6, formal: 10, nightout: 10
        }
    },

    {
        name: "Sì Eau de Parfum",
        brand: "Armani",
        gender: "women",
        image: null,
        description: "An elegant modern chypre fragrance with a sophisticated fruity character.",
        notes: "Blackcurrant • Rose • Freesia • Vanilla • Patchouli",
        scores: {
            city: 10, beach: 5, outdoors: 6, restaurant: 10, school: 6, home: 8,
            hot: 5, warm: 7, cool: 9, cold: 9, rain: 8, snow: 6,
            spring: 8, summer: 5, fall: 10, winter: 9,
            party: 9, date: 10, concert: 8, casual: 7, formal: 10, nightout: 10
        }
    },

    {
        name: "Sì Passione",
        brand: "Armani",
        gender: "women",
        image: null,
        description: "A vibrant fruity-floral fragrance with a confident and energetic personality.",
        notes: "Blackcurrant • Pear • Rose • Vanilla",
        scores: {
            city: 9, beach: 7, outdoors: 8, restaurant: 8, school: 8, home: 8,
            hot: 7, warm: 9, cool: 8, cold: 6, rain: 7, snow: 4,
            spring: 10, summer: 8, fall: 8, winter: 5,
            party: 10, date: 10, concert: 9, casual: 9, formal: 7, nightout: 9
        }
    },

    {
        name: "Sì Intense",
        brand: "Armani",
        gender: "women",
        image: null,
        description: "A deeper and more luxurious interpretation of the Sì signature.",
        notes: "Blackcurrant • Rose • Vanilla • Benzoin",
        scores: {
            city: 10, beach: 3, outdoors: 5, restaurant: 10, school: 4, home: 8,
            hot: 3, warm: 5, cool: 10, cold: 10, rain: 8, snow: 9,
            spring: 5, summer: 3, fall: 10, winter: 10,
            party: 10, date: 10, concert: 9, casual: 5, formal: 10, nightout: 10
        }
    },

    {
        name: "Emporio Armani He",
        brand: "Armani",
        gender: "men",
        image: null,
        description: "A clean woody aromatic fragrance with a classic versatile character.",
        notes: "Yuzu • Cardamom • Sage • Cedar",
        scores: {
            city: 9, beach: 8, outdoors: 9, restaurant: 8, school: 9, home: 8,
            hot: 8, warm: 9, cool: 9, cold: 6, rain: 8, snow: 4,
            spring: 10, summer: 9, fall: 8, winter: 5,
            party: 8, date: 8, concert: 8, casual: 10, formal: 7, nightout: 8
        }
    },

    {
        name: "Ocean di Gioia",
        brand: "Armani",
        gender: "women",
        image: null,
        description: "A fresh aquatic floral fragrance designed for bright warm-weather settings.",
        notes: "Pear • Water Jasmine • Marine Notes • Musk",
        scores: {
            city: 9, beach: 10, outdoors: 10, restaurant: 7, school: 9, home: 8,
            hot: 10, warm: 10, cool: 8, cold: 3, rain: 8, snow: 2,
            spring: 10, summer: 10, fall: 6, winter: 2,
            party: 8, date: 8, concert: 8, casual: 10, formal: 5, nightout: 7
        }
    },
   {
    name: "Fierezza",
    brand: "Xerjoff",
    gender: "unisex",
    image: null,
    description: "A bold fragrance from the Xerjoff x Automobili Lamborghini collaboration.",
    notes: "TBD",
    scores: {
        city: 9, beach: 5, outdoors: 8, restaurant: 9, school: 4, home: 7,
        hot: 5, warm: 7, cool: 10, cold: 9, rain: 8, snow: 6,
        spring: 7, summer: 5, fall: 9, winter: 8,
        party: 10, date: 9, concert: 10, casual: 6, formal: 9, nightout: 10
    }
},

{
    name: "Avanguardia",
    brand: "Xerjoff",
    gender: "unisex",
    image: null,
    description: "A powerful woody-fruity fragrance created with Automobili Lamborghini.",
    notes: "Mandarin • Davana • Cherry • Black Violet • Patchouli • Tonka Bean",
    scores: {
        city: 9, beach: 3, outdoors: 7, restaurant: 10, school: 2, home: 8,
        hot: 3, warm: 6, cool: 10, cold: 10, rain: 8, snow: 8,
        spring: 5, summer: 3, fall: 10, winter: 10,
        party: 10, date: 10, concert: 10, casual: 5, formal: 9, nightout: 10
    }
},

{
    name: "Perseveranza",
    brand: "Xerjoff",
    gender: "unisex",
    image: null,
    description: "A luxurious fragrance completing the Xerjoff x Automobili Lamborghini driving experience.",
    notes: "TBD",
    scores: {
        city: 9, beach: 4, outdoors: 6, restaurant: 10, school: 3, home: 8,
        hot: 4, warm: 6, cool: 10, cold: 10, rain: 8, snow: 8,
        spring: 6, summer: 4, fall: 10, winter: 10,
        party: 10, date: 10, concert: 9, casual: 5, formal: 10, nightout: 10
    }
},
    /* =================================================
       CREED
    ================================================= */

    {
        name: "Aventus",
        brand: "Creed",
        gender: "men",
        image: null,
        description: "A legendary fruity-smoky fragrance with a sophisticated masculine character.",
        notes: "Pineapple • Bergamot • Birch • Musk • Oakmoss",
        scores: {
            city: 10, beach: 7, outdoors: 9, restaurant: 10, school: 6, home: 8,
            hot: 7, warm: 9, cool: 9, cold: 7, rain: 8, snow: 5,
            spring: 10, summer: 8, fall: 9, winter: 6,
            party: 10, date: 10, concert: 10, casual: 9, formal: 10, nightout: 10
        }
    },

    {
        name: "Aventus Cologne",
        brand: "Creed",
        gender: "men",
        image: null,
        description: "A fresher and brighter take on the Aventus style.",
        notes: "Mandarin • Ginger • Pink Pepper • Vetiver • Sandalwood",
        scores: {
            city: 10, beach: 9, outdoors: 10, restaurant: 8, school: 9, home: 8,
            hot: 10, warm: 10, cool: 8, cold: 4, rain: 9, snow: 2,
            spring: 10, summer: 10, fall: 7, winter: 3,
            party: 9, date: 9, concert: 9, casual: 10, formal: 7, nightout: 8
        }
    },

    {
        name: "Green Irish Tweed",
        brand: "Creed",
        gender: "men",
        image: null,
        description: "A refined green and aromatic fragrance with a classic clean character.",
        notes: "Lemon Verbena • Iris • Violet Leaf • Sandalwood • Ambergris",
        scores: {
            city: 9, beach: 7, outdoors: 10, restaurant: 9, school: 9, home: 8,
            hot: 9, warm: 10, cool: 9, cold: 6, rain: 9, snow: 4,
            spring: 10, summer: 9, fall: 8, winter: 5,
            party: 8, date: 9, concert: 8, casual: 10, formal: 10, nightout: 8
        }
    },

    {
        name: "Silver Mountain Water",
        brand: "Creed",
        gender: "unisex",
        image: null,
        description: "A crisp clean fragrance inspired by mountain air and alpine landscapes.",
        notes: "Bergamot • Blackcurrant • Green Tea • Musk • Sandalwood",
        scores: {
            city: 9, beach: 9, outdoors: 10, restaurant: 8, school: 9, home: 8,
            hot: 10, warm: 10, cool: 8, cold: 4, rain: 9, snow: 3,
            spring: 10, summer: 10, fall: 7, winter: 3,
            party: 8, date: 8, concert: 8, casual: 10, formal: 7, nightout: 7
        }
    },

    {
        name: "Himalaya",
        brand: "Creed",
        gender: "men",
        image: null,
        description: "A sophisticated woody fragrance with a fresh citrus opening.",
        notes: "Grapefruit • Lemon • Sandalwood • Cedar • Musk",
        scores: {
            city: 9, beach: 8, outdoors: 9, restaurant: 9, school: 8, home: 8,
            hot: 8, warm: 9, cool: 9, cold: 7, rain: 8, snow: 5,
            spring: 9, summer: 9, fall: 8, winter: 6,
            party: 8, date: 9, concert: 8, casual: 9, formal: 9, nightout: 8
        }
    },

    {
        name: "Viking",
        brand: "Creed",
        gender: "men",
        image: null,
        description: "A bold aromatic woody fragrance with a confident traditional character.",
        notes: "Pink Pepper • Bergamot • Peppermint • Vetiver • Cedar",
        scores: {
            city: 9, beach: 6, outdoors: 10, restaurant: 9, school: 7, home: 8,
            hot: 7, warm: 8, cool: 10, cold: 8, rain: 9, snow: 6,
            spring: 9, summer: 7, fall: 10, winter: 7,
            party: 9, date: 9, concert: 9, casual: 8, formal: 10, nightout: 9
        }
    },

    {
        name: "Viking Cologne",
        brand: "Creed",
        gender: "men",
        image: null,
        description: "A fresher interpretation of Viking with an energetic citrus and aromatic profile.",
        notes: "Mandarin • Lemon • Pink Pepper • Lavender • Sandalwood",
        scores: {
            city: 9, beach: 9, outdoors: 10, restaurant: 8, school: 9, home: 8,
            hot: 10, warm: 10, cool: 9, cold: 5, rain: 9, snow: 3,
            spring: 10, summer: 10, fall: 7, winter: 4,
            party: 8, date: 8, concert: 8, casual: 10, formal: 8, nightout: 7
        }
    },

    {
        name: "Royal Oud",
        brand: "Creed",
        gender: "unisex",
        image: null,
        description: "A luxurious woody fragrance with an elegant refined character.",
        notes: "Pink Pepper • Lemon • Cedar • Sandalwood • Oud",
        scores: {
            city: 10, beach: 3, outdoors: 5, restaurant: 10, school: 2, home: 8,
            hot: 3, warm: 5, cool: 10, cold: 10, rain: 8, snow: 9,
            spring: 5, summer: 2, fall: 10, winter: 10,
            party: 9, date: 10, concert: 8, casual: 4, formal: 10, nightout: 10
        }
    },

    {
        name: "Original Santal",
        brand: "Creed",
        gender: "unisex",
        image: null,
        description: "A warm creamy sandalwood fragrance with a polished luxurious feel.",
        notes: "Cinnamon • Sandalwood • Lavender • Vanilla • Musk",
        scores: {
            city: 9, beach: 3, outdoors: 5, restaurant: 10, school: 3, home: 9,
            hot: 2, warm: 5, cool: 10, cold: 10, rain: 8, snow: 9,
            spring: 5, summer: 2, fall: 10, winter: 10,
            party: 9, date: 10, concert: 8, casual: 5, formal: 10, nightout: 10
        }
    },

    {
        name: "Original Vetiver",
        brand: "Creed",
        gender: "unisex",
        image: null,
        description: "A clean green fragrance centered around fresh vetiver and citrus.",
        notes: "Bergamot • Mandarin • Vetiver • Sandalwood • Musk",
        scores: {
            city: 9, beach: 9, outdoors: 10, restaurant: 8, school: 10, home: 9,
            hot: 10, warm: 10, cool: 8, cold: 4, rain: 9, snow: 2,
            spring: 10, summer: 10, fall: 7, winter: 3,
            party: 7, date: 8, concert: 7, casual: 10, formal: 8, nightout: 6
        }
    },

    {
        name: "Virgin Island Water",
        brand: "Creed",
        gender: "unisex",
        image: null,
        description: "A tropical citrus fragrance with a bright Caribbean-inspired character.",
        notes: "Lime • Coconut • Bergamot • White Rum • Musk",
        scores: {
            city: 8, beach: 10, outdoors: 10, restaurant: 7, school: 8, home: 8,
            hot: 10, warm: 10, cool: 6, cold: 2, rain: 8, snow: 1,
            spring: 10, summer: 10, fall: 5, winter: 1,
            party: 9, date: 9, concert: 9, casual: 10, formal: 4, nightout: 8
        }
    },

    {
        name: "Millésime Impérial",
        brand: "Creed",
        gender: "unisex",
        image: null,
        description: "A bright elegant citrus-marine fragrance with a luxurious clean character.",
        notes: "Sea Salt • Lemon • Iris • Musk • Woody Notes",
        scores: {
            city: 10, beach: 10, outdoors: 10, restaurant: 8, school: 9, home: 8,
            hot: 10, warm: 10, cool: 8, cold: 3, rain: 9, snow: 2,
            spring: 10, summer: 10, fall: 6, winter: 2,
            party: 8, date: 8, concert: 8, casual: 10, formal: 8, nightout: 7
        }
    },

    {
        name: "Carmina",
        brand: "Creed",
        gender: "women",
        image: null,
        description: "A sophisticated floral fragrance with a dark fruity and woody character.",
        notes: "Black Cherry • Pink Pepper • Rose • Saffron • Amber",
        scores: {
            city: 9, beach: 3, outdoors: 5, restaurant: 10, school: 3, home: 8,
            hot: 3, warm: 5, cool: 10, cold: 10, rain: 8, snow: 9,
            spring: 5, summer: 2, fall: 10, winter: 10,
            party: 10, date: 10, concert: 9, casual: 4, formal: 10, nightout: 10
        }
    },

    {
        name: "Wind Flowers",
        brand: "Creed",
        gender: "women",
        image: null,
        description: "An elegant floral fragrance with a soft feminine character.",
        notes: "Jasmine • Tuberose • Orange Blossom • Sandalwood • Musk",
        scores: {
            city: 9, beach: 6, outdoors: 7, restaurant: 10, school: 7, home: 9,
            hot: 6, warm: 8, cool: 9, cold: 7, rain: 8, snow: 5,
            spring: 10, summer: 8, fall: 8, winter: 6,
            party: 8, date: 10, concert: 7, casual: 8, formal: 10, nightout: 8
        }
    },


    /* =================================================
       PARFUMS DE MARLY
    ================================================= */

    {
        name: "Althaïr",
        brand: "Parfums de Marly",
        gender: "men",
        image: null,
        description: "A warm sweet vanilla fragrance with a rich woody character.",
        notes: "Cinnamon • Orange Blossom • Bourbon Vanilla • Guaiac Wood",
        scores: {
            city: 10, beach: 2, outdoors: 4, restaurant: 10, school: 2, home: 9,
            hot: 1, warm: 4, cool: 10, cold: 10, rain: 8, snow: 10,
            spring: 3, summer: 1, fall: 10, winter: 10,
            party: 10, date: 10, concert: 10, casual: 4, formal: 9, nightout: 10
        }
    },

    {
        name: "Layton",
        brand: "Parfums de Marly",
        gender: "unisex",
        image: null,
        description: "A sweet spicy fragrance balancing fresh fruit with warm vanilla and woods.",
        notes: "Apple • Bergamot • Lavender • Jasmine • Vanilla • Pepper",
        scores: {
            city: 10, beach: 4, outdoors: 5, restaurant: 10, school: 3, home: 9,
            hot: 2, warm: 5, cool: 10, cold: 10, rain: 8, snow: 10,
            spring: 5, summer: 2, fall: 10, winter: 10,
            party: 10, date: 10, concert: 10, casual: 5, formal: 9, nightout: 10
        }
    },

    {
        name: "Percival",
        brand: "Parfums de Marly",
        gender: "unisex",
        image: null,
        description: "A fresh aromatic fragrance with a clean versatile character.",
        notes: "Bergamot • Mandarin • Lavender • Geranium • Ambrox",
        scores: {
            city: 10, beach: 9, outdoors: 10, restaurant: 9, school: 9, home: 8,
            hot: 10, warm: 10, cool: 9, cold: 5, rain: 9, snow: 3,
            spring: 10, summer: 10, fall: 7, winter: 4,
            party: 9, date: 9, concert: 9, casual: 10, formal: 8, nightout: 8
        }
    },

    {
        name: "Haltane",
        brand: "Parfums de Marly",
        gender: "men",
        image: null,
        description: "A sophisticated woody fragrance combining freshness with rich sweetness.",
        notes: "Bergamot • Saffron • Praline • Oud • Patchouli",
        scores: {
            city: 9, beach: 2, outdoors: 5, restaurant: 10, school: 2, home: 8,
            hot: 2, warm: 4, cool: 10, cold: 10, rain: 8, snow: 10,
            spring: 3, summer: 1, fall: 10, winter: 10,
            party: 10, date: 10, concert: 9, casual: 3, formal: 10, nightout: 10
        }
    },

    {
        name: "Herod",
        brand: "Parfums de Marly",
        gender: "men",
        image: null,
        description: "A warm tobacco fragrance with sweet spicy and woody facets.",
        notes: "Cinnamon • Pepper • Tobacco • Vanilla • Cedar",
        scores: {
            city: 9, beach: 2, outdoors: 4, restaurant: 10, school: 2, home: 9,
            hot: 1, warm: 3, cool: 10, cold: 10, rain: 9, snow: 10,
            spring: 2, summer: 1, fall: 10, winter: 10,
            party: 10, date: 10, concert: 9, casual: 3, formal: 9, nightout: 10
        }
    },

    {
        name: "Delina",
        brand: "Parfums de Marly",
        gender: "women",
        image: null,
        description: "A luxurious fruity floral fragrance centered around rose and lychee.",
        notes: "Lychee • Rhubarb • Rose • Peony • Vanilla • Musk",
        scores: {
            city: 10, beach: 6, outdoors: 7, restaurant: 10, school: 7, home: 9,
            hot: 7, warm: 9, cool: 9, cold: 7, rain: 8, snow: 5,
            spring: 10, summer: 8, fall: 8, winter: 6,
            party: 9, date: 10, concert: 8, casual: 8, formal: 10, nightout: 9
        }
    },

    {
        name: "Delina Exclusif",
        brand: "Parfums de Marly",
        gender: "women",
        image: null,
        description: "A richer interpretation of Delina with deeper fruity, floral and woody facets.",
        notes: "Lychee • Pear • Rose • Incense • Vanilla • Oud",
        scores: {
            city: 9, beach: 3, outdoors: 5, restaurant: 10, school: 3, home: 9,
            hot: 2, warm: 5, cool: 10, cold: 10, rain: 8, snow: 9,
            spring: 5, summer: 2, fall: 10, winter: 10,
            party: 10, date: 10, concert: 9, casual: 4, formal: 10, nightout: 10
        }
    },

    {
        name: "Layton Exclusif",
        brand: "Parfums de Marly",
        gender: "unisex",
        image: null,
        description: "A darker and richer interpretation of Layton with woody and smoky depth.",
        notes: "Almond • Bergamot • Pink Pepper • Coffee • Oud • Amber",
        scores: {
            city: 9, beach: 1, outdoors: 3, restaurant: 10, school: 1, home: 9,
            hot: 1, warm: 2, cool: 10, cold: 10, rain: 9, snow: 10,
            spring: 1, summer: 1, fall: 10, winter: 10,
            party: 10, date: 10, concert: 10, casual: 2, formal: 10, nightout: 10
        }
    },

    {
        name: "Oajan",
        brand: "Parfums de Marly",
        gender: "unisex",
        image: null,
        description: "A rich gourmand fragrance built around honey, cinnamon and vanilla.",
        notes: "Honey • Cinnamon • Osmanthus • Ambergris • Vanilla",
        scores: {
            city: 9, beach: 1, outdoors: 3, restaurant: 10, school: 1, home: 10,
            hot: 1, warm: 2, cool: 10, cold: 10, rain: 9, snow: 10,
            spring: 1, summer: 1, fall: 10, winter: 10,
            party: 10, date: 10, concert: 9, casual: 2, formal: 8, nightout: 10
        }
    },

    {
        name: "Greenley",
        brand: "Parfums de Marly",
        gender: "men",
        image: null,
        description: "A crisp green fruity fragrance with a bright modern character.",
        notes: "Green Apple • Mandarin • Cedar • Cashmere Wood • Musk",
        scores: {
            city: 9, beach: 9, outdoors: 10, restaurant: 8, school: 9, home: 8,
            hot: 10, warm: 10, cool: 8, cold: 4, rain: 9, snow: 2,
            spring: 10, summer: 10, fall: 7, winter: 3,
            party: 8, date: 8, concert: 8, casual: 10, formal: 7, nightout: 7
        }
    },

    {
        name: "Sedley",
        brand: "Parfums de Marly",
        gender: "men",
        image: null,
        description: "A fresh citrus aromatic fragrance designed for clean warm-weather wear.",
        notes: "Lemon • Mint • Bergamot • Lavender • Sandalwood",
        scores: {
            city: 9, beach: 10, outdoors: 10, restaurant: 8, school: 10, home: 8,
            hot: 10, warm: 10, cool: 8, cold: 3, rain: 9, snow: 2,
            spring: 10, summer: 10, fall: 6, winter: 2,
            party: 8, date: 8, concert: 8, casual: 10, formal: 7, nightout: 7
        }
    },
       /* =================================================
       TOM FORD
    ================================================= */

    {
        name: "Oud Wood",
        brand: "Tom Ford",
        gender: "unisex",
        image: null,
        description: "A smooth sophisticated woody fragrance with a refined oud character.",
        notes: "Rosewood • Cardamom • Oud • Sandalwood • Amber",
        scores: {
            city: 10, beach: 3, outdoors: 5, restaurant: 10, school: 2, home: 8,
            hot: 3, warm: 5, cool: 10, cold: 10, rain: 8, snow: 9,
            spring: 5, summer: 2, fall: 10, winter: 10,
            party: 8, date: 10, concert: 7, casual: 5, formal: 10, nightout: 9
        }
    },

    {
        name: "Tobacco Vanille",
        brand: "Tom Ford",
        gender: "unisex",
        image: null,
        description: "A rich sweet tobacco fragrance with a warm vanilla character.",
        notes: "Tobacco Leaf • Vanilla • Cacao • Tonka Bean • Dried Fruits",
        scores: {
            city: 9, beach: 1, outdoors: 3, restaurant: 10, school: 1, home: 10,
            hot: 1, warm: 2, cool: 10, cold: 10, rain: 9, snow: 10,
            spring: 2, summer: 1, fall: 10, winter: 10,
            party: 10, date: 10, concert: 10, casual: 3, formal: 10, nightout: 10
        }
    },

    {
        name: "Lost Cherry",
        brand: "Tom Ford",
        gender: "unisex",
        image: null,
        description: "A sweet seductive cherry fragrance with almond and vanilla facets.",
        notes: "Black Cherry • Bitter Almond • Tonka Bean • Vanilla",
        scores: {
            city: 9, beach: 4, outdoors: 5, restaurant: 10, school: 2, home: 9,
            hot: 3, warm: 6, cool: 10, cold: 10, rain: 8, snow: 9,
            spring: 5, summer: 3, fall: 10, winter: 10,
            party: 10, date: 10, concert: 10, casual: 4, formal: 8, nightout: 10
        }
    },

    {
        name: "Oud Minerale",
        brand: "Tom Ford",
        gender: "unisex",
        image: null,
        description: "A marine woody fragrance combining salty mineral notes with woods.",
        notes: "Seaweed • Pink Pepper • Sea Salt • Oud • Woods",
        scores: {
            city: 9, beach: 10, outdoors: 10, restaurant: 8, school: 6, home: 8,
            hot: 9, warm: 10, cool: 8, cold: 4, rain: 10, snow: 2,
            spring: 10, summer: 10, fall: 7, winter: 3,
            party: 9, date: 8, concert: 9, casual: 9, formal: 7, nightout: 8
        }
    },

    {
        name: "Neroli Portofino",
        brand: "Tom Ford",
        gender: "unisex",
        image: null,
        description: "A bright citrus aromatic fragrance inspired by the Italian Riviera.",
        notes: "Bergamot • Lemon • Mandarin • Neroli • Orange Blossom",
        scores: {
            city: 9, beach: 10, outdoors: 10, restaurant: 8, school: 9, home: 8,
            hot: 10, warm: 10, cool: 7, cold: 3, rain: 8, snow: 2,
            spring: 10, summer: 10, fall: 6, winter: 2,
            party: 8, date: 8, concert: 8, casual: 10, formal: 7, nightout: 7
        }
    },

    {
        name: "Costa Azzurra",
        brand: "Tom Ford",
        gender: "unisex",
        image: null,
        description: "A fresh aromatic woody fragrance with a Mediterranean coastal feel.",
        notes: "Seaweed • Lemon • Cypress • Oakmoss • Driftwood",
        scores: {
            city: 9, beach: 10, outdoors: 10, restaurant: 8, school: 9, home: 8,
            hot: 10, warm: 10, cool: 8, cold: 3, rain: 9, snow: 2,
            spring: 10, summer: 10, fall: 6, winter: 2,
            party: 8, date: 8, concert: 8, casual: 10, formal: 7, nightout: 7
        }
    },

    {
        name: "Fucking Fabulous",
        brand: "Tom Ford",
        gender: "unisex",
        image: null,
        description: "A bold creamy leather fragrance with an unusual almond and vanilla character.",
        notes: "Almond • Leather • Orris • Tonka Bean • Cashmeran",
        scores: {
            city: 10, beach: 1, outdoors: 3, restaurant: 10, school: 1, home: 9,
            hot: 1, warm: 3, cool: 10, cold: 10, rain: 9, snow: 10,
            spring: 2, summer: 1, fall: 10, winter: 10,
            party: 10, date: 9, concert: 10, casual: 2, formal: 9, nightout: 10
        }
    },

    {
        name: "Ombré Leather",
        brand: "Tom Ford",
        gender: "unisex",
        image: null,
        description: "A smooth modern leather fragrance with floral and woody depth.",
        notes: "Cardamom • Jasmine • Leather • Amber • Moss",
        scores: {
            city: 10, beach: 2, outdoors: 4, restaurant: 10, school: 2, home: 8,
            hot: 2, warm: 4, cool: 10, cold: 10, rain: 9, snow: 10,
            spring: 3, summer: 1, fall: 10, winter: 10,
            party: 10, date: 10, concert: 10, casual: 4, formal: 10, nightout: 10
        }
    },

    {
        name: "Black Orchid",
        brand: "Tom Ford",
        gender: "unisex",
        image: null,
        description: "A dark luxurious floral fragrance with earthy, spicy and gourmand facets.",
        notes: "Black Truffle • Ylang-Ylang • Black Orchid • Patchouli • Vanilla",
        scores: {
            city: 10, beach: 1, outdoors: 3, restaurant: 10, school: 1, home: 9,
            hot: 1, warm: 3, cool: 10, cold: 10, rain: 9, snow: 10,
            spring: 2, summer: 1, fall: 10, winter: 10,
            party: 10, date: 10, concert: 10, casual: 2, formal: 10, nightout: 10
        }
    },

    {
        name: "Soleil Blanc",
        brand: "Tom Ford",
        gender: "unisex",
        image: null,
        description: "A creamy solar fragrance with a luxurious warm-weather character.",
        notes: "Pistachio • Bergamot • Ylang-Ylang • Coconut • Amber",
        scores: {
            city: 9, beach: 10, outdoors: 10, restaurant: 8, school: 7, home: 8,
            hot: 10, warm: 10, cool: 6, cold: 2, rain: 7, snow: 1,
            spring: 10, summer: 10, fall: 5, winter: 1,
            party: 9, date: 10, concert: 9, casual: 10, formal: 6, nightout: 8
        }
    },


    /* =================================================
       MAISON FRANCIS KURKDJIAN
    ================================================= */

    {
        name: "Baccarat Rouge 540 Eau de Parfum",
        brand: "Maison Francis Kurkdjian",
        gender: "unisex",
        image: null,
        description: "A distinctive airy amber fragrance with a sweet woody character.",
        notes: "Saffron • Jasmine • Amberwood • Ambergris • Fir Resin • Cedar",
        scores: {
            city: 10, beach: 5, outdoors: 6, restaurant: 10, school: 3, home: 9,
            hot: 3, warm: 6, cool: 10, cold: 10, rain: 8, snow: 9,
            spring: 6, summer: 3, fall: 10, winter: 10,
            party: 10, date: 10, concert: 10, casual: 4, formal: 10, nightout: 10
        }
    },

    {
        name: "Baccarat Rouge 540 Extrait de Parfum",
        brand: "Maison Francis Kurkdjian",
        gender: "unisex",
        image: null,
        description: "A richer and denser interpretation of Baccarat Rouge 540.",
        notes: "Bitter Almond • Saffron • Jasmine • Cedar • Musk",
        scores: {
            city: 10, beach: 3, outdoors: 4, restaurant: 10, school: 2, home: 9,
            hot: 2, warm: 4, cool: 10, cold: 10, rain: 9, snow: 10,
            spring: 3, summer: 1, fall: 10, winter: 10,
            party: 10, date: 10, concert: 10, casual: 3, formal: 10, nightout: 10
        }
    },

    {
        name: "Gentle Fluidity Silver",
        brand: "Maison Francis Kurkdjian",
        gender: "unisex",
        image: null,
        description: "A fresh aromatic fragrance with juniper and a clean musky character.",
        notes: "Juniper Berry • Nutmeg • Coriander • Musks • Amber Woods",
        scores: {
            city: 10, beach: 9, outdoors: 10, restaurant: 9, school: 9, home: 8,
            hot: 10, warm: 10, cool: 9, cold: 5, rain: 9, snow: 3,
            spring: 10, summer: 10, fall: 7, winter: 4,
            party: 8, date: 9, concert: 8, casual: 10, formal: 9, nightout: 8
        }
    },

    {
        name: "Gentle Fluidity Gold",
        brand: "Maison Francis Kurkdjian",
        gender: "unisex",
        image: null,
        description: "A soft musky amber fragrance with a warm elegant character.",
        notes: "Juniper Berry • Coriander • Nutmeg • Vanilla • Musk • Amber",
        scores: {
            city: 9, beach: 4, outdoors: 5, restaurant: 10, school: 4, home: 9,
            hot: 3, warm: 6, cool: 10, cold: 10, rain: 8, snow: 9,
            spring: 5, summer: 2, fall: 10, winter: 10,
            party: 9, date: 10, concert: 8, casual: 5, formal: 10, nightout: 10
        }
    },

    {
        name: "724",
        brand: "Maison Francis Kurkdjian",
        gender: "unisex",
        image: null,
        description: "A clean musky floral fragrance inspired by the energy of modern cities.",
        notes: "Bergamot • Aldehydes • Jasmine • White Musk • Sandalwood",
        scores: {
            city: 10, beach: 7, outdoors: 8, restaurant: 9, school: 9, home: 9,
            hot: 8, warm: 9, cool: 9, cold: 6, rain: 8, snow: 4,
            spring: 10, summer: 9, fall: 8, winter: 5,
            party: 8, date: 9, concert: 8, casual: 10, formal: 9, nightout: 8
        }
    },

    {
        name: "Aqua Universalis",
        brand: "Maison Francis Kurkdjian",
        gender: "unisex",
        image: null,
        description: "A bright clean citrus musk fragrance with a fresh elegant character.",
        notes: "Lemon • Bergamot • Lily-of-the-Valley • Musk",
        scores: {
            city: 10, beach: 10, outdoors: 10, restaurant: 8, school: 10, home: 9,
            hot: 10, warm: 10, cool: 8, cold: 3, rain: 9, snow: 2,
            spring: 10, summer: 10, fall: 6, winter: 2,
            party: 7, date: 8, concert: 7, casual: 10, formal: 8, nightout: 6
        }
    },

    {
        name: "Aqua Media Cologne Forte",
        brand: "Maison Francis Kurkdjian",
        gender: "unisex",
        image: null,
        description: "A vibrant citrus aromatic fragrance with a fresh green character.",
        notes: "Bergamot • Verbena • Sweet Pea • Matcha • Musk",
        scores: {
            city: 10, beach: 10, outdoors: 10, restaurant: 8, school: 10, home: 9,
            hot: 10, warm: 10, cool: 8, cold: 3, rain: 9, snow: 2,
            spring: 10, summer: 10, fall: 6, winter: 2,
            party: 8, date: 8, concert: 8, casual: 10, formal: 8, nightout: 7
        }
    },

    {
        name: "L'Homme À la rose",
        brand: "Maison Francis Kurkdjian",
        gender: "men",
        image: null,
        description: "A fresh modern rose fragrance with a crisp green character.",
        notes: "Grapefruit • Damask Rose • Centifolia Rose • Sage • Amberwood",
        scores: {
            city: 10, beach: 8, outdoors: 9, restaurant: 9, school: 8, home: 8,
            hot: 9, warm: 10, cool: 9, cold: 5, rain: 9, snow: 3,
            spring: 10, summer: 10, fall: 7, winter: 4,
            party: 8, date: 9, concert: 8, casual: 9, formal: 9, nightout: 8
        }
    },

    {
        name: "724 Eau de Parfum",
        brand: "Maison Francis Kurkdjian",
        gender: "unisex",
        image: null,
        description: "A luminous clean fragrance combining aldehydes, flowers and musks.",
        notes: "Aldehydes • Bergamot • Jasmine • White Musk • Sandalwood",
        scores: {
            city: 10, beach: 7, outdoors: 8, restaurant: 9, school: 9, home: 9,
            hot: 8, warm: 9, cool: 9, cold: 6, rain: 8, snow: 4,
            spring: 10, summer: 9, fall: 8, winter: 5,
            party: 8, date: 9, concert: 8, casual: 10, formal: 9, nightout: 8
        }
    },
       /* =================================================
       YVES SAINT LAURENT (YSL)
    ================================================= */

    {
        name: "Y Eau de Toilette",
        brand: "Yves Saint Laurent",
        gender: "men",
        image: null,
        description: "A fresh aromatic fragrance with a clean apple and woody character.",
        notes: "Apple • Ginger • Sage • Juniper • Cedar • Vetiver",
        scores: {
            city: 10, beach: 8, outdoors: 9, restaurant: 8, school: 9, home: 8,
            hot: 9, warm: 10, cool: 9, cold: 5, rain: 9, snow: 3,
            spring: 10, summer: 9, fall: 8, winter: 4,
            party: 9, date: 9, concert: 9, casual: 10, formal: 8, nightout: 9
        }
    },

    {
        name: "Y Eau de Parfum",
        brand: "Yves Saint Laurent",
        gender: "men",
        image: null,
        description: "A deeper aromatic fragrance combining fresh fruit with woods and tonka.",
        notes: "Apple • Ginger • Sage • Juniper • Amberwood • Tonka Bean",
        scores: {
            city: 10, beach: 6, outdoors: 8, restaurant: 10, school: 6, home: 8,
            hot: 5, warm: 8, cool: 10, cold: 9, rain: 9, snow: 6,
            spring: 8, summer: 6, fall: 10, winter: 8,
            party: 10, date: 10, concert: 10, casual: 8, formal: 9, nightout: 10
        }
    },

    {
        name: "Y Le Parfum",
        brand: "Yves Saint Laurent",
        gender: "men",
        image: null,
        description: "A darker woody interpretation of Y with a smooth sophisticated character.",
        notes: "Grapefruit • Ginger • Cedar • Tonka Bean • Patchouli",
        scores: {
            city: 10, beach: 4, outdoors: 6, restaurant: 10, school: 4, home: 8,
            hot: 3, warm: 6, cool: 10, cold: 10, rain: 9, snow: 8,
            spring: 6, summer: 3, fall: 10, winter: 10,
            party: 10, date: 10, concert: 9, casual: 6, formal: 10, nightout: 10
        }
    },

    {
        name: "MYSLF Eau de Parfum",
        brand: "Yves Saint Laurent",
        gender: "men",
        image: null,
        description: "A modern woody floral fragrance with a clean citrus opening.",
        notes: "Bergamot • Orange Blossom • Patchouli • Ambrofix",
        scores: {
            city: 10, beach: 7, outdoors: 8, restaurant: 9, school: 8, home: 8,
            hot: 7, warm: 9, cool: 9, cold: 6, rain: 8, snow: 4,
            spring: 10, summer: 8, fall: 8, winter: 5,
            party: 9, date: 10, concert: 9, casual: 10, formal: 9, nightout: 9
        }
    },

    {
        name: "MYSLF Le Parfum",
        brand: "Yves Saint Laurent",
        gender: "men",
        image: null,
        description: "A richer woody interpretation of MYSLF with warm resinous depth.",
        notes: "Black Pepper • Orange Blossom • Vanilla • Woods",
        scores: {
            city: 10, beach: 3, outdoors: 5, restaurant: 10, school: 3, home: 9,
            hot: 2, warm: 5, cool: 10, cold: 10, rain: 8, snow: 9,
            spring: 4, summer: 2, fall: 10, winter: 10,
            party: 10, date: 10, concert: 10, casual: 5, formal: 10, nightout: 10
        }
    },

    {
        name: "La Nuit de L'Homme Eau de Toilette",
        brand: "Yves Saint Laurent",
        gender: "men",
        image: null,
        description: "A smooth spicy aromatic fragrance known for its seductive evening character.",
        notes: "Cardamom • Lavender • Cedar • Vetiver",
        scores: {
            city: 10, beach: 3, outdoors: 5, restaurant: 10, school: 3, home: 9,
            hot: 3, warm: 6, cool: 10, cold: 9, rain: 8, snow: 7,
            spring: 6, summer: 3, fall: 10, winter: 9,
            party: 10, date: 10, concert: 10, casual: 6, formal: 9, nightout: 10
        }
    },

    {
        name: "La Nuit de L'Homme Bleu Électrique",
        brand: "Yves Saint Laurent",
        gender: "men",
        image: null,
        description: "A fresh spicy interpretation of La Nuit de L'Homme.",
        notes: "Cardamom • Ginger • Cedar • Lavender • Vetiver",
        scores: {
            city: 10, beach: 5, outdoors: 7, restaurant: 10, school: 5, home: 8,
            hot: 5, warm: 8, cool: 10, cold: 9, rain: 9, snow: 6,
            spring: 8, summer: 5, fall: 10, winter: 8,
            party: 10, date: 10, concert: 10, casual: 7, formal: 9, nightout: 10
        }
    },

    {
        name: "Libre Eau de Parfum",
        brand: "Yves Saint Laurent",
        gender: "women",
        image: null,
        description: "A modern floral fragrance balancing lavender, orange blossom and vanilla.",
        notes: "Lavender • Orange Blossom • Jasmine • Vanilla • Musk",
        scores: {
            city: 10, beach: 5, outdoors: 6, restaurant: 10, school: 6, home: 9,
            hot: 4, warm: 7, cool: 10, cold: 9, rain: 8, snow: 7,
            spring: 8, summer: 4, fall: 10, winter: 9,
            party: 10, date: 10, concert: 9, casual: 6, formal: 10, nightout: 10
        }
    },

    {
        name: "Libre Intense",
        brand: "Yves Saint Laurent",
        gender: "women",
        image: null,
        description: "A richer and warmer interpretation of Libre with vanilla and amber depth.",
        notes: "Lavender • Orange Blossom • Orchid • Vanilla • Tonka",
        scores: {
            city: 10, beach: 2, outdoors: 4, restaurant: 10, school: 2, home: 9,
            hot: 1, warm: 4, cool: 10, cold: 10, rain: 9, snow: 10,
            spring: 3, summer: 1, fall: 10, winter: 10,
            party: 10, date: 10, concert: 10, casual: 3, formal: 10, nightout: 10
        }
    },

    {
        name: "Libre Le Parfum",
        brand: "Yves Saint Laurent",
        gender: "women",
        image: null,
        description: "A warm spicy floral fragrance with a rich honey and vanilla character.",
        notes: "Saffron • Ginger • Orange Blossom • Lavender • Honey • Vanilla",
        scores: {
            city: 10, beach: 1, outdoors: 3, restaurant: 10, school: 1, home: 10,
            hot: 1, warm: 3, cool: 10, cold: 10, rain: 9, snow: 10,
            spring: 2, summer: 1, fall: 10, winter: 10,
            party: 10, date: 10, concert: 10, casual: 2, formal: 10, nightout: 10
        }
    },

    {
        name: "Black Opium Eau de Parfum",
        brand: "Yves Saint Laurent",
        gender: "women",
        image: null,
        description: "A sweet coffee vanilla fragrance with a warm sensual character.",
        notes: "Coffee • Pear • Orange Blossom • Vanilla • Cedar • Patchouli",
        scores: {
            city: 10, beach: 2, outdoors: 4, restaurant: 10, school: 2, home: 10,
            hot: 1, warm: 4, cool: 10, cold: 10, rain: 9, snow: 10,
            spring: 3, summer: 1, fall: 10, winter: 10,
            party: 10, date: 10, concert: 10, casual: 4, formal: 9, nightout: 10
        }
    },

    {
        name: "Black Opium Le Parfum",
        brand: "Yves Saint Laurent",
        gender: "women",
        image: null,
        description: "A rich gourmand version of Black Opium with a stronger vanilla character.",
        notes: "Coffee • Jasmine • Vanilla • Patchouli",
        scores: {
            city: 10, beach: 1, outdoors: 3, restaurant: 10, school: 1, home: 10,
            hot: 1, warm: 2, cool: 10, cold: 10, rain: 9, snow: 10,
            spring: 2, summer: 1, fall: 10, winter: 10,
            party: 10, date: 10, concert: 10, casual: 2, formal: 9, nightout: 10
        }
    },


    /* =================================================
       DIOR
    ================================================= */

    {
        name: "Sauvage Eau de Toilette",
        brand: "Dior",
        gender: "men",
        image: null,
        description: "A fresh spicy aromatic fragrance with a powerful versatile character.",
        notes: "Bergamot • Pepper • Lavender • Ambroxan • Cedar",
        scores: {
            city: 10, beach: 8, outdoors: 10, restaurant: 9, school: 8, home: 8,
            hot: 9, warm: 10, cool: 9, cold: 6, rain: 9, snow: 4,
            spring: 10, summer: 9, fall: 8, winter: 5,
            party: 10, date: 9, concert: 10, casual: 10, formal: 8, nightout: 10
        }
    },

    {
        name: "Sauvage Eau de Parfum",
        brand: "Dior",
        gender: "men",
        image: null,
        description: "A deeper and smoother interpretation of Sauvage with vanilla-like warmth.",
        notes: "Bergamot • Sichuan Pepper • Lavender • Vanilla • Ambroxan",
        scores: {
            city: 10, beach: 5, outdoors: 7, restaurant: 10, school: 5, home: 8,
            hot: 4, warm: 7, cool: 10, cold: 9, rain: 9, snow: 6,
            spring: 7, summer: 5, fall: 10, winter: 8,
            party: 10, date: 10, concert: 10, casual: 7, formal: 9, nightout: 10
        }
    },

    {
        name: "Sauvage Elixir",
        brand: "Dior",
        gender: "men",
        image: null,
        description: "A highly concentrated spicy woody fragrance with powerful projection.",
        notes: "Grapefruit • Cinnamon • Nutmeg • Lavender • Licorice • Sandalwood",
        scores: {
            city: 10, beach: 1, outdoors: 3, restaurant: 10, school: 1, home: 9,
            hot: 1, warm: 2, cool: 10, cold: 10, rain: 9, snow: 10,
            spring: 2, summer: 1, fall: 10, winter: 10,
            party: 10, date: 10, concert: 10, casual: 2, formal: 10, nightout: 10
        }
    },

    {
        name: "Dior Homme Intense",
        brand: "Dior",
        gender: "men",
        image: null,
        description: "A sophisticated iris fragrance with a smooth woody amber character.",
        notes: "Iris • Lavender • Pear • Ambrette • Cedar • Vetiver",
        scores: {
            city: 10, beach: 2, outdoors: 4, restaurant: 10, school: 2, home: 9,
            hot: 2, warm: 4, cool: 10, cold: 10, rain: 9, snow: 10,
            spring: 3, summer: 1, fall: 10, winter: 10,
            party: 9, date: 10, concert: 8, casual: 4, formal: 10, nightout: 10
        }
    },

    {
        name: "Dior Homme Parfum",
        brand: "Dior",
        gender: "men",
        image: null,
        description: "A rich luxurious iris and leather fragrance with deep woody character.",
        notes: "Iris • Leather • Sandalwood • Oud",
        scores: {
            city: 10, beach: 1, outdoors: 3, restaurant: 10, school: 1, home: 9,
            hot: 1, warm: 2, cool: 10, cold: 10, rain: 9, snow: 10,
            spring: 2, summer: 1, fall: 10, winter: 10,
            party: 9, date: 10, concert: 8, casual: 2, formal: 10, nightout: 10
        }
    },

    {
        name: "Dior Homme Sport",
        brand: "Dior",
        gender: "men",
        image: null,
        description: "A fresh citrus woody fragrance designed for energetic everyday wear.",
        notes: "Bergamot • Lemon • Aldehydes • Pink Pepper • Woods",
        scores: {
            city: 10, beach: 9, outdoors: 10, restaurant: 8, school: 10, home: 8,
            hot: 10, warm: 10, cool: 8, cold: 3, rain: 9, snow: 2,
            spring: 10, summer: 10, fall: 6, winter: 2,
            party: 8, date: 8, concert: 9, casual: 10, formal: 6, nightout: 7
        }
    },

    {
        name: "Fahrenheit Eau de Toilette",
        brand: "Dior",
        gender: "men",
        image: null,
        description: "A distinctive classic fragrance combining leather, woods and violet leaf.",
        notes: "Violet Leaf • Leather • Nutmeg • Cedar • Vetiver",
        scores: {
            city: 9, beach: 2, outdoors: 5, restaurant: 9, school: 3, home: 8,
            hot: 2, warm: 5, cool: 10, cold: 10, rain: 9, snow: 9,
            spring: 4, summer: 2, fall: 10, winter: 10,
            party: 8, date: 9, concert: 8, casual: 5, formal: 9, nightout: 9
        }
    },

    {
        name: "Miss Dior Eau de Parfum",
        brand: "Dior",
        gender: "women",
        image: null,
        description: "A modern floral fragrance with rose, peony and woody warmth.",
        notes: "Iris • Peony • Rose • Lily-of-the-Valley • Vanilla • Woods",
        scores: {
            city: 10, beach: 6, outdoors: 7, restaurant: 10, school: 7, home: 9,
            hot: 6, warm: 8, cool: 9, cold: 7, rain: 8, snow: 5,
            spring: 10, summer: 8, fall: 8, winter: 6,
            party: 9, date: 10, concert: 8, casual: 8, formal: 10, nightout: 9
        }
    },

    {
        name: "J'adore Eau de Parfum",
        brand: "Dior",
        gender: "women",
        image: null,
        description: "A classic elegant floral fragrance with a luxurious feminine character.",
        notes: "Ylang-Ylang • Jasmine • Rose • Tuberose • Violet",
        scores: {
            city: 10, beach: 6, outdoors: 7, restaurant: 10, school: 7, home: 9,
            hot: 6, warm: 8, cool: 9, cold: 7, rain: 8, snow: 5,
            spring: 10, summer: 8, fall: 8, winter: 6,
            party: 9, date: 10, concert: 8, casual: 7, formal: 10, nightout: 9
        }
    },

    {
        name: "Dior Addict Eau de Parfum",
        brand: "Dior",
        gender: "women",
        image: null,
        description: "A rich vanilla floral fragrance with a warm sensual character.",
        notes: "Mandarin Leaf • Jasmine • Orange Blossom • Bourbon Vanilla",
        scores: {
            city: 10, beach: 2, outdoors: 4, restaurant: 10, school: 2, home: 10,
            hot: 1, warm: 4, cool: 10, cold: 10, rain: 9, snow: 10,
            spring: 3, summer: 1, fall: 10, winter: 10,
            party: 10, date: 10, concert: 10, casual: 3, formal: 9, nightout: 10
        }
    },

    {
        name: "Hypnotic Poison Eau de Toilette",
        brand: "Dior",
        gender: "women",
        image: null,
        description: "A warm almond vanilla fragrance with a distinctive seductive character.",
        notes: "Bitter Almond • Jasmine • Vanilla • Musk",
        scores: {
            city: 9, beach: 1, outdoors: 3, restaurant: 10, school: 1, home: 10,
            hot: 1, warm: 2, cool: 10, cold: 10, rain: 9, snow: 10,
            spring: 2, summer: 1, fall: 10, winter: 10,
            party: 10, date: 10, concert: 10, casual: 2, formal: 8, nightout: 10
        }
    },

    {
        name: "Dioriviera",
        brand: "Dior",
        gender: "women",
        image: null,
        description: "A bright floral fragrance inspired by the atmosphere of the French Riviera.",
        notes: "Rose • Fig • Rose Water",
        scores: {
            city: 9, beach: 10, outdoors: 10, restaurant: 8, school: 8, home: 8,
            hot: 10, warm: 10, cool: 7, cold: 2, rain: 7, snow: 1,
            spring: 10, summer: 10, fall: 5, winter: 1,
            party: 9, date: 9, concert: 9, casual: 10, formal: 6, nightout: 8
        }
    },

    {
        name: "Sauvage Parfum",
        brand: "Dior",
        gender: "men",
        image: null,
        description: "A smoother and warmer interpretation of Sauvage with creamy sandalwood.",
        notes: "Mandarin • Bergamot • Sandalwood • Tonka Bean • Vanilla",
        scores: {
            city: 10, beach: 4, outdoors: 6, restaurant: 10, school: 4, home: 9,
            hot: 3, warm: 6, cool: 10, cold: 10, rain: 9, snow: 8,
            spring: 5, summer: 2, fall: 10, winter: 10,
            party: 10, date: 10, concert: 10, casual: 5, formal: 10, nightout: 10
        }
    }
];



/* =====================================================
   USER SELECTIONS
===================================================== */

const selections = {
    gender: "men",
    place: null,
    weather: null,
    season: null,
    entertainment: null
};


/* =====================================================
   BUTTON SYSTEM
===================================================== */

function setupButtons(className, selectionName) {

    const buttons = document.querySelectorAll(
        "." + className
    );

    buttons.forEach(function(button) {

        button.addEventListener("click", function() {

            buttons.forEach(function(otherButton) {
                otherButton.classList.remove("active");
            });

            button.classList.add("active");

            selections[selectionName] =
                button.dataset.value;

        });

    });
}


/* =====================================================
   INITIALIZE BUTTON GROUPS
===================================================== */

setupButtons("gender-option", "gender");
setupButtons("place-option", "place");
setupButtons("weather-option", "weather");
setupButtons("season-option", "season");
setupButtons("entertainment-option", "entertainment");


/* =====================================================
   START BUTTON
===================================================== */

document
    .querySelector(".start-button")
    .addEventListener("click", function() {

        document
            .querySelector(".finder")
            .scrollIntoView({
                behavior: "smooth"
            });

    });


/* =====================================================
   FIND MY MATCH
===================================================== */

document
    .querySelector(".find-button")
    .addEventListener("click", function() {

        if (
            !selections.gender ||
            !selections.place ||
            !selections.weather ||
            !selections.season ||
            !selections.entertainment
        ) {

            alert(
                "Please select an answer for every question."
            );

            return;
        }


        const matchingFragrances =
            fragrances.filter(function(fragrance) {

                return fragrance.gender ===
                    selections.gender;

            });


        const rankedFragrances =
            matchingFragrances.map(function(fragrance) {

                let total = 0;

                total += fragrance.scores[selections.place];
                total += fragrance.scores[selections.weather];
                total += fragrance.scores[selections.season];
                total += fragrance.scores[selections.entertainment];


                const percentage =
                    Math.round(
                        (total / 40) * 100
                    );


                return {
                    fragrance: fragrance,
                    percentage: percentage
                };

            });


        rankedFragrances.sort(
            function(a, b) {
                return b.percentage - a.percentage;
            }
        );


        displayResults(
            rankedFragrances.slice(0, 5)
        );

    });


/* =====================================================
   DISPLAY RESULTS
===================================================== */

function displayResults(results) {

    const container =
        document.querySelector("#results-container");

    container.innerHTML = "";


    results.forEach(function(result, index) {

        const fragrance =
            result.fragrance;

        const card =
            document.createElement("div");

        card.className = "result-card";


        card.innerHTML = `

            <div class="result-number">
                #${index + 1}
            </div>

            <div class="result-info">

                <div class="type">
                    ${fragrance.brand}
                    •
                    ${fragrance.gender === "men"
                        ? "Men's"
                        : "Women's"}
                </div>

                <h3>
                    ${fragrance.name}
                </h3>

                <p>
                    ${fragrance.description}
                </p>

                <div class="notes">

                    <strong>
                        Key notes:
                    </strong>

                    ${fragrance.notes}

                </div>

            </div>

            <div class="match-score">

                <strong>
                    ${result.percentage}%
                </strong>

                <span>
                    MATCH
                </span>

            </div>
        `;


        container.appendChild(card);

    });


    document
        .querySelector("#result-description")
        .textContent =
        "Your matches were ranked using your location, weather, season, and activity.";


    document
        .querySelector(".results")
        .classList.remove("hidden");


    document
        .querySelector(".results")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =====================================================
   START OVER
===================================================== */

document
    .querySelector(".again-button")
    .addEventListener("click", function() {

        selections.place = null;
        selections.weather = null;
        selections.season = null;
        selections.entertainment = null;


        document
            .querySelectorAll(
                ".place-option, .weather-option, .season-option, .entertainment-option"
            )
            .forEach(function(button) {

                button.classList.remove("active");

            });


        document
            .querySelectorAll(".gender-option")
            .forEach(function(button) {

                button.classList.remove("active");

            });


        const firstGenderButton =
            document.querySelector(".gender-option");

        if (firstGenderButton) {
            firstGenderButton.classList.add("active");
        }


        selections.gender = "men";


        document
            .querySelector(".results")
            .classList.add("hidden");


        document
            .querySelector(".finder")
            .scrollIntoView({
                behavior: "smooth"
            });

    });
