const headerLinks = document.querySelectorAll('.header__links');

let current = 0;
for (var i = 0; i < headerLinks.length; i++) {
    if (headerLinks[i].href === document.URL) {
        current = i;
        console.log(i)
    }
}
headerLinks[current].className = 'current';