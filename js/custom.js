


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

window.gtranslateSettings = {
    default_language: "en",
    languages: [
      "en",
      "it",
      "nl",
      "de",
      "fr",
      "da",
      "pt",
      "es",
      "ar",
      "ms",
      "zh-CN",
    ],
    wrapper_selector: ".gtranslate_wrapper",
  };