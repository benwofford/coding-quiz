function startQuiz() {
    var moveSection1 = document.getElementById("#section-1");
    if (moveSection1.style.display === "none") {
        moveSection1.style.display = "block";
    } else {
        moveSection1.style.display = "none";
    }
}