// IIFE - Immediately Invoked Function Expression
// means -> anonymous self-executing function
(function(){

    function Start()
    {
        console.log("%c App Started", "color: blue; font-size: 20px;");
        let mainContent = document.getElementById("mainContent");

        // create a new h2 tag with a class of Display-2 and "My Text Content" as the text node
        let h2 = document.createElement("h2");
        h2.setAttribute("class","Display-2");
        h2.textContent = "My Text Content";
        mainContent.appendChild(h2);

        h2.addEventListener("mouseover", function(){
            h2.style.color = "blue";
            h2.style.fontWeight = "bold";
        });

        h2.addEventListener("mouseover", function(){
            h2.textContent = "Mouse Over!!!";
        });

        h2.addEventListener("mouseout", function(){
            h2.style.color = "black";
            h2.style.fontWeight = "normal";
        });

        h2.addEventListener("mouseout", function(){
            h2.textContent = "My Text Content";
        });

        let brand = document.getElementsByClassName("navbar-brand")[0];
        brand.textContent = "Client-Side Scripting";

    }


    window.addEventListener("load", Start);
})();