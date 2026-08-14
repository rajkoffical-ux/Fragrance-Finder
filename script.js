const selections = {
    gender: "men",
    place: null,
    weather: null,
    season: null,
    entertainment: null
};


/* =========================
   BUTTON SELECTION
========================= */

function setupButtons(className, selection) {
    const buttons = document.querySelectorAll("." + className);

    buttons.forEach(function(button) {

        button.addEventListener("click", function() {

            buttons.forEach(function(otherButton) {
                otherButton.classList.remove("active");
            });

            button.classList.add("active");

            selections[selection] = button.dataset.value;

            console.log(selection + ": " + button.dataset.value);
        });

    });
}


setupButtons("gender-option", "gender");
setupButtons("place-option", "place");
setupButtons("weather-option", "weather");
setupButtons("season-option", "season");
setupButtons("entertainment-option", "entertainment");


/* =========================
   START BUTTON
========================= */

document
    .querySelector(".start-button")
    .addEventListener("click", function() {

        document
            .querySelector(".finder")
            .scrollIntoView({
                behavior: "smooth"
            });

    });


/* =========================
   FIND BUTTON
========================= */

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

            alert("Please select an answer for every question.");

            return;
        }


        document
            .querySelector(".results")
            .classList.remove("hidden");


        document
            .querySelector("#result-description")
            .textContent =
                "Your fragrance matches are being calculated from your selections.";


        document
            .querySelector(".results")
            .scrollIntoView({
                behavior: "smooth"
            });

    });


/* =========================
   START OVER
========================= */

document
    .querySelector(".again-button")
    .addEventListener("click", function() {

        selections.place = null;
        selections.weather = null;
        selections.season = null;
        selections.entertainment = null;


        document
            .querySelectorAll(".option")
            .forEach(function(button) {

                button.classList.remove("active");

            });


        document
            .querySelector(".gender-option")
            .classList.add("active");


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
