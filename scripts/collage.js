
const collageObj = [
    {
        src: "https://spring.io/images/projects/spring-boot-7f2e24fb962501672cc91ccd285ed2ba.svg",
        tittle: "Spring Boot",
        description: "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible."
    },
    {
        src: "https://spring.io/images/projects/spring-framework-640ad1b04f7efa89e0f0f7353e6b5e02.svg?v=2",
        tittle: "Spring Framework",
        description: "Provides core support for dependency injection, transaction management, web apps, data access, messaging and more."
    },
    {
        src: "https://spring.io/images/projects/spring-data-flow-9eb1733b76b6cd62cbdd9bc9a2b04e56.svg",
        tittle: "Spring Cloud Data Flow",
        description: "An orchestration service for composable data microservice applications on modern runtimes."
    },
    {
        src: "https://spring.io/images/projects/spring-boot-7f2e24fb962501672cc91ccd285ed2ba.svg",
        tittle: "Spring Boot",
        description: "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible."
    },
    {
        src: "https://spring.io/images/projects/spring-framework-640ad1b04f7efa89e0f0f7353e6b5e02.svg?v=2",
        tittle: "Spring Framework",
        description: "Provides core support for dependency injection, transaction management, web apps, data access, messaging and more."
    },
    {
        src: "https://spring.io/images/projects/spring-data-flow-9eb1733b76b6cd62cbdd9bc9a2b04e56.svg",
        tittle: "Spring Cloud Data Flow",
        description: "An orchestration service for composable data microservice applications on modern runtimes."
    },
    
];
const collage = document.getElementsByClassName('collage')[0];


window.onload = function () {
collageObj.map((i) => {
    const collageItem = document.createElement('div');
collageItem.className = 'collage-item';

const img = document.createElement('img');
img.className = 'collage-image';
collageItem.append(img);

const tittle = document.createElement('h6');
tittle.className = 'collage-tittle';
collageItem.append(tittle);

const description = document.createElement('p');
description.className = 'collage-description';
collageItem.append(description);
    img.src = i.src;
    tittle.innerHTML = i.tittle;
    description.innerHTML = i.description;
    collage.append(collageItem);
});
}

//SEARCH


const input = document.getElementById('search-input');

input.addEventListener('change',search);
 


function search() {
    let regExp = new RegExp(`/${input.value}/`);
    console.log(input.value);
        
    collageObj.map((i) => {
        console.log(input.value);
        console.log(i.description);
        
        if (i.description.match(regExp) == null){
            console.log("no");
            
        }else {
            console.log("yes");
            
        }
    })
}