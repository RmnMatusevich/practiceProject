
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
        src: "https://spring.io/images/projects/spring-cloud-81fe04ab129ab99da0e7c7115bb09920.svg",
        tittle: "Spring Cloud",
        description: "Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices"

    },
    {
        src: "https://spring.io/images/projects/spring-data-79cc203ed8c54191215a60f9e5dc638f.svg",
        tittle: "Spring Data",
        description: "Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond."
    },
    {
        src: "https://spring.io/images/projects/spring-integration-ed45c92142d821851bf6c771f4c556bb.svg?v=2",
        tittle: "Spring Integration",
        description: "Supports the well-known Enterprise Integration Patterns via lightweight messaging and declarative adapters"
    }
];
const collage = document.getElementsByClassName('collage')[0];

window.onload = () => loadItems(collageObj);


//SEARCH

function loadItems(obj) {
    obj.map((i) => {
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
    })
};

const input = document.getElementById('search-input');

input.addEventListener('input', search);


function search() {
    const newCollageObj = [];
    const collageItems = document.getElementsByClassName('collage-item');
    collageObj.map(i => {
        if (i.description.toLocaleLowerCase().includes(event.target.value)) {
            newCollageObj.push(i);
        }
        for (let i = 0; i < collageItems.length; i++) {
            collageItems[i].remove();
        }
    })
    loadItems(newCollageObj);
    const text = document.createElement('h1');
    text.innerHTML = "No results!"
    text.className = 'text';
    if (newCollageObj.length === 0) {
        collage.append(text);
    } else if (newCollageObj.length > 0) {
        let textArray = document.getElementsByClassName('text');
        for (let i of textArray) {
            i.remove();
        }
    }

}
