const WHATSAPP_NUMBER = "5493757644415";

const pages = document.querySelectorAll(".page");
const homePage = document.getElementById("home-section");

function showPage(pageId){

pages.forEach(page=>{
    page.classList.remove("active-page");
});

const targetPage = document.getElementById(pageId);

if(targetPage){
    targetPage.classList.add("active-page");
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}

}

document.querySelectorAll(".category-card").forEach(card=>{

card.addEventListener("click",()=>{

    const pageId = card.dataset.open;

    showPage(pageId);

});

});

document.querySelectorAll(".back-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

    pages.forEach(page=>{
        page.classList.remove("active-page");
    });

    homePage.classList.add("active-page");

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

});

const ffTabs = document.querySelectorAll("[data-ff]");
const ffContents = [
document.getElementById("ff-ilimitados"),
document.getElementById("ff-id")
];

ffTabs.forEach(tab=>{

tab.addEventListener("click",()=>{

    ffTabs.forEach(btn=>{
        btn.classList.remove("active-tab");
    });

    tab.classList.add("active-tab");

    ffContents.forEach(content=>{
        content.classList.remove("active-content");
        content.style.display = "none";
    });

    const target =
    tab.dataset.ff === "ilimitados"
    ? document.getElementById("ff-ilimitados")
    : document.getElementById("ff-id");

    target.style.display = "grid";
    target.classList.add("active-content");

});

});

const igTabs = document.querySelectorAll("[data-ig]");

const igContents = [
document.getElementById("ig-seguidores"),
document.getElementById("ig-visualizaciones"),
document.getElementById("ig-likes")
];

igTabs.forEach(tab=>{

tab.addEventListener("click",()=>{

    igTabs.forEach(btn=>{
        btn.classList.remove("active-ig");
    });

    tab.classList.add("active-ig");

    igContents.forEach(content=>{
        content.classList.remove("active-content");
        content.style.display = "none";
    });

    let target;

    if(tab.dataset.ig === "seguidores"){
        target = document.getElementById("ig-seguidores");
    }

    if(tab.dataset.ig === "visualizaciones"){
        target = document.getElementById("ig-visualizaciones");
    }

    if(tab.dataset.ig === "likes"){
        target = document.getElementById("ig-likes");
    }

    target.style.display = "grid";
    target.classList.add("active-content");

});

});

function openWhatsApp(message){

const url =
`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

window.open(url,"_blank");

}

document.querySelectorAll(".ff-buy").forEach(button=>{

button.addEventListener("click",()=>{

    const product = button.dataset.product;

    const id = prompt("Ingresa tu ID de Free Fire:");

    if(!id) return;

    const message =

`Hola Satoru

Quiero ${product}

Alias: Satorualias99

A nombre de: Kevin Daniel de Lara

Mi ID es ${id}`;

    openWhatsApp(message);

});

});

document.querySelectorAll(".ig-buy").forEach(button=>{

button.addEventListener("click",()=>{

    const product = button.dataset.product;

    const link = prompt("Pega el enlace de tu perfil o publicación:");

    if(!link) return;

    const message =

`Hola Satoru

Quiero ${product}

Alias: Satorualias99

A nombre de: Kevin Daniel de Lara

Enlace del perfil de Instagram:

${link}`;

    openWhatsApp(message);

});

});

document.querySelectorAll(".robux-buy").forEach(button=>{

button.addEventListener("click",()=>{

    const product = button.dataset.product;

    const message =

`Hola Satoru

Quiero ${product}

Alias: Satorualias99

A nombre de: Kevin Daniel de Lara`;

    openWhatsApp(message);

});

});

document.querySelectorAll(".wifi-buy").forEach(button=>{

button.addEventListener("click",()=>{

    const product = button.dataset.product;

    const message =

`Hola Satoru

Quiero ${product}

Alias: Satorualias99

A nombre de: Kevin Daniel de Lara`;

    openWhatsApp(message);

});

});

window.addEventListener("DOMContentLoaded",()=>{

pages.forEach(page=>{
    page.classList.remove("active-page");
});

homePage.classList.add("active-page");

ffContents.forEach(content=>{
    content.style.display = "none";
});

document.getElementById("ff-ilimitados").style.display = "grid";
document.getElementById("ff-ilimitados").classList.add("active-content");

igContents.forEach(content=>{
    content.style.display = "none";
});

document.getElementById("ig-seguidores").style.display = "grid";
document.getElementById("ig-seguidores").classList.add("active-content");

});
