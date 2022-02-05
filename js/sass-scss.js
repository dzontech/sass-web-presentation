document.getElementById("sass-Btn").addEventListener("click", function() {

  
    document.querySelector("#show").classList.remove("p1-SCSS");
    document.querySelector("#show").classList.add("hide-p1-SCSS");

    document.querySelector("#show-none").classList.remove("p2-SASS");
    document.querySelector("#show-none").classList.add("show-p2-SASS");

});
document.getElementById("scss-Btn").addEventListener("click", function() {


     document.querySelector("#show").classList.add("p1-SCSS");
     document.querySelector("#show").classList.remove("hide-p1-SCSS");

     document.querySelector("#show-none").classList.add("p2-SASS");
     document.querySelector("#show-none").classList.remove("show-p2-SASS");
 
});
