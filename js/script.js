function search(event) {
    const val = event.target;
    const searchResponse = val.parentElement.nextElementSibling.classList;            

    if (val.value.trim().length > 0) {
        if (searchResponse.contains("d-none")) {
            searchResponse.remove("d-none");
            setTimeout(() => {
                document.addEventListener(
                    "click",
                    (e) => {
                        if (
                            !val.nextElementSibling.contains(e.target) &&
                            e.target !== val
                        ) {
                            searchResponse.add("d-none");
                        }
                    },
                    { once: true }
                );
            }, 200);
        }
    } else {
        searchResponse.add("d-none");
    }
}

const searchInput = document.querySelector("input[type='search']");
searchInput.addEventListener("keyup", search);


   
var splides = document.querySelectorAll('.splide');


splides.forEach(function (splideElement) {
    var splide = new Splide(splideElement, {
        perPage: 3,
        rewind: true,
        height: 600,
        gap: 20,

        breakpoints: {
            1400: {
                perPage: 2,
                // height: 600,
            },
            768: {
                pagination: true,
                perPage: 1,
            },
            575: {
                pagination: true,
                perPage: 1,
            }
        }
    });
    splide.mount();
});