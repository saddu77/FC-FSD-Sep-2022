// const scriptHTML = `<script>alert("Alert from innerHTML");</script>`;
const main = document.getElementById("main");
const externalHTML = `<img src='1' onerror='alert("Error loading image")'>`;
main.innerHTML = externalHTML;