const menu=document.querySelector(".ham");
const menulist=document.querySelector("ul");
menu.addEventListener("click",()=>{
    menulist.classList.toggle("show");
});