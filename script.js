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
