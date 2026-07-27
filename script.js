// Падающие цветы

setInterval(() => {

    const flower = document.createElement("div");

    flower.className = "flower";

    const flowers = ["🌸","🌺","🌷","💮"];

    flower.innerHTML = flowers[Math.floor(Math.random()*flowers.length)];

    flower.style.left = Math.random()*100 + "vw";

    flower.style.animationDuration = 5 + Math.random()*5 + "s";

    flower.style.fontSize = 20 + Math.random()*18 + "px";

    document.body.appendChild(flower);

    setTimeout(()=>{

        flower.remove();

    },10000);

},300);

// Сердечки по клику

document.addEventListener("click",e=>{

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=e.pageX+"px";

    heart.style.top=e.pageY+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },1200);

});
