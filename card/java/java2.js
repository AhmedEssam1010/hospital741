let ovar = document.querySelector('.over');
let add = Array.from(document.querySelectorAll(".add-cart"));
let addTos = Array.from(document.querySelectorAll(".show-cart"));
let closed = document.querySelector('.remove')
let shop = document.querySelector(".shop");
let img2 = Array.from(document.querySelectorAll(".product img"));
let h1 = Array.from(document.querySelectorAll(".parag .h1"));
let h4 = Array.from(document.querySelectorAll(".parag span"));
let shop1= document.querySelector(".shop1 .p1");


/////////////


for(let i=0;i<add.length;++i)
{
    add[i].onclick=function()
    {
      
        let x = img2[i].getAttribute("src");
        console.log(x)

        let y = h1[i].textContent;

        console.log(y);

        let z = h4[i].textContent;

        let item = document.createElement("div");
        item.setAttribute("class","item1");
        shop.appendChild(item);
        /////////////////////////////////////////////
        let img1 = document.createElement("div");
        img1.setAttribute("class","img1");
        item.appendChild(img1);
        ////////////////////////////////////////////////
        let img = document.createElement("img");
        img.setAttribute("src",x);
        img1.appendChild(img);
        /////////////////////////////////////////////
        let parag = document.createElement("div");
        parag.setAttribute("class","txt");
        item.appendChild(parag);
        ///////////////////////////////////////////
        let h2= document.createElement("h2");
        h2.setAttribute("class","h1");
        h2.classList.add("h1","bed")
        parag.appendChild(h2);
        /////////////////////////////
        let h3 = document.createTextNode(y);
        h2.appendChild(h3);
        ////////////////////////////////

        let p1= document.createElement("p");
        p1.setAttribute("class","lead");
        parag.appendChild(p1);
        /////////////////////////////
        let p31 = document.createTextNode(z);
        p1.appendChild(p31);
        ////////////////////////////////
       let cloose = document.createElement("div");
       cloose.setAttribute('class','lol');
       parag.appendChild(cloose);
       pAh = document.createTextNode('close');
       cloose.appendChild( pAh)
       ///////

        count();


    }
};

function count()
{
    let item4 = Array.from(document.querySelectorAll(".item1")).length;
    shop1.textContent = item4;
   
}

/////////////
closed.onclick = function(){
    ovar.classList.remove('block')
}

document.addEventListener("click",function(e)
{
    if(e.target.classList.contains("lol"))
    {
        e.target.parentElement.parentElement.remove();
    }
    count();
});



addTos.forEach(function(addTo){
    addTo.onclick = function(){
        ovar.classList.add('block')
    }
})