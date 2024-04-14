let contains = 0;

function updateSummary() {
    document.querySelector('#summary').innerText = `Your bag contains ${contains} items`;
}

function addToBag() {
    contains++;
    updateSummary();
}

function moveToWishlist() {
    contains--;
    updateSummary();
}

function addSaleItem() {
    contains += 2;
    updateSummary();
}

// Initial update when the page loads
updateSummary();
