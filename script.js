document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript is connected and working!");

    // Example: Alert when a link is clicked
    const links = document.querySelectorAll(".link");
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            alert(`You clicked on ${this.textContent}`);
        });
    });
});
