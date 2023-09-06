const imageGrid = document.getElementById('image-grid');

const imageUrls = [
    'images/car-1.jpg',
    'images/car-2.jpg',
];

imageUrls.forEach((imageUrl) => {
    const img = document.createElement('img');
    img.src = imageUrl;
    imageGrid.appendChild(img);
})