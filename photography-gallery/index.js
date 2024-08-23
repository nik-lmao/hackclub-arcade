const gallery = document.getElementById("gallery");

// URL/photo/API request?
const choice = 0;

// Replace the URLs with the URLs of the images you want to display in the gallery
const galleryItems = [
    "https://images.squarespace-cdn.com/content/v1/53c631e4e4b0c4d68989cbef/1410108841601-8DJHKTK2RL5Z3DCN1ZGI/DSC1276.jpg",
    "https://images.pexels.com/photos/10936397/pexels-photo-10936397.jpeg"
];

galleryNames = [
    "photo1.jpg",
    "photo2.jpg"
]

const url = "https://example.com"

window.onload = function(){
    if(choice == 0){
        galleryItems.forEach(url => {
            const galleryItem = document.createElement("div");
            galleryItem.className = "gallery-item";
            const img = document.createElement("img");
            img.src = url;
            galleryItem.appendChild(img);
            gallery.appendChild(galleryItem);
        });
    }
    if(choice == 1){
        galleryNames.forEach(name => {
            const galleryItem = document.createElement("div");
            galleryItem.className = "gallery-item";
            const img = document.createElement("img");
            img.src = `./photos/${name}`;
            galleryItem.appendChild(img);
            gallery.appendChild(galleryItem);
            
        })
    }

    // For the API request to function, please create a working API endpoint and set the variable url to it. Make sure that the API response includes the image URL.
    
    if (choice == 2) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                data.forEach(item => {
                    const galleryItem = document.createElement("div");
                    galleryItem.className = "gallery-item";
                    const img = document.createElement("img");
                    img.src = item.imageUrl;
                    galleryItem.appendChild(img);
                    gallery.appendChild(galleryItem);
                });
            })
            .catch(error => console.error('Error fetching gallery items:', error));
    }
}

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

gallery.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        lightbox.style.display = "block";
        lightboxImg.src = e.target.src;
    }
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = "none";
    }
});
