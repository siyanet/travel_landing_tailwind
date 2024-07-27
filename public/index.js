const burger = document.getElementById('menu');
const nav = document.getElementById('nav');
burger.addEventListener("click",()=>{
    if(nav.classList.contains("hidden")){
        nav.classList.remove('hidden');
    }
    else{
        nav.classList.add("hidden");
    }
})
