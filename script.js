
// Go to Top Button
const toTopBtn = document.getElementById("to-top-btn");
window.onscroll = function () {
    // Show button when user scrolls down
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        toTopBtn.style.display = "block";
    } else {
        toTopBtn.style.display = "none";
    }
};

// Scroll to top smoothly
toTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

// Redirect to WhatsApp
const whatsappBtn = document.getElementById("whatsapp-btn");
whatsappBtn.addEventListener("click", () => {
    const phone = "8668326817"; 
    const message = encodeURIComponent("Hello, I would like to know more about your services!");
    const whatsappURL = `https://wa.me/${phone}?text=${message}`;
    window.open(whatsappURL, "_blank");
});
