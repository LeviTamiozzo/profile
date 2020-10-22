const navLinks = document.querySelectorAll('nav a');
const introLinkCoords = navLinks[0].getBoundingClientRect();

const followLink = document.createElement('span');
followLink.classList.add('highlight-link');
setFollowLinkCoords(introLinkCoords.left + 5, introLinkCoords.bottom + 5, introLinkCoords.width - 10, getRandomNumber(-3, 3));
document.querySelector('nav').append(followLink);

function highlightLink(element) {
    const linkCoords = element.getBoundingClientRect();

    if (element.hasAttribute('data-logo')) {
        setFollowLinkCoords(linkCoords.left + 5, linkCoords.bottom + 5, linkCoords.width - 10, getRandomNumber(-3, 3))
    } 
    
    if (element.hasAttribute('data-link')) {
        setFollowLinkCoords(linkCoords.left + 15, linkCoords.top + 5, linkCoords.height - 10, getRandomNumber(80, 100))
    }
}

function setFollowLinkCoords(left, top, width, deg) {
    followLink.style.transform = `translate(${left}px, ${top}px) rotate(${deg}deg)`;
    followLink.style.width = `${width}px`;
}

navLinks.forEach(link => link.addEventListener('click', function () {
    const element = this;
    const parentElement = element.parentElement;

    if (!parentElement.classList.contains('active')) {
        navLinks.forEach(item => item.parentElement.classList.remove('active'));
        
        parentElement.classList.add('active');

        highlightLink(element);
        setTimeout(removeHash, 1);
    }
}, false));