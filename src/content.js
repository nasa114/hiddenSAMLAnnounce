window.onload = function() {
    const samlInfo = document.querySelector('.news .mb-2') || document.querySelector('.container-md .mb-2') || document.querySelector('.container-lg .mb-2');
    if(samlInfo.textContent.match(/.*Single\ssign-on.*/)) {
        samlInfo.style.display = "none";
    }
}