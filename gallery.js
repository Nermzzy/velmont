
AOS.init();

function openLightbox(src) {
    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox").classList.remove("hidden");
}

function closeLightbox() {
    document.getElementById("lightbox").classList.add("hidden");
}

const gallery = document.getElementById("gallery");

for (let i = 1; i <= 11; i++) {
    const card = document.createElement("div");
    card.className =
        "relative rounded-xl overflow-hidden shadow-lg group bg-white dark:bg-gray-700 hover-zoom";
    card.setAttribute("data-aos", "fade-up");
    card.setAttribute("data-aos-delay", `${100 + i * 50}`);

    const img = document.createElement("img");
    img.src = `/assets/gallery${i}.jpg`; // Images are named gallery1.jpg, gallery2.jpg, etc.
    img.alt = `Gallery Image ${i}`;
    img.className = "w-full h-60 object-cover";
    img.onclick = () =>
        openLightbox(`/assets/gallery${i}.jpg`); // Open lightbox on click

    const overlay = document.createElement("div");
    overlay.className = "card-overlay text-white text-lg font-semibold";
    overlay.innerHTML = `View Photo <i class="fa fa-eye ml-2"></i>`;

    card.appendChild(img);
    //   card.appendChild(overlay);
    gallery.appendChild(card);
}





