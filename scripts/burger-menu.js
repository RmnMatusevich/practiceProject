
const menu = document.getElementsByClassName('menu-button')[0];
const navigation = document.getElementsByClassName('mob-navigation')[0];

function openHide() {
    navigation.classList.toggle("navigation__active");
    if (navigation.style.display === 'flex') {
        navigation.style.display = 'none'
        navigation.style.top = "-100%";
    } else {
        navigation.style.display = 'flex';
        navigation.style.top = "0";
    }

}

menu.addEventListener('click', openHide);
