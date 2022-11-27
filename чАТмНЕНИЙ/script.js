AOS.init({
    duration: 900,
    once:false,
    
});

let switchMode = document.getElementById("switchMode");

switchMode.onclick = function() {
    let theme = document.getElementById("theme");
    
    if (theme.getAttribute("href") == "whitemain.css") {
        theme.href = "darkmain.css";
    } else {
        theme.href = "whitemain.css";
    }
}