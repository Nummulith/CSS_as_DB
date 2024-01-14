// Getting css parameter from URL
const urlParams = new URLSearchParams(window.location.search);
const cssStyle = urlParams.get("css");

// Setting CSS file depending on the passed parameter
const cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.href = `./css/dimensions/${cssStyle}.css`;
document.head.appendChild(cssLink);
