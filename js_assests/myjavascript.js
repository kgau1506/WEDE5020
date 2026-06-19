lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'fadeDuration': 300,
})

function searchProducts() {
    let input = 
    document.getElementById("searchInput")
    .ariaValueMax.toLowerCase();

    let cards = 
    document.querySelectorAll(".product-card");
    cards.forEach( card => {
        if (card.innerText.toLowerCase()
        .includes(input)){
    card.style.display = "block";
        } else {
            card.style.display ="none";
        }
    });
}