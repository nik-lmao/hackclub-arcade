const gallery = document.getElementById("gallery");

// URL/photo/API request?
const choice = 0;

const galleryItems = [
    "https://cdn.discordapp.com/attachments/1108789026992959610/1268673430215983145/IMG_2445.jpeg?ex=66b33674&is=66b1e4f4&hm=00b57351e333042c8de981e204ba0329ed2b573d3b72c40b173f9dd1b5b53d04&",
    "https://cdn.discordapp.com/attachments/1108789026992959610/1268673430215983145/IMG_2445.jpeg?ex=66b33674&is=66b1e4f4&hm=00b57351e333042c8de981e204ba0329ed2b573d3b72c40b173f9dd1b5b53d04&",
    "https://cdn.discordapp.com/attachments/1268677485617483858/1270375944749580360/IMG_2625.jpeg?ex=66b3794b&is=66b227cb&hm=cbd6b82358dfd0c2a485772e320aa9e728f23267146e6bfe12a8cb2658e286c8&",
    "https://cdn.discordapp.com/attachments/1268677485617483858/1270375944749580360/IMG_2625.jpeg?ex=66b3794b&is=66b227cb&hm=cbd6b82358dfd0c2a485772e320aa9e728f23267146e6bfe12a8cb2658e286c8&",
    "https://cdn.discordapp.com/attachments/1268677485617483858/1270375944749580360/IMG_2625.jpeg?ex=66b3794b&is=66b227cb&hm=cbd6b82358dfd0c2a485772e320aa9e728f23267146e6bfe12a8cb2658e286c8&",
    "https://cdn.discordapp.com/attachments/1268677485617483858/1270375944749580360/IMG_2625.jpeg?ex=66b3794b&is=66b227cb&hm=cbd6b82358dfd0c2a485772e320aa9e728f23267146e6bfe12a8cb2658e286c8&"
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
