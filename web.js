let icon=document.querySelector("icon");
let ul=document.querySelector("ul");
icon.addEventListener("click",()=>{
    ul.classList.toggle=("showData");
    console.log(ul)
    if(ul.className=="showData"){
        document.getElementById("bar").className="fa-solid fa-xmark";
    }else{
        document.getElementById("bar").className="fa-solid fa-bars";
    }
})
let shops=document.getElementById("shops");
let reviews=document.getElementById("reviews");
let blogs=document.getElementById("blogs");
let contacts=document.getElementById("contacts");


shops.addEventListener("click",()=>{
    shops.style.color="rgb(4,219,219)";
    reviews.style.color="white";
    blogs.style.color="white";
    contacts.style.color="white";


})



reviews.addEventListener("click",()=>{
    reviews.style.color="rgb(4,219,219)";
    shops.style.color="white";
    blogs.style.color="white";
    contacts.style.color="white";

})

blogs.addEventListener("click",()=>{
    blogs.style.color="rgb(4,219,219)";
    shops.style.color="white";
    reviews.style.color="white";
    contacts.style.color="white";

    

})

contacts.addEventListener("click",()=>{
    contacts.style.color="rgb(4,219,219)";
    shops.style.color="white";
    blogs.style.color="white";
    reviews.style.color="white";

})

let crd=document.querySelectorAll(".crd");
console.log(crd);
crd.addEventListener("click",function(){
    crd.forEach(function(curValue){
        console.log(curValue);

    })

})

