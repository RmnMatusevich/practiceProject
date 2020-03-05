
const menu = document.getElementById('burger-menu');
const navigation = document.getElementsByClassName('navigation')[0];
const search = document.getElementsByClassName('search')[0];

function openHide () {
    //navigation.classList.toggle('navigation__active');
    navigation.classList.toggle("navigation__active");
    if(navigation.style.display === 'flex') {
        navigation.style.display = 'none'
    }else {
        navigation.style.display = 'flex'
    }
}

menu.addEventListener('click', openHide);