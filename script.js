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
        window.scrollTo({top:0,behavior:"smooth"});
        history.pushState({page:pageId},"",window.location.pathname);
    }
}

function goHome(){
    pages.forEach(page=>{
        page.classList.remove("active-page");
    });
    homePage.classList.add("active-page");
    window.scrollTo({top:0,behavior:"smooth"});
}

window.addEventListener("popstate",(e)=>{
    if(e.state && e.state.page){
        pages.forEach(page=>page.classList.remove("active-page"));
        document.getElementById(e.state.page).classList.add("active-page");
    } else {
        goHome();
    }
});

document.querySelectorAll(".category-card").forEach(card=>{
    card.addEventListener("click",()=>{
        showPage(card.dataset.open);
    });
});

document.querySelectorAll(".back-btn").forEach(btn=>{
    btn.addEventListener("click",()=>{
        goHome();
        history.pushState({page:"home-section"},"",window.location.pathname);
    });
});

const ffTabs = document.querySelectorAll("[data-ff]");
const ffContents = [
    document.getElementById("ff-ilimitados"),
    document.getElementById("ff-id")
];

ffTabs.forEach(tab=>{
    tab.addEventListener("click",()=>{

        ffTabs.forEach(btn=>btn.classList.remove("active-tab"));
        tab.classList.add("active-tab");

        const current = ffContents.find(c=>!c.classList.contains("tab-hidden"));

        if(current){
            current.classList.add("tab-exit");
            setTimeout(()=>{
                current.classList.remove("tab-exit");
                current.classList.add("tab-hidden");

                const target =
                tab.dataset.ff==="ilimitados"
                ?document.getElementById("ff-ilimitados")
                :document.getElementById("ff-id");

                target.classList.remove("tab-hidden");
                target.classList.add("tab-enter");
                setTimeout(()=>target.classList.remove("tab-enter"),300);
            },250);
        }
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

        igTabs.forEach(btn=>btn.classList.remove("active-ig"));
        tab.classList.add("active-ig");

        const current = igContents.find(c=>!c.classList.contains("tab-hidden"));

        if(current){
            current.classList.add("tab-exit");
            setTimeout(()=>{
                current.classList.remove("tab-exit");
                current.classList.add("tab-hidden");

                let target;
                if(tab.dataset.ig==="seguidores") target=document.getElementById("ig-seguidores");
                if(tab.dataset.ig==="visualizaciones") target=document.getElementById("ig-visualizaciones");
                if(tab.dataset.ig==="likes") target=document.getElementById("ig-likes");

                target.classList.remove("tab-hidden");
                target.classList.add("tab-enter");
                setTimeout(()=>target.classList.remove("tab-enter"),300);
            },250);
        }
    });
});

function openWhatsApp(message){
    const url=`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url,"_blank");
}

document.querySelectorAll(".ff-buy").forEach(button=>{
    button.addEventListener("click",()=>{
        const product = button.dataset.product;
        const price = button.closest(".product-card").querySelector(".price").textContent;
        const message=`👋Hola Satoru\n\nQuiero ${product}\n${price}\n\nAlias: Satorualias99\n\nA nombre de: Kevin Daniel de Lara\nEnseguida te mando comprobante\n\nMi 🆔:`;
        openWhatsApp(message);
    });
});

document.querySelectorAll(".ig-buy").forEach(button=>{
    button.addEventListener("click",()=>{
        const product = button.dataset.product;
        const price = button.closest(".product-card").querySelector(".price").textContent;
        const message=`👋Hola Satoru\n\nQuiero ${product}\n${price}\n\nAlias: Satorualias99\n\nA nombre de: Kevin Daniel de Lara\nEnseguida te mando comprobante`;
        openWhatsApp(message);
    });
});

document.querySelectorAll(".robux-buy").forEach(button=>{
    button.addEventListener("click",()=>{
        const product = button.dataset.product;
        const price = button.closest(".product-card, .pack-pro-content").querySelector(".price").textContent;
        const message=`👋Hola Satoru\n\nQuiero ${product}\n${price}\n\nAlias: Satorualias99\n\nA nombre de: Kevin Daniel de Lara\nEnseguida te mando comprobante`;
        openWhatsApp(message);
    });
});

document.querySelectorAll(".wifi-buy").forEach(button=>{
    button.addEventListener("click",()=>{
        const product = button.dataset.product;
        const price = button.closest(".product-card").querySelector(".price").textContent;
        const message=`👋Hola Satoru\n\nQuiero ${product}\n${price}\n\nAlias: Satorualias99\n\nA nombre de: Kevin Daniel de Lara\nEnseguida te mando comprobante`;
        openWhatsApp(message);
    });
});

document.querySelectorAll(".revendedor-buy").forEach(button=>{
    button.addEventListener("click",()=>{
        const product = button.dataset.product;
        const price = button.closest(".product-card, .pack-pro-content").querySelector(".price").textContent;
        const message=`👋Hola Satoru\n\nQuiero ${product}\n${price}\n\nAlias: Satorualias99\n\nA nombre de: Kevin Daniel de Lara\nEnseguida te mando comprobante`;
        openWhatsApp(message);
    });
});

window.addEventListener("DOMContentLoaded",()=>{

    pages.forEach(page=>page.classList.remove("active-page"));
    homePage.classList.add("active-page");
    history.replaceState({page:"home-section"},"",window.location.pathname);

});
