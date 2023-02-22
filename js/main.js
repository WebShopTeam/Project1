let btnSearch = document.querySelector("#btn-search");
let search = document.querySelector(".header .search-form")
let menuBTN = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .navbar")

btnSearch.addEventListener("click",()=>{
    btnSearch.classList.toggle("fa-times");
    search.classList.toggle("active");
    menuBTN.classList.remove("fa-times");
    navbar.classList.remove("active");
})

window.onscroll = ()=>{
    btnSearch.classList.remove("fa-times");
    search.classList.remove("active");
    menuBTN.classList.remove("fa-times");
    navbar.classList.remove("active");
    if(window.scrollY > 600){
        document.querySelector(".header").classList.add("active")
    }else{
        document.querySelector(".header").classList.remove("active")
    }

    let value = window.scrollY / 10;
    // let parallax = document.querySelector(".home");
    document.querySelector(" .home .mountain").style.bottom = `${-value}%`
    document.querySelector(" .home .content").style.bottom = `${value}%`
    document.querySelector(" .home .moon").style.marginTop = `${-value}%`
    document.querySelector(" .home .cloud-2").style.right = `${-value}%`
    document.querySelector(" .home .cloud-1").style.left = `${-value}%`
}


menuBTN.addEventListener("click",()=>{
    menuBTN.classList.toggle("fa-times");
    navbar.classList.toggle("active");
    btnSearch.classList.remove("fa-times");
    search.classList.remove("active");
})