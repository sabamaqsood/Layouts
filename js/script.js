


function toggleNewsletter() {
    const newsletterBox = document.getElementById('newsletterBox');
  
    if (newsletterBox.classList.contains('visible')) {
  
      newsletterBox.classList.remove('visible');
      setTimeout(() => {
        newsletterBox.style.display = 'none'; 
      }, 300); 
    } else {
    
      newsletterBox.style.display = 'block';
      setTimeout(() => {
        newsletterBox.classList.add('visible');
      }, 0); 
    }
  }

  let cookies_modal;
window.addEventListener("load", () => {
    let translator = document.getElementsByClassName("gt-current-lang")[0].firstElementChild;
    translator.setAttribute("width", "33px");
    translator.setAttribute("height", "24.75px");

    cookies_modal = document.getElementsByClassName("cookie-alert")[0]

    if (!getCookie("consent") && !getCookie("analyticsData") && !getCookie("Rejected")) {
        cookies_modal.classList.add("show_cookie");
    }
    let modal_open_btn = document.getElementsByClassName("CustomModalSubs")[0];

    setTimeout(() => {
        if (!getCookie("Item_showes")) {
            modal_open_btn.click();
            setSessionCookie("Item_showes", "YES");
        }
    }, 5000)
})

function acceptCookies(e) {
    if(!getCookie("consent") && !getCookie("analyticsData") && e == 1){
    setSessionCookie("consent", "true");
    setSessionCookie("analyticsData", JSON.stringify({ pageViews: 1000 }));
    cookies_modal.classList.remove("show_cookie");
    }else if(!getCookie("consent") && !getCookie("analyticsData") && e==0)
    {
        cookies_modal.classList.remove("show_cookie");
        setSessionCookie("Rejected", 'True');
    }
}


function setSessionCookie(name, value) {
    document.cookie = `${name}=${encodeURIComponent(value)}; path=/`;
}

function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
}

const searchIcon = document.getElementById("search-icon");
const searchCard = document.getElementById("search-card");

searchIcon.addEventListener("click", () => {
    searchCard.classList.toggle("d-none");
});


function search(event) {
    const val = event.target; // Input field
    const searchResponse = val.parentElement.nextElementSibling; // Get the response div

    if (val.value.trim().length > 0) {
        searchResponse.classList.remove("d-none"); // Show the response div
        searchResponse.classList.add("d-block");

        // Add a one-time event listener to detect clicks outside the input and response area
        setTimeout(() => {
            document.addEventListener(
                "click",
                (e) => {
                    if (
                        !val.parentElement.contains(e.target) && // Exclude input and its parent
                        !searchResponse.contains(e.target)      // Exclude the search response itself
                    ) {
                        searchResponse.classList.remove("d-block"); // Hide the response div
                        searchResponse.classList.add("d-none");
                    }
                },
                { once: true } // Ensure the listener runs only once
            );
        }, 200); // Delay for smoother user experience
    } else {
        // If input is empty, hide the response div
        searchResponse.classList.remove("d-block");
        searchResponse.classList.add("d-none");
    }
}

// Attach the event listener to the search input
const searchInput = document.querySelector("input[type='search']");
searchInput.addEventListener("keyup", search);

// ----------------------------btnscroll--------------------------

const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function(){
  $("html, body").animate({ scrollTop:0 }, "slow");
})
