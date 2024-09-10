let navBar = document.querySelector(".nav-bar");
let drop = document.querySelector(".drop");

navBar.addEventListener("click",function(){
        if(drop.style.display === "block"){
            drop.style.display = "none"
            console.log(1);
        } 
        else{
            drop.style.display = "block"
            console.log(2);
        }
    
   
});






