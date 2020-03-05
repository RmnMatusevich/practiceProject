
const collageObj = [
    {
        src: "https://spring.io/images/projects/spring-boot-7f2e24fb962501672cc91ccd285ed2ba.svg",
        tittle: "Spring Boot",
        description: "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible."
    },
    {
        src: "https://spring.io/images/projects/spring-boot-7f2e24fb962501672cc91ccd285ed2ba.svg",
        tittle: "Spring Boot",
        description: "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible."
    },
    {
        src: "https://spring.io/images/projects/spring-boot-7f2e24fb962501672cc91ccd285ed2ba.svg",
        tittle: "Spring Boot",
        description: "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible."
    },
    {
        src: "https://spring.io/images/projects/spring-boot-7f2e24fb962501672cc91ccd285ed2ba.svg",
        tittle: "Spring Boot",
        description: "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible."
    }
];
window.onload = function(){
const collage = document.getElementsByClassName('collage')[0];

const collageItem = document.createElement('div');
collageItem.className = 'collage-item';

const img = document.createElement('img');
img.className = 'collage-image';
img.src = collageObj.src;
collageItem.append(img);

const tittle = document.createElement('h6');
tittle.className = 'collage-tittle';
tittle.innerHTML = collageObj.tittle;
collageItem.append(tittle);

const description = document.createElement('p');
description.className = 'collage-description';
description.innerHTML = collageObj.description;
collageItem.append(description);

// collageItem.append(`<img class="collage-image" src=${collageObj.src}>`);
// collageItem.append(`<h6 class="collage-tittle">${collageObj.tittle}`);
// collageItem.append(`<p class="collage-description">${collageObj.description}`);

for (let i = 0; i < collageObj.length; i++) {
    collageObj.src = collageObj[i].src;
    collageObj.tittle = collageObj[i].tittle;
    collageObj.description = collageObj[i].description;
    collage.append(collageItem);
}
}