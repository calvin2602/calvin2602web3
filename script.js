const menuImage = document.getElementById("menu_image");

menuImage.addEventListener("click", () => {
    const checkbox = document.getElementById("toggle_button");
    if (checkbox.checked) {
        menuImage.src = "bilder/menü_open.png";
        menuImage.alt = "menüopen";
    } else {
        menuImage.src = "bilder/menü.png";
        menuImage.alt = "Menü";
    }
});
