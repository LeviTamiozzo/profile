function removeHash() {
    history.replaceState('', document.title, window.location.origin + window.location.pathname);
}

function getRandomNumber(min, max) {
    return min + Math.floor((max - min) * Math.random());
}