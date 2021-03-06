const title = document.querySelector("#title");

const BASE_COLOR = "rgb(255, 255, 255)";
const OTHER_COLOR = "rgb(0, 0, 0)";

function handleClick(){
   const currentColor = title.style.color;
   console.log(currentColor);
   if (currentColor === BASE_COLOR){
       title.style.color = OTHER_COLOR;
   }else{
       title.style.color = BASE_COLOR;
   }
}
function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}
init();

title.addEventListener("click", handleClick);