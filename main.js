
// this for open setttin box 
document.querySelector(".tuggle").onclick = function(){document.querySelector(".box-settings").classList.toggle("open");}
// this for select a random image for background header 

// change color from setting box
const selcolor = document.querySelectorAll("ul li");

selcolor.forEach(li => {
    li.addEventListener("click", (e) => {
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

        e.target.parentElement.querySelectorAll(".active").forEach(li =>{
            li.classList.remove('active');
        });
        e.target.classList.add('active');

        localStorage.setItem("color-option",e.target.dataset.color);
    });
});

// storge color to local storage

let stor = localStorage.getItem('color-option');

if( stor !== null ){
    document.documentElement.style.setProperty('--main-color', stor)
}

var randomyn = document.querySelectorAll(".y-n span");

let backimg,
    randint;


function randimg(){
    let img = ["0.jpg" , "1.jpg" , "2.jpg" , "3.jpg" , "4.jpg"];

randint =  setInterval(() => {
document.querySelector(".landing-pag").style.backgroundImage='url("img/'+img[Math.floor(Math.random()*img.length)]+'")';},3000);

}

randomyn.forEach (span =>{
    span.addEventListener('click', (e)=> {
        e.target.parentElement.querySelectorAll('.active').forEach(el =>{
            el.classList.remove("active");
        });
            e.target.classList.add("active");


        if (e.target.dataset.img === "yes"){
            backimg = true;
            randimg();
            localStorage.setItem("background-option", "true");
        }else{
            clearInterval(randint);
            backimg = false;
            localStorage.setItem("background-option", "false");
        }
    });
})

let backgroundop = localStorage.getItem('background-option');

if( backgroundop !== null){
    if(localStorage.getItem('background-option') === "true"){
        randimg()
    }
    
}

let skillsbox = document.querySelector('.skills-box');

window.onscroll = function(){

    var secoffset = skillsbox.offsetTop;

    var secoffheight = skillsbox.offsetHeight;

    var windowheight = this.innerHeight;

    var windowscrolltop = this.pageYOffset;

    if( windowscrolltop < (secoffset + secoffheight - windowheight)){


        let allskill = document.querySelectorAll(".skill .skill-pro span");
        allskill.forEach(skill =>{
            skill.style.width = skill.dataset.pro;
        })
    }
}
var imgs = document.querySelectorAll(" .imgs img");

imgs.forEach(img => {
    img.onclick = function(){
        // create overlay background 
       var crediv =  document.createElement("div");
       crediv.classList.add("overlayz");
       document.body.appendChild(crediv);
       // create box for containe an image 
       let popbox = document.createElement("div");
       popbox.className = "pop-box";
       crediv.appendChild(popbox);
       // create image and append it in the popbox
       let imgbox = document.createElement("img");
       imgbox.src = img.src;
       popbox.appendChild(imgbox);
       // create button X for close image 
       let xkey = document.createElement("span");
       xkey.appendChild(document.createTextNode('X'));
       xkey.className = "close";
       popbox.appendChild(xkey);
       
    }
});
document.addEventListener("click" , (e) => {

    if (e.target.className === 'close'){
        document.querySelector(".overlayz").remove()
    }

}) 

let allbollet = document.querySelectorAll(".nav-bollet .bollet");

allbollet.forEach(bol => {
    bol.addEventListener("click", (e)=>{

        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: "smooth"
        });

    });
});
document.querySelector(" .toggle").onclick = function(){

    this.classList.toggle('open');
    document.querySelector(".links").classList.toggle('open');

}