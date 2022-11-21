window.addEventListener("load", function() {

    const lockBox = document.getElementById("lockBox");
    lockBox.addEventListener("click", function () {
        const article = document.querySelector("article");
        article.classList.add("lockText-on");
        article.classList.remove("lockText-off");

    });
});