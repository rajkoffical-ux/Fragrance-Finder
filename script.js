/* =====================================================
   FRAGRANCE DATABASE
   Add more fragrances here later.
===================================================== */

const fragrances = [

    /* =========================
       MEN
    ========================= */

    {
        name: "Born in Roma Uomo",
        gender: "men",

        description:
            "A modern aromatic fragrance with a fresh, woody character.",

        notes:
            "Violet Leaf • Sage • Vetiver",

        scores: {
            city: 9,
            beach: 7,
            outdoors: 8,
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
            "A deeper, warmer fragrance that works especially well in cooler weather and at night.",

        notes:
            "Vanilla • Lavandin • Vetiver",

        scores: {
            city: 9,
            beach: 4,
            outdoors: 7,
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
            "A colorful and energetic fragrance with a fruity, aromatic character.",

        notes:
            "Red Apple • Sage • Tobacco",

        scores: {
            city: 10,
            beach: 7,
            outdoors: 6,
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
            "A fresh aromatic fragrance with a bright green character that suits warm weather.",

        notes:
            "Calabrian Bergamot • Coffee • Vetiver",

        scores: {
            city: 9,
            beach: 9,
            outdoors: 10,
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
        name: "Born in Roma Uomo Yellow Dream",
        gender: "men",

        description:
            "A bright, clean and versatile fragrance that works well for daytime and warmer conditions.",

        notes:
            "Bergamot • Ginger • Cedar",

        scores: {
            city: 9,
            beach: 8,
            outdoors: 8,
            restaurant: 7,
            school: 10,
            home: 8,

            hot: 9,
            warm: 10,
            cool: 8,
            cold: 5,
            rain: 7,
            snow: 4,

            spring: 10,
            summer: 10,
            fall: 7,
            winter: 5,

            party: 8,
            date: 8,
            concert: 8,
            casual: 10,
            formal: 6,
            nightout: 7
        }
    },


    /* =========================
       WOMEN
    ========================= */

    {
        name: "Born in Roma Donna",
        gender: "women",

        description:
            "A modern floral fragrance with a sweet, elegant and versatile character.",

        notes:
            "Jasmine • Cashmeran • Vanilla",

        scores: {
            city: 9,
            beach: 7,
            outdoors: 6,
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
            "A richer and warmer interpretation designed for evenings and cooler conditions.",

        notes:
            "Vanilla • Jasmine • Benzoin",

        scores: {
            city: 9,
            beach: 3,
            outdoors: 6,
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
            "A bright floral fragrance that fits warm weather, social events and daytime.",

        notes:
            "Orange • Rose • Jasmine",

        scores: {
            city: 9,
            beach: 9,
            outdoors: 8,
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
            "A fresh floral fragrance with a green, airy character suited to warm conditions.",

        notes:
            "Tea • Jasmine • Vanilla",

        scores: {
            city: 8,
            beach: 8,
            outdoors: 10,
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
        name: "Born in Roma Donna Yellow Dream",
        gender: "women",

        description:
            "A bright and fresh fragrance that works well during the day and in warmer seasons.",

        notes:
            "Lemon • Rose • Musk",

        scores: {
            city: 9,
            beach: 9,
            outdoors: 8,
            restaurant: 7,
            school: 9,
            home: 8,

            hot: 10,
            warm: 10,
            cool: 8,
            cold: 5,
            rain: 7,
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
            nightout: 7
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

            /* Remove active state from this group */

            buttons.forEach(function(otherButton) {

                otherButton.classList.remove("active");

            });


            /* Add active state to clicked button */

            button.classList.add("active");


            /* Save user's choice */

            selections[selectionName] =
                button.dataset.value;

        });

    });

}


/* =====================================================
   INITIALIZE ALL BUTTON GROUPS
===================================================== */

setupButtons(
    "gender-option",
    "gender"
);

setupButtons(
    "place-option",
    "place"
);

setupButtons(
    "weather-option",
    "weather"
);

setupButtons(
    "season-option",
    "season"
);

setupButtons(
    "entertainment-option",
    "entertainment"
);


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

        /* Make sure every question has an answer */

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


        /* Find fragrances for selected gender */

        const matchingFragrances =
            fragrances.filter(function(fragrance) {

                return fragrance.gender ===
                    selections.gender;

            });


        /* Calculate a score for every fragrance */

        const rankedFragrances =
            matchingFragrances.map(function(fragrance) {

                let total = 0;


                total +=
                    fragrance.scores[
                        selections.place
                    ];


                total +=
                    fragrance.scores[
                        selections.weather
                    ];


                total +=
                    fragrance.scores[
                        selections.season
                    ];


                total +=
                    fragrance.scores[
                        selections.entertainment
                    ];


                /*

                   Four categories.

                   Maximum:
                   10 + 10 + 10 + 10 = 40

                   Convert to percentage.

                */

                const percentage =
                    Math.round(
                        (total / 40) * 100
                    );


                return {

                    fragrance: fragrance,

                    percentage: percentage

                };

            });


        /* Highest scores first */

        rankedFragrances.sort(
            function(a, b) {

                return b.percentage -
                    a.percentage;

            }
        );


        /* Show the top 5 */

        displayResults(
            rankedFragrances.slice(0, 5)
        );

    });


/* =====================================================
   DISPLAY RESULTS
===================================================== */

function displayResults(results) {

    const container =
        document.querySelector(
            "#results-container"
        );


    /* Clear previous results */

    container.innerHTML = "";


    results.forEach(function(result, index) {

        const fragrance =
            result.fragrance;


        const card =
            document.createElement("div");


        card.className =
            "result-card";


        card.innerHTML = `

            <div class="result-number">
                #${index + 1}
            </div>


            <div class="result-info">

                <div class="type">
                    ${fragrance.gender === "men"
                        ? "Men's Fragrance"
                        : "Women's Fragrance"}
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


    /* Update description */

    document.querySelector(
        "#result-description"
    ).textContent =
        "These fragrances were ranked using your location, weather, season, and plans.";


    /* Show results */

    document
        .querySelector(".results")
        .classList.remove("hidden");


    /* Scroll to results */

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

        /* Reset selections */

        selections.place = null;
        selections.weather = null;
        selections.season = null;
        selections.entertainment = null;


        /* Remove selections from buttons */

        document
            .querySelectorAll(
                ".place-option, .weather-option, .season-option, .entertainment-option"
            )
            .forEach(function(button) {

                button.classList.remove(
                    "active"
                );

            });


        /* Reset gender to men's */

        document
            .querySelectorAll(
                ".gender-option"
            )
            .forEach(function(button) {

                button.classList.remove(
                    "active"
                );

            });


        const firstGenderButton =
            document.querySelector(
                ".gender-option"
            );


        if (firstGenderButton) {

            firstGenderButton.classList.add(
                "active"
            );

        }


        selections.gender = "men";


        /* Hide results */

        document
            .querySelector(".results")
            .classList.add("hidden");


        /* Return to finder */

        document
            .querySelector(".finder")
            .scrollIntoView({
                behavior: "smooth"
            });

    });
