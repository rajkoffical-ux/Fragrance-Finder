# Valentino Fragrance Finder — `script.js`

```javascript
/*
    VALENTINO FRAGRANCE FINDER

    Each fragrance has scores from 1-10 for:
    - places
    - weather
    - seasons
    - entertainment / occasions

    The recommendation engine compares the user's selections
    against those scores.
*/


const fragrances = [

    /* =========================
       MEN
    ========================= */

    {
        name: "Born in Roma Uomo",
        gender: "men",

        description:
            "A modern aromatic fragrance with violet leaf, sage and vetiver.",

        notes:
            "Violet Leaf • Sage • Vetiver",

        scores: {
            city: 9,
            beach: 7,
            forest: 8,
            restaurant: 8,
            school: 9,
            home: 7,

            hot: 8,
            warm: 9,
            cool: 8,
            cold: 5,
            rain: 7,
            snow: 4,

            spring: 9,
            summer: 9,
            fall: 8,
            winter: 5,

            party: 8,
            date: 8,
            concert: 9,
            casual: 9,
            formal: 7,
            nightout: 9
        }
    },


    {
        name: "Born in Roma Uomo Intense",
        gender: "men",

        description:
            "A deeper and more intense interpretation of Born in Roma.",

        notes:
            "Vanilla • Lavandin • Vetiver",

        scores: {
            city: 9,
            beach: 4,
            forest: 7,
            restaurant: 9,
            school: 4,
            home: 8,

            hot: 4,
            warm: 6,
            cool: 9,
            cold: 10,
            rain: 8,
            snow: 10,

            spring: 6,
            summer: 4,
            fall: 10,
            winter: 10,

            party: 9,
            date: 10,
            concert: 8,
            casual: 6,
            formal: 9,
            nightout: 10
        }
    },


    {
        name: "Born in Roma Uomo Coral Fantasy",
        gender: "men",

        description:
            "A colorful and energetic fragrance built around apple, sage and tobacco.",

        notes:
            "Red Apple • Sage • Tobacco",

        scores: {
            city: 10,
            beach: 7,
            forest: 5,
            restaurant: 8,
            school: 7,
            home: 6,

            hot: 7,
            warm: 9,
            cool: 8,
            cold: 5,
            rain: 6,
            snow: 3,

            spring: 8,
            summer: 9,
            fall: 9,
            winter: 5,

            party: 10,
            date: 9,
            concert: 10,
            casual: 8,
            formal: 7,
            nightout: 10
        }
    },


    {
        name: "Born in Roma Uomo Green Stravaganza",
        gender: "men",

        description:
            "A fresh aromatic fragrance combining Calabrian bergamot, coffee and vetiver.",

        notes:
            "Calabrian Bergamot • Coffee • Vetiver",

        scores: {
            city: 9,
            beach: 9,
            forest: 9,
            restaurant: 7,
            school: 8,
            home: 7,

            hot: 10,
            warm: 10,
            cool: 8,
            cold: 4,
            rain: 7,
            snow: 3,

            spring: 10,
            summer: 10,
            fall: 7,
            winter: 3,

            party: 9,
            date: 8,
            concert: 9,
            casual: 10,
            formal: 5,
            nightout: 8
        }
    },


    {
        name: "Born in Roma Uomo Extradose",
        gender: "men",

        description:
            "An intensified fougère woody-ambery fragrance designed for Roman nights.",

        notes:
            "Spice Blend • Lavandin • Vetiver",

        scores: {
            city: 9,
            beach: 4,
            forest: 6,
            restaurant: 9,
            school: 3,
            home: 8,

            hot: 3,
            warm: 5,
            cool: 9,
            cold: 10,
            rain: 7,
            snow: 9,

            spring: 5,
            summer: 3,
            fall: 10,
            winter: 10,

            party: 10,
            date: 10,
            concert: 9,
            casual: 5,
            formal: 9,
            nightout: 10
        }
    },


    {
        name: "Born in Roma Uomo Purple Melancholia",
        gender: "men",

        description:
            "A darker interpretation of Born in Roma with cardamom, lavandin and coconut.",

        notes:
            "Cardamom • Lavandin • Coconut",

        scores: {
            city: 9,
            beach: 6,
            forest: 7,
            restaurant: 9,
            school: 5,
            home: 8,

            hot: 5,
            warm: 7,
            cool: 9,
            cold: 9,
            rain: 8,
            snow: 8,

            spring: 6,
            summer: 5,
            fall: 10,
            winter: 9,

            party: 9,
            date: 10,
            concert: 9,
            casual: 7,
            formal: 8,
            nightout: 10
        }
    },


    /* =========================
       WOMEN
    ========================= */

    {
        name: "Born in Roma Donna",
        gender: "women",

        description:
            "A feminine floral fragrance with jasmine, cashmeran and vanilla.",

        notes:
            "Sambac Jasmine • Cashmeran • Vanilla",

        scores: {
            city: 9,
            beach: 7,
            forest: 6,
            restaurant: 9,
            school: 8,
            home: 8,

            hot: 7,
            warm: 9,
            cool: 8,
            cold: 6,
            rain: 7,
            snow: 5,

            spring: 10,
            summer: 8,
            fall: 8,
            winter: 6,

            party: 9,
            date: 10,
            concert: 8,
            casual: 8,
            formal: 9,
            nightout: 9
        }
    },


    {
        name: "Born in Roma Donna Intense",
        gender: "women",

        description:
            "A richer interpretation built around vanilla, jasmine and benzoin.",

        notes:
            "Vanilla • Jasmine • Benzoin",

        scores: {
            city: 9,
            beach: 3,
            forest: 6,
            restaurant: 10,
            school: 4,
            home: 8,

            hot: 3,
            warm: 6,
            cool: 9,
            cold: 10,
            rain: 8,
            snow: 10,

            spring: 6,
            summer: 3,
            fall: 10,
            winter: 10,

            party: 9,
            date: 10,
            concert: 8,
            casual: 5,
            formal: 10,
            nightout: 10
        }
    },


    {
        name: "Born in Roma Donna Coral Fantasy",
        gender: "women",

        description:
            "A bright floral fragrance with orange, rose and jasmine grandiflorum.",

        notes:
            "Orange • Rose • Jasmine Grandiflorum",

        scores: {
            city: 9,
            beach: 9,
            forest: 7,
            restaurant: 8,
            school: 8,
            home: 7,

            hot: 9,
            warm: 10,
            cool: 8,
            cold: 5,
            rain: 6,
            snow: 3,

            spring: 10,
            summer: 10,
            fall: 7,
            winter: 4,

            party: 10,
            date: 9,
            concert: 10,
            casual: 9,
            formal: 7,
            nightout: 9
        }
    },


    {
        name: "Born in Roma Donna Green Stravaganza",
        gender: "women",

        description:
            "A fresh floral scent featuring Lapsang Souchong tea, jasmine absolute and vanilla.",

        notes:
            "Lapsang Souchong Tea • Jasmine Absolute • Vanilla",

        scores: {
            city: 8,
            beach: 8,
            forest: 10,
            restaurant: 8,
            school: 8,
            home: 7,

            hot: 9,
            warm: 10,
            cool: 8,
            cold: 5,
            rain: 8,
            snow: 3,

            spring: 10,
            summer: 10,
            fall: 7,
            winter: 4,

            party: 8,
            date: 8,
            concert: 8,
            casual: 10,
            formal: 6,
            nightout: 8
        }
    },


    {
        name: "Born in Roma Donna Extradose",
        gender: "women",

        description:
            "A highly concentrated fragrance combining cassis, rhum and vanilla.",

        notes:
            "Cassis Accord • Rhum Accord • Vanilla Extract",

        scores: {
            city: 9,
            beach: 3,
            forest: 5,
            restaurant: 10,
            school: 2,
            home: 8,

            hot: 2,
            warm: 5,
            cool: 9,
            cold: 10,
            rain: 8,
            snow: 9,

            spring: 5,
            summer: 2,
            fall: 10,
            winter: 10,

            party: 10,
            date: 10,
            concert: 9,
            casual: 4,
            formal: 10,
            nightout: 10
        }
    },


    {
        name: "Born in Roma Donna Purple Melancholia",
        gender: "women",

        description:
            "A darker floral-gourmand interpretation with plum, osmanthus and vanilla extract.",

        notes:
            "Plum • Osmanthus • Vanilla Extract",

        scores: {
            city: 9,
            beach: 5,
            forest: 7,
            restaurant: 10,
            school: 4,
            home: 8,

            hot: 4,
            warm: 6,
            cool: 9,
            cold: 10,
            rain: 8,
            snow: 9,

            spring: 6,
            summer: 4,
            fall: 10,
            winter: 10,

            party: 9,
            date: 10,
            concert: 9,
            casual: 6,
            formal: 10,
            nightout: 10
        }
    }

];


/* =================================
   USER SELECTIONS
================================= */

const selections = {
    gender: "men",
    place: null,
    weather: null,
    season: null,
    entertainment: null
};


/* =================================
   OPTION BUTTONS
================================= */

document.querySelectorAll(".gender-option").forEach(button => {

    button.addEventListener("click", () => {

        document.querySelectorAll(".gender-option")
            .forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        selections.gender = button.dataset.value;
    });

});


function setupOptionGroup(className, property) {

    document.querySelectorAll("." + className).forEach(button => {

        button.addEventListener("click", () => {

            document.querySelectorAll("." + className)
                .forEach(btn => btn.classList.remove("active"));

            button.classList.add("active");

            selections[property] = button.dataset.value;

        });

    });

}


setupOptionGroup("place-option", "place");

setupOptionGroup("weather-option", "weather");

setupOptionGroup("season-option", "season");

setupOptionGroup("entertainment-option", "entertainment");


/* =================================
   FIND FRAGRANCE
================================= */

function findFragrance() {

    if (
        !selections.gender ||
        !selections.place ||
        !selections.weather ||
        !selections.season ||
        !selections.entertainment
    ) {

        alert("Please answer every question first.");

        return;
    }


    const matchingFragrances = fragrances
        .filter(fragrance =>
            fragrance.gender === selections.gender
        );


    const ranked = matchingFragrances.map(fragrance => {

        let total = 0;

        total += fragrance.scores[selections.place];

        total += fragrance.scores[selections.weather];

        total += fragrance.scores[selections.season];

        total += fragrance.scores[selections.entertainment];


        /*
            Maximum score = 40.

            Convert to percentage.
        */

        const percentage = Math.round(
            (total / 40) * 100
        );


        return {
            ...fragrance,
            percentage: percentage
        };

    });


    ranked.sort(
        (a, b) => b.percentage - a.percentage
    );


    showResults(ranked.slice(0, 5));
}


/* =================================
   DISPLAY RESULTS
================================= */

function showResults(results) {

    const container =
        document.getElementById("results-container");

    container.innerHTML = "";


    results.forEach((fragrance, index) => {

        const card = document.createElement("div");

        card.className = "result-card";


        card.innerHTML = `

            <div class="result-number">
                #${index + 1}
            </div>

            <div class="result-info">

                <div class="type">
                    Valentino
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
                    <strong>Key notes:</strong>
                    ${fragrance.notes}
                </div>

            </div>

            <div class="match-score">

                <strong>
                    ${fragrance.percentage}%
                </strong>

                <span>
                    MATCH
                </span>

            </div>

        `;


        container.appendChild(card);

    });


    document.getElementById("result-description").textContent =
        `Based on your ${selections.place}, ${selections.weather} weather, ${selections.season} season, and ${selections.entertainment} plans.`;


    document
        .getElementById("results")
        .classList.remove("hidden");


    document
        .getElementById("results")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* =================================
   RESET
================================= */

function resetFinder() {

    selections.place = null;
    selections.weather = null;
    selections.season = null;
    selections.entertainment = null;


    document.querySelectorAll(".option")
        .forEach(button => {

            if (
                !button.classList.contains("gender-option")
            ) {
                button.classList.remove("active");
            }

        });


    document
        .getElementById("results")
        .classList.add("hidden");


    scrollToFinder();
}


/* =================================
   SCROLL
================================= */

function scrollToFinder() {

    document
        .getElementById("finder")
        .scrollIntoView({
            behavior: "smooth"
        });

}
```
