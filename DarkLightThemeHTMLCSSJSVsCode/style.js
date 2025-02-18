/*topu sağa sola hareket ettirecegimiz için omu secmeliyiz bir*/
let ball=document.getElementById("ball");
ball.addEventListener("click",changeTheme); /*fonksiyon*/

let leftSide=true; /*top ilk başta solda*/
let rightSide;

function changeTheme(){
    if(leftSide==true)
    {
        ball.style.left="40px";
        ball.style.backgroundColor="#111";
        leftSide=false;
        document.querySelector(".mode").style.backgroundColor="#fff";
        document.querySelector("body").style.backgroundColor="#111";
    }
    else{
        ball.style.left="5px";
        ball.style.backgroundColor="#fff";
        leftSide=true;
        document.querySelector(".mode").style.backgroundColor="#111";
        document.querySelector("body").style.backgroundColor="#fff";
    }
}